<template>
  <div class="findxyz mb-5">
    <div class="container py-4 my-2">
        <div class="jumbotron">
            <h1 class="display-4">X, 5, 9, 15, 23, Y, Z</h1>
            <p class="lead">ลำดับพหุนามดีกรีสอง คือ ลำดับที่มีรูปทั่วไปเป็นพหุนามในรูป an=a⋅n2+b⋅n+c</p>
            <hr class="my-4">
            <p class="lead">
                <button class="btn btn-primary btn-lg m-1" v-on:click="getAnswer()">Answer</button>
                <button class="btn btn-secondary btn-lg m-1" v-on:click="answer = null">Reset</button>
            </p>
            <h1 v-if="answer" class="display-4 text-success">{{answer.X}}, 5, 9, 15, 23, {{answer.Y}}, {{answer.Z}}</h1>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'findxyz',
  data () {
    return {
      loading: false,
      errMsg: '',
      answer: null
    }
  },
  methods: {
    search () {
      this.placeList = []
    },
    async getAnswer () {
      this.errMsg = ''
      this.loading = true
      this.placeList = []
      try {
        var response = await axios.get('http://localhost:3000/scg/findXYZ')
        this.answer = response.data
        this.loading = false
      } catch (e) {
        this.errMsg = e.response.data.Status || 'Ooops!'
        this.loading = false
      }
    }
  }
}
</script>
