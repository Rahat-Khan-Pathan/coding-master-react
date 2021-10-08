import React from 'react';
import './Summary.css';

const Summary = (props) => {
    const {cart} = props;
    let total = cart.reduce((total,now)=>total+now.price,0);  // Getting total price of the selected courses
    total=total.toFixed(2);
    return (
        <div className="text-center summary-box">
            <h1 className="summary">Summary</h1>
            <hr />
            <h6 className="total">Total Courses: <span>{cart.length}</span> </h6>
            <h6 className="total">Total Price: <span className="box-price">${total}</span> </h6>
        </div>
    );
};

export default Summary;