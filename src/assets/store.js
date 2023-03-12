import { readable } from "svelte/store";

export const store = readable({
  picturePortfolio: {
    path: "pictures/portfolioPicture/",
    src: [
      "landing.png",
      "cameras.png",
      "gallery.png",
      "slideshow.png",
      "menu.png",
      "mobile.png",
    ],
    alt: [
      "landing",
      "cameras",
      "gallery",
      "slideshow",
      "menu",
      "mobile version",
    ],
    speed: [1.1, 0.9, 1, 1.1, 1.05, 0.9],
  },
  quantumPhysics: {
    path: "pictures/quantumPhysics/",
    src: [
      "landing.png",
      "atomModel.png",
      "figures.png",
      "duality.png",
      "slits.png",
      "menu.png",
      "landingDark.png",
    ],
    alt: [
      "landing",
      "atom models",
      "great figures",
      "wave-particle duatlity",
      "Young's slits",
      "menu",
      "landing dark",
    ],
    speed: [0.9, 1.1, 1.15, 1.05, 1.1, 1.15, 1],
  },
  issTracker: {
    path: "pictures/issTracker/",
    src: ["landing.png", "earth.png", "infos.png"],
    alt: ["landing", "earth", "infos"],
    speed: [1, 0.9, 1.1],
  },
  cercleMixte: {
    path: "pictures/cercleMixte/",
    src: [
      "landing.png",
      "prestations.png",
      "restauration.png",
      "contact.png",
      "dataSelect.png",
      "reservation.png",
    ],
    alt: [
      "landing",
      "prestations",
      "restauration",
      "contact",
      "date selection",
      "reservation",
    ],
    speed: [1.1, 0.9, 1, 1.1, 1.05, 0.9],
  },
  visitReims: {
    path: "pictures/visitReims/",
    src: ["landingPage.jpg", "otherPage.jpg"],
    alt: ["landing", "other monument"],
    speed: [1.1, 0.95]
  },
});
