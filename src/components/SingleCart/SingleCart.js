import React from "react";
import "./SingleCart.css";

const SingleCart = (props) => {
  const { id, name, img, instructor, price } = props.data; // Destructuring data

  return (
    <div>
      <div className="card mb-3 single-card w-100 px-0">
        <div className="row single-row g-0">
          <div className="col-md-5">
            <img
              src={img}
              className="img rounded-start cart-img w-100"
              alt=""
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text instructor">{instructor}</p>
              <p className="card-text price mb-3">${price}</p>
              <button
                className="btn btn-outline-dark"
                onClick={() => props.removeHandler(id)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
