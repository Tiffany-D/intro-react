


function Todo(add) {
    return (
        <div>
        < input type = "checkbox" ></input>
         <li>{add.task}</li>
            <button className="clear" type="submit">x</button>
        </div>
    )

}


export default Todo;