<template>
  <div class="placesearch mb-5">
    <div class="container py-4 my-2">
      <div class="row">
        <form class="form-inline" v-on:submit.prevent="onSubmit">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Search place" v-model="query">
            <div class="input-group-append">
              <button class="btn btn-secondary" type="submit">
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="row">
        <div class="col text-center m-5 p-5" v-if="loading">
          <img style="width: 96px;" src="../assets/loading.gif" />
        </div>
        <div class="col text-center m-5 p-5" v-if="!loading && errMsg">
          <p class="text-danger">{{ errMsg }}</p>
        </div>
        <ul class="list-unstyled" v-if="!loading">
          <Place v-for="(item, key) in placeList.Results" v-bind:key="key" :icon="item.Icon" :name="item.Name" :address="item.formatted_address"/>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Place from '@/components/Place.vue'
import axios from 'axios'

export default {
  name: 'placesearch',
  components: {
    Place
  },
  data () {
    return {
      query: '',
      loading: false,
      errMsg: '',
      placeList: []
    }
  },
  methods: {
    search () {
      this.placeList = []
    },
    async onSubmit () {
      this.errMsg = ''
      this.loading = true
      this.placeList = []
      try {
        var response = await axios.get('http://localhost:3000/scg/findPlace?Key=' + this.query)
        this.placeList = response.data
        this.loading = false
      } catch (e) {
        this.errMsg = e.response.data.Status || 'Ooops!'
        this.loading = false
      }
    }
  }
}
</script>
