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
                  <span className="data-highlight active">Evaluate</span>,{" "}
                  <span className="data-highlight">Optimize</span>, and{" "}
                  <span className="data-highlight">Ship </span>
                  Enterprise AI Agents
                </h1>
              </div>
              <div className="home-hero_button-wrapper">
                <div className="home-hero_button-wrap">
                  <a
                    role="button"
                    aria-label="book a demo"
                    data-wf-native-id-path="73171c2c-15a8-f122-56fd-6e0d8936604f:efc7c909-95d3-68f4-c42c-b60d5912df26"
                    data-wf-ao-click-engagement-tracking="true"
                    data-wf-element-id="efc7c909-95d3-68f4-c42c-b60d5912df26"
                    data-wf-component-context="%5B%7B%22componentId%22%3A%22efc7c909-95d3-68f4-c42c-b60d5912df26%22%2C%22instanceId%22%3A%2273171c2c-15a8-f122-56fd-6e0d8936604f%22%7D%5D"
                    href="/book-a-demo"
                    className="button-secondary w-inline-block"
                  >
                    <span className="button-secondary_bg"></span>
                    <span
                      data-text="book a demo"
                      className="button-secondary_inner"
                    >
                      <span className="button-secondary_text">book a demo</span>
                    </span>
                  </a>
                </div>
                <div className="home-hero_button-wrap">
                  <a
                    className="button-primary w-inline-block"
                    data-wf-component-context="%5B%7B%22componentId%22%3A%22b4d05707-5080-4fcb-8c01-6a13b4c7bf00%22%2C%22instanceId%22%3A%2273171c2c-15a8-f122-56fd-6e0d89366052%22%7D%5D"
                    data-wf-element-id="b4d05707-5080-4fcb-8c01-6a13b4c7bf00"
                    data-wf-event-ids="157055388"
                    href="https://app.getscorecard.ai/"
                    aria-label="login"
                    role="button"
                    data-wf-native-id-path="73171c2c-15a8-f122-56fd-6e0d89366052:b4d05707-5080-4fcb-8c01-6a13b4c7bf00"
                    data-wf-ao-click-engagement-tracking="true"
                  >
                    <span className="button-primary_bg"></span>
                    <span data-text="login" className="button-primary_inner">
                      <span className="button-primary_text">login</span>
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
                      data-wf-native-id-path="07d1b63d-27bc-ce46-793e-e29656d6b975"
                      data-wf-ao-click-engagement-tracking="true"
                      data-wf-element-id="07d1b63d-27bc-ce46-793e-e29656d6b975"
                      href="#"
                      className="tab-content__item w-inline-block"
                    >
                      <div className="tab-content__item-main">
                        <h2 className="content-item__heading">Evaluate</h2>
                      </div>
                    </a>
                    <a
                      tab-target-2=""
                      data-tabs="content-item"
                      role="tab"
                      data-wf-native-id-path="bf211d0b-5fd0-bf72-b022-ccb4c76b5e18"
                      data-wf-ao-click-engagement-tracking="true"
                      data-wf-element-id="bf211d0b-5fd0-bf72-b022-ccb4c76b5e18"
                      href="#"
                      className="tab-content__item w-inline-block"
                    >
                      <div className="tab-content__item-main">
                        <h2 className="content-item__heading">OPTIMIZE</h2>
                      </div>
                    </a>
                    <a
                      tab-target-3=""
                      data-tabs="content-item"
                      role="tab"
                      data-wf-native-id-path="8bcfa200-3b36-ff29-dc2d-550e2ab9bd97"
                      data-wf-ao-click-engagement-tracking="true"
                      data-wf-element-id="8bcfa200-3b36-ff29-dc2d-550e2ab9bd97"
                      href="#"
                      className="tab-content__item w-inline-block"
                    >
                      <div className="tab-content__item-main">
                        <h2 className="content-item__heading">Ship</h2>
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
                            Test the performance of your Agent against vetted
                            metrics your whole team trusts
                          </div>
                          <div className="tab-visual__content_arrows">
                            <button
                              tab-link-3=""
                              className="tab-visual__content_arrow"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                viewBox="0 0 14 14"
                                fill="none"
                                className="tab-visual__content_arrow-svg is-flipped"
                              >
                                <path
                                  d="M4.27738 11.0924C4.63275 10.7145 5.22761 10.696 5.60551 11.0514C5.98339 11.4067 6.0019 12.0016 5.64652 12.3795L5.62406 12.4029C5.26868 12.7808 4.67382 12.7993 4.29593 12.4439C3.91805 12.0886 3.89954 11.4937 4.25492 11.1158L4.27738 11.0924ZM6.59965 8.63046C6.95916 8.31835 7.50415 8.32267 7.85843 8.65585C8.23631 9.01123 8.25385 9.60609 7.89847 9.98397L7.85355 10.0318L7.78422 10.0982C7.4247 10.4104 6.87975 10.4061 6.52543 10.0728C6.14774 9.71744 6.13007 9.12254 6.48539 8.74472L6.53031 8.69686L6.59965 8.63046ZM8.7598 6.28085C9.10458 5.93802 9.64857 5.9176 10.0166 6.21932L10.0879 6.28475L10.1104 6.30722C10.4675 6.66633 10.4758 7.24392 10.1289 7.61288L10.1065 7.63729C9.7511 8.01515 9.15623 8.0327 8.77836 7.67733C8.5777 7.48855 8.47909 7.2325 8.48344 6.97714C8.47533 6.72582 8.56744 6.47214 8.7598 6.28085ZM6.50687 4.01522C6.85182 3.67223 7.39661 3.65247 7.76468 3.95468L7.835 4.01913L7.8809 4.06503L7.94437 4.13632C8.24434 4.50608 8.22187 5.0502 7.87699 5.39315C7.5322 5.73598 6.98821 5.75546 6.62015 5.4537L6.54886 5.38925L6.50297 5.34335L6.43949 5.27206C6.13958 4.90229 6.16201 4.35816 6.50687 4.01522ZM4.27738 1.77304C4.62227 1.43017 5.16617 1.41048 5.53422 1.71249L5.60551 1.77694L5.62797 1.7994L5.69242 1.87069C5.99241 2.24046 5.96895 2.78457 5.62406 3.12753C5.27927 3.47036 4.73529 3.49083 4.36722 3.18905L4.29593 3.12362L4.27347 3.10116L4.20902 3.02987C3.90921 2.66011 3.93255 2.11593 4.27738 1.77304Z"
                                  fill="#1A1918"
                                ></path>
                              </svg>
                            </button>
                            <button
                              tab-link-2=""
                              className="tab-visual__content_arrow"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                viewBox="0 0 14 14"
                                fill="none"
                                className="tab-visual__content_arrow-svg"
                              >
                                <path
                                  d="M4.27738 11.0924C4.63275 10.7145 5.22761 10.696 5.60551 11.0514C5.98339 11.4067 6.0019 12.0016 5.64652 12.3795L5.62406 12.4029C5.26868 12.7808 4.67382 12.7993 4.29593 12.4439C3.91805 12.0886 3.89954 11.4937 4.25492 11.1158L4.27738 11.0924ZM6.59965 8.63046C6.95916 8.31835 7.50415 8.32267 7.85843 8.65585C8.23631 9.01123 8.25385 9.60609 7.89847 9.98397L7.85355 10.0318L7.78422 10.0982C7.4247 10.4104 6.87975 10.4061 6.52543 10.0728C6.14774 9.71744 6.13007 9.12254 6.48539 8.74472L6.53031 8.69686L6.59965 8.63046ZM8.7598 6.28085C9.10458 5.93802 9.64857 5.9176 10.0166 6.21932L10.0879 6.28475L10.1104 6.30722C10.4675 6.66633 10.4758 7.24392 10.1289 7.61288L10.1065 7.63729C9.7511 8.01515 9.15623 8.0327 8.77836 7.67733C8.5777 7.48855 8.47909 7.2325 8.48344 6.97714C8.47533 6.72582 8.56744 6.47214 8.7598 6.28085ZM6.50687 4.01522C6.85182 3.67223 7.39661 3.65247 7.76468 3.95468L7.835 4.01913L7.8809 4.06503L7.94437 4.13632C8.24434 4.50608 8.22187 5.0502 7.87699 5.39315C7.5322 5.73598 6.98821 5.75546 6.62015 5.4537L6.54886 5.38925L6.50297 5.34335L6.43949 5.27206C6.13958 4.90229 6.16201 4.35816 6.50687 4.01522ZM4.27738 1.77304C4.62227 1.43017 5.16617 1.41048 5.53422 1.71249L5.60551 1.77694L5.62797 1.7994L5.69242 1.87069C5.99241 2.24046 5.96895 2.78457 5.62406 3.12753C5.27927 3.47036 4.73529 3.49083 4.36722 3.18905L4.29593 3.12362L4.27347 3.10116L4.20902 3.02987C3.90921 2.66011 3.93255 2.11593 4.27738 1.77304Z"
                                  fill="#1A1918"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="tab-visual__image-wrapper">
                          <img
                            loading="eager"
                            src="https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/683725fec9c436cbfd69524a_a883881d4b654cb1bc0e62fe8b84dfad_home-hero-tab-1_desktop.svg"
                            alt="Scorecard features UI Components"
                            className="tab-image-1"
                          />
                          <img
                            loading="eager"
                            src="https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/683725fec99124a246e0298a_e2c25c893320785274cba439f55e3ea0_home-hero-tab-1_tablet.svg"
                            alt="Scorecard features UI Components"
                            className="tab-image-1-tablet"
                          />
                          <img
                            loading="eager"
                            src="https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/683725fe6a7a242a7affa93a_299a8ff9652951b7dcbc78942e859067_home-hero-tab-1_mobile.svg"
                            alt="Scorecard features UI Components"
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
                            Create experiments and quickly test your best ideas
                            in a powerful AI laboratory
                          </div>
                          <div className="tab-visual__content_arrows">
                            <button
                              tab-link-1=""
                              className="tab-visual__content_arrow"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                viewBox="0 0 14 14"
                                fill="none"
                                className="tab-visual__content_arrow-svg is-flipped"
                              >
                                <path
                                  d="M4.27738 11.0924C4.63275 10.7145 5.22761 10.696 5.60551 11.0514C5.98339 11.4067 6.0019 12.0016 5.64652 12.3795L5.62406 12.4029C5.26868 12.7808 4.67382 12.7993 4.29593 12.4439C3.91805 12.0886 3.89954 11.4937 4.25492 11.1158L4.27738 11.0924ZM6.59965 8.63046C6.95916 8.31835 7.50415 8.32267 7.85843 8.65585C8.23631 9.01123 8.25385 9.60609 7.89847 9.98397L7.85355 10.0318L7.78422 10.0982C7.4247 10.4104 6.87975 10.4061 6.52543 10.0728C6.14774 9.71744 6.13007 9.12254 6.48539 8.74472L6.53031 8.69686L6.59965 8.63046ZM8.7598 6.28085C9.10458 5.93802 9.64857 5.9176 10.0166 6.21932L10.0879 6.28475L10.1104 6.30722C10.4675 6.66633 10.4758 7.24392 10.1289 7.61288L10.1065 7.63729C9.7511 8.01515 9.15623 8.0327 8.77836 7.67733C8.5777 7.48855 8.47909 7.2325 8.48344 6.97714C8.47533 6.72582 8.56744 6.47214 8.7598 6.28085ZM6.50687 4.01522C6.85182 3.67223 7.39661 3.65247 7.76468 3.95468L7.835 4.01913L7.8809 4.06503L7.94437 4.13632C8.24434 4.50608 8.22187 5.0502 7.87699 5.39315C7.5322 5.73598 6.98821 5.75546 6.62015 5.4537L6.54886 5.38925L6.50297 5.34335L6.43949 5.27206C6.13958 4.90229 6.16201 4.35816 6.50687 4.01522ZM4.27738 1.77304C4.62227 1.43017 5.16617 1.41048 5.53422 1.71249L5.60551 1.77694L5.62797 1.7994L5.69242 1.87069C5.99241 2.24046 5.96895 2.78457 5.62406 3.12753C5.27927 3.47036 4.73529 3.49083 4.36722 3.18905L4.29593 3.12362L4.27347 3.10116L4.20902 3.02987C3.90921 2.66011 3.93255 2.11593 4.27738 1.77304Z"
                                  fill="#1A1918"
                                ></path>
                              </svg>
                            </button>
                            <button
                              tab-link-3=""
                              className="tab-visual__content_arrow"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                viewBox="0 0 14 14"
                                fill="none"
                                className="tab-visual__content_arrow-svg"
                              >
                                <path
                                  d="M4.27738 11.0924C4.63275 10.7145 5.22761 10.696 5.60551 11.0514C5.98339 11.4067 6.0019 12.0016 5.64652 12.3795L5.62406 12.4029C5.26868 12.7808 4.67382 12.7993 4.29593 12.4439C3.91805 12.0886 3.89954 11.4937 4.25492 11.1158L4.27738 11.0924ZM6.59965 8.63046C6.95916 8.31835 7.50415 8.32267 7.85843 8.65585C8.23631 9.01123 8.25385 9.60609 7.89847 9.98397L7.85355 10.0318L7.78422 10.0982C7.4247 10.4104 6.87975 10.4061 6.52543 10.0728C6.14774 9.71744 6.13007 9.12254 6.48539 8.74472L6.53031 8.69686L6.59965 8.63046ZM8.7598 6.28085C9.10458 5.93802 9.64857 5.9176 10.0166 6.21932L10.0879 6.28475L10.1104 6.30722C10.4675 6.66633 10.4758 7.24392 10.1289 7.61288L10.1065 7.63729C9.7511 8.01515 9.15623 8.0327 8.77836 7.67733C8.5777 7.48855 8.47909 7.2325 8.48344 6.97714C8.47533 6.72582 8.56744 6.47214 8.7598 6.28085ZM6.50687 4.01522C6.85182 3.67223 7.39661 3.65247 7.76468 3.95468L7.835 4.01913L7.8809 4.06503L7.94437 4.13632C8.24434 4.50608 8.22187 5.0502 7.87699 5.39315C7.5322 5.73598 6.98821 5.75546 6.62015 5.4537L6.54886 5.38925L6.50297 5.34335L6.43949 5.27206C6.13958 4.90229 6.16201 4.35816 6.50687 4.01522ZM4.27738 1.77304C4.62227 1.43017 5.16617 1.41048 5.53422 1.71249L5.60551 1.77694L5.62797 1.7994L5.69242 1.87069C5.99241 2.24046 5.96895 2.78457 5.62406 3.12753C5.27927 3.47036 4.73529 3.49083 4.36722 3.18905L4.29593 3.12362L4.27347 3.10116L4.20902 3.02987C3.90921 2.66011 3.93255 2.11593 4.27738 1.77304Z"
                                  fill="#1A1918"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="tab-visual__image-wrapper">
                          <img
                            loading="eager"
                            src="https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/683725fea068a1e3b79be441_00d71ee4d4efc1c2bdcbdfd8f509a05b_home-hero-tab-2_desktop.svg"
                            alt="Scorecard features UI Components"
                            className="tab-image-3"
                          />
                          <img
                            loading="eager"
                            src="https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/683725fe9addd4c582c32837_289bee88abd8625531b1d08d6a7dd182_home-hero-tab-2_tablet.svg"
                            alt="Scorecard features UI Components"
                            className="tab-image-3-tablet"
                          />
                          <img
                            loading="eager"
                            src="https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/683725fe76bd2c092735f02c_733afb9652f7e0fcbc98fca8e185bd98_home-hero-tab-2_mobile.svg"
                            alt="Scorecard features UI Components"
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
                            Manage and deploy agents to production without
                            touching an IDE. Identify &amp;address real world
                            usage issues
                          </div>
                          <div className="tab-visual__content_arrows">
                            <button
                              tab-link-2=""
                              className="tab-visual__content_arrow"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                viewBox="0 0 14 14"
                                fill="none"
                                className="tab-visual__content_arrow-svg is-flipped"
                              >
                                <path
                                  d="M4.27738 11.0924C4.63275 10.7145 5.22761 10.696 5.60551 11.0514C5.98339 11.4067 6.0019 12.0016 5.64652 12.3795L5.62406 12.4029C5.26868 12.7808 4.67382 12.7993 4.29593 12.4439C3.91805 12.0886 3.89954 11.4937 4.25492 11.1158L4.27738 11.0924ZM6.59965 8.63046C6.95916 8.31835 7.50415 8.32267 7.85843 8.65585C8.23631 9.01123 8.25385 9.60609 7.89847 9.98397L7.85355 10.0318L7.78422 10.0982C7.4247 10.4104 6.87975 10.4061 6.52543 10.0728C6.14774 9.71744 6.13007 9.12254 6.48539 8.74472L6.53031 8.69686L6.59965 8.63046ZM8.7598 6.28085C9.10458 5.93802 9.64857 5.9176 10.0166 6.21932L10.0879 6.28475L10.1104 6.30722C10.4675 6.66633 10.4758 7.24392 10.1289 7.61288L10.1065 7.63729C9.7511 8.01515 9.15623 8.0327 8.77836 7.67733C8.5777 7.48855 8.47909 7.2325 8.48344 6.97714C8.47533 6.72582 8.56744 6.47214 8.7598 6.28085ZM6.50687 4.01522C6.85182 3.67223 7.39661 3.65247 7.76468 3.95468L7.835 4.01913L7.8809 4.06503L7.94437 4.13632C8.24434 4.50608 8.22187 5.0502 7.87699 5.39315C7.5322 5.73598 6.98821 5.75546 6.62015 5.4537L6.54886 5.38925L6.50297 5.34335L6.43949 5.27206C6.13958 4.90229 6.16201 4.35816 6.50687 4.01522ZM4.27738 1.77304C4.62227 1.43017 5.16617 1.41048 5.53422 1.71249L5.60551 1.77694L5.62797 1.7994L5.69242 1.87069C5.99241 2.24046 5.96895 2.78457 5.62406 3.12753C5.27927 3.47036 4.73529 3.49083 4.36722 3.18905L4.29593 3.12362L4.27347 3.10116L4.20902 3.02987C3.90921 2.66011 3.93255 2.11593 4.27738 1.77304Z"
                                  fill="#1A1918"
                                ></path>
                              </svg>
                            </button>
                            <button
                              tab-link-1=""
                              className="tab-visual__content_arrow"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                viewBox="0 0 14 14"
                                fill="none"
                                className="tab-visual__content_arrow-svg"
                              >
                                <path
                                  d="M4.27738 11.0924C4.63275 10.7145 5.22761 10.696 5.60551 11.0514C5.98339 11.4067 6.0019 12.0016 5.64652 12.3795L5.62406 12.4029C5.26868 12.7808 4.67382 12.7993 4.29593 12.4439C3.91805 12.0886 3.89954 11.4937 4.25492 11.1158L4.27738 11.0924ZM6.59965 8.63046C6.95916 8.31835 7.50415 8.32267 7.85843 8.65585C8.23631 9.01123 8.25385 9.60609 7.89847 9.98397L7.85355 10.0318L7.78422 10.0982C7.4247 10.4104 6.87975 10.4061 6.52543 10.0728C6.14774 9.71744 6.13007 9.12254 6.48539 8.74472L6.53031 8.69686L6.59965 8.63046ZM8.7598 6.28085C9.10458 5.93802 9.64857 5.9176 10.0166 6.21932L10.0879 6.28475L10.1104 6.30722C10.4675 6.66633 10.4758 7.24392 10.1289 7.61288L10.1065 7.63729C9.7511 8.01515 9.15623 8.0327 8.77836 7.67733C8.5777 7.48855 8.47909 7.2325 8.48344 6.97714C8.47533 6.72582 8.56744 6.47214 8.7598 6.28085ZM6.50687 4.01522C6.85182 3.67223 7.39661 3.65247 7.76468 3.95468L7.835 4.01913L7.8809 4.06503L7.94437 4.13632C8.24434 4.50608 8.22187 5.0502 7.87699 5.39315C7.5322 5.73598 6.98821 5.75546 6.62015 5.4537L6.54886 5.38925L6.50297 5.34335L6.43949 5.27206C6.13958 4.90229 6.16201 4.35816 6.50687 4.01522ZM4.27738 1.77304C4.62227 1.43017 5.16617 1.41048 5.53422 1.71249L5.60551 1.77694L5.62797 1.7994L5.69242 1.87069C5.99241 2.24046 5.96895 2.78457 5.62406 3.12753C5.27927 3.47036 4.73529 3.49083 4.36722 3.18905L4.29593 3.12362L4.27347 3.10116L4.20902 3.02987C3.90921 2.66011 3.93255 2.11593 4.27738 1.77304Z"
                                  fill="#1A1918"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="tab-visual__image-wrapper">
                          <img
                            loading="eager"
                            src="https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/683725fe94d0f9d7474205a4_7567ef9916a4f80688a6066f1e6110ad_home-hero-tab-3_desktop.svg"
                            alt="Scorecard features UI Components"
                            className="tab-image-5"
                          />
                          <img
                            loading="eager"
                            src="https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/683725fe8b62de74dae7378a_3a90cf84cc2f5cc468336f807a8c0764_home-hero-tab-3_tablet.svg"
                            alt="Scorecard features UI Components"
                            className="tab-image-5-tablet"
                          />
                          <img
                            loading="eager"
                            src="https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/683725fe71d9edd65eb04cb2_a577abf28b8cefe6264b4d1023cbe178_home-hero-tab-3_mobile.svg"
                            alt="Scorecard features UI Components"
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
