import { GlobalEmbed } from "~/components/global-embed";
import { Navbar } from "~/components/navbar";
import { PageEmbed } from "~/components/page-embed";
import { ControlSection } from "~/components/sections/control";
import { CTASection } from "~/components/sections/cta";
import { HeroSection } from "~/components/sections/hero";
import HomeBlackBox from "~/components/sections/hero-blackbox";
import { MethodSection } from "~/components/sections/method";
import { ProblemSection } from "~/components/sections/problem";
import { SolutionSection } from "~/components/sections/solution";
import type { Route } from "./+types/home";
import { Footer } from "~/components/sections/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home | Scorecard" },
    {
      name: "description",
      content:
        "Looking for a simple way to build and test LLM apps? Use Scorecard to deliver predictable AI experiences that improve with every update.",
    },
    { property: "og:title", content: "Home | Scorecard" },
    {
      property: "og:description",
      content:
        "Looking for a simple way to build and test LLM apps? Use Scorecard to deliver predictable AI experiences that improve with every update.",
    },
    {
      property: "og:image",
      content:
        "https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/680be2472e0c42225eb5c6fb_bb737b32df1d17f3492808c99d78bb0b_scorecard-open-graph.jpg",
    },
    { property: "twitter:title", content: "Home | Scorecard" },
    {
      property: "twitter:description",
      content:
        "Looking for a simple way to build and test LLM apps? Use Scorecard to deliver predictable AI experiences that improve with every update.",
    },
    {
      property: "twitter:image",
      content:
        "https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/680be2472e0c42225eb5c6fb_bb737b32df1d17f3492808c99d78bb0b_scorecard-open-graph.jpg",
    },
    { property: "og:type", content: "website" },
  ];
}

export default function Home() {
  return (
    <div className="page-wrapper">
      <GlobalEmbed />
      <Navbar />
      <PageEmbed />
      <main className="main-wrapper is-padding-start">
        <HeroSection />
        <HomeBlackBox />
        <ProblemSection />
        <SolutionSection />
        <CTASection />
        <MethodSection />
        <ControlSection />
      </main>
      <Footer />
    </div>
  );
}
