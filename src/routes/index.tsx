import { createFileRoute } from "@tanstack/react-router";
import { PanoramaIntro } from "@/components/panorama-intro";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Fischer Farms | Organic Strawberry Farm" }, { name: "description", content: "Fischer Farms, an organic strawberry farm in North Dakota." }, { property: "og:title", content: "Fischer Farms | Organic Strawberry Farm" }, { property: "og:description", content: "Fischer Farms, an organic strawberry farm in North Dakota." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: PanoramaIntro,
});
