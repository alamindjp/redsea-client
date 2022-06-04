import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import BusinessSummary from './HomeComponents/BusinessSummary';
import HomeBanner from './HomeComponents/HomeBanner';
import OurExperts from './HomeComponents/OurExperts';
import OurFactory from './HomeComponents/OurFactory';
import Reviews from './HomeComponents/Reviews';
import Tools from './HomeComponents/Tools';

const Home = () => {
    return (
        <div>
            <Navbar />
            <HomeBanner />
            <div>Checking git</div>
            <div className='divider my-10'></div>
            <Tools />
            <div className='divider my-10'></div>
            <Reviews />
            <div className='divider my-10'></div>
            <OurExperts />
            <div className='divider my-10'></div>
            <OurFactory/>
            <div className='divider my-10'></div>
            <BusinessSummary />
            <Footer/>
        </div>
    );
};

export default Home;