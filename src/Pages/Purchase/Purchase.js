import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../Components/Loading';
import auth from '../../firebase.init';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Purchase = () => {
    const [user, loading] = useAuthState(auth);
    const { productId } = useParams()
    const [booked, setBooked] = useState([])
    const [disabled, setDisabled] = useState(true)
    const { _id, name, image, quantity, minOrders, price, description } = booked;
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    

    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setBooked(data))
    }, [productId])


    if (loading) {
        return <Loading />
    }


    const onSubmit = (data) => {
        const booking = {
            bookingId: _id,
            bookingName: name,
            consumer: user.displayName,
            consumerEmail: user.email,
            purchaseQuantity: data.quantity,
            consumerPhone: data.phone,
            consumerAddress: {
                village: data.village,
                city: data.city,
                state: data.state,
                postalCode: data.postal,
                country: data.country

            },
        }
        
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                <Loading/>
                if (!data?.success) {
                   return toast(`${data.booking?.bookingName} Already booking order please update an orders`)
                }
                toast("Order Confirm")
                navigate('/home')
            })

    }



    return (
        <div>
            <Navbar />
            <h1 className="text-3xl text-center m-7 font-bold text-neutral">Purchase Confirmation</h1>
            <div className="card lg:card-side mt-20 w-9/12 mx-auto">
                <div className="card card-compact bg-base-200 h-2/3 mt-24 max-w-md mx-auto p-5">
                    <div className=''>
                        <figure><img className='p-5' style={{ width: "200px" }} src={image} alt={name} /></figure>
                        <div className="card-body text-justify">
                            <h2 className="card-title"><span className='font-bold'>Name:</span>{name}</h2>
                            <p><span className='font-bold'>Price:</span> {price} <small>(per unit)</small></p>
                            <p><span className='font-bold'>Available Quantity:</span> {quantity} ps</p>
                            <p><span className='font-bold'>Minimum Orders:</span> {minOrders} ps</p>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="card card-body bg-base-100 ml-5 p-0">
                    <h2 className='text-2xl text-center font-bold text-neutral py-5'>Purchase Now</h2>
                    <div className="form-control w-3/4 mx-auto">
                        <label className="label">
                            <span className="label-text text-lg">Consumer Name</span>
                        </label>
                        <input type="text"
                            disabled
                            value={user?.displayName || ''}
                            name='consumer'
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="form-control w-3/4 mx-auto">
                        <label className="label">
                            <span className="label-text text-lg">Consumer Email</span>
                        </label>
                        <input type="text"
                            disabled
                            name='email'
                            value={user?.email || ''}
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div className="form-control w-3/4 mx-auto">
                        <label className="label">
                            <span className="label-text text-lg">Product Quantity</span>
                        </label>
                        <input
                            name='quantity'
                            type="number"
                            placeholder="Enter Quantity"
                            className="input input-bordered w-full"
                        
                            {...register("quantity", {
                                required: {
                                    value: true,
                                    message: 'Enter number of purchase'
                                },
                                onChange: (e) => { (parseInt(e.target.value) < minOrders ||parseInt(e.target.value)>quantity) ? setDisabled(true): setDisabled(false)},
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
                    <div className="form-control w-3/4 mx-auto">
                        <label className="label">
                            <span className="label-text text-lg">Consumer Phone</span>
                        </label>
                        <input type="number"
                            placeholder='Enter phone number'
                            className="input input-bordered w-full"
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: 'Enter village/lane name'
                                },
                                minLength: {
                                    value: 11,
                                    message: 'Enter a valid phone number'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.phone?.type === 'required' && <span className="label-text-alt text-red-400">{errors.phone && <span>{errors.phone.message}</span>}</span>}
                            {errors.phone?.type === 'minLength' && <span className="label-text-alt text-red-400">{errors.phone && <span>{errors.phone.message}</span>}</span>}
                        </label>
                    </div>
                    <div className="form-control w-3/4 mx-auto ">
                        <h3 className='text-lg text-primary'>Consumer address</h3>
                        <input type="text"
                            placeholder='Enter village/lane'
                            className="input input-bordered w-full"
                            {...register("village", {
                                required: {
                                    value: true,
                                    message: 'Enter village/lane name'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.village?.type === 'required' && <span className="label-text-alt text-red-400">{errors.village && <span>{errors.village.message}</span>}</span>}
                        </label>
                        <input type="text"
                            placeholder='City/District'
                            {...register("city", {
                                required: {
                                    value: true,
                                    message: 'Enter city/district name'
                                }
                            })}
                            className="input input-bordered w-full"
                        />
                        <label className="label">
                            {errors.city?.type === 'required' && <span className="label-text-alt text-red-400">{errors.city && <span>{errors.city.message}</span>}</span>}
                        </label>
                        <div className='grid grid-cols-1 sm:grid-cols-2'>
                            <input type="text"
                                placeholder='State'
                                {...register("state", {
                                    required: {
                                        value: true,
                                        message: 'Enter state name'
                                    }
                                })}
                                className="input input-bordered mb-2 sm:mb-0 sm:mr-2"
                            />
                            <input type="number"
                                placeholder='Postal Code'
                                {...register("postal", {
                                    required: {
                                        value: true,
                                        message: 'Enter postal code'
                                    }
                                })}
                                className="input input-bordered"
                            />
                        </div>
                        <label className="label">
                            {errors.postal?.type === 'required' && <span className="label-text-alt text-red-400">{errors.postal && <span>{errors.postal.message}</span>}</span>}
                            {errors.state?.type === 'required' && <span className="label-text-alt text-red-400">{errors.state && <span>{errors.state.message}</span>}</span>}
                        </label>
                        <input type="text"
                            placeholder='country'
                            {...register("country", {
                                required: {
                                    value: true,
                                    message: 'Enter country name'
                                }
                            })}
                            className="input input-bordered w-full"
                        />
                        <label className="label">
                            {errors.country?.type === 'required' && <span className="label-text-alt text-red-400">{errors.country && <span>{errors.country.message}</span>}</span>}
                        </label>
                    </div>

                    <div className="form-control mt-6 w-2/4 mx-auto">
                        <input disabled={disabled} className="btn btn-primary" type="submit" value='Order Now' /> 
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Purchase;