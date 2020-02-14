let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d");

let input = document.querySelector("#image-text");
input.disabled = true;

let image = new Image();
image.src = "slowbro.png"

image.addEventListener("load", function(){
    context.drawImage(image, 0, 0);
    input.disabled = false;
})

input.addEventListener("input", function(){
    let text = this.value;

    context.drawImage(image, 0, 0);
    context.font = "38px Arial"
    context.fillStyle = "Black"
    context.fillText(text, 30, 100);
})