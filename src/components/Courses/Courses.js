import React from "react";
import Modal from "../Modal/Modal";
import SingleCourse from "../SingleCourse/SingleCourse";
import "./Courses.css";

const Services = (props) => {
  const { courses } = props;    // Destructuring courses from props
  return (
    <div className="container courses-container">
      <Modal></Modal>
      <h1 className="heading">COURSES</h1>
      <hr />
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-2">
        {courses.map((course) => (
          <SingleCourse key={course.id} course={course}></SingleCourse>
        ))}
      </div>
    </div>
  );
};

export default Services;
