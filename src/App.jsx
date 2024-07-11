import { useState } from "react"

// npx tailwindcss -i ./src/index.css -o ./output.css --watch
function App() {

  const [todos, setTodos] = useState(["asldkfj","alskdjf"]);
  return (
   <div className="grid place-content-center h-screen bg-slate-200">
   <div className="bg-white p-4">
      <div><h1 className="text-3xl font-bold">Things To Do</h1></div>
      <div>
      <input className="border-spacing-1 border-black" type="text"></input>

      {todos.map((todo)=>{return(
        <div key={todo} className="m-1 p-1">
        <hr />
        <input type="checkbox" /> <p className="inline">{todo}</p>
        </div>
        )
      })}
      </div>
      </div>
      <div className="bg-green-200">
      {todos.length} items left
      </div>
   </div>
  )
}

export default App
