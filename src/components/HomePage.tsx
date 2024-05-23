import React from 'react';
import Card from '../components/Card'
import image1 from '../assets/images/russian_couple1.jpg'
import image2 from '../assets/images/sunfl_basket.jpg'
import image3 from '../assets/images/cat.jpg'
import image4 from '../assets/images/envelops3.jpg'


const HomePage: React.FC = () => {
  const cardData = [
    {
      id: 1,
      imageUrl: image1,
      title: "EMBELLISH YOUR LIFESTYLE",
      description: "We believe in living life to the fullest at every age. Our center is a vibrant community where anybody can come together, engage in various activities and build lasting friendships.",
      buttonUrl: "/mission",
      pageName: "Learn More"
    },
    {
        id: 2,
        imageUrl: image2,
        title: "MEET OUR TEAM",
        description: "Get to know the passionate individuals who are dedicated to making a positive impact. They are committed to inspiring and empowering others.",
        buttonUrl: "/aboutus",
        pageName: "Learn More",
        imageOnRight: true
    },
    {
        id: 3,
        imageUrl: image3,
        title: "WEEKLY ACTIVITIES & CLASSES",
        description: " Whether you are looking to improve your fitness, learn a new skill or simply have fun, there is something for everyone.",
        buttonUrl: "/activities",
        pageName: "Learn More"
    },
    {
      id: 4,
      imageUrl: image4,
      title: "UPCOMING EVENTS",
      description: "Stay connected with the exciting events we have lined up. They are designed to bring our community together and provide endless opportunities for learning and fun.",
      buttonUrl: "/events",
      pageName: "Learn More",
      imageOnRight: true
    }
  ];

  return (
    <div>
        <h2 className="  bg-stone-200 py-6 font-semibold text-center text-4xl text-stone-700 rounded"></h2>
      {cardData.map((card, index) => (
        <Card
          key={card.id}
          index={index}
          imageUrl={card.imageUrl}
          title={card.title}
          description={card.description}
          buttonUrl={card.buttonUrl}
          pageName={card.pageName}
        />
      ))}
    </div>
  );
};

export default HomePage;
