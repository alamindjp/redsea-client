import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <Navbar />
            <div className="card w-4/5 sm:w-2/3 md:w-3/5 lg:w-2/5 mx-auto min-h-50 bg-base-100 shadow-xl mt-10">
                <div className="card-body">
                    <h1 className='text-4xl font-bold text-center'>Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className='w-full mx-auto'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg">Email</span>
                            </label>
                            <input type="text"
                                placeholder="Your Email"
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
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg">Password</span>
                            </label>
                            <input type="password"
                                placeholder="Enter Password"
                                className="input input-bordered w-full"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Enter password'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'must be 6 characters or longer' // JS only: <p>error message</p> TS only support string
                                    }
                                })} />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-400">{errors.password && <span>{errors.password.message}</span>}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-400">{errors.password && <span>{errors.password.message}</span>}</span>}
                            </label>
                        </div>
                        <div className="form-control mt-6 w-2/4 mx-auto">
                            <input className="btn btn-primary" type="submit" value='Login' />
                        </div>
                    </form>
                    <div>
                        <div className='block sm:flex items-center mt-3'>
                            <p><small>New to RedSea Ltd.<Link to="/signup" className="text-primary"> Create Account</Link></small></p>
                            <button className='btn btn-outline btn-primary'>Forget Password</button>
                        </div>
                    </div>
                        <div className="divider">or</div>
                        <button className="btn btn-outline w-2/3 mx-auto">Continue with google</button>
                </div>
            </div>
            <Footer />
        </div >
    );
};

export default Login;