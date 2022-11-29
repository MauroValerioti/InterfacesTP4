window.addEventListener('scroll',function(){
    let animacion = document.querySelector('.jugadores');
    let positionObj1 = animacion.getBoundingClientRect().top;
    
    
    console.log(Math.round(positionObj1));
    

    if(positionObj1 < 400){
        document.querySelector('.p1').classList.add("activarP1");}
    else
        {    if(positionObj1 > -400){
            document.querySelector('.p1').classList.remove("activarP1");
        }
    }
    if(positionObj1 < 350 ){
        document.querySelector('.p2').classList.add("activarP2");
    }else{
        if(positionObj1 > -350 ){
            document.querySelector('.p2').classList.remove("activarP2");
        }
    }
    if(positionObj1 < 300 ){
        document.querySelector('.p3').classList.add("activarP3");
    }else{
        if(positionObj1 > -300 ){
            document.querySelector('.p3').classList.remove("activarP3");
        }}

    if(positionObj1 < 270  ){
        document.querySelector('.p4').classList.add("activarP4");
    }else{    
    if(positionObj1 > -270  ){
        document.querySelector('.p4').classList.remove("activarP4");
    }}

    if(positionObj1 < 220 ){
        document.querySelector('.p5').classList.add("activarP5");
    }else{
        if(positionObj1 > -220 ){
            document.querySelector('.p5').classList.remove("activarP5");
        }
    }
})