import React from 'react';
import Footer from '../../Footer/Footer';
import Banner from '../Banner/Banner';
import RecommendedPlans from '../RecommendedPlans/RecommendedPlans';
import TourGuides from '../TourGuides/TourGuides';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecommendedPlans></RecommendedPlans>
            <TourGuides></TourGuides>
            <Footer></Footer>
        </div>
    );
};

export default Home;