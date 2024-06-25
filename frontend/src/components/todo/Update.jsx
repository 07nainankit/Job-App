import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Update = ({ display, update }) => {

  useEffect(() => {
    setInputs({
      company: update.company,
      date: update.date,
      status: update.status,
      category: update.category,
    });
  }, [update]);

  const [Inputs, setInputs] = useState({
    company: "",
    date: "",
    status: "",
    category: "",
  });
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };
  //${window.location.origin}

  const submit = async () => {
    await axios
      .put(`${window.location.origin}/api/v2/updateTask/${update._id}`, Inputs)
      .then((response) => {
        toast.success(response.data.message);
      });

    display("none");
  };
  
  return (
    <div className="p-5  d-flex justify-content-center align-items-start flex-column update  ">
      <h3>Update Your Task</h3>
      <input
        type="text"
        className="todo-inputs my-4 w-100 p-3"
        value={Inputs.company}
        name="company"
        onChange={change}
      />
      <input
        type="text"
        className="todo-inputs my-4 w-100 p-3"
        value={Inputs.date}
        name="date"
        onChange={change}
      />
      <input
        type="text"
        className="todo-inputs my-4 w-100 p-3"
        value={Inputs.status}
        name="status"
        onChange={change}
      />
      <input
        type="text"
        className="todo-inputs my-4 w-100 p-3"
        value={Inputs.category}
        name="category"
        onChange={change}
      />
      <div>
        <button className="btn btn-dark my-4" onClick={submit}>
          UPDATE
        </button>
        <button
          className="btn btn-danger my-4 mx-3"
          onClick={() => {
            display("none");
          }} 
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Update;