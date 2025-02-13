import React, { useState, useRef } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

import "./style.scss";

interface CardProps {
  title: string;
  description: string;
  imageSrc: StaticImageData;
}

const CardAdvantages: React.FC<CardProps> = ({
  title,
  description,
  imageSrc,
}) => {
  // Начальное положение градиента – верхний правый угол: x=100%, y=0%
  const [gradientPosition, setGradientPosition] = useState({ x: 100, y: 0 });
  const imgBoxRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!imgBoxRef.current) return;
    const rect = imgBoxRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGradientPosition({ x, y });
  };

  // При уходе курсора – анимированное плавное возвращение в исходное положение
  const handleMouseLeave = () => {
    const start = { ...gradientPosition };
    const target = { x: 100, y: 0 };
    const duration = 500; // миллисекунд
    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const t = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const ease = 1 - Math.pow(1 - t, 3);
      const newX = start.x + (target.x - start.x) * ease;
      const newY = start.y + (target.y - start.y) * ease;
      setGradientPosition({ x: newX, y: newY });
      if (t < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div className='adv-card'>
      <div
        className='card-img-box'
        ref={imgBoxRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={
          {
            "--gradient-x": `${gradientPosition.x}%`,
            "--gradient-y": `${gradientPosition.y}%`,
          } as React.CSSProperties
        }
      >
        <Image src={imageSrc} alt='card' />
      </div>
      <div className='card-info'>
        <div className='card-text'>
          <h3 className='card-title'>{title}</h3>
          <h4 className='card-description'>{description}</h4>
        </div>
      </div>
    </div>
  );
};

export default CardAdvantages;
