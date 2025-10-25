import React from "react";
import { PageEmbed } from "~/components/page-embed";
import { AllBlogs } from "~/components/sections/blog/all-blogs";
import { ControlSection } from "~/components/sections/control";
import { Footer } from "~/components/sections/footer";

export default function BlogPage() {
  return (
    <div>
      <style>
        {`        .blog-filter_radio {
            background-color: var(--_color-themes---background-color--background-secondary);
        color: var(--_color-themes---text-color--text-primary);
        transition: background-color 0.4s, color 0.4s;
        }

        .blog-filter_radio:has(.blog-filter_radio_radio.w--redirected-checked) {
            background-color: var(--_color-themes---background-color--background-alternate);
        color: var(--_color-themes---text-color--text-alternate);
        }

        .blog-gallery_collection .blog-gallery_item {
            opacity: 1;
        transform: translateY(0rem);
        transition: opacity 0.4s, transform 0.4s cubic-bezier(.32, .72, 0, 1);
        }

        .blog-gallery_collection.list-filtering .blog-gallery_item {
            opacity: 0;
        transform: translateY(1rem);
        }`}
      </style>

      <main className="main-wrapper is-padding-start">
        <section className="section_blog-hero">
          <div className="padding-global">
            <div className="container-xlarge">
              <div className="blog-hero_collection w-dyn-list">
                <div
                  fade-in=""
                  role="list"
                  className="blog-hero_list w-dyn-items"
                >
                  <div role="listitem" className="blog-hero_item w-dyn-item">
                    <div className="blog-card">
                      <a
                        href="/blog/scorecard-raises-3-75m-to-test-and-deploy-ai-agents-100x-faster"
                        className="blog-card_thumb w-inline-block"
                      >
                        <img
                          src="https://cdn.prod.website-files.com/682dd348fd1fba47863dde07/68d4d136c4d0d85818e3d5d3_Frame%208.png"
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
                          >
                            News
                          </div>
                          <div className="blog-card_date-read">
                            <div className="blog-card_info-text text-color-secondary">
                              September 25, 2025
                            </div>
                            <div className="blog-card_info-text">—</div>
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
                            href="/blog/scorecard-raises-3-75m-to-test-and-deploy-ai-agents-100x-faster"
                            className="blog-card_title heading-style-h4"
                          >
                            Scorecard Raises $3.75M to Test and Deploy AI Agents
                            100x Faster
                          </a>
                          <p className="blog-card_blurb text-label">
                            Scorecard announces $3.75M seed funding to
                            revolutionize AI agent testing, enabling developers
                            to run tens of thousands of tests daily and ship
                            trusted AI 100x faster.
                          </p>
                        </div>
                        <div className="blog-card_cta">
                          <a
                            className="button-primary w-inline-block"
                            href="/blog/scorecard-raises-3-75m-to-test-and-deploy-ai-agents-100x-faster"
                            aria-label="Read Article"
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
                </div>
              </div>
            </div>
          </div>
        </section>

        <AllBlogs />

        <ControlSection />
      </main>

      <Footer />
    </div>
  );
}
