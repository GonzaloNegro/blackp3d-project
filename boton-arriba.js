function irArriba(pxPantalla){
    window.addEventListener('scroll', ()=>{
        var scroll =document.documentElement.scrollTop;
        console.log(scroll);
        var botonArriba = document.getElementById('botonArriba');

        if(scroll > pxPantalla){
            botonArriba.style.right = 20 + "px";
        }
        else{
            botonArriba.style.right = -100 + "px";
        }
    })
}

irArriba(200);