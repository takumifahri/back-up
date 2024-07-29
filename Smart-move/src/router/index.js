
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

import LandingBusPage from "@/pages/LandingBusPage.vue";
import LoginPages from "@/pages/LoginPages.vue";
// import index from "@/pages/index.vue"
// import home from "@/pages/home.vue";

// import Loginn from "@/pages/loginn.vue";

// import regists from "@/pages/registss.vue";
// import Lobby from "@/pages/Lobby.vue";
// import ChangePW from "@/pages/changePW.vue";
// import ResetPW from "@/pages/resetPW.vue";
// // import drawerApp from "../pages/drawerApp.vue";
// import dashboardPage from "@/pages/dashboardPage.vue";
// import OrganisasiPage from "@/pages/OrganisasiPage.vue";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes : [
    {path: "/", component: LandingBusPage,},
    {path : '/login', component : LoginPages}
    // {path: "/login", component: Loginn },
    // {path: "/regists", component: regists},
    // {path: "/lobbiess", component: Lobby},
    // {path: "/changePassword", component: ChangePW}, 
    // {path: "/resetPassword", component: ResetPW},
    // {path: "/dashboard", component: dashboardPage},
    // {path: "/Organisasi", component: OrganisasiPage},
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
