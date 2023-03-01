function whatIWant()
{
    return  window.location.pathname.substring(1) + window.location.search.replace("pages/detallesProducto.html?name=", "" );
}

document.addEventListener('DOMContentLoaded',function(){
let pathName = whatIWant();
console.log(pathName)

pathName = pathName.replace("pages/detallesProducto.html?name=", "" );
console.log(pathName)
fetchHandler(pathName);

  });


  function fetchHandler(event,id) {
    //displayLoading();
    if(id == null){
        id=1;
    }
    const url = `https://mocki.io/v1/c99713b9-1d91-4321-a0ba-a6d4fbc185bb`;
    //const url = `http://localhost:8080/pages/detalleProducto?id=${id}`;
    let grid = document.querySelector(".mainContainer");
    fetch(url,
        
        { method: 'GET',
        mode: 'cors',
    headers: {
        "Content-Type": "application/json",
      },
     // <---
    cache: 'default'
 })
    .then( response => {
        console.log("Status" + response.status);
       
        return  response.json();
        
    })
   
    .then( data => {
        setTimeout (()=>{
        console.log(data);
       imprimir =  JSON.stringify(data);
       //imprimir =  data.data;
       console.log(Object.keys(data));
       console.log("hasta aqwui");
       let nombre = data.material.name;
       nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);

      // hideLoading();
       
      let a = `<div class="productTitleMaxWidth850px">
      <div>${nombre}</div>
      </div>
  
   <div class="imageContainer">
      <img src="${data.dire}" alt="geoda_image">
      
  </div> 

   <div class="detailsContainer">

      <div class="productTitle">
          <div> ${nombre}</div>
      </div>

      
      <div class="productDetails">
          <div>${data.description}</div>
      </div>

      <div class="catalogoDiv">
       <a href="./filtrar.html" class="linkCatalogo"> Catalogo</a>
      </div>

      <div class="buttonsContainer">
          <button class="btns">Piezas</button>

          <button class="btns">Anadir al carrito</button>

          <button class="btns">Comprar ahora</button>
      </div>

   </div> `;
  grid.innerHTML+=a;


       
    },0
    );}
    
    
    )
    .catch(error => console.log(error));
    setTimeout(()=>{
        console.log("borrar")
        
       // btn.disabled = false;
    },2000)
}