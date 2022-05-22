import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-center'>
            <h1 className='text-8xl pt-20'>Page Not Found</h1>
            <h2 className='text-6xl pt-20'>404 ERROR</h2>
            <Link className='btn btn-link text-primary' to="/home">Go to Home</Link>
        </div>
    );
};

export default NotFound;