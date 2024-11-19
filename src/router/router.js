import Main from "../pages/Main.vue";
import {createRouter, createWebHistory} from "vue-router"
import TaskPage from "../pages/TaskPage.vue";
import ProjectPage from "../pages/ProjectPage.vue";

const routes = [
    {path: '/', component: Main },
    {path: '/projects', component: ProjectPage},
    {path: '/tasks', component: TaskPage }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;