import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import PatientDetailView from "../views/PatientDetailView.vue"

const routes = [
  { path: "/", name: "Home", component: HomeView },
  {
    path: "/paciente/:id",
    name: "PatientDetail",
    component: PatientDetailView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
