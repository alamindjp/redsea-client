import React from 'react';

const ReviewCard = ({ review }) => {
    const { name, description } = review
    return (
        <div class="card bg-base-100 shadow-xl p-5">
                <div class="avatar">
                    <div class="w-12 h-50 my-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://api.lorem.space/image/face?hash=3174" alt=''/>
                    </div>
                    <h2 class="text-xl font-bold pl-5">Name:{name}</h2>
                </div>
            <div class="card-body p-2">
                <p className='text-justify'><span className='font-bold'>Reviews:</span><br /> {description}</p>
            </div>
        </div>
    );
};

export default ReviewCard;