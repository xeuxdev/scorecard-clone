import { useState } from "react";

const faqCategories = [
  {
    id: "getting-started",
    title: "Getting Started",
    questions: [
      {
        id: "what-is-lambda",
        question: "What is Lambda?",
        answer:
          "Lambda is a comprehensive AI evaluation and continuous improvement platform that enables organizations to systematically test, measure, and validate AI systems with rigorous metrics and frameworks. It combines structured testing methodologies, automated evaluation metrics, and AI-powered insights to ensure AI systems meet quality standards before, during, and after deployment.",
      },
      {
        id: "what-problem-does-lambda-solve",
        question: "What problem does Lambda solve?",
        answer:
          "AI systems are increasingly complex and difficult to evaluate consistently. Lambda solves the challenge of systematically assessing AI quality by providing a unified platform for structured evaluation, continuous monitoring, and data-driven decision-making. It helps organizations identify performance issues, detect drift, optimize thresholds, and maintain confidence in their AI systems throughout their lifecycle.",
      },
      {
        id: "who-uses-lambda",
        question: "Who should use Lambda?",
        answer:
          "Lambda is designed for AI teams, machine learning engineers, product managers, QA engineers, and organizations deploying AI systems at scale. Whether you're building language models, recommendation systems, computer vision applications, or autonomous agents, Lambda helps ensure your AI meets quality standards and delivers on business requirements.",
      },
      {
        id: "what-can-i-evaluate",
        question: "What types of AI systems can I evaluate?",
        answer:
          "Lambda supports evaluating any AI system including large language models, computer vision models, recommendation engines, classification models, regression models, and more. Our framework is model-agnostic and works with proprietary models, open-source models, fine-tuned versions, and multi-model systems.",
      },
      {
        id: "how-does-lambda-work",
        question: "How does Lambda work?",
        answer:
          "Lambda operates through a comprehensive workflow: 1) Define test cases representing real-world scenarios, 2) Run your AI models against these test cases, 3) Collect quantitative performance metrics across multiple dimensions, 4) Perform human-in-the-loop validation of critical cases, 5) Receive detailed quality reports and recommendations. This systematic approach ensures rigorous, reproducible evaluation of AI system quality.",
      },
    ],
  },
  {
    id: "evaluation-metrics",
    title: "Evaluation & Metrics",
    questions: [
      {
        id: "what-is-structured-evaluation",
        question: "What is structured evaluation?",
        answer:
          "Structured evaluation is a methodical approach to AI assessment using predefined test cases, clear success criteria, and quantifiable metrics instead of ad-hoc manual reviews. Lambda implements structured evaluation by organizing tests into categories, tracking results over time, enabling reproducible comparisons, and generating comprehensive quality reports with actionable insights.",
      },
      {
        id: "what-metrics-are-available",
        question: "What metrics can Lambda measure?",
        answer:
          "Lambda measures comprehensive metrics including accuracy, precision, recall, F1-score, balanced accuracy, ROC-AUC, latency, throughput, hallucination rates, confidence calibration, bias indicators, semantic similarity, factual consistency, and many more. We provide both standard ML metrics and AI-specific measures for evaluating model behavior, safety, and business impact.",
      },
      {
        id: "what-is-baseline-comparison",
        question: "What is baseline comparison?",
        answer:
          "Baseline comparison involves benchmarking your AI model against a reference point, typically a production version, simpler model, or industry standard. Lambda enables you to set baselines and track how new model versions perform relative to them, helping you measure improvements, identify regressions, and make data-driven decisions about model updates.",
      },
      {
        id: "how-is-bias-detected",
        question: "How does Lambda detect bias in AI systems?",
        answer:
          "Lambda analyzes model predictions across demographic groups, user segments, and data slices to identify systematic performance differences. Our bias detection framework measures disparities in accuracy, false positive/negative rates, and confidence scores across protected attributes. We surface actionable insights to help you understand and mitigate fairness issues.",
      },
      {
        id: "what-is-model-drift",
        question: "What is model drift and how does Lambda detect it?",
        answer:
          "Model drift is performance degradation over time due to changing data distributions or evolving relationships in your environment. Lambda detects drift by continuously monitoring production model performance, comparing it against historical baselines and alert thresholds. Early detection enables proactive retraining before performance significantly impacts users.",
      },
    ],
  },
  {
    id: "data-management",
    title: "Data & Test Cases",
    questions: [
      {
        id: "how-do-i-create-test-cases",
        question: "How do I create and manage test cases in Lambda?",
        answer:
          "Lambda offers flexible test case creation: 1) Upload CSV or JSON files with your test data, 2) Use our intuitive UI builder to create individual cases, 3) Import existing test sets from your organization. Each test case includes inputs, expected outputs, metadata for categorization, and optional tags for filtering and analysis.",
      },
      {
        id: "what-is-test-dataset",
        question: "What is a test dataset and how should I structure it?",
        answer:
          "A test dataset is a collection of test cases representing real-world scenarios your AI system should handle. Good test datasets include: normal operation cases (80%), edge cases (15%), and adversarial inputs (5%). Lambda supports various formats and enables you to organize tests by category, difficulty level, and business domain for comprehensive coverage.",
      },
      {
        id: "how-is-data-secured",
        question: "How does Lambda handle data security and privacy?",
        answer:
          "Lambda employs enterprise-grade security: end-to-end encryption for data in transit and at rest, strict access controls, comprehensive audit logging, and compliance with GDPR, SOC 2, and other regulations. All your evaluation data remains under your control with configurable retention policies and options for on-premise deployment for sensitive workloads.",
      },
      {
        id: "can-i-import-my-data",
        question: "Can I import my own test data and ground truth?",
        answer:
          "Yes, Lambda enables seamless data import. We support CSV, JSON, Parquet, and Excel formats. You can upload your own test data, ground truth labels, and metadata. We also provide APIs for programmatic data ingestion, sample-balanced dataset construction, and integration with your existing data pipelines and storage systems.",
      },
      {
        id: "what-is-ground-truth",
        question: "What is ground truth and why is it important?",
        answer:
          "Ground truth represents the actual, verified correct answers or labels used to evaluate model predictions. It's critical for calculating meaningful metrics. Lambda supports both automated ground truth verification (for deterministic problems) and human annotation workflows (for subjective judgments), with built-in mechanisms for resolver workflows when annotators disagree.",
      },
    ],
  },
  {
    id: "testing-quality",
    title: "Testing & Quality Assurance",
    questions: [
      {
        id: "what-is-structured-testing",
        question: "What is structured testing for AI systems?",
        answer:
          "Structured testing is a rigorous, methodical approach using organized test cases, clear success criteria, and measurable metrics instead of ad-hoc manual testing. Lambda implements structured testing by organizing tests into logical categories, maintaining consistent evaluation criteria, tracking historical results, and generating reproducible quality assessments.",
      },
      {
        id: "what-is-regression-testing",
        question: "How does regression testing work in Lambda?",
        answer:
          "Regression testing ensures new model updates don't degrade previously validated functionality. Lambda enables you to compare new model versions against historical versions using the same test cases, identifying any performance regressions, unexpected behavior changes, or quality issues before deployment to production.",
      },
      {
        id: "what-is-human-in-the-loop",
        question: "What is human-in-the-loop evaluation?",
        answer:
          "Human-in-the-loop combines automated evaluation with human expertise. Lambda enables this by automatically flagging uncertain predictions, edge cases, and potential issues for expert review. Humans validate automated findings, provide feedback to improve evaluation criteria, and make final decisions on model quality—ensuring the best of both automation and human judgment.",
      },
      {
        id: "how-does-lambda-handle-hallucinations",
        question: "How does Lambda help detect hallucinations in LLMs?",
        answer:
          "Lambda includes specialized tests and metrics for detecting hallucinations in language models. We measure frequency of fabricated information, track confidence in incorrect outputs, analyze factual consistency, and identify hallucination patterns across different prompts, temperatures, and model configurations.",
      },
      {
        id: "what-is-threshold-optimization",
        question: "What is threshold optimization?",
        answer:
          "Threshold optimization finds the optimal decision boundary for your model to balance competing business metrics like precision and recall. Lambda helps you experiment with different thresholds, visualize precision-recall trade-offs, and identify the optimal threshold for your specific use case and business requirements.",
      },
    ],
  },
  {
    id: "monitoring-production",
    title: "Monitoring & Production",
    questions: [
      {
        id: "what-is-continuous-evaluation",
        question: "What is continuous evaluation in Lambda?",
        answer:
          "Continuous evaluation is ongoing systematic testing of AI systems in production to monitor performance degradation, detect drift, and ensure models maintain quality standards over time. Lambda enables automated evaluation schedules with configurable frequency (daily, weekly, monthly), performance-based alerting, and proactive model update recommendations.",
      },
      {
        id: "what-is-data-drift",
        question: "What is data drift and how is it detected?",
        answer:
          "Data drift occurs when the distribution of input data changes over time, causing models trained on different data to perform less effectively. Lambda detects data drift by analyzing input feature distributions, identifying statistically significant changes, and alerting you when drift thresholds are exceeded so you can trigger retraining.",
      },
      {
        id: "what-is-model-drift-production",
        question: "How does Lambda detect model drift in production?",
        answer:
          "Model drift is performance degradation over time due to data changes or evolving relationships. Lambda continuously monitors production models by comparing current performance against historical baselines, identifying performance drops across key metrics, and enabling rapid response through alerts and recommendations for model retraining.",
      },
      {
        id: "how-do-i-set-up-alerts",
        question: "How do I configure monitoring alerts and notifications?",
        answer:
          "Lambda allows you to configure alerts for key metrics like accuracy drops, increased error rates, or detected anomalies. Set custom thresholds for each metric, choose notification channels (email, Slack, webhooks), and define alert frequency. Enterprise users can integrate with their monitoring infrastructure and incident management systems.",
      },
      {
        id: "can-i-integrate-with-my-infrastructure",
        question: "Can I integrate Lambda with my ML infrastructure?",
        answer:
          "Yes, Lambda provides comprehensive integration capabilities: REST APIs and SDKs for multiple languages, webhooks for event-driven workflows, data export to data warehouses, integration with CI/CD pipelines for automated model validation, and connections to monitoring and observability platforms for end-to-end visibility.",
      },
    ],
  },
  {
    id: "technical-support",
    title: "Technical & Support",
    questions: [
      {
        id: "what-formats-does-lambda-support",
        question: "What data formats and APIs does Lambda support?",
        answer:
          "Lambda supports CSV, JSON, Parquet, and Excel files for test data. Our REST APIs accept multiple formats and provide comprehensive webhooks. We offer official SDKs for Python, JavaScript/TypeScript, Go, and Java with full type hints, documentation, and code examples.",
      },
      {
        id: "how-do-i-get-started-with-the-api",
        question: "How do I get started with Lambda's API?",
        answer:
          "Visit lambda.dev/docs for comprehensive API documentation, interactive endpoints, and code examples for all supported languages. Generate API keys from your account settings and start making authenticated requests. Our API enables full programmatic control over evaluation workflows, test case management, and result retrieval.",
      },
      {
        id: "is-there-a-python-sdk",
        question: "What SDKs are available?",
        answer:
          "Lambda provides official SDKs for Python (pip installable), JavaScript/TypeScript (npm), Go, and Java. Each SDK includes type hints, comprehensive documentation, and examples. Community SDKs for additional languages are available. All SDKs support the full Lambda API surface and enable seamless integration into your workflows.",
      },
      {
        id: "how-long-do-evaluations-take",
        question: "How long do evaluations take?",
        answer:
          "Evaluation time depends on model size, test case count, and infrastructure. Lambda is optimized for performance and typically completes hundreds of test cases in seconds to minutes. Enterprise plans include parallelization and distributed evaluation for large-scale assessments. API rate limits and pricing tiers accommodate different scale requirements.",
      },
      {
        id: "where-can-i-get-support",
        question: "What support and resources are available?",
        answer:
          "Lambda provides comprehensive support: detailed documentation and guides at lambda.dev, community forums for discussions, email support for all plans, priority support for enterprise customers, and dedicated support engineers for critical deployments. We also maintain blog resources covering best practices and case studies.",
      },
    ],
  },
  {
    id: "best-practices",
    title: "Best Practices",
    questions: [
      {
        id: "best-practices-test-design",
        question: "What are best practices for designing test cases?",
        answer:
          "Create diverse test cases covering normal operation (80%), edge cases (15%), and adversarial inputs (5%). Organize tests by category and difficulty. Use representative data matching real-world distributions. Document test case rationale including why each test matters. Regularly review and update tests as you discover new issues or requirements change.",
      },
      {
        id: "best-practices-metrics",
        question: "Which metrics should I prioritize monitoring?",
        answer:
          "Start with business-aligned metrics matching your use case. For classification models, prioritize accuracy and F1-score. For LLMs, monitor accuracy, hallucination rates, and factual consistency. Always track latency for performance-sensitive applications. Analyze segment-specific performance alongside aggregate metrics to catch fairness issues early.",
      },
      {
        id: "best-practices-documentation",
        question: "How should I document my evaluation process?",
        answer:
          "Document your test strategy, metric definitions, success thresholds, and decision criteria. Maintain evaluation history and baseline records. Clearly note assumptions, limitations, and edge cases. This documentation ensures consistency across teams, enables knowledge transfer, and provides justification for model deployment decisions.",
      },
      {
        id: "best-practices-frequency",
        question: "How frequently should I evaluate models?",
        answer:
          "Production models should be evaluated continuously or at minimum weekly. Re-evaluate after any model update, significant data changes, or when performance issues are reported. New models should undergo comprehensive evaluation before deployment. Set up automated monitoring for early drift detection and performance degradation alerts.",
      },
      {
        id: "best-practices-collaboration",
        question: "How should teams collaborate on AI evaluation?",
        answer:
          "Use Lambda's workspace features to share evaluations and collaborate across teams. Document decisions and findings in shared evaluation reports. Involve domain experts in test case creation and threshold setting. Use version control for test cases and track historical changes. Regular cross-functional reviews ensure evaluation quality and shared ownership of model quality.",
      },
    ],
  },
];

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] =
    useState<string>("getting-started");
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  const toggleQuestion = (questionId: string) => {
    setExpandedQuestion(expandedQuestion === questionId ? null : questionId);
  };

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    setExpandedQuestion(null);
  };

  return (
    <main className="main-wrapper">
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="padding-global">
          <div className="container-xlarge">
            <div fade-in="" className="text-center">
              <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-300 rounded-full px-4 py-2 mb-8">
                <span className="w-2 h-2 bg-gray-900 rounded-full animate-pulse"></span>
                <span className="text-gray-900 text-sm font-semibold uppercase tracking-wide">
                  HELP & SUPPORT
                </span>
              </div>

              <h1 className="section-heading-main_text heading-style-h2 mb-6!">
                Frequently Asked Questions
              </h1>

              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
                Find answers to common questions about Lambda, our AI evaluation
                framework, testing methodologies, continuous monitoring, and how
                to maximize the value of our platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-20 md:pb-32">
        <div className="padding-global">
          <div className="container-xlarge">
            {/* Category Navigation */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className={`px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold uppercase tracking-wide text-sm transition-all duration-300 border-2! border-transparent ${
                    activeCategory === category.id
                      ? "bg-gray-900 text-white! border-gray-900"
                      : "border-gray-900! hover:bg-orange-600/10 hover:border-orange-600"
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>

            {/* Questions List */}
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {faqCategories
                  .find((cat) => cat.id === activeCategory)
                  ?.questions.map((question) => (
                    <div
                      key={question.id}
                      className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 hover:shadow-md transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleQuestion(question.id)}
                        className="w-full px-6 md:px-8 py-4 md:py-6 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between group"
                      >
                        <h4 className="text-base! md:text-lg! text-gray-900 pr-4 group-hover:text-gray-950">
                          {question.question}
                        </h4>
                        <div className="shrink-0">
                          <svg
                            className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                              expandedQuestion === question.id
                                ? "rotate-180"
                                : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                          </svg>
                        </div>
                      </button>

                      {/* Answer - Expandable */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          expandedQuestion === question.id
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="px-6 md:px-8 py-6 md:pb-8 border-t border-gray-200 bg-gray-50">
                          <p className="text-sm! md:text-base! text-gray-600 leading-relaxed">
                            {question.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
