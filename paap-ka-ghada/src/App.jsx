import { useState } from 'react';
import ToDo from './components/Todo'; 
import './App.css';

const ProgressBar = ({ progress }) => {
  return (
    <div className="outer border-2 border-black rounded-md w-64 p-1">
      <div
        className="inner bg-green-600 text-white text-center py-1 transition-all duration-300"
        style={{ width: `${progress}%` }}
      >
        {progress}%
      </div>
    </div>
  );
};

function App() {
  const [progress, setProgress] = useState(0);
  const [tasks, setTasks] = useState([
    "Exercise for 30 mins",
    "Read a book",
    "Practice coding",
    "Meditate",
  ]);

  const handleComplete = (index) => {
    if (progress < 100) setProgress(progress + 10);
    setTasks(tasks.filter((_, i) => i !== index)); // Remove completed task
  };

  const handleFail = (index) => {
    if (progress > 0) setProgress(progress - 10);
    setTasks(tasks.filter((_, i) => i !== index)); // Remove failed task
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl mb-4">Progress visual tool for student</h1>
      <ProgressBar progress={progress} />
      <ToDo tasks={tasks} setTasks={setTasks} onComplete={handleComplete} onFail={handleFail} />
    </div>
  );
}

export default App;
