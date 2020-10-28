import React from 'react';
import { Link } from 'react-router-dom';
import "./App.css";

function Nav({itemCount}) {

    let cartCount;
    if(itemCount > 0)
    {
        cartCount = <div>{itemCount}</div>;
    }
    else
    {
        cartCount = <div></div>;
    }
    return(
        <div id="nav-bar">
            <div id="head">
            <h1>YUGORISART</h1>
            </div>
            <nav>
                <div id="home">
                    <div class="headlink">
                        <Link to="/" id="a">Home</Link>
                    </div>
                    <div class="headlink">
                        <Link to="/shop" id="a">Shop</Link>
                    </div>
                </div>
                <div id="cart">
                    <div>
                        {cartCount}
                    </div>
                    <div>
                        <Link to="/cart" id="a">Cart</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;