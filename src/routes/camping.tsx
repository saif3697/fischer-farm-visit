import { createFileRoute } from "@tanstack/react-router";
import { ExperiencePage } from "@/components/experience-page";

export const Route = createFileRoute("/camping")({
  head: () => ({ meta: [{ title: "Camping | Fischer Farms" }, { name: "description", content: "Spend slow days and star-filled nights closer to the land." }, { property: "og:title", content: "Camping | Fischer Farms" }, { property: "og:description", content: "Spend slow days and star-filled nights closer to the land." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <ExperiencePage experience="camping" />,
});