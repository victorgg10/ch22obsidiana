const usernamec = document.getElementById ('usernamec');// cada variable lleva una c al ultimo por abrebiación de la palabra contacto
const emailc = document.getElementById ('emailc');
const asuntoc = document.getElementById ('asuntoc');
const textc = document.getElementById ('textc');
const submit = document.getElementsByClassName ('form-contact')[0];


submit.addEventListener('submit', (e)=>{
    e.preventDefault ();
    console.log("Clicked");

    let ebody = `
    <b>Nombre: </b>${usernamec.value}
    <br>
    <b>Email:</b>${emailc.value}
    <br>
    <b>Asunto: </b>${asuntoc.value}
    <br>
    <b>Mensaje:</b>${textc.value} 
    `

    Email.send({
        SecureToken : "5da6d2eb-fb6a-40e4-a1eb-9cdd433ff4ad",
        To : 'ch22obsidiana@gmail.com',
        From : "ch22obsidiana@gmail.com",
        Subject: "Contacto de: " + emailc.value,
        Body : ebody
    }).then(
      message => alert(message)
     
    ).then(
      window.location.href = "http://127.0.0.1:5503/pages/contactoRecibido.html");
    
});

