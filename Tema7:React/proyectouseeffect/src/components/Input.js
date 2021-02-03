import React, { useState, useEffect } from 'react';
import Form from './Form';


function Input(){
    const [inputList, setInputList] = useState([]);

    function newInput(input) {
        setInputList([input, ...inputList])
    }



    return(
        <>
        <Form 
        newInput = {newInput}/>
         {
            inputList.map(e => <div>{e}</div>)
        }
        </>
       
    )
}


export default Input;
