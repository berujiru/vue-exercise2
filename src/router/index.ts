import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/post",
    name: "postlist",
    component: () =>
      import(/* webpackChunkName: "postlist" */ "../views/PostListView.vue"),
  },
  {
    path: "/post",
    name: "postlist",
    component: () =>
      import(/* webpackChunkName: "postlist" */ "../views/PostListView.vue"),
  },
  {
    path: "/post/:postID",
    name: "postdetail",
    component: () =>
      import(
        /* webpackChunkName: "postdetail" */ "../views/PostDetailView.vue"
      ),
    props: (route) => ({ postID: route.params.postID }),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
