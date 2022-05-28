import React from 'react';

const Product = ({ product, refetch, setDeleteProduct }) => {
    const {name, image } = product;

    return (
        <tr className='p-0 m-0'>
            <td>
                <div className="w-16 rounded">
                    <img src={image} alt="Avatar" />
                </div>
            </td>
            <td>{name}</td>
            <td>
                <label for="delete-product-modal" onClick={() => setDeleteProduct(product)} className="btn btn-xs btn-red bg-red-500">Remove</label>
            </td>
        </tr>
    );
};

export default Product;