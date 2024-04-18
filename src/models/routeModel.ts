import { RouteObject } from "react-router-dom";

export type PageRouteObject = {
  navigateTo?: string;
  layoutIsHidden?: boolean;
  backgroundIsHidden?: boolean;
} & RouteObject;
