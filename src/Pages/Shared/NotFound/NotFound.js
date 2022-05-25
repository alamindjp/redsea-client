import React from 'react';
import { Link } from 'react-router-dom';
import img from './images/404.png';


const NotFound = () => {
    return (
        <div className='flex justify-center'><Link to="/NotFound"><img style={{ height: "90vh" }} src={img} alt="" /></Link></div>
    );
};

export default NotFound;