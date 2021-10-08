import React from "react";
import Rating from "react-rating";
import { addToCart } from "../../utilities/LocalStorage";
import './SingleCourse.css';

const SingleService = (props) => {
  const { id,name, img, instructor, price, stars, rated } = props.course;

  // add function to add course id to local storage and show modal for confirmation
  const add = ()=> {
    addToCart(id);
    document.getElementById('modal-btn').click();
    setTimeout(() => {
      document.getElementById('modal-close').click();
    }, 1000);
  }

  return (
    <div className="col">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text instructor">{instructor}</p>
          <div>
            <span className="stars">{stars} </span>
            <Rating
              emptySymbol="fa fa-star-o star"
              fullSymbol="fa fa-star star"
              readonly
              initialRating={stars}
            />
            {' '} ({rated})
          </div>
          <p className="card-text price">${price}</p>
          <button className="btn btn-outline-dark mt-3" onClick={add}>ADD TO CART <i className="fas fa-arrow-right"></i> </button>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
