import { PageRouteObject } from "@/models/routeModel";
import HomePage from "./HomePage";

const homeRoutes: PageRouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
];

export default homeRoutes;
