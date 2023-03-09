import React from "react";
import './Navbar_style.css'
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import FormatCurrency from "./FormatCurrency";
const CartItem = ({ id, quantity }) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <div className="cart_item">
      <img
        src={item.imgUrl}
        alt="cart-img"
        style={{ width: "300px", height: "200px" }}
      />
      <div className="cart_item_content">
        <div className='cart_item_context'>
          {item.name}{" "}

          {quantity > 1 && (
            <h3 style={{ fontSize: "0.65rem" }}>
              x{quantity}
            </h3>
          )}
        </div>
        <div className="text-price" style={{ fontSize: "1.2rem" }}>
          {FormatCurrency(item.price)}
        </div>
        <button className='cart_item-btn'
          onClick={() => removeFromCart(item.id)}
        >

          &times;
        </button>
      </div>



    </div>

  );
};

export default CartItem;
