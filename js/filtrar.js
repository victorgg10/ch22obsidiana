/*var inputElements = document.getElementsByClassName('messageCheckbox');
for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           checkedValue = inputElements[i].value;
           break;
      }
}*/


document.addEventListener('DOMContentLoaded',function(){
    fetchHandler();
    

  });

  function fetchHandler(event) {
    //displayLoading();
    //const url = `https://mocki.io/v1/bb737269-cf20-4bef-87f1-53b928dafc79`;
 const url = `http://localhost:8080/pages/filtrar`;
    let grid = document.querySelector(".grid");
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
       
      // hideLoading();
       
       
       //let head = tabla.insertRow();
       /* console.log("a ver");
       let columnas = Object.keys(data);
       columnas.forEach(column =>{
        //let row = document.getElementsByTagName("tr")
        //head.insertCell().outerHTML = `<th>${column}</th>`;
        
       })*/
       
        data.forEach((element) => {
          console.log(element.id)
          
          let a = `<div class="producto">
          <a href="./detallesProducto.html?name=${element.id}">
              <img class="producto__imagen" src=${element.dire} alt="imagen camisa">
              <div class="producto__informacion">
                  <p class="producto__nombre">${element.name}</p>
                  <p class="producto__precio">${element.cost}</p>
              </div>
          </a>
      </div>  <!--.producto-->`;
      grid.innerHTML+=a;
        }); 

       
    },0
    );}
    
    
    )
    .catch(error => console.log(error));
    setTimeout(()=>{
        console.log("borrar")
        
       // btn.disabled = false;
    },2000)
}

function myFunction(){
    console.log("funcion inicio");

    

    let materialesId = [];
    let tiposId = [];
    
    let grid = document.querySelector(".grid");

let inputElements = document.getElementsByClassName('messageCheckbox');
for(let i=0; i <inputElements.length; i++){
      if(inputElements[i].checked){
           materialesId.push(inputElements[i].value);                    
      }
}

let inputTipos = document.getElementsByClassName('messageCheckbox2');
for(let i=0; i <inputTipos.length; i++){
      if(inputTipos[i].checked){
        tiposId.push(inputTipos[i].value);                    
      }
}





let _datos = {
  materialesId: materialesId,
  tiposId: tiposId
}
console.log(_datos);

//const url = `https://mocki.io/v1/bb737269-cf20-4bef-87f1-53b928dafc79`;
const url = `http://localhost:8080/pages/filtrar`;
fetch(url, {
  method: "POST",
  body: JSON.stringify(_datos),
  headers: {"Content-type": "application/json; charset=UTF-8"}
})
  .then((response) => response.json())
  .then( data => {
        setTimeout (()=>{
        console.log(data);
       imprimir =  JSON.stringify(data);
       console.log(Object.keys(data));
       console.log("hasta aqwui");
       grid.innerHTML="";
      // hideLoading();
       
        data.forEach((element) => {
          //console.log(element.name)
          
          let a = `<div class="producto">
          <a href="./detallesProducto.html?name=${element.id}">
              <img class="producto__imagen" src=${element.dire} alt="imagen camisa">
              <div class="producto__informacion">
                  <p class="producto__nombre">${element.name}</p>
                  <p class="producto__precio">${element.cost}</p>
              </div>
          </a>
      </div>  <!--.producto-->`;
      
      grid.innerHTML+=a;
        }); 

       
    },0
    );}
    
    
    )
  .catch((error) => {
    console.error("Error:", error);
  });


}


