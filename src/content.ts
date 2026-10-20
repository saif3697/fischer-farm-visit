import domeImage from "@/assets/fischer-dome.jpg";
import heroImage from "@/assets/fischer-hero.jpg";

const plantingCloseup = "https://i.ibb.co/4ZZVhmvT/image-png-2-K-20261019212946.jpg";
const plantingField = "https://i.ibb.co/dXzxN7H/image-png-2-K-20261019212617.jpg";

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
    strawberryPortrait: plantingField,
    fieldPortrait: plantingCloseup,
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
  experiences: {
    agriculture: {
      eyebrow: "Growing with intention",
      title: "The work begins in the soil.",
      text: "Each row begins with patient hands, living soil, and a belief that careful growing makes every season more meaningful.",
      image: plantingField,
      imageAlt: "A Fischer Farms grower preparing soil and young plants by hand",
      moments: ["Soil", "Planting", "Growing", "Stewardship"],
    },
    harvest: {
      eyebrow: "The rhythm of the field",
      title: "Harvest is a season you can feel.",
      text: "From the first green shoots to baskets shared around a table, harvest brings the story of the land into every hand.",
      image: plantingCloseup,
      imageAlt: "A Fischer Farms grower planting by hand beneath an open prairie sky",
      moments: ["Early growth", "First bloom", "Field harvest", "Sharing"],
    },
    camping: {
      eyebrow: "Stay close to the sky",
      title: "Wake up closer to the land.",
      text: "Slow mornings, firelit evenings, and a prairie sky that gives every gathering a little more room to breathe.",
      image: domeImage,
      imageAlt: "The Fischer Farms dome house glowing under the North Dakota night sky",
      moments: ["Quiet sites", "Morning light", "Field walks", "Firelight"],
    },
    investment: {
      eyebrow: "A long view of the land",
      title: "The land is not a backdrop. It is the business.",
      text: "Fischer Farms brings together thoughtful growing, seasonal hospitality, and meaningful experiences rooted in a tangible place.",
      image: plantingCloseup,
      imageAlt: "Hands caring for the soil at Fischer Farms",
      moments: ["Organic strawberries", "Farm stay", "Local honey", "Farm events"],
    },
  },
} as const;
