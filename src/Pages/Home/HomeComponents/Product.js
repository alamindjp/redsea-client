import React from 'react';

const Product = ({product}) => {
    const { name, image, quantity, price, description}=product
    return (
        <div class="card w-50 bg-base-100 shadow-xl">
            <figure><img className='p-5' style={{width: "200px" }} src={image} alt="Shoes" /></figure>
            <div class="card-body text-justify">
                <h2 class="card-title font-bold">{ name }</h2>
                <p><span className='font-bold'>Price</span>: ${price} <small>(per unit)</small></p>
                <p><span className='font-bold'>Quantity</span>: {quantity}</p>
                <p>{description.slice(0,160)}</p>
                <div class="card-actions justify-center">
                    <button class="btn btn-outline btn-success py-0">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Product;