import React from 'react';

interface CardProps {
    imageUrl: string;
    title: string;
    description: string;
    additionalText: string; 
    altText?: string;
}

const ActiveCard: React.FC<CardProps> = ({
    imageUrl,
    title,
    description,
    additionalText,
    altText = "Descriptive image"
}) => {
    return (
        <div className="relative bg-stone-200 shadow-lg rounded-lg overflow-hidden">
            <div className="relative w-full h-64">
                <img
                    src={imageUrl}
                    alt={altText}
                    className="w-full h-full object-cover"
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => (e.currentTarget.src = 'default_image.png')}
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
                    <h2 className="text-4xl text-gray-50">{title}</h2>
                    <p className="text-xl text-gray-50 mt-2">{description}</p>
                    <p className="text-lg lg:text-2xl xl:text-2xl text-gray-50 mt-2">{additionalText}</p> 
                </div>
            </div>
        </div>
    );
};

export default ActiveCard;
