import React, { useEffect, useState } from 'react';
import Product from './Product';
export 
const Tools = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product').then(res=>res.json()).then(data=>setProducts(data))
    },[])
    return (
        <div>
            <h1 className="text-3xl text-center text-accent font-bold">TOOLS</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-20 m-2'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        // setPurchaseProduct={setPurchaseProduct}
                    />)
                }
            </div>
        </div>
    );
};

export default Tools;