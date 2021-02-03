/* Fetch API */

const DATA_PATH = "user.json"; // o quizas prueba_json_fetch/user.json




/* const USERS_URL = "https://reqres.in/api/users/";

fetch(USERS_URL)
    .then(response => {
        if(!response.ok)
        throw new Error (response.status);

        return response.json();
    })
    
    .then(json => console.log(json.data.map(user => user.email)))
    .catch(error => {console.log(error);
    })
 */

// Metodo POST

const USERS_URL = "https://reqres.in/api/login/";
const credentials = {
    email: "eve.holt@reqres.in",
    password: "cityslicka"
};
fetch(USERS_URL, {

    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(credentials)
})
    .then(response => {
        if (!response.ok)
            throw new Error(`Algo mal: ${response.statusText}`);

        return response.json();
    })

    .then(json => console.log(json.data.map(user => user.email)))
    .catch(error => {
        console.log(error);
    })


    // Paginacion

    const apiBooks = [

        "book",
        "book",
        "book",
        "book",
        "book",
        "book",
        "book",
        "book",
        "book",
        "book",
        "book",
        "book",
        "book",
        "book",
        "book",
        "book"
    ];
    apiBooks.splice
    console.log(apiBooks);
