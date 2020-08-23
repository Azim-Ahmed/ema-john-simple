import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const firstTenItems = fakeData.slice(0, 10)
    const [products, setProducts] = useState(firstTenItems)

const [cart, setCart] = useState([])
const handleClick = (product) => {
console.log( product);

const newCart = [...cart, product]
setCart(newCart)

}


    return (
        <div className="shop-container">
            <div className="product-container">

               
                    {
                        products.map(ConProoduct => <Product
                             handleClick = {handleClick} product = {ConProoduct} ></Product>)
                    }
                
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;