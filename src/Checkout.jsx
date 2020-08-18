import React from 'react';
import './Checkout.css';
import {useStateValue} from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal'; 

function Checkout() {
    const[{basket}]=useStateValue();
    return (
        <div className="checkout">  
        <div className ="checkout__left">
            {basket?.length === 0 ?
            (
                <div className="checkout__title">
                    <h2>Your vegetable basket is empty</h2>
                    <p>
                        To get fresh vegetable of your choice in your basket click on "Add to Basket" next to the item
                    </p>
        </div>
            ):
            (
                <div>
                    <h2 className="checkout__title">Your vegetable basket</h2>
                 {
                     basket.map(item =>(
                            <CheckoutProduct
                            id={item.id}
                            title ={item.title}
                            img={item.img}
                            price={item.price}
                            />
                     ))}
                     </div>
                     
            )}
            </div>
{basket.length > 0 && (
    <div className="checkout__right">
        <h1><Subtotal /></h1>
     </div>
        )}
</div>
    );
}

export default Checkout;
