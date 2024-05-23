import React from 'react';
import ActiveCard from '../components/ActiveCard';
import image1 from '../assets/images/dancing.jpg'; 
import image2 from '..//assets/images/archery1.jpg'
import image3 from '../assets/images/beige.jpg';
import image4 from '../assets/images/dishes.jpg';
import image5 from '../assets/images/bubble.jpg';
import image6 from '..//assets/images/workout.jpg';


const ActiveCards: React.FC = () => {
    const activeCard = [
        {
            id: 2,  
            imageUrl: image3,
            title: 'Yoga',
            description: 'Wednesday | Saturday',
            additionalText: '10 AM - 11 AM | 11 AM - 12 PM'
        },
        {
            id: 4,  
            imageUrl: image1,
            title: 'Dance',
            description: 'Tuesday | Friday',
            additionalText: '1 PM - 2 PM | 2 PM - 3 PM'
        },
        {
            id: 3,  
            imageUrl: image4,
            title: 'Lunch',
            description: 'Tuesday | Thursday | Saturday',
            additionalText: '12 PM - 1 PM'
        },
        {
            id: 6,  
            imageUrl: image6,
            title: 'Exercise',
            description: 'Monday | Wednesday',
            additionalText: '1 PM - 2 PM | 11 AM - 12 PM'
        },
        {
            id: 6,  
            imageUrl: image2,
            title: 'Archery',
            description: 'Saturday',
            additionalText: '11 AM - 12 PM'
        },
        {
            id: 5,  
            imageUrl: image5,
            title: 'Talking Club',
            description: 'Monday',
            additionalText: '10 AM - 12 PM'
        }
    ];
    return (
        <div className="container mx-auto p-4">
            <h2 className="py-10  bg-stone-200 my-4 font-semibold text-center text-4xl text-stone-700 rounded">ACTIVITIES & CLASSES</h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                {activeCard.map((active) => (
                    <ActiveCard
                        key={active.id}
                        imageUrl={active.imageUrl}
                        title={active.title}
                        description={active.description}
                        additionalText={active.additionalText} 
                    />
                ))}
            </div>
        </div>
    );
};

export default ActiveCards;
