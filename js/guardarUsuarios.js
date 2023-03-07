

//const boton = document.querySelector('.boton');
const formularioRegistro = document.querySelector('.registro');
const respuesta = document.querySelector('.respuesta');

const obtenerDatos = () => {
    const datos = new FormData(formularioRegistro);
    const datosCompletos = Object.fromEntries(
        datos.entries());

    console.log(JSON.stringify(datosCompletos));
    //formularioRegistro.reset();
    return datosCompletos;
};





//obteniendo los datos del json
fetch('http://localhost:3000/users')
    .then((response) => response.json())
    .then((json) => console.log(json));



const boton = document.getElementById('boton');
//posteando los datos
boton.addEventListener('click', ()=>{

    const url = 'http://localhost:3000/users';
    const datos =  obtenerDatos();
   
    
    fetch(url, {
      method: 'POST', 
      body: JSON.stringify(datos), 
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    console.log(JSON.stringify(datos))
    alert("espera un poco")
    //.then(response => console.log('Success:', response))
    //alert("espera un poco2")
    .catch(error => console.error('Error:', error));
    alert("Error espera un poco")

});

//-----------------------------------------------------------------

