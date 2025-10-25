import { useMemo, useState } from "react";
import { blogPosts } from "./data";
import { BlogCard } from "./blog-card";

export function AllBlogs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

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
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
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
                        checked={selectedCategory === "All"}
                        onChange={() => setSelectedCategory("All")}
                        value="All"
                      />
                      <span className="blog-filter_radio_text w-form-label">
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
                        checked={selectedCategory === "AI Tools"}
                        onChange={() => setSelectedCategory("AI Tools")}
                        value="AI Tools"
                      />
                      <span className="blog-filter_radio_text w-form-label">
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
                        checked={selectedCategory === "LLM Evaluation"}
                        onChange={() => setSelectedCategory("LLM Evaluation")}
                        value="LLM Evaluation"
                      />
                      <span className="blog-filter_radio_text w-form-label">
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
                        checked={selectedCategory === "News"}
                        onChange={() => setSelectedCategory("News")}
                        value="News"
                      />
                      <span className="blog-filter_radio_text w-form-label">
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
                        checked={selectedCategory === "Workflows"}
                        onChange={() => setSelectedCategory("Workflows")}
                        value="Workflows"
                      />
                      <span className="blog-filter_radio_text w-form-label">
                        Workflows
                      </span>
                    </label>
                  </div>
                </form>
              </div>
            </div>

            {/* empty */}

            {filteredPosts.length === 0 && (
              <div fs-list-element="empty" className="blog-gallery_empty">
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
              </div>
            )}

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
                {filteredPosts.map((post, index) => (
                  <BlogCard key={index} post={post} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
