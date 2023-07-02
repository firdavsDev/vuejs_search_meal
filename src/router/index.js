import { createRouter, createWebHistory } from "vue-router";
import DefaulLoyout from "../components/DefaulLoyout.vue";
import MealByLetter from "../views/MealByLetter.vue";
import MealByName from "../views/MealByName.vue";
import MealByIntegrate from "../views/MealByIntegrate.vue";
import MealDetail from "../views/MealDetail.vue";

const routes = [
  {
    path: "/",
    name: "DefaulLoyout",
    component: DefaulLoyout,
    children: [
      {
        path: "/",
        name: "Home",
        component: MealByName,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: MealByLetter,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealByName,
      },
      {
        path: "/by-integrate/:integrate?",
        name: "byIntegrate",
        component: MealByIntegrate,
      },
      {
        path: "/meal/:id",
        name: "MealDetails",
        component: MealDetail,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
