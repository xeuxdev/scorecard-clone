import { useParams } from "react-router";
import { blogPosts } from "~/components/sections/blog/data";
import { ControlSection } from "~/components/sections/control";
import { Footer } from "~/components/sections/footer";
import { MarkdownRenderer } from "~/components/markdown-renderer";
import { BlogCard } from "~/components/sections/blog/blog-card";

export default function BlogDetailsPage() {
  const { slug } = useParams();

  const blog = blogPosts.find((post) => post.url === slug);

  console.log(blog?.id);

  const relatedBlogs = blogPosts
    .filter((post) => post.category === blog?.category && post.id !== blog?.id)
    .slice(0, 3);

  return (
    <>
      <div className="page-embed w-embed">
        <style>
          {`/* Copy to clip-board button styles */
            .article-info_social-copy .article-info_social-copy_chain {
                opacity: 1;
            visibility: visible;
            transition: opacity 0.4s, visibility 0.4s;
            }

            .article-info_social-copy.is-copied .article-info_social-copy_chain {
                opacity: 0;
            visibility: hidden;
            }

            .article-info_social-copy .article-info_social-copy_check {
                opacity: 0;
            visibility: hidden;
            transition: opacity 0.4s, visibility 0.4s;
            }

            .article-info_social-copy.is-copied .article-info_social-copy_check {
                opacity: 1;
            visibility: visible;
            }
            ul {
              list-style: disc;
            `}
        </style>
      </div>

      <main className="main-wrapper is-padding-start">
        <section className="section_article-hero">
          <div className="padding-global">
            <div className="container-xlarge">
              <div fade-in="" className="article-hero_wrapper">
                <div
                  className="article-content"
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1,
                  }}
                >
                  <div className="article-content_hero">
                    <img
                      src={blog?.image}
                      loading="lazy"
                      alt=""
                      className="cover-image"
                    />
                  </div>

                  <div className="article-content_content">
                    <div className="article-content_header">
                      <div className="article-content_date-read">
                        <div className="blog-card_info-text text-color-secondary">
                          {blog?.date}
                        </div>
                        <div className="blog-card_info-text">—</div>
                        <div className="blog-card_read-info">
                          <div className="blog-card_info-text">
                            {blog?.readTime}
                          </div>
                          <div className="blog-card_info-text">min read</div>
                        </div>
                      </div>
                      <h1 className="article-content_text heading-style-h4">
                        {blog?.title}
                      </h1>
                    </div>
                    <div className="article-content_rich w-richtext">
                      {blog?.content ? (
                        <MarkdownRenderer content={blog.content} />
                      ) : (
                        <div className="article-content_rich w-richtext">
                          <p>No content available</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {/* written by - right side don't touch */}
                <div
                  id="w-node-_9a1ed62e-d365-2e43-99a1-87ec8ff21225-205ff8ce"
                  className="article-info"
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1,
                  }}
                >
                  <div className="article-info_top">
                    <div className="article-info_text text-color-secondary">
                      Written by:
                    </div>
                    <div className="article-info_author">
                      <div className="article-info_text is-author">
                        Scorecard Team
                      </div>
                      <div className="article-info_text is-author w-condition-invisible">
                        —
                      </div>
                      <div className="article-info_text is-author text-color-secondary w-dyn-bind-empty"></div>
                    </div>
                  </div>
                  <div
                    aria-hidden="true"
                    className="article-info_divider"
                  ></div>
                  <div className="article-info_bottom">
                    <button
                      copy-link=""
                      id=""
                      aria-label="Copy Share Link to Clip-board"
                      className="article-info_social-copy"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="article-info_social-copy_chain"
                      >
                        <path
                          d="M10 13C10.4295 13.5741 10.9774 14.0492 11.6066 14.3929C12.2357 14.7367 12.9315 14.9411 13.6467 14.9923C14.3618 15.0435 15.0796 14.9404 15.7513 14.6898C16.4231 14.4392 17.0331 14.0471 17.54 13.54L20.54 10.54C21.4508 9.59699 21.9548 8.33397 21.9434 7.02299C21.932 5.71201 21.4061 4.45794 20.4791 3.5309C19.5521 2.60386 18.298 2.07802 16.987 2.06663C15.676 2.05523 14.413 2.55921 13.47 3.47L11.75 5.18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M13.9982 10.9992C13.5688 10.4251 13.0209 9.95007 12.3917 9.60631C11.7625 9.26255 11.0667 9.05813 10.3516 9.00691C9.63645 8.9557 8.91866 9.05888 8.2469 9.30947C7.57514 9.56005 6.96513 9.95218 6.45825 10.4592L3.45825 13.4592C2.54746 14.4023 2.04348 15.6653 2.05488 16.9763C2.06627 18.2872 2.59211 19.5413 3.51915 20.4683C4.44619 21.3954 5.70026 21.9212 7.01124 21.9326C8.32222 21.944 9.58524 21.44 10.5282 20.5292L12.2382 18.8192"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                        className="article-info_social-copy_check"
                      >
                        <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                      </svg>
                    </button>
                    <div className="article-info_social-links">
                      <button
                        fs-socialshare-element="linkedin"
                        aria-label="Share this article on LinkedIn"
                        className="article-info_social-link"
                      >
                        LinkedIn
                      </button>
                      <button
                        fs-socialshare-element="facebook"
                        aria-label="Share this article on Facebook"
                        className="article-info_social-link"
                      >
                        Facebook
                      </button>
                      <button
                        fs-socialshare-element="x"
                        aria-label="Share this article on X"
                        className="article-info_social-link"
                      >
                        X
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section_article-trending mb-30">
          <div className="padding-global padding-section-xsmall">
            <div className="container-xlarge">
              <div fade-in className="article-trending">
                <div
                  className="article-trending_header"
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1,
                  }}
                >
                  <div className="section-heading-main_eyebrow">
                    <div className="section-heading-main_eyebrow_text">
                      Related
                    </div>
                  </div>
                  <h2 className="article-trending_text heading-style-h4">
                    Related Articles
                  </h2>
                </div>

                <div
                  className="blog-gallery_collection w-dyn-list"
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1,
                  }}
                >
                  <div className="blog-gallery_list w-dyn-items" role="list">
                    {relatedBlogs.map((blog) => (
                      <BlogCard key={blog.id} post={blog} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ControlSection />
      <Footer />
    </>
  );
}
