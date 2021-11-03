import Todos from './addTodos';
import './Todo';
import './components.css';


function List({add}) {
    return (
        <ul className="list-of-todos">
            {add.map(todo => (
                <Todos todo={todo} key={todo.id}/>
            ))}
            {/* <li>
                <input type="checkbox"></input>
                <label>Repair bathroom</label>
                <button className="clear" type="submit">x</button>
            </li>
            <li>
            <input type="checkbox"></input>
                <label>BeCode event at 2PM</label>
                <button className="clear" type="submit">x</button>
            </li> */}
        </ul>
    )
}

export default List;