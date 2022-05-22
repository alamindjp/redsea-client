import React from 'react';
import flags from '../../../Assets/Images/icon/flags.png'
import people from '../../../Assets/Images/icon/people.png'
import like from '../../../Assets/Images/icon/like.png'

const BusinessSummary = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3'>
            <div class="card w-50  text-center mt-5">
                <figure><img className='w-[120px]' src={flags} alt="Countries" /></figure>
                <div className='mt-3'>
                    <h2 className='font-bold text-2xl m-0'>72</h2>
                    <p className='m-0'><small>Countries</small></p>
                </div>
            </div>
            <div class="card w-50  text-center mt-5">
                <figure><img className='w-[120px]' src={people} alt="Happy Clients" /></figure>
                <div className='mt-3'>
                    <h2 className='font-bold text-2xl m-0'>72</h2>
                    <p className='m-0'><small>Happy Clients</small></p>
                </div>
            </div>
            <div class="card w-50  text-center mt-5">
                <figure><img className='w-[120px]' src={like} alt="Feedback" /></figure>
                <div className='mt-3'>
                    <h2 className='font-bold text-2xl m-0'>72</h2>
                    <p className='m-0'><small>Feedback</small></p>
                </div>
            </div>
            
       </div>
    );
};

export default BusinessSummary;