import { StaticImageData } from "next/image";

import logo from "./logo.svg";
import hero01 from "./hero-section-01.webp";
import about01 from "./about-section-01.webp";
import about02 from "./about-section-02.png";

const obj: { [key: string]: StaticImageData } = {
  logo,
  hero01,
  about01,
  about02,
};

export default obj;
