import React from 'react';
import { toast } from 'react-toastify';

const DeleteProductModal = ({ deleteProduct, refetch, setDeleteProduct }) => {
    const {_id, name } = deleteProduct;

    const cancelOrder = id => {
        fetch(` https://blooming-fortress-90492.herokuapp.com/product/delete/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.result.deletedCount === 1) {
                    toast.success(`${name} is deleted`)
                    refetch()
                    setDeleteProduct(null)
                }
            })
    }


    return (
        <div>
            
            <input type="checkbox" id="delete-product-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are You Sure?</h3>
                    <p className="py-4">You want to delete product : "{ name }" </p>
                    <div className="modal-action">
                        <button className="btn" onClick={() => cancelOrder(_id)}>Confirm</button>
                        <label htmlFor="delete-product-modal" className="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteProductModal;