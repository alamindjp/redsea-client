import React from 'react';
import worker from '../../../Assets/Images/images/worker.png'

const OurFactory = () => {
    return (
            <div class="hero min-h-screen px-5">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={worker} class="w-[300px] sm:w-[500px] rounded-lg shadow-2xl" alt='' />
                    <div className='px-10 text-justify'>
                        <h1 class="text-5xl font-bold">Ours Worker</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-accent">Get Started</button>
                    </div>
                </div>
            </div>
    );
};

export default OurFactory;