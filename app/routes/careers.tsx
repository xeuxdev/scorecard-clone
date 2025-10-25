import { PageEmbed } from "~/components/page-embed";
import { ControlSection } from "~/components/sections/control";
import { Footer } from "~/components/sections/footer";

export default function CareersPage() {
  return (
    <>
      <div className="page-embed w-embed">
        <style>
          {`/* Remove the bottom border from the last 2 items */
    @media (min-width: 992px) {
        .about-companies_logo-wrapper:nth-last-child(-n + 2) {
        border-bottom: 0px;
        }
    }

    /* Remove the left border from the odd items */
    @media (max-width: 991px) {
        .about-companies_logo-wrapper:nth-child(odd) {
    border-left: 0px;
    }
    }

    /* Open Role Link Styles */
    @media (max-width: 991px) {
        .open-role_card-link {
            opacity: 1;
        background-color: transparent !important;
        }
        .open-role_card-link .button-primary {
            display: none;
        visibility: hidden;
        }
    }

    @media (min-width: 992px) {
        .open-role_card-link {
            opacity: 0;
            transition: opacity 0.4s;  
        }
    .open-role_card-link:hover {
            opacity: 1;
        }

        .open-role_card-link .button-primary {
            transform: translateY(1rem);
        transition: transform 0.4s cubic-bezier(.32, .72, 0, 1);
        }
    .open-role_card-link:hover .button-primary {
            transform: translateY(0rem);
        }
    }

    /* Filter Dropdown Styles */
    .filter-dropdown_toggle .filter-dropdown_toggle-caret {
        transform: rotate(0deg);
    transition: transform 0.4s cubic-bezier(.32, .72, 0, 1);
    }
    .filter-dropdown_toggle.w--open .filter-dropdown_toggle-caret {
        transform: rotate(180deg);
    }

    /* List Filtering Animation */
    .open-role_collection .open-role_item {
        opacity: 1;
    transform: translateY(0rem);
    transition: opacity 0.6s, transform 0.6s cubic-bezier(.32, .72, 0, 1);
    }
    .open-role_collection.list-filtering .open-role_item {
        opacity: 0;
    transform: translateY(1.5rem);
    }

`}
        </style>
      </div>

      <main className="main-wrapper">
        <section className="section_career-hero">
          <div className="padding-global">
            <div fade-in="" className="container-xlarge">
              <div className="career-hero_wrapper">
                <div className="section-heading-main">
                  <div
                    id="w-node-_65f52431-8f53-83ab-65b0-f32bb0e2ca79-c6baefe7"
                    className="section-heading-main_content is-careers"
                  >
                    <h2 className="section-heading-main_text heading-style-h2">
                      We’re Helping Teams Create Reliable AI Products
                    </h2>
                  </div>
                  <div
                    id="w-node-_65f52431-8f53-83ab-65b0-f32bb0e2ca81-c6baefe7"
                    className="section-heading-main_content text-wrap-balance"
                  >
                    <p className="section-heading-main_text text-size-medium">
                      At Scorecard, we’re passionate about empowering people to
                      build and deliver dependable AI products. We provide the
                      platform to support teams from prototype to production for
                      Large Language Models (LLMs).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section_career-hero-visuals">
          <div className="padding-global padding-section-xsmall">
            <div fade-in="" className="container-xlarge">
              <div className="career-hero-visuals">
                <img
                  src="https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/683745ffd563b7af470b8482_careers-hero-img-1.avif"
                  loading="lazy"
                  sizes="(max-width: 731px) 100vw, 731px"
                  srcSet="https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/683745ffd563b7af470b8482_careers-hero-img-1-p-500.avif 500w, https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/683745ffd563b7af470b8482_careers-hero-img-1.avif 731w"
                  alt="Scorecard Team"
                  className="career-hero-visuals_img-1"
                />
                <img
                  src="https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/683745ff35f451cd5e5c328c_careers-hero-logo.svg"
                  loading="lazy"
                  alt="Scorecard Logo"
                  className="career-hero-visuals_img-2"
                />
                <img
                  src="https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/683745ffebd801e80f7e9a46_careers-hero-img-2.avif"
                  loading="lazy"
                  sizes="(max-width: 698px) 100vw, 698px"
                  srcSet="https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/683745ffebd801e80f7e9a46_careers-hero-img-2-p-500.avif 500w, https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/683745ffebd801e80f7e9a46_careers-hero-img-2.avif 698w"
                  alt="Scorecard Team"
                  className="career-hero-visuals_img-1"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section_career-content">
          <div className="padding-global padding-section-xsmall">
            <div className="container-xlarge">
              <div className="bento-grid">
                <div
                  fade-in=""
                  id="w-node-c69ddc67-0ec7-ee64-69d0-056aa3aae0e4-c6baefe7"
                  className="bento-grid_content"
                >
                  <div className="bento-card">
                    <div className="section-heading-main">
                      <div
                        id="w-node-b970d7e0-d8ed-9d36-c9e3-7754c2eed235-c6baefe7"
                        className="section-heading-main_content text-wrap-balance"
                      >
                        <div className="section-heading-main_eyebrow">
                          <div className="section-heading-main_eyebrow_text">
                            Open Roles
                          </div>
                        </div>
                        <h2 className="section-heading-main_text heading-style-h3">
                          Help Us Redefine How Organizations Evaluate AI
                        </h2>
                      </div>
                      <div
                        id="w-node-b970d7e0-d8ed-9d36-c9e3-7754c2eed23d-c6baefe7"
                        className="section-heading-main_content text-wrap-balance"
                      >
                        <p className="section-heading-main_text text-size-medium">
                          Interested in working with us? You'll have the
                          opportunity to join a fast-growing team, solving the
                          most pressing problems in the AI space. We're hiring
                          for these roles:
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  fade-in=""
                  id="w-node-a6908f1d-20d2-734c-62e3-2a486e555a38-c6baefe7"
                  className="bento-grid_content"
                >
                  <div
                    fade-in=""
                    id="w-node-_2bbc979a-7ce3-470b-cb8f-fadb02aafaf4-c6baefe7"
                    className="split-list_wrapper"
                  >
                    <div
                      id="w-node-_2bbc979a-7ce3-470b-cb8f-fadb02aafaf5-c6baefe7"
                      className="split-list_sticky"
                    >
                      <div className="split-list_text text-size-xsmall">
                        Open Roles
                      </div>
                      <div className="split-list_sticky-dash"></div>
                    </div>
                    <div className="split-list_list">
                      <div
                        fs-list-element="empty"
                        className="empty-state"
                        style={{ display: "none" }}
                      >
                        <img
                          src="https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/680907bcba85da710e0eeddf_404-bg.svg"
                          loading="lazy"
                          alt=""
                          className="empty-state_img"
                        />
                      </div>
                      <div className="open-role_collection w-dyn-list">
                        <div
                          fs-list-element="list"
                          role="list"
                          className="open-role_list w-dyn-items"
                        >
                          <div
                            role="listitem"
                            className="open-role_item w-dyn-item"
                          >
                            <li className="open-role_card">
                              <div className="open-role_card-inner">
                                <div className="open-role_card_title">
                                  <h3
                                    fs-list-field="title"
                                    className="open-role_card_text heading-style-h4"
                                  >
                                    Founding Software Engineer
                                  </h3>
                                </div>
                                <div className="open-role_card_info">
                                  <div className="open-role_card_info-content">
                                    <div
                                      fs-list-field="location"
                                      className="open-role_card_info-text"
                                    >
                                      San Francisco, CA
                                    </div>
                                    <div className="open-role_card_info-text hide-mobile-portrait">
                                      ·
                                    </div>
                                    <div
                                      fs-list-field="type"
                                      className="open-role_card_info-text"
                                    >
                                      Full-Time
                                    </div>
                                  </div>
                                  <div className="open-role_card_info-content text-color-brand">
                                    <div
                                      fs-list-field="team"
                                      className="open-role_card_info-text"
                                    >
                                      Engineering
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <a
                                data-wf-native-id-path="87802645-3a18-e849-f25a-9ae8f4d02510_instance-0"
                                data-wf-ao-click-engagement-tracking="true"
                                data-wf-element-id="87802645-3a18-e849-f25a-9ae8f4d02510"
                                data-wf-cms-context="%5B%7B%22collectionId%22%3A%2268308259a60c3fbf193aa1a2%22%2C%22itemId%22%3A%22683083f2cd3903a89acdbea9%22%7D%5D"
                                href="/careers/software-engineer"
                                className="open-role_card-link w-inline-block"
                              >
                                <div
                                  role="button"
                                  aria-label="Button Text"
                                  className="button-primary"
                                >
                                  <span className="button-primary_bg"></span>
                                  <span
                                    data-text="Button Text"
                                    className="button-primary_inner"
                                  >
                                    <span className="button-primary_text">
                                      Apply Now
                                    </span>
                                    <span className="button-primary_icon-wrap">
                                      <span className="button-primary_icon">
                                        <span className="button-primary_dot"></span>
                                        <span className="button-primary_dot"></span>
                                        <span className="button-primary_dot"></span>
                                        <span className="button-primary_dot"></span>
                                        <span className="button-primary_dot"></span>
                                      </span>
                                      <span className="button-primary_icon">
                                        <span className="button-primary_dot"></span>
                                        <span className="button-primary_dot"></span>
                                        <div className="button-primary_dot"></div>
                                        <span className="button-primary_dot"></span>
                                        <span className="button-primary_dot"></span>
                                      </span>
                                    </span>
                                  </span>
                                </div>
                              </a>
                            </li>
                          </div>
                          <div
                            role="listitem"
                            className="open-role_item w-dyn-item"
                          >
                            <li className="open-role_card">
                              <div className="open-role_card-inner">
                                <div className="open-role_card_title">
                                  <h3
                                    fs-list-field="title"
                                    className="open-role_card_text heading-style-h4"
                                  >
                                    Founding UX Designer
                                  </h3>
                                </div>
                                <div className="open-role_card_info">
                                  <div className="open-role_card_info-content">
                                    <div
                                      fs-list-field="location"
                                      className="open-role_card_info-text"
                                    >
                                      San Francisco, CA
                                    </div>
                                    <div className="open-role_card_info-text hide-mobile-portrait">
                                      ·
                                    </div>
                                    <div
                                      fs-list-field="type"
                                      className="open-role_card_info-text"
                                    >
                                      Full-Time
                                    </div>
                                  </div>
                                  <div className="open-role_card_info-content text-color-brand">
                                    <div
                                      fs-list-field="team"
                                      className="open-role_card_info-text"
                                    >
                                      Design
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <a
                                data-wf-native-id-path="87802645-3a18-e849-f25a-9ae8f4d02510_instance-1"
                                data-wf-ao-click-engagement-tracking="true"
                                data-wf-element-id="87802645-3a18-e849-f25a-9ae8f4d02510"
                                data-wf-cms-context="%5B%7B%22collectionId%22%3A%2268308259a60c3fbf193aa1a2%22%2C%22itemId%22%3A%22683083f0ba6856baeaef4fbe%22%7D%5D"
                                href="/careers/founding-ux-designer"
                                className="open-role_card-link w-inline-block"
                              >
                                <div
                                  role="button"
                                  aria-label="Button Text"
                                  className="button-primary"
                                >
                                  <span className="button-primary_bg"></span>
                                  <span
                                    data-text="Button Text"
                                    className="button-primary_inner"
                                  >
                                    <span className="button-primary_text">
                                      Apply Now
                                    </span>
                                    <span className="button-primary_icon-wrap">
                                      <span className="button-primary_icon">
                                        <span className="button-primary_dot"></span>
                                        <span className="button-primary_dot"></span>
                                        <span className="button-primary_dot"></span>
                                        <span className="button-primary_dot"></span>
                                        <span className="button-primary_dot"></span>
                                      </span>
                                      <span className="button-primary_icon">
                                        <span className="button-primary_dot"></span>
                                        <span className="button-primary_dot"></span>
                                        <div className="button-primary_dot"></div>
                                        <span className="button-primary_dot"></span>
                                        <span className="button-primary_dot"></span>
                                      </span>
                                    </span>
                                  </span>
                                </div>
                              </a>
                            </li>
                          </div>
                          <div
                            role="listitem"
                            className="open-role_item w-dyn-item"
                          >
                            <li className="open-role_card">
                              <div className="open-role_card-inner">
                                <div className="open-role_card_title">
                                  <h3
                                    fs-list-field="title"
                                    className="open-role_card_text heading-style-h4"
                                  >
                                    Founding GTM
                                  </h3>
                                </div>
                                <div className="open-role_card_info">
                                  <div className="open-role_card_info-content">
                                    <div
                                      fs-list-field="location"
                                      className="open-role_card_info-text"
                                    >
                                      San Francisco, CA
                                    </div>
                                    <div className="open-role_card_info-text hide-mobile-portrait">
                                      ·
                                    </div>
                                    <div
                                      fs-list-field="type"
                                      className="open-role_card_info-text"
                                    >
                                      Full-Time
                                    </div>
                                  </div>
                                  <div className="open-role_card_info-content text-color-brand">
                                    <div
                                      fs-list-field="team"
                                      className="open-role_card_info-text"
                                    >
                                      Sales
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <a
                                data-wf-native-id-path="87802645-3a18-e849-f25a-9ae8f4d02510_instance-2"
                                data-wf-ao-click-engagement-tracking="true"
                                data-wf-element-id="87802645-3a18-e849-f25a-9ae8f4d02510"
                                data-wf-cms-context="%5B%7B%22collectionId%22%3A%2268308259a60c3fbf193aa1a2%22%2C%22itemId%22%3A%22683083f05f04ce1d17f210fc%22%7D%5D"
                                href="/careers/founding-gtm"
                                className="open-role_card-link w-inline-block"
                              >
                                <div
                                  role="button"
                                  aria-label="Button Text"
                                  className="button-primary"
                                >
                                  <span className="button-primary_bg"></span>
                                  <span
                                    data-text="Button Text"
                                    className="button-primary_inner"
                                  >
                                    <span className="button-primary_text">
                                      Apply Now
                                    </span>
                                    <span className="button-primary_icon-wrap">
                                      <span className="button-primary_icon">
                                        <span className="button-primary_dot"></span>
                                        <span className="button-primary_dot"></span>
                                        <span className="button-primary_dot"></span>
                                        <span className="button-primary_dot"></span>
                                        <span className="button-primary_dot"></span>
                                      </span>
                                      <span className="button-primary_icon">
                                        <span className="button-primary_dot"></span>
                                        <span className="button-primary_dot"></span>
                                        <div className="button-primary_dot"></div>
                                        <span className="button-primary_dot"></span>
                                        <span className="button-primary_dot"></span>
                                      </span>
                                    </span>
                                  </span>
                                </div>
                              </a>
                            </li>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ControlSection />
      </main>
      <Footer />
    </>
  );
}
