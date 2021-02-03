// 1.1

$("div").append($("<h4>").text("Otro método")).addClass("changeDiv")

const items = ["Champu", "Oreo", "Queso", "Jamon", "Galletas"];

const list = $("<ul>").addClass("active");

for (const item of items) {
    list.append($("<li>").text(item));

}


$(".changeDiv").append(list);

// 1.2 1.3

$("ul li:first-child")
    .css({ "color": "red", "font-weight": "bold" })


// 1.4
$("ul li:last-child")
    .css({ "color": "green" })


// 1.5

$("div").prepend("<input>");

$("input")
.attr({"value":"valor","placeholder":"hola","name":"nombre"})
.removeAttr('value');



// 1.6
$("div").after("<button>");

$("button")
.css({"height":"20px","width":"70px"})
.html("hola")
.addClass("btn btn-primary")
.removeClass("btn-primary")
.addClass("btn-secondary");

// 1.7 

list.prepend("<h1>LISTA</h1>")
list.append("<hr>");






