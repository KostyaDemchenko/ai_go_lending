import Image from "next/image";
import { StaticImageData } from "next/image";

import "./style.scss";

interface CardProps {
  number: number;
  title: string;
  description: string;
  imageSrc: StaticImageData;
}

const CardHIT: React.FC<CardProps> = ({
  number,
  title,
  description,
  imageSrc,
}) => {
  return (
    <div className='hit-card'>
      <div className='card-info'>
        <p className='card-number blue-500'>{number}.</p>
        <div className='card-text'>
          <h3 className='card-title'>{title}</h3>
          <h4 className='card-description'>{description}</h4>
        </div>
      </div>
      <div className='card-img-box'>
        <Image src={imageSrc} alt='card' />
      </div>
    </div>
  );
};

export default CardHIT;
