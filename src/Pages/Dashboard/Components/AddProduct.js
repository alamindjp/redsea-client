import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../../Components/Loading';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { isLoading } = useQuery('product', () => fetch('http://localhost:5000/product').then(res => res.json()))
    const imgUploadedKey = '9ffbbd2202757b6fb55f4e1ec7a438c1';


    const onSubmit = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgUploadedKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        name: data.name,
                        image: img,
                        price: data.price,
                        quantity: data.quantity,
                        minOrders: data.minOrders,
                        description: data.description
                    }
                    fetch('http://localhost:5000/product', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (!data?.success) {
                                return toast.error(`${data.product?.name} Already added`)
                            }
                            toast.success(`successfully add Product`);
                            reset();
                        })
                }

            })

    }
    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='w-full mx-auto'>
            <h2 className='text-4xl text-purple-200 bg-slate-400 text-center py-3'>Add Product</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="card card-body my-10 mx-auto sm:w-4/6 md:w-2/4 bg-base-200">
                <div className="form-control w-4/5 mx-auto">
                    <label className="label">
                        <span className="label-text text-lg">Product Name</span>
                    </label>
                    <input type="text"
                        placeholder="Product Name"
                        className="input input-bordered w-full"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Enter Product Name'
                            },
                            maxLength: {
                                value: 20,
                                message: "Please enter under 20 character"
                            },
                            minLength: {
                                value: 10,
                                message: "Please enter proper product name"
                            }
                        })} />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-400">{errors.name && <span>{errors.name.message}</span>}</span>}
                        {errors.name?.type === 'maxLength' && <span className="label-text-alt text-red-400">{errors.name && <span>{errors.name.message}</span>}</span>}
                        {errors.name?.type === 'minLength' && <span className="label-text-alt text-red-400">{errors.name && <span>{errors.name.message}</span>}</span>}
                    </label>
                </div>
                <div className="form-control w-4/5 mx-auto">
                    <label className="label">
                        <span className="label-text text-lg">Product Price</span>
                    </label>
                    <input type="number"
                        placeholder="Product price"
                        className="input input-bordered w-full"
                        {...register("price", {
                            required: {
                                value: true,
                                message: 'please Enter price'
                            }
                        })} />
                    <label className="label">
                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-400">{errors.price && <span>{errors.price.message}</span>}</span>}
                    </label>
                </div>
                <div className="form-control w-4/5 mx-auto">
                    <label className="label">
                        <span className="label-text text-lg">Product Quantity</span>
                    </label>
                    <input type="number"
                        placeholder="Enter Quantity"
                        className="input input-bordered w-full"
                        {...register("quantity", {
                            required: {
                                value: true,
                                message: 'Enter number of Quantity'
                            }
                        })} />
                    <label className="label">
                        {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-400">{errors.quantity && <span>{errors.quantity.message}</span>}</span>}
                    </label>
                </div>
                <div className="form-control w-4/5 mx-auto">
                    <label className="label">
                        <span className="label-text text-lg">Product Quantity</span>
                    </label>
                    <input type="number"
                        placeholder="Enter Minimum Orders"
                        className="input input-bordered w-full"
                        {...register("minOrders", {
                            required: {
                                value: true,
                                message: 'Enter number of minimum orders'
                            }
                        })} />
                    <label className="label">
                        {errors.minOrders?.type === 'required' && <span className="label-text-alt text-red-400">{errors.minOrders && <span>{errors.minOrders.message}</span>}</span>}
                    </label>
                </div>
                <div className="form-control w-4/5 mx-auto">
                    <label className="label">
                        <span className="label-text text-lg">Product Description</span>
                    </label>
                    <textarea type="text"
                        placeholder="Product Description"
                        className="textarea textarea-bordered w-full"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'Enter Product description'
                            },
                            maxLength: {
                                value: 200,
                                message: "Please enter under 200 character"
                            },
                            minLength: {
                                value: 60,
                                message: "Please enter proper product description"
                            }
                        })} />
                    <label className="label">
                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-400">{errors.description && <span>{errors.description.message}</span>}</span>}
                        {errors.description?.type === 'maxLength' && <span className="label-text-alt text-red-400">{errors.description && <span>{errors.description.message}</span>}</span>}
                        {errors.description?.type === 'minLength' && <span className="label-text-alt text-red-400">{errors.description && <span>{errors.description.message}</span>}</span>}
                    </label>
                </div>
                <div className="form-control w-4/5 mx-auto">
                    <label className="label">
                        <span className="label-text text-lg">Product Image</span>
                    </label>
                    <div>
                        <input type="file"
                            className="bordered-2 bg-base-100 w-3/4 border-2 rounded-md border-base-300 p-1"
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'Select an image'
                                }
                            })} />
                    </div>
                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-400">{errors.image && <span>{errors.image.message}</span>}</span>}
                    </label>
                </div>
                <div className="form-control mt-6 w-2/4 mx-auto">
                    <input className="btn btn-primary" type="submit" value='Add Now' />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;