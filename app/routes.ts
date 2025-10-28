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
    route("/blog/:slug", "routes/resources/blog-details.tsx"),
    route("/glossary", "routes/resources/glossary.tsx"),
    route("/media-kit", "routes/resources/media-kit.tsx"),
    route("/faqs", "routes/resources/faqs.tsx"),
    route("/docs", "routes/resources/docs.tsx"),
    // route("/whitepaper", "routes/resources/whitepaper.tsx"),
  ]),
] satisfies RouteConfig;
