//evento al hacer click en el menu de hamburguesa.
document.querySelector(".bars__menu").addEventListener("click",
    animateBars
);

//seleccion de los objetos que quiero alterar.
var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");

var menuDesplegable = document.querySelector(".menuDesplegable");
var itemMenuDesplegable1 = document.querySelector(".itemMenuDesplegable1");
var itemMenuDesplegable2 = document.querySelector(".itemMenuDesplegable2");
var itemMenuDesplegable3 = document.querySelector(".itemMenuDesplegable3");
var itemMenuDesplegable4 = document.querySelector(".itemMenuDesplegable4");
var itemMenuDesplegable5 = document.querySelector(".itemMenuDesplegable5");
var itemMenuDesplegable6 = document.querySelector(".itemMenuDesplegable6");
//animacion sobre las barras.
function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");

    menuDesplegable.classList.toggle("activarMenuDesplegable");

    itemMenuDesplegable1.classList.toggle("ActivarItemMenuDesplegable1");
    itemMenuDesplegable2.classList.toggle("ActivarItemMenuDesplegable2");
    itemMenuDesplegable3.classList.toggle("ActivarItemMenuDesplegable3");
    itemMenuDesplegable4.classList.toggle("ActivarItemMenuDesplegable4");
    itemMenuDesplegable5.classList.toggle("ActivarItemMenuDesplegable5");
    itemMenuDesplegable6.classList.toggle("ActivarItemMenuDesplegable6");
}
