import Main from "../pages/Main.vue";
import { createRouter, createWebHistory } from "vue-router";
import TaskPage from "../pages/TaskPage.vue";
import ProjectPage from "../pages/ProjectPage.vue";
import AuthPage from "../pages/AuthPage.vue";

const routes = [
    { path: '/', component: Main },
    { path: '/projects', component: ProjectPage, meta: { requiresAuth: true } },
    { path: '/tasks/:projectId', component: TaskPage, name: 'tasks', meta: { requiresAuth: true } },
    { path: '/auth', component: AuthPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;
