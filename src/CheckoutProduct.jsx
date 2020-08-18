import React from 'react'
import './CheckoutProduct.css';
import {useStateValue} from "./StateProvider";
function CheckoutProduct({ id , title , img, price}) {
   const [{basket},dispatch]=useStateValue();
   const removeFromBasket =() =>
   {
       //remove item from basket
       dispatch({
           type :"REMOVE_FROM_BASKET",
           id: id,
       });
   };
    return (
        <div className="checkout_product">
      <img className="checkout__productimg" src={img} alt="" /> 
      <div className="CheckoutProduct__info" >
          <p>{title}</p>
          <p classname="checkoutproduct__price">
              <small>₹</small>
              <strong>{price}</strong>
              </p>
              <button onClick={removeFromBasket}>Remove from Basket</button>     
      </div>
        </div>
    )
}

export default CheckoutProduct;
