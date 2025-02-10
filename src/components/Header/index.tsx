import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/src/components/Button";

import "./style.scss";

import imgObj from "@/public/img/utils";
import iconObj from "@/public/icons/utils";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("about_us");
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Відслідковуємо зміну ширини вікна
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Відслідковуємо скрол, щоб змінити фон хедера
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    "Про проєкт",
    "Як це працює",
    "Переваги",
    "Найчастіші запитання",
  ];

  const handleMenuClick = (id: string) => {
    setActiveSection(id);
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className='container'>
        <div className='left-side'>
          <a href='/' className='logo-link'>
            <Image
              src={imgObj.logo}
              alt='logo'
              width={100}
              height={26}
              priority={true}
            />
          </a>

          {windowWidth > 1000 && (
            <nav className='menu'>
              {menuItems.map((id) => (
                <a
                  key={id}
                  href={`/#${id}`}
                  className={activeSection === id ? "active link" : "link"}
                  onClick={() => handleMenuClick(id)}
                >
                  {id}
                </a>
              ))}
            </nav>
          )}
        </div>
        <div className='right-side'>
          <Button>Підписатись</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
