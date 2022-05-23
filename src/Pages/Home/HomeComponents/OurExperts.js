import React from 'react';
import Experts from '../../../Assets/Images/images/Experts.png'

const OurExperts = () => {
    return (
            <div class="hero min-h-screen px-5">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={Experts} class="w-[300px] sm:w-[500px] rounded-lg shadow-2xl" alt='' />
                    <div className='px-10 text-justify'>
                        <h1 class="text-5xl font-bold">Ours Experts</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-accent">Get Started</button>
                    </div>
                </div>
            </div>
    );
};

export default OurExperts;