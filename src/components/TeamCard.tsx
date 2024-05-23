import React from 'react';

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  altText?: string;  
  imageOnLeft: boolean; 
}
const TeamCard: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  altText = "Descriptive image",  
  imageOnLeft = true  
}) => {
  const containerClasses = `flex flex-col md:flex-row ${imageOnLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center bg-stone-100 shadow-lg rounded-lg overflow-hidden`;

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
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl  text-stone-800">{title}</h2>
          <h3 className="text-red-700 text-2xl md:text-2xl lg:text-3xl xl:text-4xl mt-4">{description}</h3>
          <div className="flex space-x-4 mt-5 justify-center text-2xl md:text-3xl lg:text-4xl">
  <a href="mailto:someone@example.com" target="_blank" rel="noopener noreferrer">
    <i className="fas fa-envelope hover:text-blue-600 transition-colors duration-300"></i>
  </a>
  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-youtube hover:text-red-600 transition-colors duration-300"></i>
  </a>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-instagram hover:text-pink-600 transition-colors duration-300"></i>
  </a>
</div>


        </div>
      </div>
    </div>
  );
};
export default TeamCard;
