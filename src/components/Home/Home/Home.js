import React from 'react';
import Banner from '../Banner/Banner';
import RecommendedPlans from '../RecommendedPlans/RecommendedPlans';
import Testimonials from '../Testimonials/Testimonials';
import TourGuides from '../TourGuides/TourGuides';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecommendedPlans></RecommendedPlans>
            <TourGuides></TourGuides>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;