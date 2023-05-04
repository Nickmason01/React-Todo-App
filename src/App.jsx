import { useState } from "react";
import "./styles.css";
import ToDoForm from "./ToDoForm";

function App() {
  
  const [toDos, setToDos] = useState([]);

  function addToDo(title) {
    setToDos((currentToDos) => {
          return [
            ...currentToDos,
            { id: crypto.randomUUID(), title, completed: false },
          ];
        });
  }


  function toggleToDo (id, finished) {
    setToDos(currentToDos => {
      return currentToDos.map(todo => {
        if(todo.id ==id) {
          return {...todo, finished}
        }
         return todo
      })
    })
  }

  function deleteToDo (id) {
    setToDos(currentToDos =>{
      return currentToDos.filter(todo => todo.id!== id)
    })
  }
  return (
    <>
    <ToDoForm onSubmit={addToDo}/>
      <h1>Todo List</h1>
      <ul className="list">
        {toDos.length === 0 && "All Finished!"}
        {toDos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.finished} 
                onChange={e => toggleToDo(todo.id, e.target.checked)}/>
                {todo.title}
              </label>
              <button className="btn btn-danger" onClick={() => deleteToDo(todo.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
