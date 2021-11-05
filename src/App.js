import './App.css';
import './components.css';
import React from 'react';



export function App() { 
const [todos, setTodos]= React.useState([]);
const [todo, setTodo]=React.useState("");

//retrieve data from localStorage
React.useEffect(()=>{
const retrieveData = localStorage.getItem("todos")
const loadedTodos= JSON.parse(retrieveData)

if(loadedTodos){
  setTodos(loadedTodos)
}
}, [])

//save data into localStorage
React.useEffect(()=>{
  const dataStorage = JSON.stringify(todos)
  localStorage.setItem("todos", dataStorage)
},[todos])

//submit input
function handleSubmit(e){
e.preventDefault();
const newToDo ={
  id:new Date().getTime(),
  text: todo,
  completed: false,
}
setTodos([...todos].concat(newToDo));
setTodo("");

}
//delete functionnality
function deleteToDo(id){
const updateToDos= [...todos].filter((todo)=> todo.id !==id)
setTodos(updateToDos)
}

//complete a task
// function toggleComplete(id){
// const updateToDos = [...todos].map((todos)=>{
//   if(todo.id === id){
//     todo.completed= !todo.completed
//   }
//   return todo
// })
// setTodos(updateToDos);

// }
 
  return (
    <div className="App">
    <h1>To Do List </h1>
     <form className="input-field" onSubmit={handleSubmit}>
     <input type="text" onChange={(e)=> setTodo(e.target.value)} value={todo}/>
     <button type="submit">Add</button>
     </form>
    {/* <input type="checkbox" onChange={()=> toggleComplete(todo.id)} checked={todo.completed} /> */}
      
     {todos.map((todo)=><div key={todo.id}>
     <div>{todo.text}</div>
   <button onClick={()=> deleteToDo(todo.id)} >Delete</button>
     
     </div>)}

    </div>
    
  );
}

export default App;
