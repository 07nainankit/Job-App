import React from "react";
import "./about.css";
const About = () => {
  return (
    <div className="about d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="d-flex">
          <h1>About Us</h1>
        </div>

        <p>
          This is a simple, efficient and user friendly web application to keep track of jobs for any person.
          <br />
          A simple and straight forward sign-up and sign-in enables a user to do desired work.
          <br />
          User can create jobs, update them and even delete as per their requirements.
          <br />
          User can add all the essential information about a job they want.
        </p>
      </div>
    </div>
  );
};

export default About;