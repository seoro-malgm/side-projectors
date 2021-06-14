import Vue from "vue";
import VueRouter from "vue-router";

// layouts
import Layout from "@/views/layout/index";

import Home from "@/views/Home.vue";
import Soon from "@/views/Soon.vue";
import Projects from "@/views/Projects/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout.Default,
    children: [
      {
        path: "",
        component: Home,
      },
    ],
  },
  {
    path: "/project",
    component: Layout.Project,
    children: [
      {
        path: "panty-run",
        component: Layout.PantyRun,
        children: [
          {
            path: "",
            name: "PantyRun",
            component: Projects.PantyRun,
          },
        ],
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    component: Layout.Default,
    children: [
      {
        path: "",
        name: "Soon",
        component: Soon,
        meta: {
          hideUpsidebar: true,
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
