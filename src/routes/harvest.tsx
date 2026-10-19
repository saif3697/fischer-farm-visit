import { createFileRoute } from "@tanstack/react-router";
import { ExperiencePage } from "@/components/experience-page";

export const Route = createFileRoute("/harvest")({
  head: () => ({ meta: [{ title: "Harvest | Fischer Farms" }, { name: "description", content: "Follow the field from the first green shoots to a shared harvest." }, { property: "og:title", content: "Harvest | Fischer Farms" }, { property: "og:description", content: "Follow the field from the first green shoots to a shared harvest." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <ExperiencePage experience="harvest" />,
});