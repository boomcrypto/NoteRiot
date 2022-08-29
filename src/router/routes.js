const routes = [
  {
    path: "/notes",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Index.vue"),
        name: "Index",
        meta: { requiresAuth: true },
      },
      {
        path: "/edit/:id",
        component: () => import("pages/Editor.vue"),
        name: "Editor",
        meta: { requiresAuth: true },
      },
    ],
  },
  // {
  //   path: "/editor",
  //   component: () => import("layouts/EditorLayout.vue"),
  //   children: [
  //     {
  //       path: "/editor/:id",
  //       component: () => import("pages/Edit.vue"),
  //       name: "Edit",
  //       props: true,
  //       meta: {
  //         requiresAuth: true,
  //         transition: "slide-up",
  //       },
  //     },
  //   ],
  // },
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
