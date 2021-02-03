// Escondemos el formulario y habilitamos el toggle a través del boton
$("#registerContainer").hide();

$("#toggleRegisterButton").click(function (e) {
    e.preventDefault();
    $("#registerContainer").slideToggle("slow")
});

// Configurar los eventos sobre los inputs

$("#registerContainer input").hover(function () {
    $(this).addClass("bg-light");
}, function () {
    $(this).removeClass("bg-light");
}).focus(function () {
    $(this).removeClass("bg-light");
    $(this).addClass("bg-info");
}).blur(function () {
    $(this).removeClass("bg-info");
});

// Ejercicio 3

const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
