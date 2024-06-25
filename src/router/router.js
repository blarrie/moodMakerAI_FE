import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from '../components/HomeComponent.vue';
import DownloadComponent from '../components/DownloadComponent.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: HomeComponent },
      { path: '/download', component: DownloadComponent}
    ]
  })

export default router;