import React from 'react';
import CartItem from './CartItem';

function Cart({items, deleteItem, lowerItem, incrementItem}) {
    return(
        <div>
            <div>
                <h1 id="alt-head">Cart</h1>
            </div>
            <div id="shop">
                {items.map(element => {
                    return <CartItem 
                    key={element.id} 
                    item={element} 
                    deleteItem={deleteItem}
                    lowerItem={lowerItem}
                    incrementItem={incrementItem}/>;
                })}
            </div>
        </div>
    );
}

export default Cart;