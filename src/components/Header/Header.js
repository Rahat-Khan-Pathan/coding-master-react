import React, { useEffect, useRef } from "react";
import './Header.css';
import Typed from "typed.js";

const TopBanner = () => {
  
  const el = useRef(" ");
  const typed = useRef(" ");

  // Types.js Library for text animation 
  useEffect(() => {
    const options = {
      strings: [
        "AN EXPERT CODER",
        "A DEVELOPER",
        "A GRAPHICS DESIGNER",
        "A DATA EXPERT"
      ],
      typeSpeed: 50,
      backSpeed: 50,
      showCursor:false,
      loop:true,
    };
    typed.current = new Typed(el.current, options);
  }, []);

  return (
    <div className="container top-banner">
      <div className="row row-cols-1 row-cols-md-2 px-3 top">
        <div className="col d-flex justify-content-begin align-items-center">
          <div>
            <h1 className="welcome mb-4">Welcome To <span className="brand">Coding Master</span> </h1>
            <div className="type-wrap">
              <p className="type"> BE <span ref={el}/></p>
            </div>
            <p className="welcome-bottom">More than 50,000 Students from 300 colleges have trusted us</p>
          </div>
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <img src="/programming.svg" alt="" className="w-100" />
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
