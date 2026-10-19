import domeImage from "@/assets/fischer-dome.jpg";
import heroImage from "@/assets/fischer-hero.jpg";
import strawberryPortrait from "@/assets/fischer-strawberries.jpg.asset.json";
import fieldPortrait from "@/assets/fischer-field-portrait.jpg.asset.json";

export const site = {
  brand: "FISCHER FARMS",
  tagline: "Where the land gives, and luxury grows.",
  location: "North Dakota, USA",
  owners: { name: "Wade & Breann Fischer" },
  contact: {
    phone: "701-570-9886",
    phoneHref: "tel:7015709886",
    email: "Wade.breann@gmail.com",
    emailHref: "mailto:Wade.breann@gmail.com",
  },
  services: ["Organic U-Pick Strawberries", "Dome House Farm Stay", "Local Raw Honey", "Farm Events & Rentals"],
  images: {
    intro: heroImage,
    strawberryField: heroImage,
    domeHouse: domeImage,
    strawberryPortrait: strawberryPortrait.url,
    fieldPortrait: fieldPortrait.url,
  },
  introStory: {
    eyebrow: "A quiet investment in the land",
    headline: "The land is not a backdrop. It is the business.",
    paragraphs: [
      "Fischer Farms is a working estate in North Dakota built on four steady pillars: organic U-Pick strawberries, a luxury dome-house farm stay, small-batch raw honey, and private farm events. Each one is a revenue stream. Together, they are a resilient, seasonal, land-backed business model.",
      "Agriculture has always been the quietest long-term play. Land appreciates. Demand for traceable, organic food keeps rising. And experience-driven travel — sleeping under a real sky, picking your own fruit, tasting honey the same week it was harvested — commands a premium that no city hotel can replicate.",
      "We are not selling produce. We are selling a return to something real. And that, in a world of screens, is the most valuable asset of all.",
    ],
  },
} as const;