import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../../Components/Loading';
import auth from '../../../firebase.init';

const MyOrders = () => {
    const [user, loading] = useAuthState(auth);
    const [orders, setOrders] = useState([])
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?email=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data))
        }
    }, [user])

    if (loading) {
        return <Loading />
    }
    return (
        <div>
            <h2 className='text-2xl font-bold text-center mt-10 mb-5'>My orders {orders.length}</h2>
            <div className="overflow-x-auto  w-11/12 mx-auto">
                <table className="table table-normal w-full border-2">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>
                                <tr key={order._id}>
                                    <th>{index + 1}</th>
                                    <td>{order.bookingName}</td>
                                    <td></td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrders;