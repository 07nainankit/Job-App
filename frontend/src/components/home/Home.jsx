import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="home d-flex justify-content-center align-items-center">
      <div className="container d-flex justify-content-center align-items-center flex-column ">
        <h1 className="text-center">
          Organize your <br /> Jobs and life, finally.
        </h1>
        <p>
          Become focused, organized, and calm with Job track app.
        </p> 
        <div className="d-flex my-lg-0 my-2 ">
            <Link className="nav-link active btn-nav p-2"
                  aria-current="page"
                  to="/todo"
            >
              Make Job List
            </Link>      
        </div>
      </div>
    </div>
  );
};

export default Home;