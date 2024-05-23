import React from 'react';

interface CardProps {
    imageUrl: string;
    title: string;
    altText?: string;
}

const TeamImage: React.FC<CardProps> = ({
    imageUrl,
    title,
    altText = "Descriptive image"
}) => {
    return (
        <div className="relative bg-stone-200 shadow-lg rounded-lg overflow-hidden mt-8">
            <div className="relative w-full h-64">
                <img
                    src={imageUrl}
                    alt={altText}
                    className="w-full h-full object-cover"
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => (e.currentTarget.src = 'default_image.png')}
                />
                <h2 className="absolute inset-0 flex items-center justify-center text-4xl lg:text-5xl xl:text-6xl  text-white bg-black bg-opacity-10">{title}</h2>
            </div>
        </div>
    );
};

export default TeamImage;
