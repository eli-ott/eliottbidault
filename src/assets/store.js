import { readable } from "svelte/store";

export const store = readable({
  picturePortfolio: {
    completed: "Janv. 2023",
    role: "Front-End",
    techs: ["Svelte"],
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
    speed: [1.1, 0.9, 1, 1.1, 1.05, 1],
  },
  doIt: {
    completed: "Mai. 2023",
    role: "Full-stack",
    techs: ["Sveltekit", "Typescript", "Prisma"],
    path: "pictures/do-it/",
    src: [
      "landing.png",
      "profile.png",
      "feature.png",
      "todos.png",
      "sign-up.png",
      "sign-in.png",
    ],
    speed: [0.9, 1.1, 1.15, 1.05, 1.1, 1.15, 1],
  },
  quantumPhysics: {
    completed: "Sept. 2022",
    role: "Front-End",
    techs: ["HTML", "CSS", "JavaScript"],
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
    completed: "Janv. 2023",
    role: "Front-End",
    techs: ["Svelte", "Three.js"],
    path: "pictures/issTracker/",
    src: ["landing.png", "earth.png", "infos.png"],
    alt: ["landing", "earth", "infos"],
    speed: [1, 0.9, 1.1],
  },
  montBerru: {
    completed: "Avr. 2023",
    role: "Front-End",
    techs: ["HTML5", "CSS3", "JavaScript"],
    path: "pictures/montBerru/",
    src: ["landing.png", "dossard.png", "countdown.png"],
    alt: ["landing", "dossard", "countdown"],
    speed: [1, 0.9, 1.1],
  },
  coffee: {
    completed: "Avr. 2023",
    role: "Front-End & Motion",
    techs: ["HTML5", "CSS3", "GSAP", "Three.js"],
    path: "pictures/coffee/",
    src: ["landing.png", "first-part.png", "second-part.png"],
    alt: ["landing", "first", "second"],
    speed: [1, 0.9, 1.1],
  },
  cercleMixte: {
    completed: "Juil. 2022",
    role: "Full-Stack",
    techs: ["HTML", "CSS", "JavaScript", "PHP"],
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
    completed: "Juil. 2022",
    role: "Front-End",
    techs: ["HTML", "CSS", "JavaScript"],
    path: "pictures/visitReims/",
    src: ["landingPage.png", "otherPage.png"],
    alt: ["landing", "other monument"],
    speed: [1.1, 0.95],
  },
});
