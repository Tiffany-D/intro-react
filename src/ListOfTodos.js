import './components.css';


function List() {
    return (
        <ul className="list-of-todos">
            <li>
                <input type="checkbox"></input>
                <label>Repair bathroom</label>
                <button className="clear" type="submit">x</button>
            </li>
            <li>
            <input type="checkbox"></input>
                <label>BeCode event at 2PM</label>
                <button className="clear" type="submit">x</button>
            </li>
        </ul>
    )
}

export default List;