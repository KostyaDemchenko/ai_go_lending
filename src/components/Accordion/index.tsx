import React, { useState } from "react";

import "./style.scss";

export interface Item {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: Item[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className='accordion'>
      {items.map((item, index) => (
        <div
          className={`accordion-item ${activeIndex === index ? "active" : ""}`}
          key={index}
        >
          <div
            className='accordion-header'
            onClick={() => toggleAccordion(index)}
          >
            <h3 className='accordion-question'>{item.question}</h3>
            <div
              className={`accordion-icon ${
                activeIndex === index ? "rotated" : ""
              }`}
            >
              <span></span>
              <span></span>
            </div>
          </div>
          <div className='accordion-content'>
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
