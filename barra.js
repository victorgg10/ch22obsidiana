document.addEventListener('DOMContentLoaded',function(){
  agregarEncabezado();
});

function agregarEncabezado(){
  

        //link.href = 'http://fonts.googleapis.com/css?family=Oswald&effect=neon';
        
        let link2 = document.createElement('link');
        
        link2.rel = 'stylesheet';
        link2.href =  href="../css/normalize.css"
        document.head.appendChild(link2);
        let link3 = document.createElement('link');
       
        link3.rel = 'preconnect';
        link3.href =  href="https://fonts.googleapis.com"
        document.head.appendChild(link3);

        let link4 = document.createElement('link');
        
        link4.rel = 'stylesheet';
        link4.href =  href="https://fonts.googleapis.com/css2?family=Suez+One&display=swa";
        document.head.appendChild(link4);

        let link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href =  href="../css/barra.css"
        document.head.appendChild(link);

      
  let nav = document.querySelector('header')
    nav.innerHTML = `
   
    <div class="nav-contenedor">
    <div class="parteA ">
        <a href="index.html" class=".nav-centrado logo-cont"><img src="/images/barra/barra.png" alt="" class="logo"></a>
    </div>
    <div class="parteB nav-centrado resaltado">
        <a href="../index.html" class="visitado">Inicio</a>
    </div>
    <div class="parteC nav-centrado resaltado">
        <a href="aboutus.html" class="visitado .nav-centrado">Acerca de nosotros</a>
    </div>
    <div class="parteD nav-centrado">
        <div class="encuentra">
            <a href="#" class="visitado .nav-centrado">¡Averigua tu piedra!</a>
        </div>
    </div>
    <div class="parteE nav-centrado">
        <div class="iconos">
            <a href=""><img src="/images/barra/carrito.svg" alt="" class="icono iconoA"></a>
            <a href=""><img src="/images/barra/insta.svg" alt="" class="icono iconoB"></a>
                 <div class="iconoC iconoCBarra">
                    <img src="/images/barra/search.svg" alt="" class=""><input type="text" class="iconoC" size="1">
                </div>
            <a href=""><img src="/images/barra/login.svg" alt="" class="icono iconoD"></a>
            
        </div>
    </div>
</div>`
}
