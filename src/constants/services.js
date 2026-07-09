import strategyDesktop from "../assets/images/strategy-d.png";
import strategyMobile from "../assets/images/strategy-m.png";

import brandingDesktop from "../assets/images/branding-d.png";
import brandingMobile from "../assets/images/branding-m.png";

import interactiveDesktop from "../assets/images/interactive-d.png";
import interactiveMobile from "../assets/images/interactive-m.png";

import communicateDesktop from "../assets/images/communicate-d.png";
import communicateMobile from "../assets/images/communicate-m.png";

export const services = [
  {
    id: 1,
    title: "Strategy",
    desktopImage: strategyDesktop,
    mobileImage: strategyMobile,
    active: false,
  },
  {
    id: 2,
    title: "Branding",
    desktopImage: brandingDesktop,
    mobileImage: brandingMobile,
    active: true,
  },
  {
    id: 3,
    title: "Interactive",
    desktopImage: interactiveDesktop,
    mobileImage: interactiveMobile,
    active: false,
  },
  {
    id: 4,
    title: "Communicate",
    desktopImage: communicateDesktop,
    mobileImage: communicateMobile,
    active: false,
  },
];