import App from "./App";
import SearchCatalog from "./SearchCatalog";

const routes = [
  {
    path: "/",
    exact: true,
    component: App
  },
  {
    path: "/search",
    component: SearchCatalog
  }
];

export default routes;
