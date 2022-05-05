let screen = document.querySelector("canvas");
let context = screen.getContext("2d");
function responsive(){
    /**definir ancho y alto */
    context.canvas.width = document.documentElement.clientWidth * 0.8;
    context.canvas.height = document.documentElement.clientHeight * 0.7;

    context.fillStyle = "white"; /** fondo del canvas */
    context.fillRect(0,0,context.canvas.width,context.canvas.height);
}
window.addEventListener("resize", responsive);
responsive()
/******************************codigo para dibujar */
let puedoDibujar = false;
function habilitarDibujar() {
    puedoDibujar = true;
}

function deshabilitarDibujar() {
    puedoDibujar = false;
}
screen.addEventListener("mousedown", habilitarDibujar);
screen.addEventListener("mouseup", deshabilitarDibujar);

/************************boton cuadrado, Obtener el boton, agregar evento si haces click entonces agrega evento cuando el mouse se mueve y si puedo dibujar, entonces dibuja un cuadrado en donde haces click */
let botonCuadrado = document.getElementById("drawS");
let botonCirculo = document.getElementById("drawC");

botonCirculo.addEventListener("click",function(){
    screen.addEventListener("mousemove",(evento)=>{
        if(puedoDibujar && botonCirculo.checked){
            dibujarCirculo(evento.pageX - screen.offsetLeft,evento.pageY - screen.offsetTop);
        }
    });
})
botonCuadrado.addEventListener("click",function(){
    screen.addEventListener("mousemove",(evento)=>{
        if(puedoDibujar && botonCuadrado.checked){
            dibujarCuadrado(evento.pageX - screen.offsetLeft,evento.pageY - screen.offsetTop);
        }
    } );
})




/*********************opciones de botones */
function dibujarCirculo(x,y){
    let radio = parseInt(document.getElementById("radio").value);
    context.fillStyle = document.getElementById("colorElegido").value;;
    context.beginPath();
    context.arc(x,y,radio,0,2*3.14)
    context.fill()
}
function dibujarCuadrado(x,y) {
    let size = parseInt(document.getElementById("radio").value)*2;
    context.fillStyle = document.getElementById("colorElegido").value;
    context.fillRect(x,y,size,size);
}
function deleteAll(){
    context.clearRect(0,0,context.canvas.width,context.canvas.height);
}
let buttonDelete = document.getElementById("delete");
buttonDelete.addEventListener("click", deleteAll);