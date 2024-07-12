import { useState } from "react"

// npx tailwindcss -i ./src/index.css -o ./output.css --watch

function ButtonGroup() {
  const [selectedButton, setSelectedButton] = useState("button1");

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <div className="flex justify-end space-x-2">
      <button
        className={`ml-auto px-1 rounded ${
          selectedButton === 'button1' ? 'border border-black' : ''
        }`}
        onClick={() => handleButtonClick('button1')}
      >
      All
      </button>
      <button
        className={`ml-auto px-1 rounded ${
          selectedButton === 'button2' ? 'border border-black' : ''
        }`}
        onClick={() => handleButtonClick('button2')}
      >
        Active
      </button>
      <button
        className={`ml-auto px-1 rounded ${
          selectedButton === 'button3' ? 'border border-black' : ''
          }`}
          onClick={() => handleButtonClick('button3')}
      >
      Completed
      </button>
    </div>
  );
}


function App() {

  const [todos, setTodos] = useState([]);

  const [completed, setCompleted] = useState([]);
  

  const handleRemoveTask = (task) => {
    const updatedTodos = todos.filter((todo) => todo !== task);
    setCompleted(...completed,task);
    setTodos(updatedTodos);
  };

  const [newTask, setNewTask] = useState(''); 
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (newTask.trim()) {
        setTodos([...todos,newTask]);
        setNewTask('');
      }
    }
  };
  return (
  <>
  <div className="mx-auto w-2/6 p-4 mt-10 bg-white border">
  <div className="text-3xl font-bold text-center m-3">Things To Do</div>
  
  <input
    placeholder="Add new task"
    className="w-full border focus:border-blue-300 p-1"
    type="text"
    value={newTask}
    onChange={(e) => setNewTask(e.target.value)} 
    onKeyPress={handleKeyPress}
  />


      
    <div className="max-h-4/6 overflow-y-auto">
    {todos && todos.map((todo)=>{return(
      <div className="" key={todo}>
      <hr className="my-2 border-gray-300"/>
      <input type="checkbox" className="mr-2" 
      onChange={() => handleRemoveTask(todo)}
      />
      <p className="inline">{todo}</p>
      </div>
      )
      })}
      </div>
      
    </div>
    <div className="mx-auto w-2/6 p-3 bg-green-200 border flex text-xs relative">
        
    <div>
    search button
    </div>
    <div className=""></div>
        <div>
        {todos.length} items left
        </div>
        
       <div className="absolute right-1">
       <ButtonGroup />
       </div> 

        </div>
    </>
   
  )
}

export default App
