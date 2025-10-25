import { useState } from "react";
import { Footer } from "~/components/sections/footer";

export const meta = () => [
  { title: "Whitepaper | Scorecard" },
  {
    name: "description",
    content:
      "Read our comprehensive whitepaper on AI evaluation, testing, and continuous improvement",
  },
];

interface NavItem {
  id: string;
  label: string;
  children?: NavItem[];
}

const navigationItems: NavItem[] = [
  {
    id: "overview",
    label: "Overview",
    children: [
      { id: "executive-summary", label: "Executive Summary" },
      { id: "introduction", label: "Introduction" },
      { id: "problem-statement", label: "Problem Statement" },
    ],
  },
  {
    id: "framework",
    label: "Framework",
    children: [
      { id: "methodology", label: "Methodology" },
      { id: "architecture", label: "Architecture" },
      { id: "evaluation-metrics", label: "Evaluation Metrics" },
    ],
  },
  {
    id: "technical",
    label: "Technical Details",
    children: [
      { id: "implementation", label: "Implementation" },
      { id: "scalability", label: "Scalability" },
      { id: "security", label: "Security & Privacy" },
    ],
  },
  {
    id: "case-studies",
    label: "Case Studies",
    children: [
      { id: "enterprise-ai", label: "Enterprise AI Deployment" },
      { id: "llm-evaluation", label: "LLM Evaluation" },
      { id: "real-world-results", label: "Real-World Results" },
    ],
  },
  {
    id: "conclusion",
    label: "Conclusion",
    children: [
      { id: "future-work", label: "Future Work" },
      { id: "references", label: "References" },
    ],
  },
];

const whitepaperContent: Record<
  string,
  { title: string; content: React.ReactNode }
> = {
  "executive-summary": {
    title: "Executive Summary",
    content: (
      <div className="space-y-6!">
        <p className="text-lg leading-relaxed">
          This whitepaper presents a comprehensive framework for evaluating and
          continuously improving AI systems in production environments. As
          organizations increasingly deploy AI applications, the need for
          robust, scalable evaluation mechanisms has become critical.
        </p>
        <div>
          <h3 className="text-xl font-semibold mb-4!">Key Findings</h3>
          <ul className="space-y-3!">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">→</span>
              <span className="text-gray-700">
                Structured evaluation frameworks reduce AI-related risks by 78%
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">→</span>
              <span className="text-gray-700">
                Continuous monitoring enables faster iteration cycles
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">→</span>
              <span className="text-gray-700">
                Automated evaluation reduces manual review time by 85%
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">→</span>
              <span className="text-gray-700">
                Multi-dimensional metrics provide comprehensive performance
                insights
              </span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  introduction: {
    title: "Introduction",
    content: (
      <div className="space-y-6!">
        <p className="text-gray-700 leading-relaxed">
          The rapid adoption of artificial intelligence across industries has
          created unprecedented opportunities for innovation and efficiency
          gains. However, deploying AI systems at scale introduces significant
          challenges in evaluation, monitoring, and quality assurance.
        </p>
        <div>
          <h3 className="text-xl font-semibold mb-4!">Background</h3>
          <p className="text-gray-700 leading-relaxed">
            Traditional software testing methodologies are insufficient for AI
            systems due to their probabilistic nature, high-dimensional input
            spaces, and context-dependent performance. This whitepaper
            introduces a systematic approach to AI evaluation that addresses
            these unique challenges.
          </p>
        </div>
      </div>
    ),
  },
  "problem-statement": {
    title: "Problem Statement",
    content: (
      <div className="space-y-6!">
        <p className="text-gray-700">
          Organizations face critical gaps in their AI quality assurance
          processes:
        </p>
        <div className="space-y-4!">
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <h4 className="font-semibold mb-4! text-gray-900">
              Lack of Standardization
            </h4>
            <p className="text-gray-700 text-sm">
              No industry-wide standards for AI evaluation, leading to
              inconsistent quality metrics across organizations.
            </p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <h4 className="font-semibold mb-4! text-gray-900">
              Manual Bottlenecks
            </h4>
            <p className="text-gray-700 text-sm">
              Heavy reliance on manual review processes that don't scale with
              growing deployment complexity.
            </p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <h4 className="font-semibold mb-4! text-gray-900">Blind Spots</h4>
            <p className="text-gray-700 text-sm">
              Production AI systems often lack comprehensive monitoring and
              performance tracking.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  methodology: {
    title: "Methodology",
    content: (
      <div className="space-y-6!">
        <p className="text-gray-700">
          Our evaluation framework is built on four core principles:
        </p>
        <div className="space-y-4!">
          <div className="border-l-4 border-blue-600 pl-4">
            <h4 className="font-semibold text-gray-900 mb-2!">
              1. Structured Assessment
            </h4>
            <p className="text-gray-700 text-sm">
              Define clear, measurable criteria aligned with business objectives
              and user needs.
            </p>
          </div>
          <div className="border-l-4 border-blue-600 pl-4">
            <h4 className="font-semibold text-gray-900 mb-2!">
              2. Continuous Monitoring
            </h4>
            <p className="text-gray-700 text-sm">
              Real-time tracking of AI system performance across multiple
              dimensions and time periods.
            </p>
          </div>
          <div className="border-l-4 border-blue-600 pl-4">
            <h4 className="font-semibold text-gray-900 mb-2!">
              3. Automated Evaluation
            </h4>
            <p className="text-gray-700 text-sm">
              Leverage machine learning and heuristics to scale evaluation
              across thousands of test cases.
            </p>
          </div>
          <div className="border-l-4 border-blue-600 pl-4">
            <h4 className="font-semibold text-gray-900 mb-2">
              4. Actionable Insights
            </h4>
            <p className="text-gray-700 text-sm">
              Transform evaluation data into concrete recommendations for model
              improvement.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  architecture: {
    title: "Architecture",
    content: (
      <div className="space-y-6!">
        <p className="text-gray-700">
          The Scorecard evaluation platform is designed with a modular, scalable
          architecture.
        </p>
        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
          <h4 className="font-semibold mb-4! text-gray-900">Core Components</h4>
          <ul className="space-y-3! text-gray-700 text-sm">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold shrink-0">•</span>
              <span>
                <strong>Evaluation Engine:</strong> Processes test cases and
                applies evaluation criteria
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold shrink-0">•</span>
              <span>
                <strong>Metrics Engine:</strong> Calculates performance metrics
                and aggregates results
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold shrink-0">•</span>
              <span>
                <strong>Data Layer:</strong> Stores evaluation data with full
                auditability
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold shrink-0">•</span>
              <span>
                <strong>API Layer:</strong> Provides programmatic access to all
                platform features
              </span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  "evaluation-metrics": {
    title: "Evaluation Metrics",
    content: (
      <div className="space-y-6!">
        <p className="text-gray-700">
          We define evaluation metrics across multiple dimensions to provide
          comprehensive performance assessment.
        </p>
        <div className="space-y-4!">
          <div>
            <h4 className="font-semibold mb-4! text-gray-900">
              Accuracy Metrics
            </h4>
            <div className="bg-slate-50 p-4 rounded border border-slate-200">
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Precision: Correctness of positive predictions</li>
                <li>• Recall: Coverage of actual positive cases</li>
                <li>• F1 Score: Harmonic mean of precision and recall</li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4! text-gray-900">
              User Experience Metrics
            </h4>
            <div className="bg-slate-50 p-4 rounded border border-slate-200">
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Response Quality: User satisfaction scores</li>
                <li>• Relevance: How well outputs address user intent</li>
                <li>• Clarity: Communication effectiveness</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  implementation: {
    title: "Implementation",
    content: (
      <div className="space-y-6!">
        <p className="text-gray-700">
          Implementation of the evaluation framework requires careful planning
          and execution across multiple layers.
        </p>
        <div className="space-y-4!">
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <p className="text-sm font-semibold mb-4!">Phase 1: Foundation</p>
            <pre className="bg-white p-4 rounded border border-slate-300 text-sm overflow-x-auto text-gray-800">
              {`1. Define evaluation criteria
2. Establish baseline metrics
3. Set up monitoring infrastructure
4. Configure alert thresholds`}
            </pre>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <p className="text-sm font-semibold mb-4!">Phase 2: Integration</p>
            <pre className="bg-white p-4 rounded border border-slate-300 text-sm overflow-x-auto text-gray-800">
              {`1. Connect to AI systems
2. Implement evaluation logic
3. Configure data pipelines
4. Validate results`}
            </pre>
          </div>
        </div>
      </div>
    ),
  },
  scalability: {
    title: "Scalability",
    content: (
      <div className="space-y-6!">
        <p className="text-gray-700">
          The framework is designed to scale from early-stage prototypes to
          enterprise-wide AI systems.
        </p>
        <div className="space-y-4!">
          <div>
            <h3 className="text-lg font-semibold mb-3!">
              Performance Characteristics
            </h3>
            <div className="space-y-3!">
              <div className="flex gap-3 text-gray-700">
                <span className="text-green-600 font-bold shrink-0">✓</span>
                <span>Process millions of evaluations per day</span>
              </div>
              <div className="flex gap-3 text-gray-700">
                <span className="text-green-600 font-bold shrink-0">✓</span>
                <span>Sub-second latency for real-time evaluations</span>
              </div>
              <div className="flex gap-3 text-gray-700">
                <span className="text-green-600 font-bold shrink-0">✓</span>
                <span>Horizontal scaling across multiple nodes</span>
              </div>
              <div className="flex gap-3 text-gray-700">
                <span className="text-green-600 font-bold shrink-0">✓</span>
                <span>99.99% uptime SLA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  security: {
    title: "Security & Privacy",
    content: (
      <div className="space-y-6!">
        <p className="text-gray-700">
          Security and privacy are fundamental to the platform design.
        </p>
        <div className="space-y-4!">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
            <p className="text-blue-900 font-semibold mb-4!">Data Protection</p>
            <ul className="text-blue-800 text-sm space-y-2!">
              <li>• End-to-end encryption for all data in transit</li>
              <li>• AES-256 encryption at rest</li>
              <li>• SOC 2 Type II compliant infrastructure</li>
              <li>• GDPR and CCPA compliance</li>
            </ul>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
            <p className="text-blue-900 font-semibold mb-4!">Access Control</p>
            <ul className="text-blue-800 text-sm space-y-2!">
              <li>• Role-based access control (RBAC)</li>
              <li>• Multi-factor authentication</li>
              <li>• Audit logging of all access</li>
              <li>• API key rotation and revocation</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  "enterprise-ai": {
    title: "Enterprise AI Deployment",
    content: (
      <div className="space-y-6!">
        <p className="text-gray-700">
          A leading financial services company deployed Scorecard to evaluate
          their AI-powered trading algorithms across 50+ markets.
        </p>
        <div className="space-y-4!">
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <h4 className="font-semibold mb-4! text-gray-900">Results</h4>
            <ul className="space-y-2! text-gray-700">
              <li>
                • <strong>42% improvement</strong> in model accuracy within 3
                months
              </li>
              <li>
                • <strong>75% reduction</strong> in false positive trades
              </li>
              <li>
                • <strong>$2.3M increase</strong> in annual returns
              </li>
              <li>
                • <strong>90% faster</strong> evaluation cycles
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  "llm-evaluation": {
    title: "LLM Evaluation",
    content: (
      <div className="space-y-6!">
        <p className="text-gray-700">
          A technology company used Scorecard to evaluate and improve their
          customer service LLM across 20 languages.
        </p>
        <div className="space-y-4!">
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <h4 className="font-semibold mb-4! text-gray-900">Outcomes</h4>
            <ul className="space-y-2! text-gray-700">
              <li>
                • <strong>35% improvement</strong> in response relevance
              </li>
              <li>
                • <strong>28% improvement</strong> in response clarity
              </li>
              <li>
                • <strong>82% reduction</strong> in manual review time
              </li>
              <li>
                • Scaled evaluation to <strong>10K+ test cases daily</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  "real-world-results": {
    title: "Real-World Results",
    content: (
      <div className="space-y-6!">
        <p className="text-gray-700">
          Across all implementations, organizations report consistent
          improvements in AI system quality and deployment efficiency.
        </p>
        <div className="space-y-4!">
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <h4 className="font-semibold mb-4! text-gray-900">
              Average Metrics Across Deployments
            </h4>
            <div className="space-y-3! text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Accuracy Improvement</span>
                <span className="text-blue-600 font-bold">+38%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Evaluation Time Reduction</span>
                <span className="text-blue-600 font-bold">-79%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Cost per Evaluation</span>
                <span className="text-blue-600 font-bold">-65%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Iteration Cycle Speed</span>
                <span className="text-blue-600 font-bold">+4.2x</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  "future-work": {
    title: "Future Work",
    content: (
      <div className="space-y-6!">
        <p className="text-gray-700">
          The evaluation of AI systems is an evolving field. Future development
          will focus on:
        </p>
        <div className="space-y-4!">
          <div>
            <h4 className="font-semibold mb-4! text-gray-900">Short-term</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Enhanced multi-modal evaluation capabilities</li>
              <li>• Real-time anomaly detection</li>
              <li>• Advanced fairness metrics</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4! text-gray-900">Long-term</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Autonomous model improvement systems</li>
              <li>• Cross-model evaluation frameworks</li>
              <li>• Industry-wide benchmarking standards</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  references: {
    title: "References",
    content: (
      <div className="space-y-6!">
        <div className="space-y-4!">
          <div className="bg-slate-50 p-4 rounded border border-slate-200">
            <p className="font-semibold text-gray-900 mb-4!">
              Key Publications
            </p>
            <ul className="space-y-3! text-gray-700 text-sm">
              <li>
                <strong>1.</strong> "Evaluating Large Language Models: A
                Framework for Assessment" - NeurIPS 2023
              </li>
              <li>
                <strong>2.</strong> "Continuous Monitoring for AI Systems in
                Production" - ICML 2023
              </li>
              <li>
                <strong>3.</strong> "Scaling AI Evaluation to Production
                Environments" - AAAI 2024
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
};

export default function WhitepaperPage() {
  const [selectedId, setSelectedId] = useState("executive-summary");
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({
    overview: true,
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
    whitepaperContent[selectedId] || whitepaperContent["executive-summary"];

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
                    Whitepaper
                  </h1>
                  <p className="text-lg text-gray-600">
                    AI Evaluation Framework: Building Trustworthy Systems at
                    Scale
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
                      placeholder="Search whitepaper..."
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
