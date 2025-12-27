import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "@/components/LandingPage.vue";
import TasksDesc from "@/components/TasksDesc.vue";
import OurTeam from "@/components/OurTeam.vue";
import OurServices from "@/components/OurServices.vue";
import LawAndOrder from "@/components/LawAndOrder.vue";
import ContacktUs from "@/components/ContacktUs.vue";
import OurImpressum from "@/shared/OurImpressum.vue";
import PrivicyPolice from "@/shared/PrivicyPolice.vue";
import ChimneyCleaning from "@/components/our-services/ChimneyCleaning.vue";
import GasMeasurment from "@/components/our-services/GasMeasurment.vue";
import SmokeDetector from "@/components/our-services/SmokeDetector.vue";
import CoAlert from "@/components/our-services/CoAlert.vue";
import ExhaustControll from "@/components/our-services/ExhaustControll.vue";
import GasExControll from "@/components/our-services/GasExControll.vue";
import EnergyCertificate from "@/components/our-services/EnergyCertificate.vue";
import RestuctionPlan from "@/components/our-services/RestuctionPlan.vue";
import HeatingCalculation from "@/components/our-services/HeatingCalculation.vue";
import FundingOptins from "@/components/our-services/FundingOptins.vue";
import ProfAdvice from "@/components/our-services/ProfAdvice.vue";
import FireSafty from "@/components/our-services/FireSafty.vue";
import EnvProtection from "@/components/our-services/EnvProtection.vue";
import EmmProtect from "@/components/our-services/EmmProtect.vue";

const routes = [
    { path: "/", component: LandingPage },
    { path: "/tasks", component: TasksDesc },
    { path: "/team", component: OurTeam },
    { path: "/service", component: OurServices },
    { path: "/law", component: LawAndOrder },
    { path: "/contact", component: ContacktUs },
    { path: "/impress", component: OurImpressum },
    { path: "/privacy", component: PrivicyPolice },
    { path: "/chimney", component: ChimneyCleaning },
    { path: "/measure", component: GasMeasurment },
    { path: "/detector", component: SmokeDetector },
    { path: "/alert", component: CoAlert },
    { path: "/exhaust", component: ExhaustControll },
    { path: "/gasControll", component: GasExControll },
    { path: "/emmProtect", component: EmmProtect },
    { path: "/certificate", component: EnergyCertificate },
    { path: "/restruction", component: RestuctionPlan },
    { path: "/calcuation", component: HeatingCalculation },
    { path: "/funding", component: FundingOptins },
    { path: "/advice", component: ProfAdvice },
    { path: "/safty", component: FireSafty },
    { path: "/env", component: EnvProtection },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router