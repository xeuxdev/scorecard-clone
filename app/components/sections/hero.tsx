import React, { useEffect } from "react";
import gsap from "gsap";
import "./styles/hero.css";

export function HeroSection() {
  useEffect(() => {
    function initTabSystem() {
      const wrappers = document.querySelectorAll<HTMLElement>(
        '[data-tabs="wrapper"]'
      );
      const controllers: any[] = [];

      wrappers.forEach((wrapper) => {
        const contentItems = wrapper.querySelectorAll<HTMLElement>(
          '[data-tabs="content-item"]'
        );
        const visualItems = wrapper.querySelectorAll<HTMLElement>(
          '[data-tabs="visual-item"]'
        );
        const highlightTargets = wrapper.querySelectorAll<HTMLElement>(
          "[data-highlight-target]"
        );

        const autoplay = wrapper.dataset.tabsAutoplay === "true";
        const autoplayDuration =
          parseInt(wrapper.dataset.tabsAutoplayDuration || "") || 5000;

        let activeContent: Element | null = null;
        let activeVisual: Element | null = null;
        let isAnimating: boolean = false;
        let autoplayTimeout: number | null = null;

        const itemHandlers: Array<{
          item: Element;
          handler: (e: Event) => void;
        }> = [];

        function switchTab(index: number) {
          if (isAnimating || contentItems[index] === activeContent) return;

          isAnimating = true;
          if (autoplayTimeout) {
            clearTimeout(autoplayTimeout);
            autoplayTimeout = null;
          }

          const outgoingContent = activeContent;
          const outgoingVisual = activeVisual;

          const incomingContent = contentItems[index];
          const incomingVisual = visualItems[index];

          // Handle highlight targets
          highlightTargets.forEach((target, i) => {
            if (i === index) {
              target.classList.add("active");
            } else {
              target.classList.remove("active");
            }
          });

          outgoingContent?.classList.remove("active");
          outgoingVisual?.classList.remove("active");
          incomingContent.classList.add("active");
          incomingVisual.classList.add("active");

          const tl = gsap.timeline({
            defaults: {
              duration: 0.65,
              ease: "power3",
            },
            onComplete: () => {
              activeContent = incomingContent;
              activeVisual = incomingVisual;
              isAnimating = false;
              if (autoplay) scheduleNextTab(index);
            },
          });

          if (outgoingContent) {
            tl.to(
              outgoingVisual,
              {
                autoAlpha: 0,
                yPercent: 3,
              },
              0
            );
          }

          tl.fromTo(
            incomingVisual,
            {
              autoAlpha: 0,
              yPercent: 3,
            },
            {
              autoAlpha: 1,
              yPercent: 0,
            },
            0.3
          );
        }

        function scheduleNextTab(currentIndex: number) {
          autoplayTimeout = window.setTimeout(() => {
            const nextIndex = (currentIndex + 1) % contentItems.length;
            switchTab(nextIndex);
          }, autoplayDuration) as unknown as number;
        }

        // Initialize first tab
        switchTab(0);

        // Handle clicks on content items - store handlers for cleanup
        contentItems.forEach((item, i) => {
          const handler = (e: Event) => {
            // preventDefault to stop anchor navigation
            if (e && typeof (e as any).preventDefault === "function")
              (e as any).preventDefault();
            if (item === activeContent) return;
            switchTab(i);
          };
          item.addEventListener("click", handler);
          itemHandlers.push({ item, handler });
        });

        // Push controller for this wrapper
        controllers.push({
          switchTab,
          wrapper,
          itemHandlers,
          clear: () => {
            itemHandlers.forEach(({ item, handler }) =>
              item.removeEventListener("click", handler)
            );
            if (autoplayTimeout) {
              clearTimeout(autoplayTimeout);
              autoplayTimeout = null;
            }
          },
        });
      });

      return controllers;
    }

    let tabControllers = initTabSystem();

    // Cleanup on unmount: remove listeners and clear timeouts
    return () => {
      if (tabControllers && tabControllers.length) {
        tabControllers.forEach((c) => {
          try {
            if (c.clear) c.clear();
          } catch (err) {
            // ignore cleanup errors
          }
        });
      }
    };
  }, []);

  return (
    <section className="section_home-hero">
      <div className="padding-global">
        <div className="container-xlarge">
          <div className="home-hero_wrapper">
            <div className="section-heading-main is-home-hero">
              <div
                id="w-node-_94e4e67f-5b8f-e330-d284-e22c77721aaa-0fca1c98"
                className="section-heading-main_content is-home-hero"
              >
                <h1 className="section-heading-main_text heading-style-h1">
                  <span className="data-highlight active">Encrypt,</span>{" "}
                  <span className="data-highlight">Compute</span>, and{" "}
                  <span className="data-highlight">Deploy </span> today with
                  Confidential Computing.
                </h1>
              </div>
              <div className="home-hero_button-wrapper">
                <div className="home-hero_button-wrap">
                  <a
                    role="button"
                    aria-label="Explore testnet"
                    href=""
                    className="button-secondary w-inline-block"
                  >
                    <span className="button-secondary_bg"></span>
                    <span
                      data-text="Explore testnet"
                      className="button-secondary_inner"
                    >
                      <span className="button-secondary_text">
                        Explore testnet
                      </span>
                    </span>
                  </a>
                </div>
                <div className="home-hero_button-wrap">
                  <a
                    className="button-primary w-inline-block"
                    href=""
                    aria-label="read our docs"
                    role="button"
                  >
                    <span className="button-primary_bg"></span>
                    <span
                      data-text="read our docs"
                      className="button-primary_inner"
                    >
                      <span className="button-primary_text">read our docs</span>
                      <span className="button-primary_icon-wrap">
                        <span
                          style={
                            {
                              ["--index-parent" as any]: "1",
                            } as React.CSSProperties
                          }
                          className="button-primary_icon"
                        >
                          <span
                            style={
                              { ["--index" as any]: "2" } as React.CSSProperties
                            }
                            className="button-primary_dot"
                          ></span>
                          <span
                            style={
                              { ["--index" as any]: "1" } as React.CSSProperties
                            }
                            className="button-primary_dot"
                          ></span>
                          <span
                            style={
                              { ["--index" as any]: "0" } as React.CSSProperties
                            }
                            className="button-primary_dot"
                          ></span>
                          <span
                            style={
                              { ["--index" as any]: "1" } as React.CSSProperties
                            }
                            className="button-primary_dot"
                          ></span>
                          <span
                            style={
                              { ["--index" as any]: "2" } as React.CSSProperties
                            }
                            className="button-primary_dot"
                          ></span>
                        </span>
                        <span
                          style={
                            {
                              ["--index-parent" as any]: "0",
                            } as React.CSSProperties
                          }
                          className="button-primary_icon"
                        >
                          <span
                            style={
                              { ["--index" as any]: "2" } as React.CSSProperties
                            }
                            className="button-primary_dot"
                          ></span>
                          <span
                            style={
                              { ["--index" as any]: "1" } as React.CSSProperties
                            }
                            className="button-primary_dot"
                          ></span>
                          <div
                            style={
                              { ["--index" as any]: "0" } as React.CSSProperties
                            }
                            className="button-primary_dot"
                          ></div>
                          <span
                            style={
                              { ["--index" as any]: "1" } as React.CSSProperties
                            }
                            className="button-primary_dot"
                          ></span>
                          <span
                            style={
                              { ["--index" as any]: "2" } as React.CSSProperties
                            }
                            className="button-primary_dot"
                          ></span>
                        </span>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="home-hero_tabs-wrapper">
              <div
                data-tabs-autoplay-duration="5000"
                data-tabs="wrapper"
                data-tabs-autoplay="true"
                className="tab-layout__wrap"
              >
                <div className="tab-layout__col">
                  <div role="tablist" className="tab-content__bottom">
                    <a
                      tab-target-1=""
                      data-tabs="content-item"
                      role="tab"
                      href="#"
                      className="tab-content__item w-inline-block"
                    >
                      <div className="tab-content__item-main">
                        <h2 className="content-item__heading">ai</h2>
                      </div>
                    </a>
                    <a
                      tab-target-2=""
                      data-tabs="content-item"
                      role="tab"
                      href="#"
                      className="tab-content__item w-inline-block"
                    >
                      <div className="tab-content__item-main">
                        <h2 className="content-item__heading">blockchain</h2>
                      </div>
                    </a>
                    <a
                      tab-target-3=""
                      data-tabs="content-item"
                      role="tab"
                      href="#"
                      className="tab-content__item w-inline-block"
                    >
                      <div className="tab-content__item-main">
                        <h2 className="content-item__heading">DePIN</h2>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="tab-layout__col">
                  <div
                    aria-live="polite"
                    role="region"
                    className="tab-visual__wrap"
                  >
                    <div
                      id="tab1"
                      data-tabs="visual-item"
                      role="tabpanel"
                      className="tab-visual__item active"
                    >
                      <div className="tab-visual__inner">
                        <div className="tab-visual__content">
                          <div className="tab-visual__content_text">
                            Lambda enables AI models to train on encrypted data,
                            expanding diversity while preserving integrity and
                            privacy.
                          </div>
                        </div>
                        <div className="tab-visual__image-wrapper">
                          <img
                            loading="eager"
                            src="/ai.svg"
                            alt="lambda features UI Components"
                            className="tab-image-1"
                          />
                          <img
                            loading="eager"
                            // src="https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/683725fec99124a246e0298a_e2c25c893320785274cba439f55e3ea0_home-hero-tab-1_tablet.svg"
                            src="/ai.svg"
                            alt="lambda features UI Components"
                            className="tab-image-1-tablet"
                          />
                          <img
                            loading="eager"
                            // src="https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/683725fe6a7a242a7affa93a_299a8ff9652951b7dcbc78942e859067_home-hero-tab-1_mobile.svg"
                            src="/ai.svg"
                            alt="lambda features UI Components"
                            className="tab-image-1-mobile"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      id="tab2"
                      data-tabs="visual-item"
                      role="tabpanel"
                      className="tab-visual__item"
                    >
                      <div className="tab-visual__inner">
                        <div className="tab-visual__content">
                          <div className="tab-visual__content_text">
                            Lambda provides critical confidentiality for
                            transparent blockchains, ensuring DeFi applications
                            and use cases operate securely with protection.
                          </div>
                        </div>
                        <div className="tab-visual__image-wrapper">
                          <img
                            loading="eager"
                            // src="https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/683725fea068a1e3b79be441_00d71ee4d4efc1c2bdcbdfd8f509a05b_home-hero-tab-2_desktop.svg"
                            src="/blockchain.svg"
                            alt="lambda features UI Components"
                            className="tab-image-3"
                          />
                          <img
                            loading="eager"
                            // src="https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/683725fe9addd4c582c32837_289bee88abd8625531b1d08d6a7dd182_home-hero-tab-2_tablet.svg"
                            src="/blockchain.svg"
                            alt="lambda features UI Components"
                            className="tab-image-3-tablet"
                          />
                          <img
                            loading="eager"
                            // src="https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/683725fe76bd2c092735f02c_733afb9652f7e0fcbc98fca8e185bd98_home-hero-tab-2_mobile.svg"
                            src="/blockchain.svg"
                            alt="lambda features UI Components"
                            className="tab-image-3-mobile"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      id="tab3"
                      data-tabs="visual-item"
                      role="tabpanel"
                      className="tab-visual__item"
                    >
                      <div className="tab-visual__inner">
                        <div className="tab-visual__content">
                          <div className="tab-visual__content_text">
                            Lambda empowers physical infrastructure networks to
                            unlock sensitive data insights, powering
                            decentralized economies of tomorrow securely.
                          </div>
                        </div>
                        <div className="tab-visual__image-wrapper">
                          <img
                            loading="eager"
                            // src="https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/683725fe94d0f9d7474205a4_7567ef9916a4f80688a6066f1e6110ad_home-hero-tab-3_desktop.svg"
                            src="/depin.svg"
                            alt="lambda features UI Components"
                            className="tab-image-5"
                          />
                          <img
                            loading="eager"
                            // src="https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/683725fe8b62de74dae7378a_3a90cf84cc2f5cc468336f807a8c0764_home-hero-tab-3_tablet.svg"
                            src="/depin.svg"
                            alt="lambda features UI Components"
                            className="tab-image-5-tablet"
                          />
                          <img
                            loading="eager"
                            // src="https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/683725fe71d9edd65eb04cb2_a577abf28b8cefe6264b4d1023cbe178_home-hero-tab-3_mobile.svg"
                            src="/depin.svg"
                            alt="lambda features UI Components"
                            className="tab-image-5-mobile"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-layout__js-embed w-embed w-script"></div>
              <div className="tab-layout__css-embed w-embed"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
