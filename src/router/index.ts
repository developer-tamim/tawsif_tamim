import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UiuxView from '../components/projectCard/UiuxView.vue'
import GraphicsView from '../components/projectCard/GraphicsView.vue'
import FrontendView from '../components/projectCard/FrontendView.vue'
import AllProjectsPage from '../views/AllProjectsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/uiux',
      name: 'uiux',
      component: UiuxView
    },
    {
      path: '/graphics',
      name: 'graphics',
      component: GraphicsView
    },
    {
      path: '/frontend',
      name: 'frontend',
      component: FrontendView
    },
      {
    path: '/projects',
    name: 'AllProjects',
    component: AllProjectsPage,
  }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router