import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/farm-site";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Fischer Farms | North Dakota" }, { name: "description", content: "A warm, considered farm experience in North Dakota." }, { property: "og:title", content: "Fischer Farms | North Dakota" }, { property: "og:description", content: "A warm, considered farm experience in North Dakota." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: HomePage,
});
