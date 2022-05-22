import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import BusinessSummary from './HomeComponents/BusinessSummary';
import HomeBanner from './HomeComponents/HomeBanner';
import Reviews from './HomeComponents/Reviews';
import Tools from './HomeComponents/Tools';

const Home = () => {
    return (
        <div>
            <Navbar />
            <HomeBanner />
            <Tools />
            <BusinessSummary />
            <Reviews/>
            <Footer/>
        </div>
    );
};

export default Home;