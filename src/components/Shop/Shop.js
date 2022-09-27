import React, { useEffect, useState } from 'react';
import { addToDb, getDataFromLocalStorage } from '../../utilities/fakedb';
import Display from '../Display/Display';

const Shop = () => {
    const [cart, setCart] = useState([]);
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])
    useEffect(() => {
        const getDataFromStorage = getDataFromLocalStorage()
        let productAdded = [];
        for(const id in getDataFromStorage) {
            const addedProduct = product.find(product => product.id === id)
            if (addedProduct) {
                const quantity = getDataFromStorage[id];
                addedProduct.quantity = quantity;
                productAdded.push(addedProduct);
                
            }
        }
        setCart(productAdded)
    }, [product]);
    const addToCart = (selectedProduct) => {
        let newCart = [];
        const exist = product.find(product => product.id === selectedProduct.id)
        if (!exist) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        } else {
            const rest = product.filter(product => product.id !== selectedProduct.id)
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist]
        }
        setCart(newCart);
        addToDb(selectedProduct.id)
    }
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(let item of cart) {
        total = total + item.price * item.quantity;
        shipping = shipping + item.shipping
        quantity = quantity + item.quantity;
        console.log(shipping)
    }
    const tax = total * 0.1
    const grandTotal = total + shipping + tax
    return (
        <div className='container mx-auto grid grid-cols-4 mt-20'>
            <div className='col-span-3'>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        product.map(item => <Display key ={item.id} product={item} addToCart={addToCart}></Display>)
                    }
                </div>
            </div>
            <div>
                <h2 className='text-3xl font-bold'>Order Summary</h2>
                <h2 className='mt-8 text-lg font-bold'>Selected Items: <span className='text-2xl'>{quantity}</span></h2>
                <h2 className='mt-4 text-lg font-bold'>Total Price: <span className='text-2xl'>${total.toFixed(2)}</span></h2>
                <h2 className='mt-4 text-lg font-bold'>Total Shipping Charge: <span className='text-2xl'>${shipping.toFixed(2)}</span></h2>
                <h2 className='mt-4 text-lg font-bold'>Tax: <span className='text-2xl'>${tax.toFixed(2)}</span></h2>
                <h2 className='mt-4 text-2xl font-bold'>Grand Total: <span className='text-3xl'>${grandTotal.toFixed(2)}</span></h2>
            </div>
        </div>
       
    );
};

export default Shop;