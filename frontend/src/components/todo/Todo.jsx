import React, { useEffect, useState } from "react";
import "./todo.css";
import TodoCards from "./TodoCards";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Update from "./Update";
import axios from "axios";
 
let id = sessionStorage.getItem("id");
 
let toUpdateArray = [];

const Todo = () => {
 
  const [Inputs, setInputs] = useState({
    company: "",
    date: "",
    status: "",
    category: "",
  });

  const [Array, setArray] = useState([]);

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  const submit = async () => {
    if (Inputs.company === "" || Inputs.date === "" || Inputs.status === "" || Inputs.category === "") {
      toast.error("Complete data missing !!");
    } else {
      if (id) {
        await axios
          .post(`${window.location.origin}/api/v2/addTask`, {
            company: Inputs.company,
            date: Inputs.date,
            status: Inputs.status,
            category: Inputs.category,
            id: id,
          })
          .then((response) => {
            console.log(response);
          });
        setInputs({ company:"", date:"", status:"", category:"" });
        toast.success("Your Task Is Added");
      } else {
        // setArray([...Array, Inputs]);
        setInputs({ company:"", date:"", status:"", category:"" });
        toast.success("Your Task Is Added");
        toast.error("Your Task Is Not Saved ! Please SignUp");
      }
    }
  };

  const del = async (Cardid) => {
    if (Cardid) {
      await axios
        .delete(`${window.location.origin}/api/v2/deleteTask/${Cardid}`, {
          data: { id: id },
        })
        .then(() => {
          toast.success("Your Task Is Deleted");
        });
    } else {
      toast.error("Please SignUp First");
    }
  };

  const dis = (value) => {
    document.getElementById("todo-update").style.display = value;
  };
  const update = (value) => {
    toUpdateArray = Array[value];
  };

  useEffect(() => {
    if (id) {
      const fetch = async () => {
        await axios
          .get(`${window.location.origin}/api/v2/getTasks/${id}`)
          .then((response) => {
            setArray(response.data.list);
          });
      };
      fetch();
    }
  }, [submit]);

  return (
    <>
      <div className="todo">
        <ToastContainer />
          <div className="todo-main container d-flex justify-content-center align-items-center my-4 flex-column">
            <div className="d-flex justify-content-around todo-inputs-div" >
              <input
                type="text"
                placeholder="Company"
                className="my-2 p-2 todo-inputs"
                name="company"
                value={Inputs.company}
                onChange={change}
              />
              <input
                type="text"
                placeholder="Date"
                className="my-2 p-2 todo-inputs"
                name="date"
                value={Inputs.date}
                onChange={change}
              />
              <input
                type="text"
                placeholder="Status"
                className="my-2 p-2 todo-inputs"
                name="status"
                value={Inputs.status}
                onChange={change}
              />
              <input
                type="text"
                placeholder="Category"
                className="my-2 p-2 todo-inputs"
                name="category"
                value={Inputs.category}
                onChange={change}
              />
            </div>

            <div className=" w-50 w-100 d-flex justify-content-end my-3">
              <button className="home-btn px-2 py-1" onClick={submit}>
                Add
              </button>
            </div>
          </div>
        
          <div className="Contenttable">
            <table style={{ width: '70%', borderCollapse: 'separate', borderSpacing: '1rem', marginLeft: '12vw' }} >
              <thead>
                <tr>
                  <th style={{ border: '1px solid #475569', borderRadius: '0.25rem', textAlign: 'center', width: "10rem"}}>Company</th>
                  <th style={{ border: '1px solid #475569', borderRadius: '0.25rem', textAlign: 'center', width: "5rem"}}>Date</th>
                  <th style={{ border: '1px solid #475569', borderRadius: '0.25rem', textAlign: 'center', width: "5rem"}}>Status</th>
                  <th style={{ border: '1px solid #475569', borderRadius: '0.25rem', textAlign: 'center', width: "5rem"}}>Category</th>
                  <th style={{ border: '1px solid #475569', borderRadius: '0.25rem', textAlign: 'center', width: "5rem"}}>Operations</th>
                </tr>
              </thead>
              <tbody>
                {Array && Array.map((item, index) => (
                  <tr key={index} style={{height: '2rem'}}>
                    <td style={{ border: '1px solid #334155', borderRadius: '0.25rem', textAlign: 'center' }}>{item.company}</td>
                    <td style={{ border: '1px solid #334155', borderRadius: '0.25rem', textAlign: 'center' }}>{item.date}</td>
                    <td style={{ border: '1px solid #334155', borderRadius: '0.25rem', textAlign: 'center' }}>{item.status}</td>
                    <td style={{ border: '1px solid #334155', borderRadius: '0.25rem', textAlign: 'center' }}>{item.category}</td>
                    <td style={{ border: '1px solid #334155', borderRadius: '0.25rem', textAlign: 'center' }}>
                            <TodoCards
                              company={item.company}
                              date={item.date}
                              status={item.status}
                              category={item.category}
                              id={item._id}
                              delid={del}
                              display={dis}
                              updateId={index}
                              toBeUpdate={update}
                            />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="contentcard ">
            <div className="todo-body">
              <div className="container-fluid">
                <div className="row ">
                  {Array &&
                    Array.map((item, index) => (
                      <>
                        
                      <div 
                        className="col-lg-3 col-11 mx-lg-5 mx-3 my-2"
                        key={index}
                      >
                        <TodoCards
                            company={item.company}
                            date={item.date}
                            status={item.status}
                            category={item.category}
                            id={item._id}
                            delid={del}
                            display={dis}
                            updateId={index}
                            toBeUpdate={update}
                          />
                      </div>
                    </>
                  ))}
                </div>
              </div> 
            </div>
          </div>

      </div>

      <div className="todo-update " id="todo-update">
        <div className="container update">
          <Update display={dis} update={toUpdateArray} />
        </div>
      </div>
    </>
  );
};

export default Todo;