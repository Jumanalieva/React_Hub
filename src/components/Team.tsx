import React from 'react';
import TeamImage from '../components/TeamImage'
import TeamCard from '../components/TeamCard'
import imageOne from '../assets/images/yoga_inst.jpg'
import imageTwo from '../assets/images/running.jpg'
import imageThree from '../assets/images/dancer.jpg'
import imageFour from '../assets/images/archer.jpg'
import imageFive from '../assets/images/social_worker.jpg'
import imageSix from '../assets/images/founder.jpg'
import imageSeven from '../assets/images/white_valley.jpg'

const Team: React.FC = () => {
  const cardData = [
    {
      id: 1,
      imageUrl: imageOne,
      title: "Victoria Ohanian",
      description: "yoga instructor"
    },
    {
      id: 2,
      imageUrl: imageTwo,
      title: "Melinda Knightly",
      description: "fitness instructor",
      imageOnRight: true
    },
    {
      id: 3,
      imageUrl: imageFour,
      title: "Benjamin Castle",
      description: "archery instructor"
    },
    {
      id: 4,
      imageUrl: imageThree,
      title: "Emeka McArthur",
      description: "dance instructor",
      imageOnRight: true
    },
    {
        id: 5,
        imageUrl: imageFive,
        title: "Natasha Anderson",
        description: "social worker"
      },
      {
        id: 6,
        imageUrl: imageSix,
        title: "Linda Rubenfeld-Lee",
        description: "founder of 'Senior Hub'",
        imageOnRight: true
      }
  ];

  return (
    <div className="container text-center mx-auto p-4 space-y-4">
      <TeamImage
        imageUrl={imageSeven}  
        title="MEAT OUR TEAM"
      />
      {cardData.map((card, index) => ( 
        <TeamCard
          key={card.id}
          imageUrl={card.imageUrl}
          title={card.title}
          description={card.description}
          imageOnLeft={index % 2 === 0}  
        />
      ))}
    </div>
  );
};

export default Team;
