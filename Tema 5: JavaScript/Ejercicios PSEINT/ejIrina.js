array = ["blue", "red", "yellow", "purple"];

const click = document.getElementById("text");
click.addEventListener("click", changeColor);

function changeColor() {
    let random = Math.floor(Math.random() * (0 + array.length));
    let color = array[random];
    click.style.color = color;
}



click.addEventListener("mousemove",expandWidth);

function expandWidth (){

   let width = click.offsetWidth;
   width++;
   click.style.width = width + 'px';
}
