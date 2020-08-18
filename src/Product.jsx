import React from 'react'
import './Product.css';
import {useStateValue} from './StateProvider';
function Product({id,title,img,price}) {
    const [{basket},dispatch]=useStateValue();

    const addToBasket = () => {
    //Add item to basket
    dispatch({
        type :'ADD_TO_BASKET',
        item : {
            id: id,
            title :title,
            img : img,
            price :price,
        },

    })
    };
    return (
      <div className ="product">
      <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>₹</small>
              <span>  <strong>{price}/ Kg</strong></span>
                </p>
                </div>
                <img src={img} alt=" " />
               <button onClick={addToBasket}>Add to basket</button> 
            
        </div>
    )
}

export default Product;
