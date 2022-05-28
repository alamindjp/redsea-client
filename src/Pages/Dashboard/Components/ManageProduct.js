import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Components/Loading';
import Product from './Product';

const ManageProduct = () => {
    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('http://localhost:5000/product', {
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h1 className='text-4xl text-purple-200 bg-slate-400 text-center py-3'>Total Product: {products.length}</h1>
            <div className="overflow-x-auto sm:w-11/12 mx-auto my-5">
                <table className="table table-normal w-full border">

                    <tbody>
                        {
                            products?.map(product => <Product
                                key={product._id}
                                product={product}
                                refetch={refetch}
                            />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProduct;