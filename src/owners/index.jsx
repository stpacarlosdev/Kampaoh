import { links } from "./links";
import OwnerPage from "./pages/owners-page";

export default [
  {
    routeProps: {
      path: links.owners,
      exact: true,
      component: OwnerPage,
    },
    name: "owners",
  },
];
