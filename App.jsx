import "./App.css";
import Navbar from "./Navbar/Navbar";
import Customers from "./Customers/Customers";
import Task from "./Task/Task";
import { Suspense, useState } from "react";
import Resolve from "./Resolved/Resolve";

const customerFech = fetch("../public/customer.json").then((res) => res.json());
function App() {
  const [taskCount, setTaskCount] = useState(0);
  const [resolveCount, setResolveCount] = useState(0);
  const [task, setTask] = useState([]);
  const [resolve, setResolve] = useState([]);

  const completeHandler = (c) => {
    setTask((prevTask) => prevTask.filter((t) => t.id !== c.id));
    setTaskCount((pre) => pre - 1);

    setResolve((pre) => [...pre, c]);

    setResolveCount((pre) => pre + 1);
  };

  return (
    <>
      <div className="max-w-[1200px] mx-auto">
        <Navbar></Navbar>
      </div>

      <div className="max-w-[1200px] mx-auto flex justify-around gap-5">

        {/* in progress btn */}
        <div className="card bg-base-100 w-full shadow-sm ">
          <div className="card-body flex items-center justify-center progress ">
            <h2 className="card-title">In Progress</h2>
            <h1 className="card-title">{taskCount}</h1>
          </div>
        </div>

        {/* resolve btn */}
        <div className="card bg-base-100 w-full shadow-sm resolve">
          <div className="card-body flex items-center justify-center">
            <h2 className="card-title">Resolve</h2>
            <h1 className="card-title">{resolveCount}</h1>
          </div>
        </div>
      </div>
      
      <div className="max-w-[1200px] mx-auto flex gap-6 mt-5">

        {/* LEFT SIDE → Customers cards */}
        <div className="w-[70%]">
          <Suspense fallback={"Customer data is loading..."}>
            <Customers
              completeHandler={completeHandler}
              customerFech={customerFech}
              setTask={setTask}
              taskCount={taskCount}
              setTaskCount={setTaskCount}
            />
          </Suspense>
        </div>

        {/* RIGHT SIDE → Task details */}
        <div className="w-[30%]">
          <Task task={task} completeHandler={completeHandler} />
          <Resolve resolve={resolve}></Resolve>
        </div>
      </div>
    </>
  );
}

export default App;
