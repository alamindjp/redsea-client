import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool}) => {
    const {_id, name, image, quantity, minOrders, price, description } = tool;
    const navigate = useNavigate();

    const handlePurchase = (_id) => {
        navigate(`/tool/${_id}`)

    }

    return (
        <div className="card w-50 bg-base-100 shadow-xl">
            <figure><img className='p-5' style={{ width: "200px" }} src={image? image: 'Image Not Found'} alt={name} /></figure>
            <div className="card-body text-justify">
                <h2 className="card-title font-bold">{name? name:'Name Not Found'}</h2>
                <p><span className='font-bold'>Price</span>: ${price ? price:'Not Found'} <small>(per unit)</small></p>
                <p><span className='font-bold'>Available Quantity</span>: {quantity ? quantity:'Not Found'} ps</p>
                <p><span className='font-bold'>Minimum Orders</span>: {minOrders ? minOrders:'Not Found'} ps</p>
                <p>{description? description.slice(0, 150): 'Not Found'}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline btn-success py-0" onClick={() => handlePurchase(_id)}>Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;