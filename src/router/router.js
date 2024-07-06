import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "../components/HomeComponent.vue";
import DownloadComponent from "../components/DownloadComponent.vue";
import LoadingComponent from "../components/LoadingComponent.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeComponent,
    },

    {
      path: "/loading",
      component: LoadingComponent,
    },

    {
      path: "/download/:filename",
      name: "Download",
      component: DownloadComponent,
      props: true,
    },
  ],
});

export default router;
