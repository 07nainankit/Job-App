import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { GrDocumentUpdate } from "react-icons/gr";
import "./todocard.css"

const TodoCards = ({
  company,
  date,
  status,
  category,
  id,
  delid,
  display,
  updateId, 
  toBeUpdate,
}) => {
  return (
    <div className="p-3 todo-card">
      <div className="cardcont"  >
        <h5>Company: {company}</h5>
        <p>Date: {date}</p>
        <p>Status: {status}</p>
        <p>Category: {category}</p>
      </div>
      <div className="d-flex justify-content-around ">

        <div className="d-flex justify-content-center align-items-center card-icon-head px-2 py-1 "
          onClick={() => {
            display("block");
            toBeUpdate(updateId);
          }}
        >
          <GrDocumentUpdate className="card-icons" /> Update
        </div> 

        <div
          className="d-flex justify-content-center align-items-center card-icon-head  px-2 py-1 text-danger"
          onClick={() => {
            delid(id);
          }}
        >
          <AiFillDelete className="card-icons del" /> Delete
        </div>

      </div>
      
    </div>
  );
};

export default TodoCards;