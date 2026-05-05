export function CTASection() {
  return (
    <section className="section_test-cta">
      <div className="padding-global">
        <div className="container-xlarge">
          <div className="test-cta_wrapper">
            <div fade-in="" className="test-cta_content">
              <div className="test-cta_heading">
                <h2 className="test-cta_text heading-style-h3">
                  Test at the speed of thought in the Lambda Playground.
                </h2>
              </div>
              <div className="test-cta_button">
                <a className="button-primary w-inline-block" role="button">
                  <span className="button-primary_bg"></span>
                  <span className="button-primary_inner">
                    <span className="button-primary_text">Learn More</span>
                  </span>
                </a>
              </div>
            </div>
            <div fade-in="" className="test-cta_visual">
              <img
                src="https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/68080df6192340b8df346126_d1f3827ab0a7e0d09f408fd5dee23844_test-cta-img.svg"
                loading="lazy"
                alt="Lambda testing tools"
                className="test-cta_image"
              />
            </div>
            <img
              src="https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/68080e76192340b8df34b32b_test-cta-bg.svg"
              loading="lazy"
              parallax-image=""
              alt=""
              className="test-cta_background-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
