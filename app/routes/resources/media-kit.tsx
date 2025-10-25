import { useState } from "react";

const mediaKitItems = [
  {
    id: "brand-assets",
    title: "Brand Assets",
    description:
      "Complete collection of Scorecard brand assets including logos, icons, and brand guidelines for official use.",
    items: [
      {
        id: "logos-without-bg",
        title: "Logos without Background",
        description:
          "High quality logos with transparent backgrounds for scalable use.",
        downloadUrl: "/assets/scorecard-logos-bg.zip",
        icon: "📁",
      },
      {
        id: "logos-with-bg",
        title: "Logos with Background",
        description:
          "High quality logos with backgrounds for use on various media.",
        downloadUrl: "/assets/scorecard-logos.zip",
        icon: "🖼️",
      },
      {
        id: "complete-logo-kit",
        title: "Complete Logo Kit",
        description:
          "All logo variations, color schemes, and usage guidelines in one package.",
        downloadUrl: "/assets/scorecard-logos-complete.zip",
        icon: "📦",
      },
    ],
  },
  {
    id: "marketing-assets",
    title: "Marketing Assets",
    description:
      "Social media graphics, presentation templates, and marketing materials optimized for various platforms.",
    items: [
      {
        id: "social-media-assets",
        title: "Social Media Graphics",
        description:
          "Optimized graphics for Twitter, LinkedIn, and other platforms.",
        downloadUrl: "/assets/scorecard-social-media-assets.zip",
        icon: "📱",
      },
      {
        id: "presentation-templates",
        title: "Presentation Templates",
        description:
          "Ready-to-use presentation templates with brand guidelines applied.",
        downloadUrl: "/assets/scorecard-presentations.zip",
        icon: "📊",
      },
      {
        id: "email-templates",
        title: "Email Templates",
        description:
          "Email marketing templates designed with Scorecard branding.",
        downloadUrl: "/assets/scorecard-email-templates.zip",
        icon: "✉️",
      },
    ],
  },
  {
    id: "product-resources",
    title: "Product Resources",
    description:
      "Product demonstrations, documentation, and technical resources for developers and partners.",
    items: [
      {
        id: "product-screenshots",
        title: "Product Screenshots",
        description:
          "High-resolution screenshots of Scorecard interface and features.",
        downloadUrl: "/assets/scorecard-screenshots.zip",
        icon: "🖥️",
      },
      {
        id: "documentation",
        title: "Documentation",
        description: "Technical documentation and API reference materials.",
        downloadUrl: "/assets/scorecard-documentation.zip",
        icon: "📚",
      },
      {
        id: "integration-guides",
        title: "Integration Guides",
        description:
          "Step-by-step guides for integrating Scorecard with other platforms.",
        downloadUrl: "/assets/scorecard-integration-guides.zip",
        icon: "🔗",
      },
    ],
  },
];

export default function MediaKitPage() {
  const [activeCategory, setActiveCategory] = useState<string>(
    mediaKitItems[0].id
  );
  const [downloadingItem, setDownloadingItem] = useState<string>("");

  const handleDownload = async (
    url: string,
    fileName: string,
    itemId: string
  ) => {
    setDownloadingItem(itemId);

    // Simulate download delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadingItem("");
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
                  OFFICIAL ASSETS
                </span>
              </div>

              <h1 className="section-heading-main_text heading-style-h2 mb-6">
                Media Kit
              </h1>

              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
                Download official Scorecard brand assets, logos, and marketing
                materials. All assets are provided for media, partner, and
                developer use.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 md:gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    9+
                  </div>
                  <div className="text-gray-600 text-sm">Assets</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    3
                  </div>
                  <div className="text-gray-600 text-sm">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    HD
                  </div>
                  <div className="text-gray-600 text-sm">Quality</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="pb-16 md:pb-20">
        <div className="padding-global">
          <div className="container-xlarge">
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
              {mediaKitItems.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold uppercase tracking-wide text-sm transition-all duration-300 border-2! border-transparent ${
                    activeCategory === category.id
                      ? "bg-gray-900 text-white! border-gray-900!"
                      : " border-gray-900! hover:bg-orange-600 hover:text-gray-900 hover:border-orange-600"
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>

            {/* Active Category Content */}
            {mediaKitItems.map((category) => (
              <div
                key={category.id}
                className={`transition-all duration-500 ${
                  activeCategory === category.id
                    ? "opacity-100 transform translate-y-0"
                    : "opacity-0 transform translate-y-8 pointer-events-none absolute"
                }`}
              >
                {activeCategory === category.id && (
                  <>
                    {/* Category Header */}
                    <div className="text-center mb-12 md:mb-16 space-y-5!">
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 ">
                        {category.title}
                      </h2>
                      <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        {category.description}
                      </p>
                    </div>

                    {/* Download Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                      {category.items.map((item, index) => (
                        <div
                          key={item.id}
                          className="group relative"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          {/* Card Background Glow */}
                          <div className="absolute inset-0 bg-linear-to-br from-gray-900/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-lg" />

                          <div className="relative bg-white border-2 border-gray-200 rounded-xl p-6 md:p-8 hover:border-gray-900 hover:shadow-lg transition-all duration-300 h-full space-y-4!">
                            {/* Icon */}
                            <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gray-100 rounded-lg mb-4 md:mb-6 group-hover:bg-orange-600/20 transition-all duration-300">
                              <span className="text-2xl md:text-3xl">
                                {item.icon}
                              </span>
                            </div>

                            {/* Content */}
                            <h3 className="text-lg! md:text-xl! font-semibold text-gray-900 group-hover:text-gray-900 transition-colors duration-300">
                              {item.title}
                            </h3>

                            <p className="text-sm! md:text-base! text-gray-600 leading-relaxed mb-8 md:mb-12">
                              {item.description}
                            </p>

                            {/* Download Button */}
                            <button
                              onClick={() =>
                                handleDownload(
                                  item.downloadUrl,
                                  item.title,
                                  item.id
                                )
                              }
                              disabled={downloadingItem === item.id}
                              className="w-full bg-gray-900 text-white! font-semibold uppercase tracking-wide text-sm py-3 md:py-4 px-4 md:px-6 rounded-lg border-2 border-gray-900 transition-all duration-300 hover:bg-orange-600 hover:border-orange-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-900 disabled:hover:border-gray-900 disabled:hover:text-white flex items-center justify-center gap-2 md:gap-3"
                            >
                              {downloadingItem === item.id ? (
                                <>
                                  <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                  Downloading...
                                </>
                              ) : (
                                <>
                                  <svg
                                    className="w-4 h-4 md:w-5 md:h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                  </svg>
                                  Download
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
