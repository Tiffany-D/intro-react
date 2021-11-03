import './components.css';
import { useState } from 'react';


function Todos(addToList) {
    const [todos, setTodos] = useState({
        task: "",
        completed: false
    });
    function inputAdded(e) {
        setTodos({ ...todos, task: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (todos.task.trim()) {
            addToList({ ...todos });
            Todos({ ...todos, task: "" });
        }
    }


    return (
        <form onSubmit={handleSubmit}className="input-field">
            <input onChange={inputAdded} name="task" value={todos.task} type="text" placeholder="Add something to do..."></input>
            <button onClick={addToList}className="add" type="submit">Add</button>
        </form>
       
    )
}

export default Todos;