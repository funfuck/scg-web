<template>
  <div class="about mb-5">
    <div class="container py-4 my-2">
      <div class="row">
          <div class="col-md-4 pr-md-5">
              <img class="w-90 rounded border" src="../assets/profile.png" />
              <div class="pt-4 mt-2">
                <section class="mb-4 pb-1">
                  <h3 class="h6 font-weight-light text-secondary text-uppercase">Work Experiences</h3>
                  <div class="work-experience pt-2">
                    <div class="work mb-4">
                        <strong class="h5 d-block text-secondary font-weight-bold mb-1">M Vision</strong>
                        <strong class="h6 d-block text-warning mb-1">Full-Stack Web Developer</strong>
                        <p class="text-secondary">2016 Aug - Current</p>
                    </div>
                    <div class="work mb-4">
                        <strong class="h5 d-block text-secondary font-weight-bold mb-1">AIS</strong>
                        <strong class="h6 d-block text-warning mb-1">Software Support</strong>
                        <p class="text-secondary">2016 Mar - 2016 Aug</p>
                    </div>
                    <div class="work mb-4">
                        <strong class="h5 d-block text-secondary font-weight-bold mb-1">LACTASOY</strong>
                        <strong class="h6 d-block text-warning mb-1">Web Developer</strong>
                        <p class="text-secondary">2014 Feb - 2016 Feb</p>
                    </div>
                  </div>
                </section>
                <section class="mb-5 mb-md-0">
                    <h3 class="h6 font-weight-light text-secondary text-uppercase">Skills</h3>
                    <div class="skills pt-1 row">
                        <div class="col-4 mb-2">
                            <div class="chart" data-percent="95" data-scale-color="#fff"><span>GOLANG</span></div>
                        </div>
                        <div class="col-4 mb-2">
                            <div class="chart" data-percent="85" data-scale-color="#fff"><span>C#</span></div>
                        </div>
                        <div class="col-4 mb-2">
                            <div class="chart" data-percent="90" data-scale-color="#fff"><span>PHP</span></div>
                        </div>
                        <div class="col-4 mb-2">
                            <div class="chart" data-percent="82" data-scale-color="#fff"><span>NODEJS</span></div>
                        </div>
                        <div class="col-4 mb-2">
                            <div class="chart" data-percent="70" data-scale-color="#fff"><span>VUEJS</span></div>
                        </div>
                        <div class="col-4 mb-2">
                            <div class="chart" data-percent="60" data-scale-color="#fff"><span>REACTJS</span></div>
                        </div>
                    </div>
                </section>
              </div>
          </div>
          <div class="col-md-8">
              <div class="d-flex align-items-center">
                  <h2 class="font-weight-bold m-0">
                      Narupon Phantham
                  </h2>
                  <address class="m-0 pt-2 pl-0 pl-md-4 font-weight-light text-secondary">
                      <i class="fa fa-map-marker"></i>
                      Hua Mak, Bang Kapi, Bangkok
                  </address>
              </div>
              <p class="h5 text-primary mt-2 d-block font-weight-light">
                  Full-Stack Web Developer
              </p>
              <p class="lead mt-4">
                Over 6 years of experience in all facets of web development, from personally meeting with clients to discuss their goals in having a web presence, to research and analysis, design, development, testing, and implementation of code and applications, as well as a variety of graphic design and artwork. Has been both a team leader and a team member, and knows what it takes to get things done. Doesn’t only create working inter/intranet sites, but creates better ones and continually strives to improve a site's usability, functionality, and navigation throughout its lifecycle.
              </p>
              <section class="mt-4">
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                      <li class="nav-item">
                          <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                              About
                          </a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                              Education
                          </a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">
                              Projects
                          </a>
                      </li>
                  </ul>
                  <div class="tab-content py-4" id="myTabContent">
                      <div class="tab-pane py-3 fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                          <h6 class="text-uppercase font-weight-light text-secondary">
                              Contact Information
                          </h6>
                          <dl class="row mt-4 mb-4 pb-3">
                              <dt class="col-sm-3">Phone</dt>
                              <dd class="col-sm-9">082-4433-515</dd>
                              <dt class="col-sm-3">Address</dt>
                              <dd class="col-sm-9">
                                  <address class="mb-0">
                                      789, Thanon Lat Phrao, Khlong Chan, Bang Kapi District, Bangkok 10240
                                  </address>
                              </dd>
                              <dt class="col-sm-3">Email address</dt>
                              <dd class="col-sm-9">
                                  <a href="mailto:gglfrbeckham@gmail.com">gglfrbeckham@gmail.com</a>
                              </dd>
                          </dl>
                          <h6 class="text-uppercase font-weight-light text-secondary">
                              Basic Information
                          </h6>
                          <dl class="row mt-4 mb-4 pb-3">
                              <dt class="col-sm-3">Birthday</dt>
                              <dd class="col-sm-9">December 7, 1985</dd>
                              <dt class="col-sm-3">Gender</dt>
                              <dd class="col-sm-9">Male</dd>
                          </dl>
                      </div>
                      <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <table class="table table-bordered">
                          <thead>
                            <tr>
                              <th scope="col">Major</th>
                              <th scope="col">University</th>
                              <th scope="col">Year</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(item, key) in educations" v-bind:key="key">
                              <td>{{item.major}}</td>
                              <td>{{item.university}}</td>
                              <td nowrap>{{item.year}}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        <table class="table table-bordered">
                          <thead>
                            <tr>
                              <th scope="col">Year</th>
                              <th scope="col">Project</th>
                              <th scope="col">Stack</th>
                            </tr>
                          </thead>
                          <tbody>
                              <template v-for="item in projectsByYear">
                                <tr v-for="(project, key) in item.projects" v-bind:key="project.year">
                                  <td v-if="key==0" :rowspan="item.projects.length">{{item.year}}</td>
                                  <td>{{project.name}}</td>
                                  <td>{{project.stack}}</td>
                                </tr>
                              </template>
                          </tbody>
                        </table>
                      </div>
                  </div>
              </section>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      educations: [
        {
          university: 'Ramkhamhaeng University',
          major: 'Bachelor of science, computer science',
          year: '2011-2013'
        },
        {
          university: 'Ramkhamhaeng University',
          major: 'Bachelor of Business Administrator, general management',
          year: '2004-2006'
        }
      ],
      projectsByYear: [
        {
          year: '2019',
          projects: [
            {
              name: 'EV Mobile Application',
              stack: 'Golang, C#, Flutter, Mysql'
            },
            {
              name: 'Asset Management',
              stack: 'Golang, Mysql'
            },
            {
              name: 'VFIN Bidding Application',
              stack: 'Golang, Java, Flutter, Mysql'
            }
          ]
        },
        {
          year: '2018',
          projects: [
            {
              name: 'BNK48 Mobile Application for Samsung Thailand',
              stack: 'Golang, ReactJS'
            },
            {
              name: '10K Running  System 2018',
              stack: 'VueJS, NodeJS, Golang, Firebase, Mysql'
            },
            {
              name: 'Chongkhorun 2018',
              stack: 'VueJS, NodeJS, Golang, Firebase, Mysql'
            },
            {
              name: 'Triam Udom Mini Marathon 2018',
              stack: 'VueJS, NodeJS, Golang, Firebase, Mysql'
            }
          ]
        },
        {
          year: '2017',
          projects: [
            {
              name: '10K Running  System 2017',
              stack: 'VueJS, NodeJS, Golang, Firebase, Mysql'
            },
            {
              name: 'Kao Pratubchang Trail 2017',
              stack: 'VueJS, NodeJS, Golang, Firebase, Mysql'
            },
            {
              name: 'Victon 2017',
              stack: 'VueJS, NodeJS, Golang, Firebase, Mysql'
            }
          ]
        },
        {
          year: '2016',
          projects: [
            {
              name: 'House of Ticket',
              stack: 'Golang, AngularJS'
            },
            {
              name: 'Direct Charging Billing',
              stack: '-'
            },
            {
              name: 'AIS Playbox',
              stack: '-'
            }
          ]
        },
        {
          year: '2015',
          projects: [
            {
              name: 'Appraisal System',
              stack: 'PHP, Codeigniter, JQuery, Bootstrap, SQL Server, Apache'
            },
            {
              name: 'Warehouse System (Upgrade)',
              stack: 'PHP, Codeigniter, JQuery, Bootstrap, SQL Server, Apache'
            }
          ]
        },
        {
          year: '2014',
          projects: [
            {
              name: 'Warehouse System',
              stack: 'PHP, Codeigniter, JQuery, Bootstrap, SQL Server, Apache'
            }
          ]
        },
        {
          year: '2013',
          projects: [
            {
              name: 'Quotation System',
              stack: 'PHP, JQuery, Mysql, Apache'
            }
          ]
        }
      ]
    }
  }
}
</script>
