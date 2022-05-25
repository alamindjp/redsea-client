import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Loading from '../../Components/Loading';
import auth from '../../firebase.init';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Purchase = () => {
    const [user, loading] = useAuthState(auth);
    const { productId } = useParams()
    const [booked, setBooked] = useState([])
    const { name, image, quantity, minOrders, price, description } = booked;
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data);

    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setBooked(data))
    }, [productId])

    if (loading) {
        return <Loading />
    }

    return (
        <div>
            <Navbar />
            <h1 className="text-3xl text-center m-7 font-bold text-neutral">Purchase Confirmation</h1>
            <div className="card lg:card-side mt-20 w-9/12 mx-auto">
                <div className="card card-compact bg-base-200 max-w-lg p-5">
                    <figure><img className='p-5' style={{ width: "200px" }} src={image} alt={name} /></figure>
                    <div className="card-body text-justify">
                        <h2 className="card-title"><span className='font-bold'>Name:</span>{name}</h2>
                        <p><span className='font-bold'>Price:</span> {price} <small>(per unit)</small></p>
                        <p><span className='font-bold'>Available Quantity:</span> {quantity} ps</p>
                        <p><span className='font-bold'>Minimum Orders:</span> {minOrders} ps</p>
                        <p>{description}</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="card card-body bg-base-200 ml-5 p-0">
                    <h2 className='text-2xl text-center font-bold text-neutral py-5'>Purchase Now</h2>
                    <div className="form-control w-3/4 mx-auto">
                        <label className="label">
                            <span className="label-text text-lg">Consumer Name</span>
                        </label>
                        <input readOnly
                            type="text"
                            placeholder={user?.displayName || ''}
                            className="input input-bordered w-full"/>
                         
                    </div>
                    <div className="form-control w-3/4 mx-auto">
                        <label className="label">
                            <span className="label-text text-lg">Email</span>
                        </label>
                        <input
                            readOnly
                            type="text"
                            placeholder={user.email || ''}
                            className="input input-bordered w-full"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Enter Email'
                                },
                                pattern: {
                                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}/,
                                    message: 'Enter valid Email' // JS only: <p>error message</p> TS only support string
                                }
                            })} />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-400">{errors.email && <span>{errors.email.message}</span>}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-400">{errors.email && <span>{errors.email.message}</span>}</span>}
                        </label>
                    </div>
                    <div className="form-control w-3/4 mx-auto">
                        <label className="label">
                            <span className="label-text text-lg">Product Quantity</span>
                        </label>
                        <input type="number"
                            placeholder="Enter Quantity"
                            className="input input-bordered w-full"
                            {...register("quantity", {
                                required: {
                                    value: true,
                                    message: 'Enter number of purchase'
                                },
                                max: {
                                    value: quantity,
                                    message: "Please enter under available quantity"
                                },
                                min: {
                                    value: minOrders,
                                    message: "Please buy minimum orders"
                                }
                            })} />
                        <label className="label">
                            {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-400">{errors.quantity && <span>{errors.quantity.message}</span>}</span>}
                            {errors.quantity?.type === 'max' && <span className="label-text-alt text-red-400">{errors.quantity && <span>{errors.quantity.message}</span>}</span>}
                            {errors.quantity?.type === 'min' && <span className="label-text-alt text-red-400">{errors.quantity && <span>{errors.quantity.message}</span>}</span>}
                        </label>
                    </div>

                    <div className="form-control mt-6 w-2/4 mx-auto">
                        <input className="btn btn-primary" type="submit" value='Order Now' />
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Purchase;