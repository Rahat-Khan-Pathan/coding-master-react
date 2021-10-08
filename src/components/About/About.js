import React from "react";
import Users from "../Users/Users";
import "./About.css";

const About = () => {
  return (
    <div className="container about-container">
      <div className="row row-cols-1 row-cols-md-2 px-2 g-4">
        <div className="col d-flex flex-column justify-content-center align-items-center about-div">
          <h1 className="heading">ABOUT US</h1>
          <hr />
          <p className="about">
            Every individual has the potential to create change, whether in
            their life, their community, or the world. The transformative power
            of education is what unlocks that potential. Yet, access to
            high-quality education has been a privilege of the few. Back in
            2012, we realized it was a time for a seismic shift in learning.
            From the tried and true to the leading edge. From “for some” to “for
            all.” By opening the classroom through online learning, Coding Maste empowers
            millions of learners to unlock their potential and become
            changemakers.
          </p>
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <img src="/about.svg" className="w-100" alt="" />
        </div>
      </div>
      <div>
          <h1 className="heading text-center instructor-heading">OUR INSTRUCTORS</h1>
          <hr />
          <Users></Users>
      </div>
    </div>
  );
};

export default About;
