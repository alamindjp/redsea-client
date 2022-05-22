import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import HomeBanner from './HomeComponents/HomeBanner';

const Home = () => {
    return (
        <div>
            <Navbar />
            <HomeBanner/>
            <Footer/>
        </div>
    );
};

export default Home;