import { useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    if (inputValue.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      text: inputValue,
      isDone: false
    };

    setTasks([...tasks, newTask]);
    setInputValue("");
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleDone = (id) => {
    setTasks(tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isDone: !task.isDone };
      }
      return task;
    }));
  };

  const handleEdit = (id) => {
    const newText = prompt("Edit your task:");
    if (newText !== null && newText.trim() !== "") {
      setTasks(tasks.map((task) => {
        if (task.id === id) {
          return { ...task, text: newText };
        }
        return task;
      }));
    }
  };

  return (
    <div className="container">
      <h1>Checklist</h1>

      <div className="upper-container">
        <div className="input-div">
          <input 
            className="input-field" 
            type="text" 
            placeholder="Input Task"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} 
          />
        </div>
        <div className="add-div">
          <button className="add-btn" onClick={handleAdd}>+Add</button>
        </div>
      </div>
      
      <div className="lower-container">
        {tasks.map((task) => (
          <div key={task.id} className="checklist">
            
            <button className="check-btn" onClick={() => handleDone(task.id)}>
              Done
            </button>
            
            <p 
              className="task" 
              style={{ textDecoration: task.isDone ? "line-through" : "none" }}
            >
              {task.text}
            </p>
            
            <button className="edit-btn" onClick={() => handleEdit(task.id)}>
              Edit
            </button>
            
            <button className="dlt-btn" onClick={() => handleDelete(task.id)}>
              dlt
            </button>
            
          </div>
        ))}
      </div>
    </div>    
  )
}

export default App
