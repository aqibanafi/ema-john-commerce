import React from 'react';
import './Display.css'
const Display = ({product, addToCart}) => {
    const {name, price, seller, ratings, img} = product;
    return (
        <div className='product-card shadow-lg rounded-lg'>
            <img className='p-3 rounded-md' src={img} alt="" />
            <div className='mt-7 p-4'>
                <h2 className='text-xl font-semibold'>{name}</h2>
                <h2 className='font-semibold'>Price: <span className='text-xl font-bold'>${price}</span></h2>
            </div>
            <div className='mt-4 p-4'>
                <h3>Manufacturer: {seller}</h3>
                <h3>Ratings: {ratings}</h3>
            </div>
            <button onClick={() => addToCart(product)} className="btn btn-warning w-full">Add To Cart</button>
        </div>
    );
};

export default Display;