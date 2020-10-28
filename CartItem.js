import React from 'react';
import "./App.css";

function CartItem({item, deleteItem, lowerItem, incrementItem}) {
    
    const append = () => {
        incrementItem(item.id);
    };
    
    const minus  = () => {
        if(item.count > 1)
        {
            lowerItem(item.id);
        }
        else if(item.count === 1)
        {
            deleteItem(item.id);
        }
    };

    return(
        <div class="item">
            <div>
                <img src={item.img} alt="" id="image"/>
            </div>
            <div>
                <h1>{item.title}</h1>
            </div>
            <div id="row">
                <div id="minu"><button onClick={minus}>-</button></div>
                <div id="mid"><h1>{item.count}</h1></div>
                <div id="adu"><button onClick={append}>+</button></div>
            </div>
        </div>
    );
}

export default CartItem;