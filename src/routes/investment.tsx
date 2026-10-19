import { createFileRoute } from "@tanstack/react-router";
import { ExperiencePage } from "@/components/experience-page";

export const Route = createFileRoute("/investment")({
  head: () => ({ meta: [{ title: "Investment | Fischer Farms" }, { name: "description", content: "A thoughtful look at land, agriculture, and experience-led farming." }, { property: "og:title", content: "Investment | Fischer Farms" }, { property: "og:description", content: "A thoughtful look at land, agriculture, and experience-led farming." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <ExperiencePage experience="investment" />,
});