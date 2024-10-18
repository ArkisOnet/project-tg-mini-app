import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/Home.vue';
import TalentMarketplace from '@/components/TalentMarketplace.vue';
import OutsourcingEOR from '@/components/OutsourcingEOR.vue';
import TalentPoolManagement from '@/components/TalentPoolManagement.vue';

// Определяем маршруты
const routes = [
    { path: '/', component: HomePage },
    { path: '/marketplace', component: TalentMarketplace },
    { path: '/outsourcing', component: OutsourcingEOR },
    { path: '/talent-pool', component: TalentPoolManagement }
];

// Создаем маршрутизатор для Vue 3
const router = createRouter({
    history: createWebHistory(), // Используем историю браузера
    routes,
});

export default router;
