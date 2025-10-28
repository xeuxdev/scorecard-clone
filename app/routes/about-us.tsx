import { ControlSection } from "~/components/sections/control";
import { Footer } from "~/components/sections/footer";

export default function AboutUsPage() {
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
}`}
        </style>
      </div>

      <main className="main-wrapper">
        {/* hero */}
        <section className="section_about-hero">
          <div className="padding-global">
            <div className="container-xlarge">
              <div fade-in="" className="about-hero_wrapper">
                <div className="section-heading-main">
                  <div
                    id="w-node-e1b62958-1b47-b21b-28be-19091c1d4d15-d9971dc6"
                    className="section-heading-main_content text-wrap-balance"
                  >
                    <h1 className="section-heading-main_text heading-style-h2">
                      Better AI Starts with Better Testing
                    </h1>
                  </div>
                  <div
                    id="w-node-e1b62958-1b47-b21b-28be-19091c1d4d20-d9971dc6"
                    className="section-heading-main_content max-40ch"
                  >
                    <p className="section-heading-main_text text-size-xsmall">
                      We Give Teams Evidence to Build Trustworthy AI That Users
                      Can Depend On
                    </p>
                  </div>
                </div>
                <div className="about-hero_visual">
                  <img
                    src="https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/6808dfe3ed7adf1139c78a1e_about-hero-image.avif"
                    loading="lazy"
                    sizes="(max-width: 2016px) 100vw, 2016px"
                    alt="Lambda crew together"
                    className="cover-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* who */}
        <section className="section_about-who">
          <div className="padding-global padding-section-xsmall">
            <div className="container-xlarge">
              <div fade-in="" className="about-who_wrapper">
                <div
                  id="w-node-_4fcb3e50-83a3-83dc-20c2-c8348c41f5ee-d9971dc6"
                  className="about-who_content-block"
                >
                  <h2 className="about-who_text heading-style-h4">
                    Who We Are
                  </h2>
                </div>
                <div
                  id="w-node-be2e3f52-c3a7-1822-5c37-15c67bc6dc4c-d9971dc6"
                  className="about-who_content-block"
                >
                  <p className="about-who_text text-size-regular">
                    Our experience with AI testing problems inspired the start
                    of Lambda. We found companies racing to build AI, relying on
                    spreadsheets and gut reactions. This approach introduces a
                    lot of risk and leaves opportunities on the table. Our team
                    combines expertise in AI testing and practical business
                    experience. We understand the challenge of evaluating
                    unpredictable systems. We also know about the pressure to
                    ship products quickly and confidently.
                    <br />
                    <br />
                    We built Lambda to replace subjective reviews with
                    structured testing. Our vision is to help companies improve
                    testing and upgrade AI products with continuous evaluation
                    and smart recommendations.
                  </p>
                </div>
                <div
                  id="w-node-_7cefca6f-2f8e-9aa5-45a9-81385140d757-d9971dc6"
                  className="about-who_content-block"
                >
                  <img
                    src="https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/68092accc25dfb749694fece_about-us-image-1.avif"
                    loading="lazy"
                    sizes="(max-width: 990px) 100vw, 990px"
                    alt="Lambda crew together"
                    className="about-who_image"
                  />
                </div>
                <div
                  id="w-node-_82d9f49b-b440-4c16-ffb3-0acced313bbf-d9971dc6"
                  className="about-who_content-block"
                >
                  <img
                    src="https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/68092acb0c2569407373970f_e36d2caac27e5f688faaa4390f5093f3_about-us-image-2.avif"
                    loading="lazy"
                    sizes="(max-width: 990px) 100vw, 990px"
                    alt="Lambda crew together"
                    className="about-who_image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* values */}

        {/* companies */}

        <section className="section_about-companies">
          <div className="padding-global padding-section-xsmall">
            <div className="container-xlarge">
              <div className="about-companies_wrapper">
                <div
                  fade-in=""
                  id="w-node-f08ec335-3b65-7149-4f6e-53c611c623b0-d9971dc6"
                  className="about-companies_content"
                >
                  <h2 className="about-companies_text heading-style-h4">
                    Our team has evaluated and deployed large-scale AI at some
                    of the world's leading companies
                  </h2>
                </div>
                <div
                  fade-in=""
                  id="w-node-b6206950-52c4-99a5-5012-041e5510d52e-d9971dc6"
                  className="about-companies_logo-grid"
                >
                  <div className="about-companies_logo-wrapper">
                    <img
                      src="https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/6809482682b9d617c2dbcd7a_waymo%20logo.avif"
                      loading="lazy"
                      alt="Waymo logo"
                      className="about-companies_logo-svg"
                    />
                  </div>
                  <div className="about-companies_logo-wrapper">
                    <img
                      src="https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/680948262513dba07451cc2c_google%20logo.svg"
                      loading="lazy"
                      alt="Google logo
"
                      className="about-companies_logo-svg"
                    />
                  </div>
                  <div className="about-companies_logo-wrapper">
                    <img
                      src="https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/68094826be510b77786130f7_SpaceX_logo_black%20logo.svg"
                      loading="lazy"
                      alt="SpaceX logo"
                      className="about-companies_logo-svg"
                    />
                  </div>
                  <div className="about-companies_logo-wrapper">
                    <img
                      src="https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/680be8324432a25c2cd6540e_sigma-computing_logo.svg"
                      loading="lazy"
                      alt="Sigma logo"
                      className="about-companies_logo-svg is-tall"
                    />
                  </div>
                  <div className="about-companies_logo-wrapper">
                    <img
                      src="https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/68094826dd58c291b827ada2_uber%20logo.svg"
                      loading="lazy"
                      alt="Uber logo"
                      className="about-companies_logo-svg"
                    />
                  </div>
                  <div className="about-companies_logo-wrapper">
                    <img
                      src="https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/680be830b2ff46fb1ff868bb_amazon_logo.svg"
                      loading="lazy"
                      alt="Amazon Logo"
                      className="about-companies_logo-svg is-tall"
                    />
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
