import { useEffect, useRef } from "react";
import gsap from "gsap";

export function ProblemSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    if (!sectionElement) return;

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
                ".section-heading-main_content",
                {
                  opacity: 0,
                  y: 30,
                },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
                },
              )
              .fromTo(
                ".home-problem_card",
                {
                  opacity: 0,
                  y: 40,
                },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
                  stagger: 0.15,
                },
                "-=0.4",
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

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="section_home-problem" ref={sectionRef}>
      <div className="padding-global padding-section-xsmall">
        <div className="container-xlarge">
          <div fade-in="" className="bento-grid">
            <div
              id="w-node-_861dc6c1-fc52-a221-7c22-ac6ee75c38d4-0fca1c98"
              className="bento-grid_content"
            >
              <div className="bento-card">
                <div className="section-heading-main">
                  <div
                    id="w-node-fea61dcf-e32f-cf0e-f651-1f85ab4f4c91-0fca1c98"
                    className="section-heading-main_content text-wrap-balance"
                    style={{ opacity: 0 }}
                  >
                    <div className="section-heading-main_eyebrow">
                      <div className="section-heading-main_eyebrow_number">
                        1
                      </div>
                      <div className="section-heading-main_eyebrow_text">
                        The problem
                      </div>
                    </div>
                    <h2 className="section-heading-main_text heading-style-h3">
                      Confidential Internet
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="w-node-e5dcc756-876b-23ec-bb33-c6e8d2a1bf70-0fca1c98"
              className="bento-grid_content"
            >
              <div className="bento-card">
                <div className="home-problem_card" style={{ opacity: 0 }}>
                  <div className="max-40ch">
                    <h3 className="home-problem_card_text heading-style-h6">
                      Data's Inherent <br /> Fragility
                    </h3>

                    {/* <div className="text-7xl! text-font-dots text-[#ff6e3e]">
                      01
                    </div> */}
                  </div>
                  <div className="home-problem_card_content">
                    <p className="home-problem_card_text text-size-xsmall">
                      Data is the world's most valuable and also its most
                      sensitive resource. It powers all of our digital
                      interactions, applications, and infrastructure. Until now,
                      its value was inherently fragile - in most cases, to use
                      it, its contents must be known.
                    </p>
                    <div className="text-number text-font-dots text-[#ff6e3e]">
                      01
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="w-node-_639d5c58-8396-35f3-6e9c-f6e51ac7f763-0fca1c98"
              className="bento-grid_content"
            >
              <div className="bento-card">
                <div className="home-problem_card" style={{ opacity: 0 }}>
                  <div className="max-40ch">
                    <h3 className="home-problem_card_text heading-style-h6">
                      The Internet's <br />
                      New Superpower
                    </h3>

                    {/* <div className="text-7xl! text-font-dots text-[#ff6e3e]">
                      02
                    </div> */}
                  </div>
                  <div className="home-problem_card_content">
                    <p className="home-problem_card_text text-size-xsmall">
                      Lambda redefines our internet, leveraging decentralized
                      systems and cryptography to create a new paradigm of data
                      usability, control, and privacy. With Lambda, individuals,
                      applications and organizations across the internet can use
                      data to its full extent in an entirely encrypted state.
                    </p>
                    <div className="text-number text-font-dots text-[#ff6e3e]">
                      02
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="w-node-a6932d4a-5c9b-c258-509f-d4f722715973-0fca1c98"
              className="bento-grid_content"
            >
              <div className="bento-card">
                <div className="home-problem_card" style={{ opacity: 0 }}>
                  <div className="max-40ch">
                    <h3 className="home-problem_card_text heading-style-h6">
                      Lambda Is Like Hidden Photographic Memory
                    </h3>
                    {/* <div className="text-7xl! text-font-dots text-[#ff6e3e]">
                      03
                    </div> */}
                  </div>
                  <div className="home-problem_card_content">
                    <p className="home-problem_card_text text-size-xsmall">
                      Imagine reading a book and understanding the entire story
                      without ever reading the actual text. Lambda enables that
                      for the internet, where applications and developers can
                      fully operate without ever needing to know the underlying
                      data they are processing.
                    </p>
                    <div className="text-number text-font-dots text-[#ff6e3e]">
                      03
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
