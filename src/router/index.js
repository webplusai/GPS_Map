import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "googlemap" */ "@/views/Home")
  },
  {
    path: "/table",
    name: "Table",
    component: () =>
      import(/* webpackChunkName: "googlemap" */ "@/components/Table"),
    props: { length: 26 }
  },
  {
    path: "/map",
    name: "GoogleMap",
    props: { height: 94 },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "googlemap" */ "@/components/GoogleMap")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
