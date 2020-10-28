import React, {useState} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";
import items from "./Items";


function Routes() {
    const [cartItems, setCartItems] = useState([]);
    const [itemCount, setItemCount] = useState(0);

    const addCart = (id) => {
        let item = items.find(element => element.id === id);
        if(!cartItems.includes(item))
        {
            let al = [...cartItems];
            item.count++;
            al.push(item);
            setCartItems(al);
            setItemCount(itemCount + 1);
        }
        console.log(cartItems);
        console.log(item);
    };

    const deleteItem = (id) => {
        let al = [...cartItems];
        let ind = al.findIndex(element => element.id === id);
        let item = al[ind];
        item.count--;
        al.splice(ind, 1);
        setCartItems(al);
        setItemCount(itemCount - 1);
    };

    const lowerItem = (id) => {
        let al = [...cartItems];
        let ind = al.findIndex(element => element.id === id);
        al[ind].count--;
        setItemCount(itemCount - 1);
        setCartItems(al);
    };

    const incrementItem = (id) => {
        let al = [...cartItems];
        let ind = al.findIndex(element => element.id === id);
        al[ind].count++;
        setItemCount(itemCount + 1);
        setCartItems(al);
    };

    return(
        <BrowserRouter>
            <Nav itemCount={itemCount}/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/shop">
                    <Shop 
                    items={items}
                    addCart={addCart}
                    lowerItem={lowerItem}
                    incrementItem={incrementItem}
                    deleteItem={deleteItem}/>
                </Route>
                <Route exact path="/cart">
                    <Cart 
                    items={cartItems}
                    deleteItem={deleteItem}
                    lowerItem={lowerItem}
                    incrementItem={incrementItem}/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;