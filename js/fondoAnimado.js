

window.addEventListener('scroll',function(){
    let animacion = document.querySelector('.fondoAnimado');
    let positionObj1 = animacion.getBoundingClientRect().top;
    
    
    //console.log(Math.round(positionObj1));
    

    if(positionObj1 < 600 && positionObj1 > -20 ){
        document.querySelector('.imagen_muneco').classList.toggle("animarPoppy");
        document.querySelector('.tituloAnimado1').classList.toggle("animarTitulo");
        document.querySelector('.tituloAnimado2').classList.toggle("animarTitulo");
    }
})