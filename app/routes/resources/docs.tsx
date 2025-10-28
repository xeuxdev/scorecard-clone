import { useState } from "react";
import {
  FiBookOpen,
  FiChevronDown,
  FiChevronRight,
  FiCode,
  FiGitBranch,
  FiHelpCircle,
  FiHome,
} from "react-icons/fi";
import { CoreConcepts } from "~/components/sections/docs/core-concepts";
import { DeveloperGuides } from "~/components/sections/docs/developer-guides";
import { JavaScriptSDK } from "~/components/sections/docs/javascript-sdk";
import { LambdaAPIReference } from "~/components/sections/docs/lambda-api-reference";
import { Migrations } from "~/components/sections/docs/migrations";
import { ReactSDK } from "~/components/sections/docs/react-sdk";
import { VanillaIframe } from "~/components/sections/docs/vanilla-iframe";
import { Welcome } from "~/components/sections/docs/welcome";
import { Footer } from "~/components/sections/footer";

export const meta = () => [
  { title: "Documentation | Lambda" },
  {
    name: "description",
    content:
      "Read our comprehensive whitepaper on confidential blockchain applications, testing, and continuous improvement",
  },
];

interface NavItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  children?: NavItem[];
  href?: string;
}

interface NavigationSection {
  section?: string;
  items?: NavItem[];
  href?: string;
  icon?: React.ReactNode;
  matches?: boolean;
}

const navigationSections: NavigationSection[] = [
  {
    section: "Home",
    items: [
      {
        id: "welcome",
        label: "Home",
        icon: <FiHome className="w-4 h-4" />,
        children: [{ id: "welcome-overview", label: "Welcome to Lambda" }],
      },
    ],
  },
  {
    section: "Core Concepts",
    items: [
      {
        id: "architecture",
        label: "Core Concepts & Architecture",
        icon: <FiBookOpen className="w-4 h-4" />,
        children: [{ id: "core-concepts", label: "Core Concepts" }],
      },
    ],
  },
  {
    section: "Developer Guides",
    items: [
      {
        id: "dev-guides",
        label: "Guides Overview",
        icon: <FiCode className="w-4 h-4" />,
        children: [
          {
            id: "guides-overview",
            label: "Guides Overview",
          },
        ],
      },
    ],
  },
  {
    section: "Migration & APIs",
    items: [
      {
        id: "migration-v2",
        label: "Migrating to Lambda v2",
        icon: <FiGitBranch className="w-4 h-4" />,
        children: [{ id: "migration-concepts", label: "Overview" }],
      },
      {
        id: "api-resources",
        label: "API & SDKs",
        icon: <FiCode className="w-4 h-4" />,
        children: [
          { id: "lambda-api-reference", label: "Lambda API Reference" },
          { id: "javascript-sdk", label: "JavaScript SDK" },
          { id: "react-sdk", label: "React SDK" },
          { id: "vanilla-iframe", label: "Vanilla iFrame" },
        ],
      },
    ],
  },
  {
    section: "Resources & Support",
    items: [
      {
        id: "help",
        label: "Help",
        icon: <FiHelpCircle className="w-4 h-4" />,
        children: [
          { id: "troubleshooting", label: "Troubleshooting & Support" },
        ],
      },
    ],
  },
];

const documentationContent: Record<
  string,
  { title: string; content: React.ReactNode }
> = {
  "welcome-overview": {
    title: "Welcome to Lambda Builders' Kit",
    content: <Welcome />,
  },
  "core-concepts": {
    title: "Core Concepts & Architecture",
    content: <CoreConcepts />,
  },

  "guides-overview": {
    title: "Guides Overview",
    content: <DeveloperGuides />,
  },

  "migration-concepts": {
    title: "Migrating to Lambda v2 (2.x.x)",
    content: <Migrations />,
  },

  "lambda-api-reference": {
    title: "Lambda API Reference",
    content: <LambdaAPIReference />,
  },
  "javascript-sdk": {
    title: "JavaScript SDK",
    content: <JavaScriptSDK />,
  },
  "api-reference": {
    title: "API Reference",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700! leading-relaxed">
          Complete documentation for Lambda SDK APIs and interfaces.
        </p>
        <div className="space-y-4">
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <h4 className="font-semibold mb-3! text-gray-900!">Core Classes</h4>
            <ul className="space-y-2 text-sm text-gray-700!">
              <li>
                <strong>LambdaClient</strong> - Main SDK entry point for
                creating transactions
              </li>
              <li>
                <strong>EncryptedTransaction</strong> - Transaction with privacy
                metadata
              </li>
              <li>
                <strong>ZXE</strong> - Zero-Knowledge Execution Environment
                configuration
              </li>
              <li>
                <strong>PrivacyPolicy</strong> - Access control and encryption
                parameters
              </li>
              <li>
                <strong>ProofConfig</strong> - Zero-knowledge proof settings
              </li>
            </ul>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <h4 className="font-semibold mb-3! text-gray-900!">Key Methods</h4>
            <pre className="bg-white p-3 rounded text-xs overflow-x-auto border border-slate-300">
              {`// Client initialization
LambdaClient.init(config: ClientConfig): LambdaClient

// Transaction creation
client.transaction.create(params: TransactionParams): Promise<Transaction>

// Proof generation
client.proof.generate(data: any): Promise<Proof>

// State management
client.state.read(key: string): Promise<EncryptedState>
client.state.write(key: string, value: any): Promise<void>

// CXE/ZXE operations
client.createZXE(config: ZXEConfig): Promise<ZXE>
client.listZXEs(): Promise<ZXE[]>
client.deleteZXE(id: string): Promise<void>`}
            </pre>
          </div>
        </div>
      </div>
    ),
  },
  "react-sdk": {
    title: "React SDK",
    content: <ReactSDK />,
  },
  "vanilla-iframe": {
    title: "Vanilla iFrame ",
    content: <VanillaIframe />,
  },
  troubleshooting: {
    title: "Troubleshooting & Support",
    content: (
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="bg-rose-50 border-l-4 border-rose-600 p-4 rounded">
            <p className="text-rose-900 font-semibold mb-2">
              Common Issues & Solutions
            </p>
            <ul className="text-rose-800 text-sm space-y-2">
              <li>
                <strong>Proof generation timeout:</strong> Use GPU acceleration
                or batch smaller operations
              </li>
              <li>
                <strong>High gas costs:</strong> Batch multiple transactions
                together to amortize proof verification
              </li>
              <li>
                <strong>Connection errors:</strong> Check RPC endpoint and
                network configuration
              </li>
              <li>
                <strong>Access denied errors:</strong> Verify access policies
                and key permissions
              </li>
            </ul>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
            <p className="text-blue-900 font-semibold mb-2">
              Resources & Support
            </p>
            <ul className="text-blue-800 text-sm space-y-2">
              <li>
                📚 <strong>Documentation:</strong> docs.lambda.com
              </li>
              <li>
                💬 <strong>Discord Community:</strong> discord.gg/lambda
              </li>
              <li>
                🐛 <strong>GitHub Issues:</strong> github.com/lambda-hq/sdk
              </li>
              <li>
                📧 <strong>Email Support:</strong> support@lambda.com
              </li>
              <li>
                🔗 <strong>Status Page:</strong> status.lambda.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
};

export default function DocumentationPage() {
  const [selectedId, setSelectedId] = useState("welcome-overview");
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({
    welcome: true,
    architecture: true,
    "private-defi": true,
    "confidential-gaming": true,
    "federated-learning": true,
  });
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const filteredNavSections = navigationSections
    .map((section) => {
      // If section has href/icon but no items, it's a standalone link
      if (section.href && section.icon && !section.items) {
        const matchesSearch = section.section
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase());
        return { ...section, items: [], matches: matchesSearch };
      }

      // Otherwise, it's a section with items
      const filteredItems = section.items
        ?.map((item) => {
          const matchesSearch = item.label
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
          const filteredChildren = item.children?.filter((child) =>
            child.label.toLowerCase().includes(searchQuery.toLowerCase())
          );
          const hasMatchingChildren =
            filteredChildren && filteredChildren.length > 0;

          return {
            ...item,
            children: filteredChildren,
            matches: matchesSearch || hasMatchingChildren,
          };
        })
        .filter((item) => item.matches);

      return {
        ...section,
        items: filteredItems,
        matches: true,
      };
    })
    .filter((section) => {
      // Show section if it has href (standalone) or has filtered items
      return (
        section.matches &&
        ((section.href && !section.items) ||
          (section.items && section.items.length > 0))
      );
    });

  const handleItemClick = (itemId: string) => {
    // Only set selectedId if content exists for this item
    if (documentationContent[itemId]) {
      setSelectedId(itemId);
    }
  };

  const selectedContent =
    documentationContent[selectedId] ||
    documentationContent["welcome-overview"];

  return (
    <>
      <main className="main-wrapper is-padding-start min-h-screen">
        <section className="pb-12">
          <div className="padding-global">
            {/* Header */}
            {/* <div className="mb-12!">
              <div className="container-xlarge">
                <div className="mb-8! space-y-5!">
                  <h1 className="text-5xl font-bold text-gray-900 mb-3">
                    Whitepaper
                  </h1>
                  <p className="text-lg text-gray-600">
                    AI Evaluation Framework: Building Trustworthy Systems at
                    Scale
                  </p>
                </div>
              </div>
            </div> */}

            {/* Main Content Area */}
            <div className="container-xlarge flex gap-12">
              {/* Sidebar Navigation */}
              <aside className="w-64 shrink-0 sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto">
                {/* Search */}
                {/* <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Search whitepaper..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent bg-white"
                  />
                </div> */}

                {/* Navigation */}
                <nav className="space-y-6 p-4">
                  {filteredNavSections.map((section, idx) => (
                    <div key={section.section || `section-${idx}`}>
                      {/* Standalone section link (Home, Concepts, etc.) */}
                      {section.href && section.icon && (
                        <a
                          href={section.href}
                          className="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium rounded transition-all duration-200 text-gray-900 hover:bg-gray-100"
                        >
                          <span className="shrink-0">{section.icon}</span>
                          <span className="text-left">{section.section}</span>
                        </a>
                      )}

                      {/* Section Header */}
                      {!section.href && section.section && (
                        <span className="px-3 py-2 text-sm font-bold text-gray-900 uppercase tracking-wide text-left">
                          {section.section}
                        </span>
                      )}

                      {/* Section Items */}
                      {section.items && section.items.length > 0 && (
                        <div className="space-y-1">
                          {section.items.map((item) => (
                            <div key={item.id}>
                              {item.children ? (
                                <>
                                  <button
                                    onClick={() => toggleSection(item.id)}
                                    className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded transition-all duration-200 text-gray-900 hover:bg-gray-100 text-left"
                                  >
                                    <div className="flex items-center gap-2">
                                      {item.icon && (
                                        <span className="shrink-0">
                                          {item.icon}
                                        </span>
                                      )}
                                      <span>{item.label}</span>
                                    </div>
                                    {expandedSections[item.id] ? (
                                      <FiChevronDown className="w-4 h-4 shrink-0" />
                                    ) : (
                                      <FiChevronRight className="w-4 h-4 shrink-0" />
                                    )}
                                  </button>

                                  {/* Children with smooth transition */}
                                  <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                      expandedSections[item.id]
                                        ? "max-h-[500px] opacity-100"
                                        : "max-h-0 opacity-0"
                                    }`}
                                  >
                                    <div className="ml-6 space-y-0.5 mt-1 border-l-2 border-gray-200 pl-3">
                                      {item.children.map((child) => (
                                        <button
                                          key={child.id}
                                          onClick={() =>
                                            handleItemClick(child.id)
                                          }
                                          className={`w-full text-left px-2 py-1.5 text-sm rounded transition-colors ${
                                            selectedId === child.id
                                              ? "bg-blue-50 text-blue-600 font-medium"
                                              : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                          }`}
                                        >
                                          {child.label}
                                        </button>
                                      ))}
                                    </div>
                                  </div>
                                </>
                              ) : (
                                <button
                                  onClick={() => handleItemClick(item.id)}
                                  className={`w-full flex items-center gap-2 px-3 py-2 text-sm font-medium rounded transition-all duration-200 ${
                                    selectedId === item.id
                                      ? "bg-gray-900 text-white"
                                      : "text-gray-900 hover:bg-gray-100"
                                  }`}
                                >
                                  {item.icon && (
                                    <span className="shrink-0">
                                      {item.icon}
                                    </span>
                                  )}
                                  <span className="text-left">
                                    {item.label}
                                  </span>
                                </button>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </aside>

              {/* Main Content */}
              <div className="flex-1 min-w-0">
                <article className="bg-white rounded-lg p-8">
                  <div className="border-b border-gray-200 pb-6 mb-8">
                    <h2 className="text-4xl font-bold text-gray-900">
                      {selectedContent.title}
                    </h2>
                  </div>

                  <div className="prose prose-sm max-w-none">
                    {selectedContent.content}
                  </div>

                  {/* Footer */}
                  <div className="border-t border-gray-200 mt-12 pt-8">
                    <p className="text-gray-600 text-sm">
                      Questions about this whitepaper?{" "}
                      <a
                        href="/faqs"
                        className="text-blue-600 hover:text-blue-700 font-semibold"
                      >
                        View FAQs
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
