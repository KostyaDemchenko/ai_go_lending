import React from "react";
import Image from "next/image";

import imgObj from "@/public/img/utils";
import icons from "@/public/icons/utils";

import "./style.scss";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-left'>
          <a href='/' className='logo-link'>
            <Image
              src={imgObj.logo}
              alt='AIGO Logo'
              width={100}
              height={26}
              priority
            />
          </a>
          <p className='footer-text'>© 2024. AIGO. Усі права збережені.</p>
        </div>

        <div className='footer-center'>
          <a href='mailto:ai.go.libraries@gmail.com' className='contact-link'>
            <Image src={icons.mail} alt='Email Icon' width={24} height={24} />
            <span className='blue-500'>ai.go.libraries@gmail.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
