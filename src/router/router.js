import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from '../components/HomeComponent.vue';
import DownloadComponent from '../components/DownloadComponent.vue';
import LoadingComponent from '../components/LoadingComponent.vue';


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      { path: '/', component: HomeComponent },
      { path: '/loading', component: LoadingComponent },
      { path: '/download', component: DownloadComponent }
    ]
  })

export default router;