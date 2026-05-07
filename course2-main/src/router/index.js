import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('../pages/Home.vue') },
  { path: '/about', component: () => import('../pages/About.vue') },
  { path: '/login', component: () => import('../pages/Login.vue') },
  { path: '/register', component: () => import('../pages/Register.vue') },
  { path: '/courses', component: () => import('../pages/Courses.vue') },
  { path: '/course/:id', component: () => import('../pages/CourseDetail.vue') },
  { path: '/course/:id/enroll', component: () => import('../pages/EnrollmentForm.vue') },
  { path: '/course/:id/learn', component: () => import('../pages/CoursePlayer.vue') },
  { path: '/my-learning', component: () => import('../pages/MyLearning.vue') },
  { path: '/profile', component: () => import('../pages/Profile.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
