import React from 'react';

const ManageOrder = ({ manageOrder }) => {
    const { bookingName, consumer, purchaseQuantity } = manageOrder;
    return (
        <tr>
            <td className='px-0 pl-1'>{consumer?.slice(0, 10)}</td>
            <td className='px-0'>{bookingName?.slice(0, 10)}</td>
            <td className='px-0'>{purchaseQuantity}</td>
            <td className='px-0'><div className='sm:flex justify-center'><div className='mb-1 mr-1'><button className="btn btn-sm">Delivery</button></div><div><button className="btn btn-sm">Cancel</button></div></div></td>
        </tr>
    );
};

export default ManageOrder;