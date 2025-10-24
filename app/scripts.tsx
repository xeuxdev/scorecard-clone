import React, { useEffect } from "react";

export function ExtraScripts(): null {
  useEffect(() => {
    // Local references / guards for globals used by the original script
    let lenis: any = (window as any).lenis;
    let rafId: number | null = null;
    let checkScrollRaf: number | null = null;

    // Helper to safely detect if in Webflow editor
    let inWebflowEditor = false;
    try {
      inWebflowEditor = !!(
        (window as any).Webflow &&
        (window as any).Webflow.env &&
        (window as any).Webflow.env("editor") !== undefined
      );
    } catch (e) {
      inWebflowEditor = false;
    }

    // Lenis + GSAP + split type behaviour (runs immediately on mount)
    (function runDomScripts() {
      // Only run Lenis block when NOT in the webflow editor
      if (!inWebflowEditor) {
        try {
          // create Lenis if not already present
          if (!(window as any).Lenis) {
            // Lenis is expected to be provided globally elsewhere
            // If it's not present, skip initialization.
          } else {
            lenis = new (window as any).Lenis({
              lerp: 0.5,
              wheelMultiplier: 1,
              gestureOrientation: "vertical",
              normalizeWheel: false,
              smoothTouch: false,
            });

            const videoWrappers = document.querySelectorAll(
              ".common-lock-up_video.w-video.w-embed"
            );
            let isScrolling = false;
            let lastScrollPos = window.scrollY;

            function checkScroll() {
              const currentScrollPos = window.scrollY;

              if (currentScrollPos !== lastScrollPos) {
                isScrolling = true;
                videoWrappers.forEach((wrapper) => {
                  (wrapper as HTMLElement).style.pointerEvents = "none";
                });
              } else {
                isScrolling = false;
                videoWrappers.forEach((wrapper) => {
                  (wrapper as HTMLElement).style.pointerEvents = "auto";
                });
              }

              lastScrollPos = currentScrollPos;
              checkScrollRaf = requestAnimationFrame(checkScroll);
            }

            checkScrollRaf = requestAnimationFrame(checkScroll);

            // Back to Top Button Logic
            const backToTop = document.getElementById("backToTop");

            const backToTopClick = (e: Event) => {
              e.preventDefault();
              lenis.scrollTo(0, {
                duration: 2.5,
                easing: (t: number) => 1 - Math.pow(1 - t, 3),
              });
            };

            if (backToTop) {
              backToTop.addEventListener("click", backToTopClick);

              // Show button after scrolling 300px
              const onScrollShow = () => {
                if (window.scrollY > 300) {
                  (backToTop as HTMLElement).style.opacity = "1";
                  (backToTop as HTMLElement).style.pointerEvents = "auto";
                } else {
                  (backToTop as HTMLElement).style.opacity = "0";
                  (backToTop as HTMLElement).style.pointerEvents = "none";
                }
              };
              window.addEventListener("scroll", onScrollShow);
            }

            function raf(time: number) {
              lenis.raf(time);
              rafId = requestAnimationFrame(raf);
            }
            rafId = requestAnimationFrame(raf);
          }
        } catch (e) {
          // Fail silently if Lenis/related globals are not available
          // console.warn('Lenis init skipped', e)
        }
      }

      // Toggle Scroll using jQuery selector — will run once jQuery is available (see loader below)

      // Split Text Code
      let typeSplit: any;
      function runSplitType() {
        try {
          if ((window as any).SplitType) {
            typeSplit = new (window as any).SplitType("[split-text]", {
              types: "lines, words, chars",
              tagName: "span",
            });
          }
        } catch (e) {
          // ignore
        }
      }

      runSplitType();

      // Run the code when window width changes
      let windowWidth = window.innerWidth;
      const onResize = () => {
        if (windowWidth !== window.innerWidth) {
          windowWidth = window.innerWidth;
          try {
            typeSplit?.revert();
          } catch (e) {}
          runSplitType();
        }
      };
      window.addEventListener("resize", onResize);

      //Register GSAP Scrolltrigger
      try {
        if ((window as any).gsap && (window as any).ScrollTrigger) {
          (window as any).gsap.registerPlugin((window as any).ScrollTrigger);

          //Fade In Animations (jQuery selector originally)
          try {
            const fadeIns = document.querySelectorAll("[fade-in]");
            fadeIns.forEach((el) => {
              const timeline = (window as any).gsap.timeline({
                scrollTrigger: {
                  trigger: el,
                  start: "top 65%",
                  end: "bottom bottom",
                },
              });
              timeline.from((el as HTMLElement).children, {
                opacity: 0,
                y: "4rem",
                duration: 1.2,
                ease: "power2.out",
                stagger: { amount: 0.15 },
              });
            });
          } catch (e) {}

          // Nav Change State
          try {
            const navWrappers = document.querySelectorAll(".nav_fixed");
            navWrappers.forEach((wrapper) => {
              const nav = wrapper.querySelector(".nav");
              if (!nav) return;
              (window as any).gsap.timeline({
                scrollTrigger: {
                  trigger: "body",
                  start: "top top",
                  end: "+=80",
                  onEnterBack: () => {
                    (nav as HTMLElement).classList.remove("is-scrolled");
                  },
                  onLeave: () => {
                    (nav as HTMLElement).classList.add("is-scrolled");
                  },
                },
              });
            });
          } catch (e) {}

          // Nav Button Change State
          const onScrollNav = () => {
            if (window.innerWidth < 992) return;
            const nav = document.querySelector(".nav");
            const navButtons = document.querySelector(".nav_menu-buttons");
            if (window.scrollY > 80) {
              nav?.classList?.add("scrolled");
              (navButtons as HTMLElement | null)?.classList?.add("show");
            } else {
              nav?.classList?.remove("scrolled");
              (navButtons as HTMLElement | null)?.classList?.remove("show");
            }
          };
          window.addEventListener("scroll", onScrollNav);

          //Parallax Images:
          try {
            const parallaxEls = document.querySelectorAll("[parallax-image]");
            parallaxEls.forEach((element) => {
              (window as any).gsap
                .timeline({
                  scrollTrigger: {
                    trigger: element,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                  },
                })
                .from(element, { yPercent: -20, ease: "none" });
            });
          } catch (e) {}

          // Avoid flash of unstyled content
          try {
            (window as any).gsap.set(".page-wrapper", { opacity: 1 });
          } catch (e) {}
        }
      } catch (e) {}
    })();

    // Load jQuery and run jQuery-dependent parts (tabs, highlights, toggle scroll)
    const jqScript = document.createElement("script");
    jqScript.src = "https://code.jquery.com/jquery-3.6.0.min.js";
    jqScript.async = true;
    jqScript.onload = () => {
      const $ = (window as any).jQuery || (window as any).$;
      if (!$) return;

      // Toggle Scroll (data-lenis-toggle)
      try {
        ($("[data-lenis-toggle]") as any).on("click", function (this: any) {
          $(this).toggleClass("stop-scroll");
          if ($(this).hasClass("stop-scroll")) {
            (lenis as any)?.stop?.();
          } else {
            (lenis as any)?.start?.();
          }
        });
      } catch (e) {}

      // Tabs / tabControllers usage
      try {
        const controller = (window as any).tabControllers?.[0];
        if (controller) {
          ($("[tab-link-1]") as any).on("click", function (this: any) {
            controller.switchTab(0);
          });
          ($("[tab-link-2]") as any).on("click", function (this: any) {
            controller.switchTab(1);
          });
          ($("[tab-link-3]") as any).on("click", function (this: any) {
            controller.switchTab(2);
          });
        } else {
          // console.warn('Tab controller not found!');
        }
      } catch (e) {}

      // Highlight logic using MutationObserver
      try {
        const highlightTrigger =
          document.querySelectorAll(".tab-content__item");
        const highlightTarget = document.querySelectorAll(".data-highlight");

        const observer = new MutationObserver((mutationsList) => {
          mutationsList.forEach((mutation) => {
            if (
              mutation.type === "attributes" &&
              (mutation as any).attributeName === "class"
            ) {
              const target = mutation.target as Element;
              const index = Array.from(highlightTrigger).indexOf(
                target as Element
              );
              if ((target as HTMLElement).classList.contains("active")) {
                highlightTarget[index]?.classList.add("active");
              } else {
                highlightTarget[index]?.classList.remove("active");
              }
            }
          });
        });

        highlightTrigger.forEach((trigger) => {
          observer.observe(trigger, {
            attributes: true,
            attributeFilter: ["class"],
          });
        });
      } catch (e) {}
    };
    document.body.appendChild(jqScript);

    // Cleanup on unmount
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (checkScrollRaf) cancelAnimationFrame(checkScrollRaf);
      // remove appended jQuery script
      if (jqScript && jqScript.parentNode)
        jqScript.parentNode.removeChild(jqScript);
    };
  }, []);

  return null;
}
