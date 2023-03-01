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
    const url = `https://mocki.io/v1/bb737269-cf20-4bef-87f1-53b928dafc79`;
    //const url = `http://localhost:8080/pages/filtrar`;
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
          //console.log(element.name)
          
          let a = `<div class="producto">
          <a href="./detallesProducto.html?name=1">
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

    let formData = new FormData();

    let materialesId = [];

let inputElements = document.getElementsByClassName('messageCheckbox');
for(let i=0; i <inputElements.length; i++){
      if(inputElements[i].checked){
           materialesId.push(inputElements[i].value);                    
      }
}

//console.log(materialesId);
formData.append("materialesId",materialesId);

localStorage.setItem("eyeyey", ["2","5"]);
console.log("paso");

/*
var object = {};
formData.forEach((value, key) => object[key] = value);
var json = JSON.stringify(object);
console.log(json);*/


const url = `https://mocki.io/v1/bb737269-cf20-4bef-87f1-53b928dafc79`;
//const url = `https://abf1f4a1-36f3-4d8a-aded-2aa4e755a2c2.mock.pstmn.io`;
fetch(url, {
  method: "POST", // or 'PUT'
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify("formData"),
} )
  .then((response) => response.json())
  .then( data => {
        setTimeout (()=>{
        console.log(data);
       imprimir =  JSON.stringify(data);
       console.log(Object.keys(data));
       console.log("hasta aqwui");
       
      // hideLoading();
       
        data.forEach((element) => {
          //console.log(element.name)
          
          let a = `<div class="producto">
          <a href="./detallesProducto.html">
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


