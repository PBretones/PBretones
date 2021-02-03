import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import Movie from "./Movie";

function LandingPage() {

    const [movie, setMovie] = useState([]);
    const key = "f86c13ef9f872010b3034a30e5c128f0";

    useEffect(() => {

        userData();
    }, [])

    const userData = async () => {


        const data = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`);
        const users = await data.json();
        setMovie(users.results);
        console.log(users.results);


    }
    // State
    const [textInput, setTextInput] = useState("");
    // Functions
    const userInputHandler = (e) => {
        setTextInput(e.target.value);
    }
    const [Form, setForm] = useState([]);

    const submitFormHandler = (e) => {
        e.preventDefault();
        setForm([...Form, textInput]);
        setTextInput("");
    }

    return (
        <div className="App">
            <div>
                <form>
                    <textarea value={textInput} onChange={userInputHandler} id="" cols="30" rows="10"></textarea>
                    <h1>{textInput}</h1>
                    <button onClick={submitFormHandler}>Submit</button>
                </form>
                {movie.map(elem => <Movie
                    title={elem.original_title}
                    date={elem.release_date}
                    key={elem.id}
                />)}
            </div>

        </div>

    )
}


export default LandingPage;