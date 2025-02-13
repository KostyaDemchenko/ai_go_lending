import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/src/components/Button";

import "./style.scss";

import imgObj from "@/public/img/utils";
import iconObj from "@/public/icons/utils";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("about-us");
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Отслеживаем изменение ширины окна
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Отслеживаем скролл для изменения фона хедера
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Определяем массив объектов с id и label для меню
  const menuItems = [
    { id: "about-us", label: "Про проєкт" },
    { id: "how-it-works", label: "Як це працює" },
    { id: "advantages", label: "Переваги" },
    { id: "faq", label: "Найчастіші запитання" },
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
              {menuItems.map(({ id, label }) => (
                <a
                  key={id}
                  href={`/#${id}`}
                  className={activeSection === id ? "active link" : "link"}
                  onClick={() => handleMenuClick(id)}
                >
                  {label}
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
