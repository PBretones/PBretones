class Book {
    constructor(title, author, sales, price, remove) {
        this.title = title;
        this.author = author;
        this.sales = sales;
        this.price = price;
        this.remove = remove;
    }
}

let Selfish = new Book('The Selfish Gene', 'Richard Dawkins', 740120, 12, 'Eliminar');
let God = new Book('The God Delusion', 'Richard Dawkins', 610120, 15, 'Eliminar');
let Emperador = new Book('La nueva mente del emperador', 'Roger Penrose', 120000, 17, 'Eliminar');
let Sapiens = new Book('Sapiens:A Brief History if Humankind', 'Yuval Noah Harari', 910120, 16, 'Eliminar');

let myBooks = [
    [],
    Selfish,
    God,
    Emperador,
    Sapiens,

];

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
        row.classList.add("tr:hover");

    }
}

function generateTable(table, data) {

    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
            cell.lastChild.cornet_td.classList.add("remove");
        }
         
    }
}

let table = document.querySelector("table");
let data = Object.keys(myBooks[0]);
generateTableHead(table, data);
generateTable(table, myBooks);