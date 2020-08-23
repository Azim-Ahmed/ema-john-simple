import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'



const Product = (props) => {
    const {name , img, seller , price, stock} = props.product
    console.log(props.product.name);
    return (
        <div className= "product" >
            <div>
                 <img src= {img} alt=""/>
            </div>
            <div>
            <h4 className = "product-name">{name}</h4>
    <p>by: {seller}</p>
    <h4>${price}</h4>
    <h6>available  {stock} , order soon</h6>
     <button className ="main-btn" onClick = {() => props.handleClick(props.product)} >   Add to cart</button> 
            </div>
            
        </div>  
    );
};

export default Product;