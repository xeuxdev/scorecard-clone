import { useEffect } from "react";
import { Outlet } from "react-router";
import { GlobalEmbed } from "~/components/global-embed";
import { Navbar } from "~/components/navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function PageLayout() {
  useEffect(() => {
    // Initialize GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Optional: Set default easing or other global settings
    gsap.defaults({ duration: 0.3, ease: "power2.inOut" });
  }, []);

  return (
    <div className="page-wrapper">
      <GlobalEmbed />
      <Navbar />

      <Outlet />
    </div>
  );
}
