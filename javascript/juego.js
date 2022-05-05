let screen = document.querySelector("canvas");
let context = screen.getContext("2d");

function responsive(){
    context.canvas.width = document.documentElement.clientWidth * 0.7;
    context.canvas.height = document.documentElement.clientHeight * 0.7;

    context.fillStyle = "white"; /** fondos */
    context.fillRect(0,0,context.canvas.width,context.canvas.height);
}
window.addEventListener("resize", responsive);
responsive()
/******************************juego */
function dibujarCirculo(x,y,radio,color){
    context.fillStyle = color;
    context.beginPath();
    context.arc(x,y,radio,0,2*3.14);
    context.fill();
}
let radio = 10;
function objetivo(x,y){
    dibujarCirculo(x,y,radio+20,"red");
    dibujarCirculo(x,y,radio+10,"white");
    dibujarCirculo(x,y,radio,"red");
}
function sortearPosicion(maximo){
    return Math.floor(Math.random()*maximo)
}
var xRandom;
var yRandom;
function actualizar(){
    context.clearRect(0,0,context.canvas.width,context.canvas.height);
    xRandom = sortearPosicion(context.canvas.width);
    yRandom = sortearPosicion(context.canvas.height);
    objetivo(xRandom,yRandom);
}
setInterval(actualizar,1000);

function disparar(evento){
    let x = evento.pageX - screen.offsetLeft;
    let y = evento.pageY - screen.offsetTop;
    if(
    (x < xRandom + radio)&&
    (x > xRandom - radio)&&
    (y < yRandom + radio)&&
    (y > yRandom - radio)){
        alert("acertaste *ventana menos invasiva en progreso");
    }
}
screen.addEventListener("click", disparar)

/**animacion 
let x = 0;
let myInterval = setInterval(actualizar,50);

function actualizar(){
    if(x == context.canvas.width){
        x = 0;
        setInterval(actualizar,50);
    } else {
        deleteAll();
        dibujarCirculo(x,20);
        x++
    }
}
**/