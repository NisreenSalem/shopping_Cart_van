import { useState } from "react";
import './Store_style.css'
import { useShoppingCart } from "../context/ShoppingCartContext";
import FormatCurrency from "./FormatCurrency";
import Modal from './Modal'
const StoreItem = ({ id, name, price, imgUrl }) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className='container'>
      <div className="wrapper">
        <div className="banner-image">
          <img

            src={imgUrl}
          />
        </div>
        <h3 className='name'> {name}</h3>
        <p> {FormatCurrency(price)}</p>
      </div>
      <div className="button-wrapper">

        {quantity === 0 ? (
          <button className="btn fill" onClick={() => increaseCartQuantity(id)}>
            Add To Cart
          </button>
        ) : (
          <div
            className="quatity_container"

          >
            <div
              className="quatity_container__counter"

            >
              <button className='btn' onClick={() => decreaseCartQuantity(id)}>-</button>
              <div className="in_cart">
                <span  >{quantity} in cart</span>
              </div>
              <button className='btn' onClick={() => increaseCartQuantity(id)}>+</button>
            </div>
            <button
              className='btn remove'
              onClick={() => removeFromCart(id)}
            >
              Remove
            </button>
          </div>
        )}
        {quantity === 0 && <button className="btn outline"
          onClick={() => {
            setModalOpen(true)
          }}>Quick View</button>
        }

      </div>

      {modalOpen && <Modal props={{ id, name, price, imgUrl }} setOpenModal={setModalOpen} />}
    </div>

  );
};

export default StoreItem;
