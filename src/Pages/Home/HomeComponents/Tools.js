import React, { useEffect, useState } from 'react';
import Tool from './Tool';
const Tools = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(' https://blooming-fortress-90492.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    },[]);
    return (
        <div>
            <h1 className="text-3xl text-center text-accent font-bold">TOOLS</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-20 m-2'>
                {
                    products?.map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    />)
                }
            </div>
        </div>
    );
};

export default Tools;