import React from 'react';
import worker from '../../../Assets/Images/images/worker.png'

const OurFactory = () => {
    return (
            <div className="hero min-h-screen px-5">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={worker} className="w-[300px] sm:w-[500px] rounded-lg shadow-2xl" alt='' />
                    <div className='px-10 text-justify'>
                        <h1 className="text-5xl font-bold">Ours Worker</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-accent">Get Started</button>
                    </div>
                </div>
            </div>
    );
};

export default OurFactory;