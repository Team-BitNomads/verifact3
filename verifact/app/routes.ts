import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("login", "routes/login.tsx"),
  route("sign-up", "routes/signup.tsx"),
  route("forgot-password", "routes/fPassword.tsx"),
] satisfies RouteConfig;
