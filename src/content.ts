import domeImage from "@/assets/fischer-dome.jpg";
import heroImage from "@/assets/fischer-hero.jpg";

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
  },
} as const;