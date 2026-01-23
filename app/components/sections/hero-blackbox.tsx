import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function HomeBlackBox() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const parallaxElement = parallaxRef.current;
    const sectionElement = sectionRef.current;

    if (!parallaxElement || !sectionElement) return;

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Intersection Observer for entry animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            // Entry animations
            const entryTl = gsap.timeline({ defaults: { ease: "power3.out" } });

            entryTl
              .fromTo(
                ".home-blackbox_content-block",
                {
                  opacity: 0,
                  y: 40,
                },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.9,
                  stagger: 0.2,
                },
              )
              .fromTo(
                ".home-blackbox_background-video",
                {
                  opacity: 0,
                  scale: 1.1,
                },
                {
                  opacity: 1,
                  scale: 1,
                  duration: 1.2,
                },
                "-=0.6",
              );
          }
        });
      },
      {
        threshold: 0.4,
        rootMargin: "0px",
      },
    );

    observer.observe(sectionElement);

    // Create parallax animation
    gsap
      .timeline({
        scrollTrigger: {
          trigger: parallaxElement,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      })
      .from(parallaxElement, { yPercent: -20, ease: "none" });

    return () => {
      observer.disconnect();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === parallaxElement) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section className="section_home-blackbox" ref={sectionRef}>
      <div className="padding-global">
        <div className="container-xlarge">
          <div className="home-blackbox_wrapper">
            <div className="container-small">
              <div fade-in="" className="home-blackbox_content">
                <div
                  className="home-blackbox_content-block"
                  style={{ opacity: 0 }}
                >
                  <h2 className="home-blackbox_text heading-style-h3">
                    Trustless, verifiable, and performant.
                  </h2>
                </div>
                <div
                  className="home-blackbox_content-block"
                  style={{ opacity: 0 }}
                >
                  <p className="home-blackbox_text text-size-medium">
                    Lambda is a global supercomputer for a new internet,
                    providing developers, applications and entire industries
                    with a trustless, verifiable, and efficient framework to run
                    encrypted computations.
                  </p>
                </div>
              </div>
            </div>
            <div
              aria-hidden="true"
              parallax-image=""
              className="home-blackbox_background-video w-embed"
              ref={parallaxRef}
              style={{ opacity: 0 }}
            >
              <style>
                {` .home-blackbox_background-video video {
                                            width: 100%;
                                            height: 100%;
                                            object-fit: cover;
                                            object-position: 50% 50%;
                                        }`}
              </style>
              <video
                loop
                muted
                autoPlay
                playsInline
                src="https://scorecard-temp.netlify.app/video/black-box-main-2.mp4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
