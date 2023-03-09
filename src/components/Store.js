import React from "react";
import './Store_style.css'
import storeItems from "../data/items.json";
import StoreItem from "./StoreItem";
const Store = () => {
  return (
    <>

      <div className='Products'>
        {storeItems.map((item) => (
          <div key={item.id} className="">
            <StoreItem {...item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Store;
