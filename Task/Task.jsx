import React from "react";

const Task = ({ task,completeHandler }) => {
  // console.log(task)

 
  return (
    <div>
        <h1 className="card-title ">Task Status</h1>
      {task.length === 0 && (
        <p className="text-gray-400">Select a ticket to add to Task Status</p>
      )}
      <div>
        {task.map((t, index)  => (
          <div key={index} className="bg-blue-100 p-5 m-5 rounded-2xl">
            <h2 className="mb-4 mt-4">{t.title}</h2>
            <button onClick={()=> completeHandler(t)} className="btn w-full bg-green-400">Complete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task;
