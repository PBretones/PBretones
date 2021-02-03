import { useState } from "react";


function Counter(props) {
    /* const array = useState(10); */

  /*   const count = array[0];
    const setCount = array[1]; */
// Desestructuracion de arrays
    const [count,setCount] = useState(10);

    const decrement = ()=>{
        setCount(count -1);
    }

    const inrement = ()=>{
        setCount(count+1);
    }



    return (
        <div className="">
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={() => {setCount(count+1)}}>+</button>
        </div>
    );


}

export default Counter;