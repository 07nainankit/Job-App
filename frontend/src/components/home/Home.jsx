import React from "react";
import "./home.css";
const Home = () => {
  return (
    <div className="home d-flex justify-content-center align-items-center">
      <div className="container d-flex justify-content-center align-items-center flex-column ">
        <h1 className="text-center">
          Organize your <br /> Jobs and life, finally.
        </h1>
        <p>
          Become focused, organized, and calm with <br />
          Job trak app. 
        </p>
        <button class="home-btn p-2">Make Job List</button>
      </div>
    </div>
  );
};

export default Home;