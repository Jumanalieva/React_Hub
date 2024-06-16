import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  index: number;
  imageUrl: string;
  title: string;
  description: string;
  buttonUrl: string;
  pageName: string;
  altText?: string;
}

const Card: React.FC<CardProps> = ({
  index,
  imageUrl,
  title,
  description,
  buttonUrl,
  pageName,
  altText = "Descriptive image"
}) => {
  const imageOnLeft = index % 2 === 0;
  const containerClasses = `flex flex-col md:flex-row ${imageOnLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center bg-stone-200 shadow-lg rounded-lg overflow-hidden  p-4`;

  return (
    <div className={containerClasses}>
      <div className="w-full md:w-1/2 h-full">
        <img
          src={imageUrl}
          alt={altText}
          className="w-full h-full object-cover"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => (e.currentTarget.src = 'default_image.png')}
        />
      </div>
      <div className="w-full md:w-1/2 p-5 flex flex-col justify-between">
        <div>
          <h2 className="text-5xl md:text-5xl lg:text-6xl xl:text-8xl  text-stone-800 mb-6">{title}</h2>
          <p className="text-black text-lg md:text-md lg:text-lg xl:text-xl mt-2">{description}</p>
        </div>
        <Link
          to={buttonUrl}
          className="self-start mt-4 underline text-red-700 text-md md:text-lg lg:text-lg xl:text-xl px-5 py-2 rounded-full bg-stone-200"
        >
          {pageName}
        </Link>
      </div>
    </div>
  );
};

export default Card;
