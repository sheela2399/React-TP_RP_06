import {useState} from "react";
import TC from "../ToDoApp/ToDoChild";

function ToDOParent() {
    var [task , setTask] = useState([])

    function addtask(event) { 
       var value =  event.target.value
        setTask(value)
    }
    return(
        <div>
           <input type="text" Placeholder="Enter a task"></input>
           <button onClick={function(event){addtask(Event)}}>Add</button>
        </div>
    )
}

export default ToDOParent