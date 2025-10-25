import { useState } from "react";
import type { Route } from "./+types/docs";
import { Footer } from "~/components/sections/footer";

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

interface NavItem {
  id: string;
  label: string;
  children?: NavItem[];
}

const navigationItems: NavItem[] = [
  {
    id: "getting-started",
    label: "Getting Started",
    children: [
      { id: "introduction", label: "Introduction" },
      { id: "installation", label: "Installation" },
      { id: "quick-start", label: "Quick Start" },
    ],
  },
  {
    id: "api-reference",
    label: "API Reference",
    children: [
      { id: "authentication", label: "Authentication" },
      { id: "endpoints", label: "Endpoints" },
      { id: "errors", label: "Error Handling" },
    ],
  },
  {
    id: "guides",
    label: "Guides",
    children: [
      { id: "best-practices", label: "Best Practices" },
      { id: "integration", label: "Integration Guide" },
      { id: "testing", label: "Testing & Debugging" },
    ],
  },
  {
    id: "examples",
    label: "Examples",
    children: [
      { id: "basic-example", label: "Basic Example" },
      { id: "advanced-usage", label: "Advanced Usage" },
      { id: "webhooks", label: "Webhooks" },
    ],
  },
];

const documentationContent: Record<
  string,
  { title: string; content: React.ReactNode }
> = {
  introduction: {
    title: "Introduction",
    content: (
      <div className="space-y-6!">
        <p className="text-lg leading-relaxed">
          Welcome to Scorecard Documentation. This comprehensive guide will help
          you get started with our platform and make the most of its powerful
          features.
        </p>
        <div>
          <h3 className="text-xl font-semibold mb-4!">What is Scorecard?</h3>
          <p className="text-gray-700 leading-relaxed">
            Scorecard is a comprehensive platform designed to help you build,
            test, and deploy AI applications with confidence. Our tools provide
            structured evaluation and continuous improvement capabilities for
            your AI systems.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4!">Key Features</h3>
          <ul className="space-y-3!">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">→</span>
              <span className="text-gray-700">
                AI Testing & Evaluation Framework
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">→</span>
              <span className="text-gray-700">
                Real-time Performance Monitoring
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">→</span>
              <span className="text-gray-700">API-First Architecture</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">→</span>
              <span className="text-gray-700">
                Comprehensive Analytics Dashboard
              </span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  installation: {
    title: "Installation",
    content: (
      <div className="space-y-6!">
        <div>
          <h3 className="text-xl font-semibold mb-4!">Installation Guide</h3>
          <p className="text-gray-700 mb-4">
            Get Scorecard up and running in minutes with our simple installation
            process.
          </p>
        </div>
        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
          <p className="text-sm font-mono bg-white p-4 rounded border border-slate-300 overflow-x-auto">
            npm install @scorecard/sdk
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3!">Requirements</h3>
          <ul className="space-y-2! text-gray-700">
            <li>• Node.js 14.0 or higher</li>
            <li>• npm or yarn package manager</li>
            <li>• Active Scorecard account</li>
            <li>• API Key (obtain from your dashboard)</li>
          </ul>
        </div>
      </div>
    ),
  },
  "quick-start": {
    title: "Quick Start",
    content: (
      <div className="space-y-6!">
        <p className="text-gray-700">
          Get your first Scorecard integration running in under 5 minutes.
        </p>
        <div className="space-y-4!">
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <p className="text-sm font-semibold mb-3">
              Step 1: Initialize Scorecard
            </p>
            <pre className="bg-white p-4 rounded border border-slate-300 text-sm overflow-x-auto text-gray-800">
              {`import { Scorecard } from '@scorecard/sdk';

const scorecard = new Scorecard({
  apiKey: process.env.SCORECARD_API_KEY,
});`}
            </pre>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <p className="text-sm font-semibold mb-3!">
              Step 2: Create Your First Evaluation
            </p>
            <pre className="bg-white p-4 rounded border border-slate-300 text-sm overflow-x-auto text-gray-800">
              {`const result = await scorecard.evaluate({
  input: "What is AI?",
  output: "AI is artificial intelligence...",
  criteria: ["accuracy", "relevance"],
});`}
            </pre>
          </div>
        </div>
      </div>
    ),
  },
  authentication: {
    title: "Authentication",
    content: (
      <div className="space-y-6!">
        <p className="text-gray-700">
          All API requests require authentication using your API key. Include it
          in the request headers.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
          <p className="text-blue-900 font-semibold">API Key Security</p>
          <p className="text-blue-800 text-sm mt-2!">
            Keep your API key private. Never commit it to version control or
            expose it in client-side code.
          </p>
        </div>
      </div>
    ),
  },
  endpoints: {
    title: "Endpoints",
    content: (
      <div className="space-y-6!">
        <div className="space-y-4!">
          <div className="border-l-4 border-green-600 pl-4">
            <p className="font-mono text-green-600 font-bold">
              GET /api/v1/evaluations
            </p>
            <p className="text-gray-700 text-sm mt-1">
              Retrieve list of evaluations
            </p>
          </div>
          <div className="border-l-4 border-blue-600 pl-4">
            <p className="font-mono text-blue-600 font-bold">
              POST /api/v1/evaluations
            </p>
            <p className="text-gray-700 text-sm mt-1">
              Create a new evaluation
            </p>
          </div>
          <div className="border-l-4 border-purple-600 pl-4">
            <p className="font-mono text-purple-600 font-bold">
              GET /api/v1/evaluations/{`{id}`}
            </p>
            <p className="text-gray-700 text-sm mt-1">Get evaluation details</p>
          </div>
        </div>
      </div>
    ),
  },
  errors: {
    title: "Error Handling",
    content: (
      <div className="space-y-6!">
        <p className="text-gray-700">
          The API uses standard HTTP status codes to indicate the success or
          failure of requests.
        </p>
        <div className="space-y-3!">
          <div className="bg-red-50 p-4 rounded border border-red-200">
            <p className="font-semibold text-red-900">400 Bad Request</p>
            <p className="text-red-800 text-sm">Invalid request parameters</p>
          </div>
          <div className="bg-red-50 p-4 rounded border border-red-200">
            <p className="font-semibold text-red-900">401 Unauthorized</p>
            <p className="text-red-800 text-sm">Missing or invalid API key</p>
          </div>
          <div className="bg-red-50 p-4 rounded border border-red-200">
            <p className="font-semibold text-red-900">429 Too Many Requests</p>
            <p className="text-red-800 text-sm">Rate limit exceeded</p>
          </div>
        </div>
      </div>
    ),
  },
  "best-practices": {
    title: "Best Practices",
    content: (
      <div className="space-y-6!">
        <div>
          <h3 className="text-lg font-semibold mb-3!">
            Optimize Your Evaluations
          </h3>
          <ul className="space-y-3! text-gray-700">
            <li className="flex gap-3">
              <span className="text-green-600 font-bold shrink-0">✓</span>
              <span>Use specific criteria for accurate evaluations</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold shrink-0">✓</span>
              <span>Batch requests for improved performance</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold shrink-0">✓</span>
              <span>Implement caching for frequently evaluated data</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold shrink-0">✓</span>
              <span>Monitor API usage and optimize requests</span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  integration: {
    title: "Integration Guide",
    content: (
      <div className="space-y-6!">
        <p className="text-gray-700">
          Integrate Scorecard into your existing workflows with our
          comprehensive SDKs and APIs.
        </p>
        <div className="space-y-4!">
          <div>
            <h3 className="font-semibold mb-5!">Popular Integrations</h3>
            <ul className="space-y-2! text-gray-700">
              <li>• Python SDK</li>
              <li>• JavaScript/TypeScript SDK</li>
              <li>• REST API</li>
              <li>• Webhooks</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  testing: {
    title: "Testing & Debugging",
    content: (
      <div className="space-y-6!">
        <p className="text-gray-700">
          Use these tools and techniques to test and debug your Scorecard
          integration effectively.
        </p>
        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
          <p className="font-semibold mb-3!">Development Mode</p>
          <p className="text-gray-700 text-sm">
            Enable development mode to get detailed error messages and logging
            information.
          </p>
        </div>
      </div>
    ),
  },
  "basic-example": {
    title: "Basic Example",
    content: (
      <div className="space-y-6!">
        <p className="text-gray-700">
          Here's a simple example to get you started with Scorecard.
        </p>
        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
          <pre className="bg-white p-4 rounded border border-slate-300 text-sm overflow-x-auto text-gray-800">
            {`// Basic evaluation example
const scorecard = new Scorecard({
  apiKey: 'your-api-key'
});

const evaluation = await scorecard.evaluate({
  input: "User input text",
  output: "Model output text",
  rubric: {
    accuracy: 0.9,
    relevance: 0.85,
    clarity: 0.95
  }
});

console.log(evaluation.score);`}
          </pre>
        </div>
      </div>
    ),
  },
  "advanced-usage": {
    title: "Advanced Usage",
    content: (
      <div className="space-y-6!">
        <p className="text-gray-700">
          Explore advanced features and patterns for power users.
        </p>
        <div className="space-y-4!">
          <div>
            <h3 className="font-semibold mb-4!">Custom Evaluators</h3>
            <p className="text-gray-700 text-sm">
              Create custom evaluation functions tailored to your specific
              requirements.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4!">Batch Processing</h3>
            <p className="text-gray-700 text-sm">
              Process multiple evaluations efficiently using our batch API.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  webhooks: {
    title: "Webhooks",
    content: (
      <div className="space-y-6!">
        <p className="text-gray-700">
          Receive real-time notifications of evaluation events through webhooks.
        </p>
        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
          <p className="font-semibold mb-3!">Webhook Events</p>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• evaluation.created</li>
            <li>• evaluation.completed</li>
            <li>• evaluation.failed</li>
          </ul>
        </div>
      </div>
    ),
  },
};

export default function DocsPage() {
  const [selectedId, setSelectedId] = useState("introduction");
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({
    "getting-started": true,
  });
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const filteredNavItems = navigationItems.map((item) => {
    const matchesSearch = item.label
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const filteredChildren = item.children?.filter((child) =>
      child.label.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const hasMatchingChildren = filteredChildren && filteredChildren.length > 0;

    return {
      ...item,
      children: filteredChildren,
      matches: matchesSearch || hasMatchingChildren,
    };
  });

  const selectedContent =
    documentationContent[selectedId] || documentationContent.introduction;

  return (
    <>
      <main className="main-wrapper is-padding-start">
        <section className="py-12">
          <div className="padding-global">
            {/* Header */}
            <div className="mb-12!">
              <div className="container-xlarge">
                <div className="mb-8! space-y-5!">
                  <h1 className="text-5xl font-bold text-gray-900 mb-3">
                    Documentation
                  </h1>
                  <p className="text-lg text-gray-600">
                    Everything you need to get started with Scorecard
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="container-xlarge flex gap-12">
              {/* Sidebar Navigation */}
              <aside className="w-64 shrink-0">
                <div className="sticky top-24">
                  {/* Search */}
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Search documentation..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent bg-white"
                    />
                  </div>

                  {/* Navigation */}
                  <nav className="space-y-2">
                    {filteredNavItems.map((item) =>
                      item.matches ? (
                        <div key={item.id}>
                          <button
                            onClick={() => toggleSection(item.id)}
                            className="w-full flex items-center justify-between px-3 py-2 font-semibold text-gray-900 hover:bg-gray-100 rounded transition-colors text-sm"
                          >
                            <span>{item.label}</span>
                            <span
                              className={`transition-transform duration-200 text-xs ${
                                expandedSections[item.id] ? "rotate-180" : ""
                              }`}
                            >
                              ▼
                            </span>
                          </button>

                          {expandedSections[item.id] && item.children && (
                            <div className="ml-2 space-y-1 border-l border-gray-300">
                              {item.children.map((child) => (
                                <button
                                  key={child.id}
                                  onClick={() => setSelectedId(child.id)}
                                  className={`w-full text-left px-3 py-2 text-sm rounded transition-colors ${
                                    selectedId === child.id
                                      ? "bg-blue-50 text-blue-600 font-semibold"
                                      : "text-gray-700 hover:bg-gray-100"
                                  }`}
                                >
                                  {child.label}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : null
                    )}
                  </nav>
                </div>
              </aside>

              {/* Main Content */}
              <div className="flex-1 min-w-0 pl-4">
                <article className="bg-white rounded-lg p-8 sticky top-24">
                  <div className="border-b border-gray-200 pb-6 mb-8">
                    <h2 className="text-4xl font-bold text-gray-900">
                      {selectedContent.title}
                    </h2>
                  </div>

                  <div className="prose prose-sm max-w-none overflow-y-auto max-h-[calc(100vh-240px)]">
                    {selectedContent.content}
                  </div>

                  {/* Footer */}
                  <div className="border-t border-gray-200 mt-12 pt-8">
                    <p className="text-gray-600 text-sm">
                      Need help? Check our{" "}
                      <a
                        href="/faqs"
                        className="text-blue-600 hover:text-blue-700 font-semibold"
                      >
                        FAQ
                      </a>
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
