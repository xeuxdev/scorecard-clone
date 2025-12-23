import Lottie from "lottie-react";
import { useRef, useState, useEffect } from "react";

export function MethodSection() {
  const traditionalLottieRef = useRef(null);
  const scorecardLottieRef = useRef(null);
  const [traditionalWorkflowAnimation, setTraditionalWorkflowAnimation] =
    useState(null);
  const [scorecardWorkflowAnimation, setScorecardWorkflowAnimation] =
    useState(null);

  useEffect(() => {
    fetch("/Traditional_Workflow_Lottie_opt.json")
      .then((res) => res.json())
      .then((data) => setTraditionalWorkflowAnimation(data))
      .catch((err) =>
        console.error("Error loading traditional workflow animation:", err)
      );

    fetch("/Scorcard_Workflow_Lottie.json")
      .then((res) => res.json())
      .then((data) => setScorecardWorkflowAnimation(data))
      .catch((err) =>
        console.error("Error loading scorecard workflow animation:", err)
      );
  }, []);
  return (
    <section className="section_home-method">
      <div className="padding-global padding-section-xsmall">
        <div className="container-xlarge">
          <div fade-in="" className="bento-grid">
            <div
              id="w-node-_23fb6a28-c965-9571-b1a0-319109f414a0-0fca1c98"
              className="bento-grid_content"
            >
              <div className="bento-card">
                <div className="section-heading-main">
                  <div
                    id="w-node-_23fb6a28-c965-9571-b1a0-319109f414a3-0fca1c98"
                    className="section-heading-main_content text-wrap-balance"
                  >
                    <div className="section-heading-main_eyebrow">
                      <div className="section-heading-main_eyebrow_number">
                        3
                      </div>
                      <div className="section-heading-main_eyebrow_text">
                        Roadmap
                      </div>
                    </div>
                    <h2 className="section-heading-main_text heading-style-h3">
                      Lambda’s road to building a better internet.
                    </h2>
                  </div>
                  <div
                    id="w-node-fbd6ee2d-6f4c-428e-7e89-45398ea7c36f-0fca1c98"
                    className="section-heading-main_content text-wrap-balance"
                  >
                    <p className="section-heading-main_text text-size-medium">
                      From a privacy application to a global supercomputer for
                      encryption, Lambda is rooted in many years of research,
                      testing, and launching encrypted internet technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="w-node-_23fb6a28-c965-9571-b1a0-319109f414ae-0fca1c98"
              className="bento-grid_content"
            >
              <div className="bento-card is-2rem-gap">
                <div className="scorecard-method">
                  <div className="scorecard-method_content-wrap">
                    <div className="scorecard-method_title-wrap">
                      <div className="scorecard-method_text subtitle-size-2">
                        Traditional Workflow
                      </div>
                    </div>
                    <div className="scorecard-method_lottie-wrap">
                      <div className="scorecard-method_lottie">
                        {traditionalWorkflowAnimation && (
                          <Lottie
                            lottieRef={traditionalLottieRef}
                            animationData={traditionalWorkflowAnimation}
                            loop={true}
                            autoplay={true}
                            style={{ width: "100%", height: "100%" }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="scorecard-method">
                  <div className="scorecard-method_content-wrap">
                    <div className="scorecard-method_title-wrap">
                      <div className="scorecard-method_text subtitle-size-2">
                        LAMBDA Workflow
                      </div>
                    </div>
                    <div className="scorecard-method_lottie-wrap">
                      <div className="scorecard-method_lottie">
                        {scorecardWorkflowAnimation && (
                          <Lottie
                            lottieRef={scorecardLottieRef}
                            animationData={scorecardWorkflowAnimation}
                            loop={true}
                            autoplay={true}
                            style={{ width: "100%", height: "100%" }}
                          />
                        )}
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
  );
}
