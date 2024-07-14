/* eslint-disable react/prop-types */
import { useState } from "react"

// npx tailwindcss -i ./src/index.css -o ./output.css --watch

function ButtonGroup({setDisplay}) {
  const [selectedButton, setSelectedButton] = useState("Active");

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
    console.log(buttonId);
    setDisplay(buttonId);
  };

  return (
    <div className="flex justify-end space-x-2">
      <button
        className={`ml-auto px-1 rounded ${
          selectedButton === 'All' ? 'border border-black' : ''
        }`}
        onClick={() => handleButtonClick('All')}
      >
      All
      </button>
      <button
        className={`ml-auto px-1 rounded ${
          selectedButton === 'Active' ? 'border border-black' : ''
        }`}
        onClick={() => handleButtonClick('Active')}
      >
        Active
      </button>
      <button
        className={`ml-auto px-1 rounded ${
          selectedButton === 'Completed' ? 'border border-black' : ''
          }`}
          onClick={() => handleButtonClick('Completed')}
      >
      Completed
      </button>
    </div>
  );
}


function App() {

  const [todos, setTodos] = useState([]);
  const [display, setDisplay] = useState("Active");
  
  const handleRemoveTask = (task) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id ===task) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
    
  };

  const [newTask, setNewTask] = useState(''); 
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (newTask.trim()) {
        setTodos([...todos,{'id':todos.length+1,"task":newTask,"completed":false}]);
        setNewTask('');
      }
    }
  };
  const activeTasks = todos.filter((task) => !task.completed).length;
  return (
    
    <>
    <div className="mx-auto w-2/6 p-4 mt-10 bg-white border">
    
<div className="text-3xl font-bold text-center m-3">Things To Do</div>
  
  <div>
  <input
  placeholder="Add new task"
  className="w-full border p-1"
  type="text"
  value={newTask}
  onChange={(e) => setNewTask(e.target.value)} 
  onKeyPress={handleKeyPress}
  />
  </div>

    <div className="h-96 overflow-y-auto overflow-hidden">
    <ul className="todo-list">
        {todos.map((todo) => {
          if (display === 'Active' && !todo.completed) {
            return (
              <li key={todo.id}>
              <hr className="mt-1"/>
              <input type="checkbox" className="mr-2" 
              onChange={() => handleRemoveTask(todo.id)}
              />
              {todo.task}
              </li>
            );
          } else if (display === 'Completed' && todo.completed) {
            return (
              <li key={todo.id}>
              <hr className="mt-1"/>
              <input type="checkbox" className="mr-2" checked
              onChange={() => handleRemoveTask(todo.id)}
              />
              <span className="line-through">{todo.task}</span>
              </li>
            );
          } else if (display === 'All') {
            return (
              <li key={todo.id}>
              <hr className="mt-1"/>
              {!todo.completed && <input type="checkbox" className="mr-2" 
              onChange={() => handleRemoveTask(todo.id)}
              />}
                {todo.task}
              </li>
            );
          }
          return null; 
        })}
      </ul>
    </div>
  
      
    </div>
    <div className="mx-auto w-2/6 p-3 bg-green-200 border flex text-xs relative">
        
    
    <div className="ml-2"></div>
        <div>
        {activeTasks ? activeTasks + " items left" : "All done" } 
        </div>
        
       <div className="absolute right-2">
       <ButtonGroup setDisplay={setDisplay}/>
       </div> 

        </div>
    </>
   
  )
}

export default App

//     