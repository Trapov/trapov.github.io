import { createRouter, createWebHistory } from 'vue-router'

import AboutMe from './pages/AboutMe.vue'
import MyProjects from './pages/MyProjects.vue'
import WhereIWorked from './pages/WhereIWorked.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/about-me',
      component: AboutMe 
    },
    { 
      path: '/my-projects',
      component: MyProjects 
    },
    { 
      path: '/where-i-worked',
      component: WhereIWorked 
    },
  ]
})