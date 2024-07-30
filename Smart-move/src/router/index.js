
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */


// import LandingPages from "@/pages/LandingPages.vue"


// Composables
// import { createRouter, createWebHistory } from 'vue-router/auto'
// import { routes } from 'vue-router/auto-routes'

import { createRouter, createWebHistory } from "vue-router";  
import LandingTrainPage from "@/pages/LandingTrainPage.vue";
import NewsPage from "@/pages/NewsPage.vue";
import LandingBusPage from "@/pages/LandingBusPage.vue";
import LoginPages from "@/pages/LoginPages.vue";
import RegisterPages from "@/pages/RegisterPages.vue";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes : [
    {path: '/', component: LandingBusPage,},
    {path : '/train', component : LandingTrainPage},
    {path : '/login', component : LoginPages},
    {path: '/register', component : RegisterPages},
    {path: "/news", component: NewsPage},
  ]
});


// Workaround for https://github.com/vitejs/vite/issues/11804
// router.onError((err, to) => {
//   if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
//     if (!localStorage.getItem('vuetify:dynamic-reload')) {
//       console.log('Reloading page to fix dynamic import error')
//       localStorage.setItem('vuetify:dynamic-reload', 'true')
//       location.assign(to.fullPath)
//     } else {
//       console.error('Dynamic import error, reloading page did not fix it', err)
//     }
//   } else {
//     console.error(err)
//   }
// })

// router.isReady().then(() => {
//   localStorage.removeItem('vuetify:dynamic-reload')
// })

export default router
