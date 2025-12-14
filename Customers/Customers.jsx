import React, { use } from "react";
import Customer from "../Customer/Customer";
import "./Customers.css";
import Task from "../Task/Task";
const Customers = ({ customerFech, task, setTask,taskCount,setTaskCount,completeHandler }) => {
const customer = use(customerFech);

  return (
    
    <div className="card-grid">
            

      {customer.map((customer) => (
        <Customer
          key={customer.id}
          task={task}
          setTask={setTask}
          customer={customer}
          taskCount={taskCount}
          setTaskCount={setTaskCount}
          completeHandler={completeHandler}
        />
      ))}
    </div>
  );
};

export default Customers;
