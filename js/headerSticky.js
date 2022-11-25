window.addEventListener("scroll" , function(){
    var header = document.querySelector("header");
    //var logo = document.querySelector("cont-logo");
    //var subHeader = document.querySelector("subHeader");
    header.classList.toggle("activarHeaderStickyHeader", window.scrollY > 0);
    //logo.classList.toggle("activarHeaderStickyHeader", window.scrollY > 0);
    //subHeader.classList.toggle("activarHeaderStickyHeader", window.scrollY > 0);
});
