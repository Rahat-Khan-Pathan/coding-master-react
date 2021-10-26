import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import UseFakeData from "../../hooks/FakeData";
import { removeFromCart } from "../../redux/actions/cartActions";
import { getDB, removerFromDB } from "../../utilities/LocalStorage";
import SingleCart from "../SingleCart/SingleCart";
import Summary from "../Summary/Summary";
import "./Cart.css";

const Cart = (props) => {
  const fakeData = UseFakeData();         // Getting fake course data
  const itemsID = props.cart;   // Getting keys from items
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
    props.removeFromCart(id);
    const newCart = cart.filter(ct => ct.id !== id);
    setCart(newCart);
  }
  
  return (
    <div className="cart-container container">
      <div className="row px-2 cart">
        <div className="col-md-9">
            { (cart.length===0)? <h4 className="text-center no-course">No Course Selected</h4> : 
            cart.map((singleCart) => (
              <SingleCart key={singleCart.id} data={singleCart} removeHandler={removeHandler}></SingleCart>
            ))}
        </div>
        <div className="col-md-3">
          <Summary cart={cart}></Summary>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state=> {
  return {cart:state.cart}
}
const mapDispatchToProps = {
  removeFromCart:removeFromCart
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart);
