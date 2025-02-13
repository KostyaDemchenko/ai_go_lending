import { StaticImageData } from "next/image";

import logo from "./logo.svg";
import hero01 from "./hero-section-01.webp";
import about01 from "./about-section-01.webp";
import about02 from "./about-section-02.webp";
import hit01 from "./hit-section-01.webp";
import hit02 from "./hit-section-02.webp";
import hit03 from "./hit-section-03.webp";
import adv01 from "./advantages-section-01.svg";
import adv02 from "./advantages-section-02.svg";
import adv03 from "./advantages-section-03.svg";

const obj: { [key: string]: StaticImageData } = {
  logo,
  hero01,
  about01,
  about02,
  hit01,
  hit02,
  hit03,
  adv01,
  adv02,
  adv03,
};

export default obj;
