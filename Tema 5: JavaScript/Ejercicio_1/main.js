// 1)

const mainDiv = document.getElementById("main");
const p1 = document.createElement("p");
const p2 = document.createElement("p");
p1.innerText = "Random first paragraph";
p2.innerText = "Random second paragraph";
mainDiv.appendChild(p1);
mainDiv.appendChild(p2);

// 2)
document.getElementById("backgroundClick").onclick = function bgClick() {

    document.body.style.backgroundColor = "red";
}

// 3)


document.getElementById("tidal").onclick = function imgClick() {

    document.getElementById("img").src = "https://assets.skybound.com/wp-content/uploads/2018/10/13042419/Tidal-Blades-Hero-1-2000x1150.jpg";

}
document.getElementById("valhalla").onclick = function imgClick() {

    document.getElementById("img").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUQ64lVnMtmfcFG7KdCOmpcZZeP7-5O-nKJg&usqp=CAU";
}

document.getElementById("feudum").onclick = function imgClick() {

    document.getElementById("img").src = "https://images.squarespace-cdn.com/content/v1/5c427b8989c172583c66c1d9/1548214418040-YT0CWIMBEJ1INE330JPE/ke17ZwdGBToddI8pDm48kN4gQkkwWjTUAAoch08PIJB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0rIzObh8p0yOwFu2MoWBh5Beon08s7fp0-w1vTtyaU1Cm7ppCk_BfQIY5ZQ7Aqi7fQ/feudum-board-detail-3.png";
}
// alt
/* Array.from(parents).forEach(element => element.addEventListener("click", myFunction)); */

// 4)

/* document.getElementById("new").onclick = function clickButton(){
    let inputValue = document.getElementById("TextInput").value;
    parrafo.textContent = inputValue;

} */


// Metodo profe: no me sale button2.addEventListener("click", () => p.textContent = input.value);


// 4.2)


// 5)

// 