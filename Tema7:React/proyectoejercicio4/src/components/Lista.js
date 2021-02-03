function Lista({toDos, setToDos}){

const removeToDo = (title) => {
    setToDos(toDos.filter(toDo => toDo.title !== title));

}

const toggleTodo = (e, index) => {
    if(e.target.tagName !== "BUTTON"){

   
const newToDos = [...toDos];
newToDos[index].completed = !newToDos[index].completed;
setToDos(newToDos);
 }
};


return(
<ul className="list-group container">
{toDos.map(({title, completed}, index) => {
    /* let className = "list-group-item";
    if (toDo.completed)
    className += " completed"; */
    return(
        <li className={`list-group-item d-flex justify-content-between ${completed && "completed"}`} onClick={(e) => toggleTodo(e,index)}>
            <span>To-Do:{index}:{title}</span>
            <button className="btn btn-danger" onClick={() => removeToDo(title)}>X</button>
        </li>
    )

})}
</ul>

)
}


export default Lista;