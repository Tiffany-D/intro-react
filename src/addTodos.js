import './components.css';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';


function Todos(addToList) {
    const [todo, setTodo] = useState({
        id:"",
        task: "",
        completed: false
    });
    //update task property
    function inputAdded(e) {
        setTodo({ ...todo, task: e.target.value });
    }

    function handleSubmit() {
        //e.preventDefault();
        if (todo.task.trim()) {
            addToList({...todo, id: uuidv4});
            //reset task input
            setTodo({ ...todo, task: "" });
        }
    }


    return (
        <form onSubmit={handleSubmit} className="input-field">
            <input onChange={inputAdded} name="task" value={todo.task} type="text" placeholder="Add something to do..."></input>
            <button onClick={addToList}className="add" type="submit">Add</button>
        </form>
       
    )
}

export default Todos;