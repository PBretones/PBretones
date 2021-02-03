import React, { useState } from 'react';


function Form(props) {

    const [inputText, setInputText] = useState("");
    const [validation, setValidation] = useState(true);


    function manejarFormulario(event) {
        setInputText(event.target.value);

    }

    function submit(event) {
        event.preventDefault();
        if (inputText.trim() !== "") {
            props.newInput(inputText);
            setInputText("");
            setValidation(true);
        }else {
            setValidation(false);
        }

    }


    return (
        <div>
            <form className="form" onSubmit={submit}>
                <span>Añadir nuevo usuario</span>
                <input value={inputText} onChange={manejarFormulario} />
                <button >Añadir</button>
            </form>

            {
                !validation && 
                <div className="validation">Error, introduzca un usuario nuevo</div>
            }
        </div>


    )


}

export default Form;
