import { useState } from "react"

// npx tailwindcss -i ./src/index.css -o ./output.css --watch

function ButtonGroup() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <div className="flex space-x-2">
      <button
        className={`px-1 rounded ${
          selectedButton === 'button1' ? 'border border-black' : ''
        }`}
        onClick={() => handleButtonClick('button1')}
      >
        Button 1
      </button>
      <button
        className={`px-1 rounded ${
          selectedButton === 'button2' ? 'border border-black' : ''
        }`}
        onClick={() => handleButtonClick('button2')}
      >
        Button 2
      </button>
      <button
        className={`px-1 rounded ${
          selectedButton === 'button3' ? 'border border-black' : ''
        }`}
        onClick={() => handleButtonClick('button3')}
      >
        Button 3
      </button>
    </div>
  );
}


function App() {

  const [todos, setTodos] = useState(["asldkfj","alskdjf","asldkfj","alskdjf","asldkfj","alskdjf","asldkfj"]);

  const [completed, setCompleted] = useState([]);

  const [filter, setFilter] = useState('all'); // Default filter is 'all'

  // Filtered tasks based on the selected filter
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') {
      return !todo.completed;
    } else if (filter === 'completed') {
      return todo.completed;
    }
    return true; // Show all tasks for 'all' filter
  });


  return (
  <>
  <div className="mx-auto w-2/6 p-4 mt-10 bg-white border">
  <div className="text-3xl font-bold text-center m-3">Things To Do</div>
  
      <input placeholder="Add new" className="w-full border focus:border-blue-300 p-1" type="text"></input>
      
    <div className="max-h-3/5 overflow-y-auto">
    {todos.map((todo)=>{return(
      <div className="" key={todo}>
      <hr className="my-2 border-gray-300"/>
      <input type="checkbox" className="mr-2" />
      <p className="inline">{todo}</p>
      </div>
      )
      })}
      </div>
      
    </div>
    <div className="mx-auto w-2/6 p-3 bg-green-200 border flex text-xs">
        
    <div>
    search button
    </div>
    <div className=""></div>
        <div>
        {todos.length} items left
        </div>
        
       <div className="float-end">
       <ButtonGroup />
       </div> 

        </div>
    </>
   
  )
}

export default App
