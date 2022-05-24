import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../Components/Loading';
import auth from '../../firebase.init';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()
    let signInError;

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }

    if (error || gError || UpdateError) {
        signInError = <p className='text-red-400'>{error?.message || gError?.message || UpdateError}</p>
    }
    if (user || gUser) {
        console.log(user || gUser)
    }




    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
        navigate('/home')
    };
    return (
        <div>
            <Navbar />
            <div className="card w-4/5 sm:w-2/3 md:w-3/5 lg:w-2/5 mx-auto min-h-50 bg-base-100 shadow-xl mt-10">
                <div className="card-body">
                    <h2 className="text-4xl font-bold text-center">Sing Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className='w-full mx-auto'>
                        {/* register your input into the hook by invoking the "register" function */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg">Name</span>
                            </label>
                            <input type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full"
                                {...register("name", {
                                    minLength: {
                                        value: 5,
                                        message: 'Name must be longer'
                                    },
                                    required: {
                                        value: true,
                                        message: 'Enter a Name'
                                    }
                                })} />
                            <label className="label">
                                {errors.name?.type === 'minLength' && <span className="label-text-alt text-red-400">{errors.name && <span>{errors.name.message}</span>}</span>}
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-400">{errors.name && <span>{errors.name.message}</span>}</span>}

                            </label>
                        </div>
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
                                        message: 'must be 6 characters or longer'
                                    }
                                })} />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-400">{errors.password && <span>{errors.password.message}</span>}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-400">{errors.password && <span>{errors.password.message}</span>}</span>}

                            </label>
                        </div>

                        {signInError}
                        <div className='form-control mt-6 w-2/4 mx-auto'>
                            <input className="btn btn-primary" type="submit" value="Sing Up" />
                        </div>
                    </form>
                    <p><small>Already have an account <Link to="/login" className="text-neutral"> Please Login</Link></small></p>

                    <div className="divider">or</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline w-2/3 mx-auto">Continue with google</button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SignUp;