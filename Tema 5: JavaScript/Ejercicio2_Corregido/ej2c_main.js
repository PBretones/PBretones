class User {
    constructor(name, firstLastName, secondLastName, email, age, city) {
        this.name = name;
        this.firstLastName = firstLastName;
        this.secondLastName = secondLastName;
        this.email = email;
        this.age = age;
        this.city = city;
        this.nProducts = 0;
    }
    incrementProducts() {
        this.nProducts++;
    }


    emptyProducts() {
        this.Products = 0;
    }
}




// Datos
const users = [
    new User("Fran", "Gomez", "Fernandez", "fgomez@gmail.com", 35, "Malaga"),
    new User("Lucia", "Garcia", "Ruiz", "lgarcia@gmail.com", 41, "Madrid"),
];


// Selectores
const userSelect = document.getElementById("userSelect");
const list = document.getElementById("userInfo");
const incrementButton = document.getElementById("incrementButton");
const emptyButton = document.getElementById("emptyButton");

// Listeners

incrementButton.addEventListener("click", processProducts);
emptyButton.addEventListener("click", processProducts);
userSelect.addEventListener("change", changeUser);

// Estado inicial del DOM

function fillSelect(select, options) {
    for (const option of options) {
        const newOption = document.createElement("option");
        newOption.textContent = option;
        select.appendChild(newOption);
    }
}


function fillList(list, obj) {
    list.innerHTML = "";
    for (const property in obj) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<b>${property}:<b> ${obj[property]}`;
        listItem.classList.add("list-group-item");
        list.appendChild(listItem);
    }
}

fillSelect(userSelect, users.map(user => user.name));
fillList(list, users[0]);

let selectedUser = users[userSelect.selectedIndex];
// Manejadores de eventos

function processProducts (e){

    if (e.target.id === "incrementButton")
    selectedUser.incrementProducts();
    else if (e.target.id === "emptyButton")
    selectedUser.emptyProducts();
    fillList(list,selectedUser);
}


function changeUser (){
    selectedUser = users[userSelect.selectedIndex];
    fillList(list,selectedUser);
}
/* function increment() {
    const selectedUser = users.find(user => user.name === userSelect.value);
    selectedUser.incrementProducts();
    /* nProducts.innerHTML = `<b>nProducts</b>: ${selectedUser.nProducts}` */
  /*   fillList(list, selectedUser); */



// Clases

// class Select {
//     constructor(element, options) {
//         this.element = element;
//         this.options = options;
//     }


//     fill() {
//         for (const option of this.options) {
//             const newOption = document.createElement("option");
//             newOption.textContent = option;
//             this.Element.appendChild(newOption);
//         }
//     }

//     empty() {
//     }
// }
// const select = new Select(userSelect, ["Fran", "Lucia"]);
// select.fill();