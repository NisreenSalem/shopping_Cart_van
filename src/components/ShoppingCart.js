import React from "react";
import './Navbar_style.css'
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";


const ShoppingCart = ({ isOpen }) => {

  const { closeCart, cartItems } = useShoppingCart();
  return (
    <>
      {isOpen ? <div className='dropdown_context' >
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}

      </div> : closeCart}


    </>



  );
};

export default ShoppingCart;
