import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Project from "../views/Project";


Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
  {
    path: '/project/:name',
    name: 'Project',
    component: Project,
    props: true,
  },

]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
