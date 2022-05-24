import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const { name, image, quantity, minOrders, price, description } = product;
    return (
        <div className="card w-50 bg-base-100 shadow-xl">
            <figure><img className='p-5' style={{width: "200px" }} src={image} alt="Shoes" /></figure>
            <div className="card-body text-justify">
                <h2 className="card-title font-bold">{ name }</h2>
                <p><span className='font-bold'>Price</span>: ${price} <small>(per unit)</small></p>
                <p><span className='font-bold'>Available Quantity</span>: {quantity} ps</p>
                <p><span className='font-bold'>Minimum Orders</span>: {minOrders} ps</p>
                <p>{description.slice(0,160)}</p>
                <div className="card-actions justify-center">
                    <Link className="btn btn-outline btn-success py-0" to="/purchase">Purchase</Link>
                </div>
            </div>
        </div>
    );
};

export default Product;