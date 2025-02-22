import React, { useState } from 'react';

const Todo = ({ tasks, setTasks, onComplete, onFail }) => {
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]); // Add new task to list
      setNewTask(""); // Clear input field
    }
  };

  return (
    <div className="mt-4">
      <h2 className="text-xl mb-2">To-Do List</h2>
      
      {/* Input Field to Add Task */}
      <div className="mb-4 flex">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task..."
          className="border p-2 rounded-md w-full"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-3 py-2 ml-2 rounded-md"
        >
          ➕ Add Task
        </button>
      </div>

      {/* Task List */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center border p-2 mb-2">
            <span>{task}</span>
            <div>
              <button
                className="bg-green-500 text-white px-2 py-1 rounded-md mr-2"
                onClick={() => onComplete(index)}
              >
                ✅ Done
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded-md"
                onClick={() => onFail(index)}
              >
                ❌ Fail
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
