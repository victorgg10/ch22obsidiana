import { piedrasPorMes } from "./piedraNac.js";




const element = document.querySelector(".mes").addEventListener('click',respuestaPorMes);


const mesNacimiento = () => {
    
    const resumenPiedraNacimiento = JSON.parse(piedrasPorMes);
    fetch(resumenPiedraNacimiento)
        .then(response => {
            return response.json();
        })
        .catch (error => console.error("Error",error));
        respuestaPorMes();
}


const respuestaPorMes = () => {
    const clave = element.innerHTML;

    document.getElementById(clave).innerHTML = (mesNacimiento.clave.piedra);





}

console.log(resumenPiedraNacimiento);