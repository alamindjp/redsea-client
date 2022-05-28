import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Loading from '../../../Components/Loading';
import auth from '../../../firebase.init';

const Review = () => {
    const [user, loading] = useAuthState(auth);
    const { register, handleSubmit, formState: { errors },reset } = useForm();
    const [disabled, setDisabled] = useState(true)
    
    const onSubmit = (data) => {
        
        const review = {
            name: user.displayName,
            email: user.email,
            rating: data.rating,
            image: user ? user.photoURL : "no image",
            description: data.reviewDetails,

        }

        fetch(' https://blooming-fortress-90492.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                <Loading />
                toast.success("Successfully add review")
                reset()
            })
    }
    if (loading) {
        return <Loading/>
    }
    return (
        <div className='w-full mx-auto'>
            <h2 className='text-4xl text-purple-200 bg-slate-400 text-center py-3'>Your Review</h2>
            <div className='card w-60 sm:w-96 bg-orange-300  mx-auto py-16 my-5'>
                <form onSubmit={handleSubmit(onSubmit)} className=" ">
                    <div className="form-control w-3/4 mx-auto mb-3">
                        <label className="input-group input-group-sm">
                            <span className='font-semibold'>Rating</span>
                            <input
                                type="number"
                                placeholder="Type here"
                                className="input input-bordered w-full input-sm"
                                {...register("rating", {
                                    required: {
                                        value: true,
                                        message: 'Rating is required'
                                    },
                                    onChange: (e) => { parseInt(e.target.value) < 1 || (parseInt(e.target.value) > 5) ? setDisabled(true) : setDisabled(false) },
                                    max: {
                                        value: 5,
                                        message: "Maximum rating 5"
                                    },
                                    min: {
                                        value: 1,
                                        message: "Minimum rating 1"
                                    }
                                })}
                            />
                        </label>
                    </div>

                    <div className="form-control w-3/4 mx-auto">
                        <label className="label input-group input-group-vertical">
                            <span className="label-text">Review Details</span>
                            <textarea
                                type="text"
                                placeholder="type here"
                                className="input input-bordered w-full"
                                {...register("reviewDetails", {
                                    required: {
                                        value: true,
                                        message: 'Enter Product reviewDetails'
                                    },
                                    maxLength: {
                                        value: 200,
                                        message: "Please enter under 200 character"
                                    },
                                    minLength: {
                                        value: 60,
                                        message: "Please enter proper product reviewDetails"
                                    }
                                })} />
                        </label>

                        <label className="label">
                            {errors.reviewDetails?.type === 'required' && <span className="label-text-alt text-red-400">{errors.reviewDetails && <span>{errors.reviewDetails.message}</span>}</span>}
                            {errors.reviewDetails?.type === 'maxLength' && <span className="label-text-alt text-red-400">{errors.reviewDetails && <span>{errors.reviewDetails.message}</span>}</span>}
                            {errors.reviewDetails?.type === 'minLength' && <span className="label-text-alt text-red-400">{errors.reviewDetails && <span>{errors.reviewDetails.message}</span>}</span>}
                        </label>
                    </div>

                    <div className="form-control mt-6 w-2/4 mx-auto">
                        <input disabled={disabled} className="btn btn-primary" type="submit" value='Submit' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Review;