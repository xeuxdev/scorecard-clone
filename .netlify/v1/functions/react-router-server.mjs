
    export { default } from "../../../build/server/server.js";

    export const config = {
      name: "React Router server handler",
      generator: "@netlify/vite-plugin-react-router@2.0.1",
      path: "/*",
      preferStatic: true,
    };
    