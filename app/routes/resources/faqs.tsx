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
          "Lambda is a comprehensive AI evaluation platform that enables organizations to systematically test, measure, and validate AI systems with rigorous metrics and frameworks. We provide the tools and methodology to ensure AI systems meet quality standards before and after deployment.",
      },
      {
        id: "how-does-lambda-work",
        question: "How does Lambda work?",
        answer:
          "Lambda combines structured testing frameworks, automated evaluation metrics, and human-in-the-loop review processes. You define test cases, run your AI models against them, collect performance metrics across multiple dimensions, and receive comprehensive evaluations showing system performance across different categories.",
      },
      {
        id: "who-should-use-lambda",
        question: "Who should use Lambda?",
        answer:
          "Lambda is designed for AI teams, product managers, QA engineers, and organizations deploying AI systems. Whether you're building language models, recommendation systems, or autonomous agents, Lambda helps ensure your AI meets quality standards and business requirements.",
      },
      {
        id: "what-models-does-lambda-support",
        question: "What AI models does Lambda support?",
        answer:
          "Lambda supports evaluating any AI system including large language models, computer vision models, recommendation engines, classification models, and more. Our framework is model-agnostic, allowing you to test proprietary models, open-source models, or fine-tuned versions.",
      },
      {
        id: "is-lambda-free",
        question: "Is Lambda free to use?",
        answer:
          "Lambda offers a free tier for getting started with basic evaluation capabilities. Enterprise plans include advanced features like continuous monitoring, custom metrics, API access, and dedicated support. Contact our sales team for pricing details.",
      },
    ],
  },
  {
    id: "evaluation-metrics",
    title: "Evaluation & Metrics",
    questions: [
      {
        id: "what-metrics-does-lambda-measure",
        question: "What metrics does Lambda measure?",
        answer:
          "Lambda measures numerous metrics including accuracy, precision, recall, F1-score, latency, hallucination rates, bias indicators, confidence scores, and more. We provide both standard ML metrics and AI-specific measures for evaluating model behavior and safety.",
      },
      {
        id: "what-is-baseline-model",
        question: "What is a baseline model?",
        answer:
          "A baseline model is a reference point for comparison, typically a simpler or production version of your model. Lambda allows you to compare new model versions against baselines to measure improvements, regressions, and performance changes across dimensions.",
      },
      {
        id: "how-is-bias-detected",
        question: "How does Lambda detect bias?",
        answer:
          "Lambda analyzes model predictions across demographic groups and data segments to identify systematic performance differences. Our bias detection framework measures disparities in accuracy, false positive rates, and confidence scores across protected attributes and user segments.",
      },
      {
        id: "what-is-confidence-score",
        question: "What is a confidence score?",
        answer:
          "A confidence score indicates how certain a model is about its prediction. Lambda tracks confidence scores to identify cases where models should defer to human review, and analyzes the relationship between confidence and actual accuracy to validate model calibration.",
      },
      {
        id: "how-often-should-i-evaluate",
        question: "How often should I evaluate my models?",
        answer:
          "Continuous evaluation is recommended to detect model drift and performance degradation over time. Lambda supports setting up automated evaluation schedules to monitor production models regularly, from daily checks to weekly or monthly comprehensive assessments based on your needs.",
      },
    ],
  },
  {
    id: "data-management",
    title: "Data & Test Cases",
    questions: [
      {
        id: "how-do-i-create-test-cases",
        question: "How do I create test cases?",
        answer:
          "Lambda allows you to create test cases by defining input-output pairs representing expected model behavior. You can upload CSV files, use our UI to create individual cases, or import test sets. Each test case includes inputs, expected outputs, and optional metadata for categorization.",
      },
      {
        id: "what-is-benchmark-dataset",
        question: "What is a benchmark dataset?",
        answer:
          "A benchmark dataset is a standardized set of test cases used for consistent evaluation across different models or time periods. Lambda enables you to create and maintain benchmark datasets that ensure reproducible results and fair comparisons between model versions.",
      },
      {
        id: "how-is-data-stored-and-secured",
        question: "How is my data stored and secured?",
        answer:
          "Lambda uses enterprise-grade encryption for data storage and transmission. All evaluation data is stored securely in our infrastructure with access controls and compliance with major data privacy regulations. We provide detailed documentation on our security practices and compliance certifications.",
      },
      {
        id: "can-i-use-my-own-test-data",
        question: "Can I use my own test data?",
        answer:
          "Yes, you can upload your own test data sets to Lambda. We support various formats including CSV, JSON, and parquet files. All data remains under your control, and you can configure data retention policies to meet your organizational requirements.",
      },
      {
        id: "what-is-ground-truth",
        question: "What is ground truth?",
        answer:
          "Ground truth is the actual, verified correct answer used for evaluation. In Lambda, ground truth labels are compared against model predictions to calculate accuracy metrics. We support both automated ground truth verification and human annotation workflows for complex cases.",
      },
    ],
  },
  {
    id: "testing-quality",
    title: "Testing & Quality Assurance",
    questions: [
      {
        id: "what-is-structured-testing",
        question: "What is structured testing?",
        answer:
          "Structured testing is a methodical approach using predefined test cases, clear criteria, and measurable metrics instead of ad-hoc reviews. Lambda implements structured testing by organizing tests into categories, tracking results over time, and generating comprehensive quality reports.",
      },
      {
        id: "what-is-regression-testing",
        question: "What is regression testing?",
        answer:
          "Regression testing ensures that new model updates don't negatively impact previously validated functionality. Lambda enables you to compare new model versions against past versions across the same test cases to detect any performance regressions or unexpected behavior changes.",
      },
      {
        id: "what-is-human-in-the-loop",
        question: "What is human-in-the-loop evaluation?",
        answer:
          "Human-in-the-loop combines automated evaluation with human review and feedback. Lambda enables this by flagging uncertain predictions, allowing expert review of edge cases, and incorporating human feedback to validate and improve evaluation criteria and model behavior.",
      },
      {
        id: "how-does-lambda-measure-hallucination",
        question: "How does Lambda measure hallucinations?",
        answer:
          "Lambda includes tests and metrics specifically designed to detect hallucinations in language models. We measure the frequency of fabricated information, confidence in incorrect outputs, and track hallucination patterns across different prompts and model temperatures.",
      },
      {
        id: "what-is-threshold-optimization",
        question: "What is threshold optimization?",
        answer:
          "Threshold optimization finds the best decision boundary for a model's predictions to balance precision and recall based on business needs. Lambda helps you experiment with different thresholds and visualize trade-offs to find the optimal setting for your use case.",
      },
    ],
  },
  {
    id: "monitoring-production",
    title: "Monitoring & Production",
    questions: [
      {
        id: "what-is-continuous-evaluation",
        question: "What is continuous evaluation?",
        answer:
          "Continuous evaluation is ongoing testing of AI systems in production to monitor performance degradation and ensure models maintain quality standards over time. Lambda enables automated monitoring with alerts for performance drops, enabling proactive model updates.",
      },
      {
        id: "what-is-data-drift",
        question: "What is data drift?",
        answer:
          "Data drift occurs when the distribution of input data changes over time, causing models trained on different data to perform less effectively. Lambda detects data drift by analyzing input patterns and alerts you when drift is detected so you can retrain or adjust your models.",
      },
      {
        id: "what-is-model-drift",
        question: "What is model drift?",
        answer:
          "Model drift is performance degradation over time due to data changes or evolving relationships between variables. Lambda continuously monitors production models for drift and helps you identify when retraining is needed to restore performance to acceptable levels.",
      },
      {
        id: "how-do-i-set-up-alerts",
        question: "How do I set up monitoring alerts?",
        answer:
          "Lambda allows you to configure alerts for key metrics like accuracy drops, increased false positive rates, or detected anomalies. You can set thresholds and notification preferences to ensure your team is immediately notified when models require attention.",
      },
      {
        id: "can-i-integrate-with-my-systems",
        question: "Can I integrate Lambda with my existing systems?",
        answer:
          "Yes, Lambda provides APIs and webhooks for integration with your ML pipelines, monitoring systems, and applications. You can automate evaluation workflows, export results to data warehouses, and trigger model retraining based on Lambda metrics and alerts.",
      },
    ],
  },
  {
    id: "technical-support",
    title: "Technical & Support",
    questions: [
      {
        id: "what-formats-does-lambda-support",
        question: "What data formats does Lambda support?",
        answer:
          "Lambda supports CSV, JSON, Parquet, and Excel files for test data and results. Our API accepts data in multiple formats, and we provide documentation and SDKs for popular programming languages like Python, JavaScript, and Go.",
      },
      {
        id: "how-do-i-get-started-with-the-api",
        question: "How do I get started with the Lambda API?",
        answer:
          "Our API documentation is available at lambda.dev/docs with comprehensive guides, code examples, and interactive endpoints. You can generate API keys from your account settings and start making authenticated requests to integrate Lambda into your workflows.",
      },
      {
        id: "is-there-a-python-sdk",
        question: "Is there a Python SDK?",
        answer:
          "Yes, Lambda provides an official Python SDK available on PyPI. Install it via pip and use it to programmatically create test cases, run evaluations, and retrieve results. The SDK includes type hints and comprehensive documentation.",
      },
      {
        id: "how-long-do-evaluations-take",
        question: "How long do evaluations take?",
        answer:
          "Evaluation time depends on model size, test case count, and your infrastructure. Lambda is optimized for performance and typically completes hundreds of test cases in seconds to minutes. Enterprise plans include parallelization for faster large-scale evaluations.",
      },
      {
        id: "where-can-i-get-support",
        question: "Where can I get support?",
        answer:
          "Support is available through our documentation, email support for all plans, and priority support for enterprise customers. We maintain an active community forum for discussions, and enterprise customers have access to dedicated support engineers.",
      },
    ],
  },
  {
    id: "best-practices",
    title: "Best Practices",
    questions: [
      {
        id: "best-practices-test-design",
        question: "What are best practices for test design?",
        answer:
          "Create diverse test cases covering normal operation, edge cases, and adversarial inputs. Organize tests by category for better insights. Use representative data that matches real-world distribution. Document test case rationale. Regularly review and update tests as new issues are discovered.",
      },
      {
        id: "best-practices-metrics",
        question: "Which metrics should I prioritize?",
        answer:
          "Start with business-relevant metrics aligned with your use case requirements. For classification, track precision and recall. For language models, measure accuracy and hallucination rates. Always monitor latency for performance-sensitive applications. Track both aggregate metrics and segment-specific performance.",
      },
      {
        id: "best-practices-documentation",
        question: "How should I document my evaluation process?",
        answer:
          "Document your test strategy, metric definitions, thresholds, and decision criteria. Record baseline performance and maintain evaluation history. Clearly note any assumptions or limitations. This documentation ensures consistency, enables knowledge transfer, and helps justify model performance decisions.",
      },
      {
        id: "best-practices-frequency",
        question: "How frequently should I re-evaluate?",
        answer:
          "Production models should be evaluated continuously or at minimum weekly. Re-evaluate after any model update, significant data changes, or when performance issues are reported. New models should undergo comprehensive evaluation before deployment. Set up automated monitoring for early drift detection.",
      },
      {
        id: "best-practices-collaboration",
        question: "How should teams collaborate on evaluation?",
        answer:
          "Use Lambda's workspace features to share evaluations across team members. Document decisions and findings in evaluation reports. Involve domain experts in test case creation and threshold setting. Use version control for test cases and track changes over time. Regular reviews help maintain evaluation quality.",
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
                Find answers to common questions about Lambda, our evaluation
                features, testing methodology, and how to get the most out of
                our platform.
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
