import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
         fetch("http://localhost:5000/review").then(res=>res.json()).then(data=>setReviews(data))
     },[])
    return (
        <div>
            <h1 className='text-center text-3xl font-bold'>Clients Reviews</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10 m-2'>
                {
                    reviews.slice(0, 3).map(review => <ReviewCard
                        key={review._id}
                    review={review}
                    />)
                    
                }
            </div>
        </div>
    );
};

export default Reviews;