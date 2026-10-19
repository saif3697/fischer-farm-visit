import { createFileRoute } from "@tanstack/react-router";
import { ExperiencePage } from "@/components/experience-page";

export const Route = createFileRoute("/agriculture")({
  head: () => ({ meta: [{ title: "Agriculture | Fischer Farms" }, { name: "description", content: "Discover the soil, planting, and stewardship behind Fischer Farms." }, { property: "og:title", content: "Agriculture | Fischer Farms" }, { property: "og:description", content: "Discover the soil, planting, and stewardship behind Fischer Farms." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <ExperiencePage experience="agriculture" />,
});