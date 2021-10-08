import React from "react";
import "./User.css";

const User = (props) => {
  const { name, email, picture, company } = props.data;   // Destructuring data
  return (
    <div className="col">
      <div className="card user-card h-100">
        <img src={picture} className="card-img-top user-img" alt={name} />
        <div className="card-body user-body d-flex justify-content-center mt-4">
          <div>
            <p className="card-title user-title">
              <span className="bold-name">Name:</span> {name}
            </p>
            <p className="card-title">
              <span className="bold-name">Email:</span> {email}
            </p>
            <p className="card-title">
              <span className="bold-name">Company:</span> {company}
            </p>

            <div className="d-flex justify-content-evenly mt-4">
              <i className="fab icon fa-github"></i>
              <i className="fab icon fa-linkedin"></i>
              <i className="fab icon fa-facebook-square"></i>
              <i className="fab icon fa-twitter-square"></i>
              <i className="fab icon fa-google-plus-square"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
