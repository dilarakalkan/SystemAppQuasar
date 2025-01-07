import { createRouter, createWebHistory } from "vue-router";

import UserLogin from "src/components/UserLogin.vue";

import ApplicationPostings from "src/pages/applications/ApplicationPostings.vue";

import ApplicationsPage from "src/pages/leftdrawer/ApplicationsPage.vue";
import CalendarPage from "src/pages/leftdrawer/CalendarPage.vue";
import SubmissionsPage from "src/pages/leftdrawer/SubmissionsPage.vue";
import CoursesPage from "src/pages/leftdrawer/CoursesPage.vue";
import ExamsPage from "src/pages/leftdrawer/ExamsPage.vue";
import SchedulePage from "src/pages/leftdrawer/SchedulePage.vue";
import HomePage from "src/components/HomePage.vue";

const routes = [
  { path: "/", name: "Login", component: UserLogin },

  {
    path: "/basvuru-ilanlari",
    name: "ApplicationPostings",
    component: ApplicationPostings,
  },

  {
    path: "/giris",
    component: HomePage,
    children: [
      {
        path: "/home",
        name: "HomePage",
        component: () => import("src/components/HomePage.vue"),
      },
      {
        path: "applications",
        name: "Applications",
        component: ApplicationsPage,
      },
      {
        path: "calendar",
        name: "Calendar",
        component: () => import("src/pages/leftdrawer/CalendarPage.vue"),
      },
      {
        path: "submissions",
        name: "Submissions",
        component: SubmissionsPage,
      },
      {
        path: "courses",
        name: "Courses",
        component: CoursesPage,
      },
      {
        path: "exams",
        name: "Exams",
        component: ExamsPage,
      },
      {
        path: "schedule",
        name: "Schedule",
        component: SchedulePage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
