import React from 'react';
import Banner from '../Banner/Banner';
import RecommendedPlans from '../RecommendedPlans/RecommendedPlans';
import TourGuides from '../TourGuides/TourGuides';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecommendedPlans></RecommendedPlans>
            <TourGuides></TourGuides>
        </div>
    );
};

export default Home;