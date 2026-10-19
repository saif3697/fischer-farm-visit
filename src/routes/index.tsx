import { createFileRoute } from "@tanstack/react-router";
import { PanoramaIntro } from "@/components/panorama-intro";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Fischer Farms | Enter the Farm" }, { name: "description", content: "Enter Fischer Farms, a cultivated North Dakota farm experience." }, { property: "og:title", content: "Fischer Farms | Enter the Farm" }, { property: "og:description", content: "Enter Fischer Farms, a cultivated North Dakota farm experience." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: PanoramaIntro,
});
