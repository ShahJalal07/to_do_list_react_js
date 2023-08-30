import { useState } from "react";
import "./App.css";

function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  return (
    <>
      <h1>To do list </h1>
      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label htmlFor="">Title</label>
            <input type="text" placeholder="What is the task title?" />
          </div>
          <div className="todo-input-item">
            <label htmlFor="">Descriotion</label>
            <input type="text" placeholder="What is the task description?" />
          </div>
          <div className="todo-input-items">
            <button type="button" className="primaryBtn">
              Add
            </button>
          </div>
        </div>

        <div className="btn-area">
          <button
            className={
              isCompleteScreen == false ? "secondaryBtn active" : "secondaryBtn"
            }
            onClick={() => setIsCompleteScreen(false)}
            type=""
          >
            Todo
          </button>

          <button
            className={
              isCompleteScreen == true ? "secondaryBtn active" : "secondaryBtn"
            }
            onClick={() => setIsCompleteScreen(true)}
            type=""
          >
            Completed
          </button>
        </div>
        <div className="todo-list">
          <div className="todo-list-item">
            <div>
              <h3>Task1</h3>
              <p>Discription</p>
            </div>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
