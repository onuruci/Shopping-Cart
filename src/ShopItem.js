import React from 'react';
import "./App.css";

function ShopItem({ item, addCart ,lowerItem, incrementItem, deleteItem}) {

    let adder;

    const handleClick = () => addCart(item.id);
    
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

    if(item.count > 0)
    {
        console.log("added");
        adder =  <div id="row">
            <div id="minu"><button onClick={minus}>-</button></div>
            <div id="mid"><h1>{item.count}</h1></div>
            <div id="adu"><button onClick={append}>+</button></div>
        </div>;
    }
    else
    {
        adder = <button onClick={ handleClick } id="add-cart">Add Cart</button>;
    }

    

    return(
        <div class="item">
            <div>
                <img src={item.img} alt="" id="image"/>
            </div>
            <div>
                <h1>{item.title}</h1>
            </div>
            <div>
                <h1>{item.price} $</h1>
            </div>
            <div id="ro">
                {adder}
            </div>
        </div>
    );
}

export default ShopItem;