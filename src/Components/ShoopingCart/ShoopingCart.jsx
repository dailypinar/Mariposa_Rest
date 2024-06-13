import React from "react";
import { IoCartOutline } from "react-icons/io5";
import './cart.css';

function ShoopingCart(){
    return(
        <div className="cart">
            <IoCartOutline className="cart-icon"/>
        </div>
    );
}
export default ShoopingCart;