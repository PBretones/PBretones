import React, { useState, useEffect } from 'react';

function Lista() {
  /* const [equipo, setEquipo] = useState([]);
  const [isToggled, setToggled] = useState(false);

  const toggleTrueFalse = () => setToggled(!isToggled);

  useEffect(() => {

    userData();
  }, [])

  const userData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos');
    const users = await data.json();
    setEquipo(users);

    



  }

  return (
    <div className="App">
      <ul>{

        equipo.map((item) => (
          <li key={item.id} >{item.id}:{item.title}:{item.completed.toString()}<button onClick={toggleTrueFalse}>check</button></li>

        ))
      }</ul>
    </div>
  ); */
  function getList() {
    return fetch('https://jsonplaceholder.typicode.com/todos')
      .then(data => data.json())
  }

  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getList()
      .then(items => {

        if (mounted) {
          setList(items)
        }
      })
    return () => mounted = false;
  }, [])

  return (
    <div className="wrapper">
      <h1>Usuarios en latin</h1>
      <ul>
        {list.filter(item => item.id<=20).map(item => <li key={item.id}>{item.id}:{item.title}:{item.completed.toString()}</li>)}
      </ul>
    </div>
  )
}

export default Lista;