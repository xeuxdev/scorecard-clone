import { PageEmbed } from "~/components/page-embed";
import { ControlSection } from "~/components/sections/control";
import { Footer } from "~/components/sections/footer";
import { HeroSection } from "~/components/sections/hero";
import HomeBlackBox from "~/components/sections/hero-blackbox";
import { MethodSection } from "~/components/sections/method";
import { ProblemSection } from "~/components/sections/problem";
import { SolutionSection } from "~/components/sections/solution";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home | Lambda" },
    {
      name: "description",
      content:
        "Looking for a simple way to build and test LLM apps? Use Lambda to deliver predictable AI experiences that improve with every update.",
    },
    { property: "og:title", content: "Home | Lambda" },
    {
      property: "og:description",
      content:
        "Encrypt everything. Compute anything. Deploy today with Confidential Computing.",
    },
    {
      property: "og:image",
      content:
        "https://cdn.prod.website-files.com/68012f5eeeda4ace0fca1c46/680be2472e0c42225eb5c6fb_bb737b32df1d17f3492808c99d78bb0b_scorecard-open-graph.jpg",
    },
    { property: "twitter:title", content: "Home | Lambda" },
    {
      property: "twitter:description",
      content:
        "Encrypt everything. Compute anything. Deploy today with Confidential Computing.",
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
    <>
      <PageEmbed />
      <main className="main-wrapper is-padding-start">
        <HeroSection />
        <HomeBlackBox />
        <ProblemSection />
        <SolutionSection />
        <MethodSection />
        <ControlSection />
      </main>
      <Footer />
    </>
  );
}
