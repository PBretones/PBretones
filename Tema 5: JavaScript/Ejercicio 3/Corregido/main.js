// Classes
class Book {
    constructor(id, title, author, sales, price) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.sales = sales;
        this.price = price;
    }
}

class Table {
    constructor(element, dataArray, removable) {
        this.element = element;
        this.dataArray = dataArray;
        this.removable = removable;
        this.update();
    }

    toggleRemovable () {
        this.removable = !this.removable;
        this.update();
    }

    createHeader() {
        if(!document.querySelector("#removeHeader")) {
            const newTH = document.createElement("th");
            newTH.scope = "col";
            newTH.textContent = "Remove";
            newTH.id = "removeHeader";
            document.querySelector("thead tr").appendChild(newTH);
        }
    }

    createRemoveButton(newRow) {
        const newButton = document.createElement("button");
        newButton.textContent = "Remove";
        newButton.classList.add("btn", "btn-danger");

        newButton.addEventListener("click", e => {
            const bookID = e.target.parentNode.parentNode.firstChild.textContent;
            this.dataArray = this.dataArray.filter(item => item.id != bookID);
            this.update();
        });
        
        const lastCell = document.createElement("td");
        lastCell.appendChild(newButton);

        newRow.appendChild(lastCell);
    }

    createRow (cells) {
        const newRow = document.createElement("tr");

        for (const cell of cells) {
            const newCell = document.createElement("td");
            newCell.textContent = cell;
            newRow.appendChild(newCell);
        }

        if (this.removable)
            this.createRemoveButton(newRow);

        this.element.appendChild(newRow);
    }

    update () {
        this.element.innerHTML = "";

        this.removable ? this.createHeader() : document.querySelector("#removeHeader").remove();

        for (const data of this.dataArray)
            this.createRow(Object.values(data));
    }
}

// Data
const books = [
    new Book(1, "The Selfish Gene", "Richard Dawkins", 74012, 12),
    new Book(2, "The Selfish Gene", "Richard Dawkins", 74012, 12),
    new Book(3, "The Selfish Gene", "Richard Dawkins", 74012, 12),
    new Book(4, "The Selfish Gene", "Richard Dawkins", 74012, 12),
    new Book(5, "The Selfish Gene", "Richard Dawkins", 0, 12),
    new Book(6, "The Selfish Gene", "Richard Dawkins", 74012, 12),
    new Book(7, "The Selfish Gene", "Richard Dawkins", 74012, 12),
    new Book(8, "The Selfish Gene", "Richard Dawkins", 74012, 12),
    new Book(9, "The Selfish Gene", "Richard Dawkins", 74012, 12),
    new Book(10, "The Selfish Gene", "Richard Dawkins", 74012, 12),
];

// Programa
const miTabla = new Table(document.querySelector("tbody"), books, true);
document.querySelector("#makeRemovable").addEventListener("click", () => miTabla.toggleRemovable());