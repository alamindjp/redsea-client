import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Components/Loading';
import ManageOrder from './ManageOrder';

const ManageOrders = () => {
    const { data: manageOrders, isLoading} = useQuery('manageOrders', () => fetch(' https://blooming-fortress-90492.herokuapp.com/booking/all', {
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h1 className='text-4xl text-purple-200 bg-slate-400 text-center py-3'>Total Orders:{manageOrders.length}</h1>
            <div className="overflow-x-auto  sm:w-11/12 mx-auto mt-4">
                <table className="table table-normal w-full border">
                    <thead>
                        <tr>
                            <th className='px-0 pl-1'>Consumer</th>
                            <th className='px-0'>Product</th>
                            <th className='px-0'>Quantity</th>
                            <th className='px-0'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            manageOrders?.map(manageOrder => <ManageOrder
                                key={manageOrder._id}
                                manageOrder={manageOrder}
                            />)
                       } 
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;