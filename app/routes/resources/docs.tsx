import { useState } from "react";
import type { Route } from "./+types/docs";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Documentation | Scorecard" },
    {
      name: "description",
      content:
        "Comprehensive documentation and guides for building with Scorecard",
    },
  ];
}

export default function DocsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="docs-wrapper min-h-screen is-padding-start">
      {/* Mobile Sidebar Toggle */}
    </div>
  );
}
