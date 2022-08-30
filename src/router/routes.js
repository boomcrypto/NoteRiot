const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/notes",
        component: () => import("pages/Index.vue"),
        name: "Home",
        meta: { requiresAuth: true },
      },
      {
        path: "/edit/:id",
        component: () => import("pages/Editor.vue"),
        name: "Edit",
        props: true,
        meta: {
          requiresAuth: true,
          transition: "slide-in-right",
        },
      },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/LoginLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Login.vue"),
        name: "Login",
        meta: { requiresAuth: false },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
