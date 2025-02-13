import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import img from "@/public/img/utils";

import "./style.scss";

const FloatingBox: React.FC = () => {
  // Состояния для смещений каждого изображения
  const [offset1, setOffset1] = useState(0);
  const [offset2, setOffset2] = useState(0);

  // Рефы для хранения скорости движения (velocity) для каждого изображения
  const velocity1 = useRef(0);
  const velocity2 = useRef(0);

  // Задаём границы смещения для более ограниченного движения
  const minOffset = 0; // верхняя граница
  const maxOffset = 30; // нижняя граница

  // Инициализируем реф без обращения к window в модульной области
  const lastScrollY = useRef(0);

  // Обработчик скролла: вычисляем дельту скролла и добавляем импульс к скорости
  useEffect(() => {
    // Устанавливаем начальное значение scrollY только на клиенте
    if (typeof window !== "undefined") {
      lastScrollY.current = window.scrollY;
    }

    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;
        const delta = currentScrollY - lastScrollY.current;
        lastScrollY.current = currentScrollY;

        // Уменьшаем коэффициент импульса, чтобы реакция на скролл была слабее
        velocity1.current += delta * 0.03;
        velocity2.current -= delta * 0.03;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Анимационный цикл для обновления позиций изображений
  useEffect(() => {
    let animationFrameId: number;
    const damping = 0.95; // более плавное затухание скорости

    const animate = () => {
      // Обновляем позицию первого изображения
      setOffset1((prev) => {
        let newOffset = prev + velocity1.current;
        if (newOffset < minOffset) {
          newOffset = minOffset;
          velocity1.current = -velocity1.current * 0.3; // отскок с уменьшением скорости
        } else if (newOffset > maxOffset) {
          newOffset = maxOffset;
          velocity1.current = -velocity1.current * 0.3;
        }
        return newOffset;
      });

      // Обновляем позицию второго изображения
      setOffset2((prev) => {
        let newOffset = prev + velocity2.current;
        if (newOffset < minOffset) {
          newOffset = minOffset;
          velocity2.current = -velocity2.current * 0.3;
        } else if (newOffset > maxOffset) {
          newOffset = maxOffset;
          velocity2.current = -velocity2.current * 0.3;
        }
        return newOffset;
      });

      // Применяем затухание для плавного замедления
      velocity1.current *= damping;
      velocity2.current *= damping;

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div
      className='floating-box'
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div
        className='img-box'
        style={{
          width: "100%",
          maxWidth: "350px",
          transform: `translateY(${offset1}px)`,
          willChange: "transform",
          transition: "transform 0.05s ease-out",
        }}
      >
        <Image src={img.about01} alt='About us' />
      </div>
      <div
        className='desktop-only img-box'
        style={{
          width: "100%",
          maxWidth: "350px",
          transform: `translateY(${offset2}px)`,
          willChange: "transform",
          transition: "transform 0.05s ease-out",
        }}
      >
        <Image src={img.about02} alt='About us' />
      </div>
    </div>
  );
};

export default FloatingBox;
