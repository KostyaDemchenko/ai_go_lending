import React, { useState, useEffect } from "react";
import Button from "@/src/components/Button";
import Image from "next/image";
import icons from "@/public/icons/utils";

import "./style.scss";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 105);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`scroll-to-top ${isVisible ? "visible" : ""}`}>
      <Button onClick={scrollToTop}>
        <Image
          src={icons.scrollToTop}
          alt='Scroll to top'
          width={24}
          height={24}
        />
      </Button>
    </div>
  );
};

export default ScrollToTopButton;
