import React from 'react';

interface CardProps {
    imageUrl: string;
    title: string;
    description: string;
    additionalText: string;
    additionalText2: string;
    additionalText3: string;
    altText?: string;
}

const MissionComp: React.FC<CardProps> = ({
    imageUrl,
    title,
    description,
    additionalText,
    additionalText2,
    additionalText3,
    altText = "Descriptive image"
}) => {
    return (
        <div className="relative w-full h-screen bg-stone-200 shadow-lg overflow-hidden">
            <img
                src={imageUrl}
                alt={altText}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => (e.currentTarget.src = 'default_image.png')}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 p-4  text-center  text-gray-100">
                <h1 className="text-6xl mb-6 md:text-7xl lg:text-8xl xl:text-8xl">{title}</h1>
                <p className="text-xl md:text-2xl lg:text-2xl xl:text-2xl mb-6 ">{description}</p>
                <p className="text-xl md:text-2xl lg:text-2xl xl:text-2xl mb-6">{additionalText}</p>
                <p className="text-xl md:text-2xl lg:text-2xl xl:text-2xl mb-6">{additionalText2}</p>
                <p className="text-2xl">{additionalText3}</p>
            </div>
        </div>
    );
};

export default MissionComp
