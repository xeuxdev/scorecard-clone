import React from "react";

const blogPosts = [
  {
    id: 1,
    url: "/blog/deep-dive-exploring-openais-agent",
    image:
      "https://cdn.prod.website-files.com/682dd348fd1fba47863dde07/68792d8f5bac1c236f39216f_GwExQGtbEAAF7zL.jpeg",
    title: "Deep Dive: Exploring ChatGPT's Agent Mode",
    date: "July 17, 2025",
    readTime: 0,
  },
  {
    id: 2,
    url: "/blog/scorecard-mcp-2-0-1000-lines---70",
    image:
      "https://cdn.prod.website-files.com/682dd348fd1fba47863dde07/685d7ad8a5e14b9a8fdbeabb_Screenshot%202025-06-26%20at%2009.52.33.png",
    title: "Scorecard MCP 2.0: 1,000 Lines -> 70",
    date: "June 30, 2025",
    readTime: 3,
  },
  {
    id: 3,
    url: "/blog/introducing-scorecards-mcp-server",
    image:
      "https://cdn.prod.website-files.com/682dd348fd1fba47863dde07/6838a44e918cafc58c5093c3_Screenshot%202025-05-29%20at%2011.15.37.png",
    title: "Introducing Scorecard's MCP Server",
    date: "May 30, 2025",
    readTime: 3,
  },
  {
    id: 4,
    url: "/blog/introducing-agenteval-org-an-open-source-benchmarking-initiative-for-llm-evaluation",
    image:
      "https://cdn.prod.website-files.com/682dd348fd1fba47863dde07/682dd6078b4ba393c82c8846_cj94UnNDakwz513rpkS0BFd3Y4.png",
    title: "Introducing AgentEval.org",
    date: "February 25, 2025",
    readTime: 3,
  },
  {
    id: 5,
    url: "/blog/scorecard-anthropic",
    image:
      "https://cdn.prod.website-files.com/682dd348fd1fba47863dde07/682dd6069edf86fdae5ba4ef_uKCvET5n9Ykp5cGF6untINP7Etk.png",
    title: "Scorecard ❤️ Anthropic",
    date: "November 25, 2024",
    readTime: 3,
  },
  {
    id: 6,
    url: "/blog/simulate-test-repeat-robust-ai-system-development",
    image:
      "https://cdn.prod.website-files.com/682dd348fd1fba47863dde07/682dd60654a116f937d64f3b_VC530HCrWGLXUc5RcxcozW7ANm0.png",
    title: "Simulate, Test, Repeat: The Key to Robust AI System Development",
    date: "November 7, 2024",
    readTime: 4,
  },
  {
    id: 7,
    url: "/blog/must-have-features-for-llm-evaluation-frameworks",
    image:
      "https://cdn.prod.website-files.com/682dd348fd1fba47863dde07/682dd608b224caaa432738bf_6Mp1ZxOeD7kLWBUFMLGQk7mQ4c.png",
    title: "5 Must-Have Features for LLM Evaluation Frameworks",
    date: "September 29, 2024",
    readTime: 6,
  },
];

export function AllBlogs() {
  return (
    <section className="section_blog-wrapper">
      <div className="padding-global padding-section-large">
        <div className="container-xlarge">
          <div className="blog-wrapper" fade-in>
            {/* header */}
            <div className="blog-wrapper_header">
              <h1 className="blog-wrapper_text heading-style-h1">All Blogs</h1>
              <div className="blog-filter_block w-form">
                <form
                  id="email-form"
                  name="email-form"
                  data-name="Email Form"
                  method="get"
                  fs-list-element="filters"
                  className="blog-filter_form"
                  aria-label="Email Form"
                >
                  <input
                    className="blog-filter_search w-input"
                    maxLength={256}
                    fs-list-field="*"
                    name="Search"
                    data-name="Search"
                    placeholder="Search"
                    type="text"
                    id="Search"
                    required
                  />
                  <div className="blog-filter_radio-list">
                    <label className="blog-filter_radio w-radio">
                      <div className="w-form-formradioinput w-form-formradioinput--inputType-custom blog-filter_radio_radio w-radio-input w--redirected-checked"></div>
                      <input
                        fs-list-value=""
                        fs-list-field="category"
                        name="filter"
                        data-name="filter"
                        type="radio"
                        id="All"
                        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                        checked
                        value="All"
                      />
                      <span
                        className="blog-filter_radio_text w-form-label"
                        // for="All"
                      >
                        All
                      </span>
                    </label>
                    <label className="blog-filter_radio w-radio">
                      <div className="w-form-formradioinput w-form-formradioinput--inputType-custom blog-filter_radio_radio w-radio-input"></div>
                      <input
                        fs-list-value="AI Tools"
                        fs-list-field="category"
                        name="filter"
                        data-name="filter"
                        type="radio"
                        id="AI-Tools"
                        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                        value="AI Tools"
                      />
                      <span
                        className="blog-filter_radio_text w-form-label"
                        // for="AI-Tools"
                      >
                        AI Tools
                      </span>
                    </label>
                    <label className="blog-filter_radio w-radio">
                      <div className="w-form-formradioinput w-form-formradioinput--inputType-custom blog-filter_radio_radio w-radio-input"></div>
                      <input
                        fs-list-value="LLM Evaluation"
                        fs-list-field="category"
                        name="filter"
                        data-name="filter"
                        type="radio"
                        id="LLM-Evaluation"
                        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                        value="LLM Evaluation"
                      />
                      <span
                        className="blog-filter_radio_text w-form-label"
                        // for="LLM-Evaluation"
                      >
                        LLM Evaluation
                      </span>
                    </label>
                    <label className="blog-filter_radio w-radio">
                      <div className="w-form-formradioinput w-form-formradioinput--inputType-custom blog-filter_radio_radio w-radio-input"></div>
                      <input
                        fs-list-value="News"
                        fs-list-field="category"
                        name="filter"
                        data-name="filter"
                        type="radio"
                        id="News"
                        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                        value="News"
                      />
                      <span
                        className="blog-filter_radio_text w-form-label"
                        // for="News"
                      >
                        News
                      </span>
                    </label>
                    <label className="blog-filter_radio w-radio">
                      <div className="w-form-formradioinput w-form-formradioinput--inputType-custom blog-filter_radio_radio w-radio-input"></div>
                      <input
                        fs-list-value="Workflows"
                        fs-list-field="category"
                        name="filter"
                        data-name="filter"
                        type="radio"
                        id="Workflows"
                        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                        value="Workflows"
                      />
                      <span
                        className="blog-filter_radio_text w-form-label"
                        // for="Workflows"
                      >
                        Workflows
                      </span>
                    </label>
                  </div>
                </form>
              </div>
            </div>

            {/* empty */}

            {/* <div fs-list-element="empty" className="blog-gallery_empty">
              <div className="blog-gallery_empty_text">
                <span className="text-color-brand">No results found.</span>
                <br />
                Try filtering for other categories.
              </div>
              <img
                src="https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/680907bcba85da710e0eeddf_404-bg.svg"
                loading="lazy"
                alt=""
                className="blog-gallery_empty_img"
              />
            </div> */}

            {/* cards */}

            <div
              fs-list-filteringclassName="list-filtering"
              className="blog-gallery_collection w-dyn-list"
            >
              <div
                fs-list-element="list"
                role="list"
                className="blog-gallery_list w-dyn-items"
              >
                {blogPosts.map((post, index) => (
                  <div
                    role="listitem"
                    key={post.url}
                    className="blog-gallery_item w-dyn-item"
                  >
                    <div className="blog-card">
                      <a
                        href={post.url}
                        className="blog-card_thumb w-inline-block"
                      >
                        <img
                          src={post.image}
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 676px) 100vw, 676px"
                          className="cover-image"
                        />
                      </a>
                      <div className="blog-card_content">
                        <div className="blog-card_info">
                          <div
                            fs-list-field="category"
                            className="blog-card_category"
                          ></div>
                          <div className="blog-card_date-read">
                            <div className="blog-card_info-text text-color-secondary">
                              {post.date}
                            </div>
                            <div className="blog-card_info-text">
                              —{post.readTime} min read
                            </div>
                            <div className="blog-card_read-info">
                              <div className="blog-card_info-text"></div>
                              <div className="blog-card_info-text">
                                min read
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="blog-card_copy">
                          <a
                            fs-list-field="title"
                            href="/blog/deep-dive-exploring-openais-agent"
                            className="blog-card_title heading-style-h4"
                          >
                            {post.title}
                          </a>
                          <p className="blog-card_blurb text-label"></p>
                        </div>
                        <div className="blog-card_cta">
                          <a
                            className="button-primary w-inline-block"
                            href={post.url}
                            aria-label="Read Article"
                            role="button"
                          >
                            <span className="button-primary_bg"></span>
                            <span
                              data-text="Read Article"
                              className="button-primary_inner"
                            >
                              <span className="button-primary_text">
                                Read More
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
