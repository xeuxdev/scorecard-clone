import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    route("/terms-of-service", "routes/terms-of-service.tsx"),
    route("/privacy-policy", "routes/privacy-policy.tsx"),
    route("/careers", "routes/careers.tsx"),
    route("/about-us", "routes/about-us.tsx"),
    route("/blog", "routes/resources/blog.tsx"),
  ]),
] satisfies RouteConfig;
