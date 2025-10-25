import { useState } from "react";

const glossaryTerms = [
  {
    id: "automated-testing",
    title: "Automated Testing",
    content:
      "A process where software tests run automatically without manual intervention, enabling rapid evaluation of AI systems and reducing time for testing cycles.",
    category: "Testing",
  },
  {
    id: "baseline-model",
    title: "Baseline Model",
    content:
      "A reference model used for comparison to measure the performance of new or modified AI models, providing context for evaluating improvements.",
    category: "Evaluation",
  },
  {
    id: "benchmark-dataset",
    title: "Benchmark Dataset",
    content:
      "A standardized dataset used to evaluate and compare the performance of different AI models, ensuring consistent and reproducible results.",
    category: "Data",
  },
  {
    id: "bias-detection",
    title: "Bias Detection",
    content:
      "The process of identifying systematic errors or prejudices in AI model predictions across different demographic groups or data segments.",
    category: "Quality Assurance",
  },
  {
    id: "confidence-score",
    title: "Confidence Score",
    content:
      "A metric indicating the model's certainty level in its prediction, helping identify when outputs should be trusted or reviewed further.",
    category: "Metrics",
  },
  {
    id: "continuous-evaluation",
    title: "Continuous Evaluation",
    content:
      "An ongoing process of testing AI systems in production to monitor performance degradation and ensure models maintain quality standards over time.",
    category: "Monitoring",
  },
  {
    id: "data-drift",
    title: "Data Drift",
    content:
      "A change in the distribution or characteristics of input data over time, which can cause previously trained models to perform less effectively.",
    category: "Monitoring",
  },
  {
    id: "false-negative",
    title: "False Negative",
    content:
      "A prediction error where the model incorrectly identifies a positive case as negative, often critical in high-stakes applications.",
    category: "Metrics",
  },
  {
    id: "false-positive",
    title: "False Positive",
    content:
      "A prediction error where the model incorrectly identifies a negative case as positive, impacting the reliability of decisions.",
    category: "Metrics",
  },
  {
    id: "feature-importance",
    title: "Feature Importance",
    content:
      "A measure of how much each input feature contributes to a model's predictions, helping understand model behavior and decision-making.",
    category: "Evaluation",
  },
  {
    id: "ground-truth",
    title: "Ground Truth",
    content:
      "The actual, verified correct answer or label used for training and evaluating AI models, ensuring accurate assessment of model performance.",
    category: "Data",
  },
  {
    id: "hallucination",
    title: "Hallucination",
    content:
      "When AI models generate confident but incorrect or fabricated information, a critical issue in language models and generative AI systems.",
    category: "Quality Assurance",
  },
  {
    id: "human-in-the-loop",
    title: "Human-in-the-Loop",
    content:
      "A testing approach combining automated evaluation with human review to ensure AI systems produce outputs that align with human expectations and values.",
    category: "Testing",
  },
  {
    id: "latency",
    title: "Latency",
    content:
      "The time delay between providing input to an AI model and receiving its output, critical for real-time applications and user experience.",
    category: "Performance",
  },
  {
    id: "machine-learning",
    title: "Machine Learning (ML)",
    content:
      "A subset of artificial intelligence where systems learn patterns from data without being explicitly programmed for every scenario.",
    category: "Core Concepts",
  },
  {
    id: "model-drift",
    title: "Model Drift",
    content:
      "A degradation in model performance over time due to changes in data distribution or relationships between variables after deployment.",
    category: "Monitoring",
  },
  {
    id: "precision",
    title: "Precision",
    content:
      "A metric measuring the accuracy of positive predictions, calculated as the ratio of true positives to all predicted positives.",
    category: "Metrics",
  },
  {
    id: "prompt-engineering",
    title: "Prompt Engineering",
    content:
      "The art of crafting inputs to language models to elicit accurate and relevant outputs, crucial for optimizing AI performance.",
    category: "Techniques",
  },
  {
    id: "recall",
    title: "Recall",
    content:
      "A metric measuring the percentage of actual positive cases that the model correctly identifies, important for avoiding false negatives.",
    category: "Metrics",
  },
  {
    id: "regression-test",
    title: "Regression Test",
    content:
      "A test ensuring that new changes or updates to an AI model do not negatively affect previously validated functionality.",
    category: "Testing",
  },
  {
    id: "roi-measurement",
    title: "ROI Measurement",
    content:
      "Quantifying the return on investment from AI implementations, including cost savings, efficiency gains, and quality improvements.",
    category: "Business",
  },
  {
    id: "scorecard",
    title: "Scorecard",
    content:
      "A comprehensive evaluation framework that tracks multiple metrics and KPIs to assess AI system performance across different dimensions.",
    category: "Evaluation",
  },
  {
    id: "semantic-drift",
    title: "Semantic Drift",
    content:
      "Changes in the meaning or interpretation of data over time, which can cause models trained on older data to become less relevant.",
    category: "Monitoring",
  },
  {
    id: "structured-testing",
    title: "Structured Testing",
    content:
      "A methodical approach to evaluating AI systems using predefined test cases, criteria, and metrics instead of ad-hoc reviews.",
    category: "Testing",
  },
  {
    id: "test-case",
    title: "Test Case",
    content:
      "A specific input-output pair used to evaluate whether an AI model produces the expected result under defined conditions.",
    category: "Testing",
  },
  {
    id: "threshold-optimization",
    title: "Threshold Optimization",
    content:
      "The process of finding the optimal decision boundary for a model's predictions to balance precision and recall based on business requirements.",
    category: "Techniques",
  },
  {
    id: "true-negative",
    title: "True Negative",
    content:
      "A correct prediction where the model accurately identifies a negative case, indicating proper model calibration.",
    category: "Metrics",
  },
  {
    id: "true-positive",
    title: "True Positive",
    content:
      "A correct prediction where the model accurately identifies a positive case, demonstrating model effectiveness.",
    category: "Metrics",
  },
  {
    id: "validation-set",
    title: "Validation Set",
    content:
      "A subset of data used during model development to evaluate performance and tune hyperparameters, separate from training data.",
    category: "Data",
  },
];

export default function GlossaryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedCards, setExpandedCards] = useState<string[]>([]);

  // Get unique categories
  const categories = [
    "All",
    ...Array.from(new Set(glossaryTerms.map((term) => term.category))),
  ].sort();

  // Filter terms based on search and category
  const filteredTerms = glossaryTerms.filter((term) => {
    const matchesSearch =
      term.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleCard = (id: string) => {
    setExpandedCards((prev) =>
      prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
    );
  };

  // Get category color - matching the website's design system
  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Testing: "bg-blue-500/10 text-blue-600 border-blue-300",
      Evaluation: "bg-indigo-500/10 text-indigo-600 border-indigo-300",
      Data: "bg-purple-500/10 text-purple-600 border-purple-300",
      "Quality Assurance":
        "bg-emerald-500/10 text-emerald-600 border-emerald-300",
      Metrics: "bg-orange-500/10 text-orange-600 border-orange-300",
      Monitoring: "bg-rose-500/10 text-rose-600 border-rose-300",
      Performance: "bg-cyan-500/10 text-cyan-600 border-cyan-300",
      Techniques: "bg-amber-500/10 text-amber-600 border-amber-300",
      "Core Concepts": "bg-slate-500/10 text-slate-600 border-slate-300",
      Business: "bg-green-500/10 text-green-600 border-green-300",
    };
    return colors[category] || "bg-gray-500/10 text-gray-600 border-gray-300";
  };

  return (
    <main className="main-wrapper">
      <section className="py-20 md:py-32">
        <div className="padding-global">
          <div className="container-xlarge">
            {/* Header */}
            <div fade-in="" className="mb-20 text-center">
              <div className="section-heading-main">
                <div className="section-heading-main_content text-wrap-balance">
                  <h1 className="section-heading-main_text heading-style-h2">
                    AI Testing Glossary
                  </h1>
                </div>
                <div className="section-heading-main_content max-40ch">
                  <p className="section-heading-main_text text-size-xsmall text-left">
                    Essential terms and concepts for understanding AI
                    evaluation, testing, and quality assurance in modern product
                    development.
                  </p>
                </div>
              </div>
            </div>

            {/* Search and Filter Section */}
            <div className="flex flex-col gap-8 mb-16">
              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto w-full">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center text-gray-400 pointer-events-none">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  placeholder="Search terms..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg text-gray-900 bg-white placeholder:text-gray-400 transition-all focus:outline-none focus:border-gray-900 focus:ring-3 focus:ring-gray-900/10"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap border ${
                      selectedCategory === category
                        ? "bg-gray-900 text-white border-gray-900"
                        : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <div className="text-center mb-12 text-gray-600 text-sm">
              <p>
                Showing {filteredTerms.length} of {glossaryTerms.length} terms
              </p>
            </div>

            {/* Terms Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {filteredTerms.map((term) => (
                <div
                  key={term.id}
                  className="bg-white border border-gray-200 rounded-xl p-6 cursor-pointer transition-all duration-300 flex flex-col hover:shadow-lg hover:border-gray-300 hover:-translate-y-0.5 space-y-5"
                  onClick={() => toggleCard(term.id)}
                >
                  {/* Category Badge */}
                  <div>
                    <span
                      className={`inline-block px-3 py-1 rounded-lg text-xs font-semibold border uppercase tracking-wider ${getCategoryColor(
                        term.category
                      )}`}
                    >
                      {term.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-semibold text-gray-900 leading-relaxed group-hover:text-gray-950 transition-colors">
                    {term.title}
                  </h4>

                  {/* Content Preview */}
                  <div className="mt-5">
                    <p className="text-sm leading-relaxed text-gray-600 grow mb-4">
                      {term.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredTerms.length === 0 && (
              <div className="text-center py-20 px-5">
                <div className="mb-6 text-gray-300">
                  <svg
                    className="w-16 h-16 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-400 mb-2">
                  No terms found
                </h3>
                <p className="text-sm text-gray-500">
                  Try adjusting your search or category filter
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
