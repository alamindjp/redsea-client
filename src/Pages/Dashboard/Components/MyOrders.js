import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../../Components/Loading';
import auth from '../../../firebase.init';

const MyOrders = () => {
    const [user, loading] = useAuthState(auth);
    const [orders, setOrders] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        if (user) {
            fetch(` https://blooming-fortress-90492.herokuapp.com/booking?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        console.log(res.status)
                        signOut(auth);
                        toast.error('forbidden access please log in')
                        localStorage.removeItem('accessToken')
                        navigate('/home')
                    }
                    return res.json()
                })
                .then(data => setOrders(data))
        }
    }, [user, navigate])

    if (loading) {
        return <Loading />
    }
    return (
        <div className='w-full mx-auto'>
            <h2 className='text-4xl text-purple-200 bg-slate-400 text-center py-3'>My Orders</h2>
            <div className="overflow-x-auto  sm:w-11/12 mx-auto mt-4">
                <table className="table table-normal w-full border">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th className='hidden sm:block'>Order Quantity</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) =>
                                <tr key={order._id}>
                                    <th>{index + 1}</th>
                                    <td>{order.bookingName}</td>
                                    <td>{order.purchaseQuantity }</td>
                                    <td><div className='sm:flex justify-center'><div className='mb-1 mr-1'><button className="btn btn-sm">Pay</button></div><div><button className="btn btn-sm">Cancel</button></div></div></td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrders;