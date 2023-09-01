import { links } from "./links";
// import DetailModulePage from "./page/detail-module-page";
import HomePage from "./page/home-page";

export default [
  {
    routeProps: {
      path: [links.home, links.main],
      exact: true,
      component: HomePage,
    },
    name: "Home",
  },
  // {
  //   routeProps: {
  //     path: [links.detail],
  //     exact: true,
  //     component: DetailModulePage,
  //   },
  //   name: "detail module",
  // },
];
