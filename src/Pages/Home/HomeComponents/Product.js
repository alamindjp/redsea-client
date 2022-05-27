import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product}) => {
    const {_id, name, image, quantity, minOrders, price, description } = product;
    const navigate = useNavigate();

    const handlePurchase = (_id) => {
        navigate(`/product/${_id}`)

    }

    return (
        <div className="card w-50 bg-base-100 shadow-xl">
            <figure><img className='p-5' style={{ width: "200px" }} src={image} alt={name} /></figure>
            <div className="card-body text-justify">
                <h2 className="card-title font-bold">{name}</h2>
                <p><span className='font-bold'>Price</span>: ${price} <small>(per unit)</small></p>
                <p><span className='font-bold'>Available Quantity</span>: {quantity} ps</p>
                <p><span className='font-bold'>Minimum Orders</span>: {minOrders} ps</p>
                <p>{description?.slice(0, 150)}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline btn-success py-0" onClick={() => handlePurchase(_id)}>Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Product;