import "./App.css";

function App() {
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

        <div>
          <button className="secondaryBtn" type="">Todo</button>
          <button className="secondaryBtn" type="">Comleted</button>
        </div>
        <div className="todo-list">
          <div className="todo-list-item">
            <h3>Task1</h3>
            <p>Discription</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
