import React, { useEffect, useState } from "react";
import UseFakeData from "../../hooks/FakeData";
import { getDB, removerFromDB } from "../../utilities/LocalStorage";
import SingleCart from "../SingleCart/SingleCart";
import Summary from "../Summary/Summary";
import "./Cart.css";

const Cart = () => {
  const fakeData = UseFakeData();         // Getting fake course data
  const itemsDB = getDB();                // Getting items stored in local storage
  const itemsID = Object.keys(itemsDB);   // Getting keys from items
  const [cart, setCart] = useState([]);

  // Getting selected courses from local storage 
  useEffect(()=> {
    if(fakeData.length ) {
      const newCart = itemsID.map(id => fakeData?.find( pd => pd.id === id));
      setCart(newCart);
    }
  },[fakeData])

  // Course remove handler
  const removeHandler = id => {
    removerFromDB(id);
    const newCart = cart.filter(ct => ct.id !== id);
    setCart(newCart);
  }
  
  return (
    <div className="cart-container container">
      <div className="row px-2">
        <div className="col-9">
          <div className="row row-cols-1 row-cols-md-3 g-0 justify-content-center">
            { (cart.length===0)? <h4 className="text-center no-course">No Course Selected</h4> : 
            cart.map((singleCart) => (
              <SingleCart key={singleCart.id} data={singleCart} removeHandler={removeHandler}></SingleCart>
            ))}
          </div>
        </div>
        <div className="col-3">
          <Summary cart={cart}></Summary>
        </div>
      </div>
    </div>
  );
};

export default Cart;
