import '../App.css';
import Lista from '../components/Lista';
import Input from '../components/Input';
import React, { useState, useEffect} from 'react';


function App() {
const [toDos,setToDos] = useState([]);

useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(data => setToDos(data.slice(0,21)));

}, []);



  return (
    <div>
      <div className="container">
      <h1>To-Do List</h1>
     <Input  />
      </div>
     <Lista />
    </div>
  );
}

export default App;
