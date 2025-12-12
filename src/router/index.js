import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "@/components/LandingPage.vue";
import TasksDesc from "@/components/TasksDesc.vue";
import OurTeam from "@/components/OurTeam.vue";
import OurServices from "@/components/OurServices.vue";
import LawAndOrder from "@/components/LawAndOrder.vue";
import ContacktUs from "@/components/ContacktUs.vue";
import OurImpressum from "@/shared/OurImpressum.vue";
import PrivicyPolice from "@/shared/PrivicyPolice.vue";

const routes = [
    { path: "/", component: LandingPage },
    { path: "/tasks", component: TasksDesc },
    { path: "/team", component: OurTeam },
    { path: "/service", component: OurServices },
    { path: "/law", component: LawAndOrder },
    { path: "/contact", component: ContacktUs },
    { path: "/impress", component: OurImpressum },
    { path: "/privacy", component: PrivicyPolice }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router