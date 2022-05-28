import React from 'react';

const ReviewCard = ({ review }) => {
    const { image, name, description } = review
    return (
        <div className="card bg-base-100 shadow-xl p-5">
                <div className="avatar">
                    <div className="w-12 h-50 my-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={image ? image : "https://api.lorem.space/image/face?hash=3174"} alt=''/>
                    </div>
                    <h2 className="text-xl font-bold pl-5">{name}</h2>
                </div>
            <div className="card-body p-2">
                <p className='text-justify'><span className='font-bold'>Reviews:</span><br /> {description}</p>
            </div>
        </div>
    );
};

export default ReviewCard;