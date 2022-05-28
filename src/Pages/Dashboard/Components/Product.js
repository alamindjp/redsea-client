import React from 'react';
import { toast } from 'react-toastify';

const Product = ({ product, refetch }) => {
    const {_id, name, image } = product;

    const removeProduct = id => {
        fetch(`http://localhost:5000/product/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    toast.success(`${name} is deleted`)
                    refetch()
                }
        })
    }
    
    
    return (
        <tr className='p-0 m-0'>
            <td>
                <div className="w-16 rounded">
                    <img src={image} alt="Avatar" />
                </div>
            </td>
            <td>{name}</td>
            <td><button className="btn btn-xs" onClick={()=>removeProduct(_id)}>remove</button> </td>
        </tr>
    );
};

export default Product;