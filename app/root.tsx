import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { ExtraScripts } from "./scripts";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      data-wf-domain="www.scorecard.io"
      data-wf-page="68012f5feeda4ace0fca1c98"
      data-wf-site="68012f5eeeda4ace0fca1c46"
      data-wf-intellimize-customer-id="117556953"
      lang="en"
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />

        <style>
          {`.nav_menu-buttons {
          opacity: 1;
          pointer-events: auto;
          transition: none;
        }

        @media (min-width: 992px) {
          .nav_menu-buttons {
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.4s ease;
          }

          .nav_menu-buttons.show {
            opacity: 1;
            pointer-events: auto;
          }
        }`}
        </style>

        <link href="/favicon.png" rel="shortcut icon" type="image/x-icon" />
        <link href="/webclip.png" rel="apple-touch-icon" />
        <link href="https://www.scorecard.io" rel="canonical" />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />

        <script
          src="/js/jquery-3.5.1.min.dc5e7f18c8.js?site=68012f5eeeda4ace0fca1c46"
          type="text/javascript"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossOrigin="anonymous"
        ></script>
        <script
          src="/js/webflow.schunk.36b8fb49256177c8.js"
          type="text/javascript"
        ></script>
        <script
          src="/js/webflow.schunk.82f44582d86d1ea9.js"
          type="text/javascript"
        ></script>
        <script
          src="/js/webflow.schunk.69f5edcab4292493.js"
          type="text/javascript"
        ></script>
        <script
          src="/js/webflow.9a10e745.c8fc1ba8c205793c.js"
          type="text/javascript"
        ></script>

        {/* <!-- SwiperJS Install --> */}

        <script src="/js/gsap.min.js"></script>
        <script src="/js/ScrollTrigger.min.js"></script>
        {/* <script src="/js/lenis.min.js"></script> */}
        {/* <script src="/js/index.min.js"></script> */}
        {/* <script src="https://unpkg.com/split-type"></script> */}
        {/* <!-- Custom Code Start --> */}
        <ExtraScripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
