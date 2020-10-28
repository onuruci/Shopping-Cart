import React from 'react';
import ShopItem from './ShopItem';

function Shop({items, addCart, lowerItem, incrementItem, deleteItem}) {
    return(
        <div>
            <div>
                <h1 id="alt-head">Shop</h1>
            </div>
            <div id="shop">
                {items.map(element => {
                    return <ShopItem 
                    key={element.id} 
                    item={element} 
                    addCart={addCart}
                    lowerItem={lowerItem}
                    incrementItem={incrementItem}
                    deleteItem={deleteItem}/>;
                })}
            </div>
        </div>
    );
}

export default Shop;