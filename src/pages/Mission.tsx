import React from 'react';
import MissionComp from '../components/MissionComp';
import bgImage from '../assets/images/mission2.jpg';

const ExamplePage: React.FC = () => {
    return (
        <MissionComp
            imageUrl={bgImage}
            title="Missions"
            description="-SOCIAL ENGAGEMENT-  building connections and fostering friendships are at the heart of our community. We organize social events, group outings, and clubs that provide ample opportunities for our members to interact, share experiences, and create lasting memories"
            additionalText="-ACTIVE LIVING-  staying active is key to a healthy lifestyle. Our center provides numerous physical activities, including yoga, fitness classes, dance, and sports, to help our members maintain their physical health and well-being"
            additionalText2="-SUPPORT & WELLNESS-   we offer resources and support services to address the unique needs of our senior community. From wellness workshops to support groups, we strive to provide a holistic approach to senior care that nurtures the body, mind, and spirit"
            additionalText3="- LINDA RUBENFELD-LEE, founder -"
        />
    );
};

export default ExamplePage;

