import { useEffect } from "react";

export function ExtraScripts(): null {
  useEffect(() => {
    // Local references / guards for globals used by the original script
    let rafId: number | null = null;
    let checkScrollRaf: number | null = null;

    // Lenis + GSAP + split type behaviour (runs immediately on mount)
    (function runDomScripts() {
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

          // Avoid flash of unstyled content
          try {
            (window as any).gsap.set(".page-wrapper", { opacity: 1 });
          } catch (e) {}
        }
      } catch (e) {}
    })();

    // Cleanup on unmount
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (checkScrollRaf) cancelAnimationFrame(checkScrollRaf);
      // remove appended jQuery script
    };
  }, []);

  return null;
}
