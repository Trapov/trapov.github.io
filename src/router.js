import { createRouter, createWebHistory } from 'vue-router'

// import AboutMe from './pages/AboutMe.vue'
// import MyProjects from './pages/MyProjects.vue'
// import WhereIWorked from './pages/WhereIWorked.vue'

const AboutMe = () => import(/* webpackChunkName: "about-me" */ './pages/AboutMe')
const MyProjects = () => import(/* webpackChunkName: "my-projects" */ './pages/MyProjects')
const WhereIWorked = () => import(/* webpackChunkName: "where-i-worked" */ './pages/WhereIWorked.vue')

export default createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/',
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