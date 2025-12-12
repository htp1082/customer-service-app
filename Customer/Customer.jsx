import React from "react";
import "./Customer.css";
import calender from "../assets/calendar.png";
const Customer = ({ customer }) => {
  console.log(customer);
  return (
    <div>
      <div className="card bg-base-100 h-40 shadow-sm">
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="card-title">{customer.title} </h2>
            <h2
              className={`badge flex items-center gap-2 
    ${customer.status === "In Progress" ? "bg-[#F8F3B9] text-[#9C7700]" : ""}
    ${customer.status === "Open" ? "bg-[#B9F8CF] text-[#0B5E06]" : ""}
    ${customer.status === "Pending" ? "bg-[#d00000] text-[#590d22]" : ""}
    ${customer.status === "Resolved" ? "bg-[#B9F8CF] text-[#590d22]" : ""}
  `}
            >
              <span
                className={`w-4 h-4 rounded-full 
      ${customer.status === "In Progress" ? "bg-yellow-500" : ""}
      ${customer.status === "Open" ? "bg-green-600" : ""}
      ${customer.status === "Pending" ? "bg-red-900" : ""}
    `}
              ></span>
              {customer.status}
            </h2>
          </div>
          <p>{customer.description}</p>
          <div className="card-actions justify-between">
            <div className="flex justify-between">
              <div className="mr-5">{`#${customer.id}`}</div>
              <div className="ml-5">{customer.priority}</div>
            </div>
            <div className="flex justify-between">
              <div className="mr-5">{customer.customer}</div>
              <div className="ml-5 flex items-center">
                <img
                  className="w-[15px] h-[15px] mr-3"
                  src={calender}
                  alt="Calender"
                />
                {customer.createdAt}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
