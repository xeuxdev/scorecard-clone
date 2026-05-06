import Lottie from "lottie-react";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";

export function MethodSection() {
  const traditionalLottieRef = useRef(null);
  const lambdaLottieRef = useRef(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [traditionalWorkflowAnimation, setTraditionalWorkflowAnimation] =
    useState(null);
  const [lambdaWorkflowAnimation, setlambdaWorkflowAnimation] = useState(null);

  useEffect(() => {
    fetch("/Traditional_Workflow_Lottie_opt.json")
      .then((res) => res.json())
      .then((data) => setTraditionalWorkflowAnimation(data))
      .catch((err) =>
        console.error("Error loading traditional workflow animation:", err),
      );

    fetch("/Scorcard_Workflow_Lottie.json")
      .then((res) => res.json())
      .then((data) => setlambdaWorkflowAnimation(data))
      .catch((err) =>
        console.error("Error loading lambda workflow animation:", err),
      );
  }, []);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    if (!sectionElement) return;

    const headingElements = sectionElement.querySelectorAll(
      ".section-heading-main_content",
    );
    const methodElements = sectionElement.querySelectorAll(".lambda-method");
    const animatedElements = new Set();

    // Intersection Observer for independent animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedElements.has(entry.target)) {
            animatedElements.add(entry.target);

            gsap.fromTo(
              entry.target,
              {
                opacity: 0,
                y: 40,
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
              },
            );
          }
        });
      },
      {
        threshold: 0.4,
        rootMargin: "0px",
      },
    );

    // Observe all heading and method elements independently
    headingElements.forEach((el) => observer.observe(el));
    methodElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="section_home-method" ref={sectionRef}>
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
                    style={{ opacity: 0 }}
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
                    style={{ opacity: 0 }}
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
                <div className="lambda-method" style={{ opacity: 0 }}>
                  <div className="lambda-method_content-wrap">
                    <div className="lambda-method_title-wrap">
                      <div className="lambda-method_text subtitle-size-2">
                        Traditional Workflow
                      </div>
                    </div>
                    <div className="lambda-method_lottie-wrap">
                      <div className="lambda-method_lottie">
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
                <div className="lambda-method" style={{ opacity: 0 }}>
                  <div className="lambda-method_content-wrap">
                    <div className="lambda-method_title-wrap">
                      <div className="lambda-method_text subtitle-size-2">
                        LAMBDA Workflow
                      </div>
                    </div>
                    <div className="lambda-method_lottie-wrap">
                      <div className="lambda-method_lottie">
                        {lambdaWorkflowAnimation && (
                          <Lottie
                            lottieRef={lambdaLottieRef}
                            animationData={lambdaWorkflowAnimation}
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
