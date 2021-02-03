import {useState} from "react";

function Input({toDos, setToDos}){


const [newToDo, setNewToDo] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();

    setToDos(prevToDos => [{title: newToDo, completed:false}, ...prevToDos])

    setNewToDo("");
}

    return(

        <form onSubmit={handleSubmit} className="form-group">
            <input className="form-control"
            type="text"
            value={newToDo}
            placeholder="Introduce un nuevo To-Do"
            onChange={(e) => setNewToDo(e.target.value)}
            />
            </form>
    )
   
}


export default Input;