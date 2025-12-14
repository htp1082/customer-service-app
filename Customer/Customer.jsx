import React from "react";
import "./Customer.css";
import calender from "../assets/calendar.png";

const Customer = ({ customer, setTask,taskCount,setTaskCount }) => {
  const ClickHandler = () => {
    setTask((preTask) => [...preTask, customer]);
    setTaskCount(taskCount+1)
  };
  return (
    <div>
      <div
        onClick={ClickHandler}
        className="card bg-base-100 h-50 shadow-sm rounded-md"
      >
        <div className="card-body flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h2 className="card-title text-lg font-semibold">
              {customer.title}
            </h2>
            <h2
              className={`badge flex items-center gap-2 px-2 py-1 rounded-md 
                ${
                  customer.status === "In Progress"
                    ? "bg-yellow-100 text-yellow-800"
                    : ""
                }
                ${
                  customer.status === "Open"
                    ? "bg-green-100 text-green-800"
                    : ""
                }
                ${
                  customer.status === "Pending" ? "bg-red-100 text-red-800" : ""
                }
                ${
                  customer.status === "Resolved"
                    ? "bg-green-200 text-green-900"
                    : ""
                }`}
            >
              <span
                className={`w-3 h-3 rounded-full 
                  ${customer.status === "In Progress" ? "bg-yellow-500" : ""}
                  ${customer.status === "Open" ? "bg-green-600" : ""}
                  ${customer.status === "Pending" ? "bg-red-700" : ""}
                  ${customer.status === "Resolved" ? "bg-green-400" : ""}`}
              ></span>
              <span className="text-sm font-medium">{customer.status}</span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-sm">{customer.description}</p>

          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <div className="flex gap-4">
              <span className="font-medium">{`#${customer.id}`}</span>
              <span>{customer.priority}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>{customer.customer}</span>
              <div className="flex items-center gap-1">
                <img className="w-4 h-4" src={calender} alt="Calender" />
                <span>{customer.createdAt}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
