document.getElementById("contact-form").addEventListener("submit", function(event) {

    let nameForm=document.getElementById("nombre-form").value;
    let emailForm=document.getElementById("email-form").value;
    let temaForm=document.getElementById("tema-form").value;
    let mensajeForm=document.getElementById("mensaje-form").value
    let info={name:nameForm,email:emailForm,tema:temaForm,mensaje:mensajeForm}
    let infoJson=JSON.stringify(info)
    console.log(infoJson)
    event.preventDefault();
 /*    const formData = new FormData(this); */
    fetch("http://localhost:8080/enviar-email", {
        method: "POST",
        body: infoJson,
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if (response.ok) {
            alert("¡El mensaje ha sido enviado correctamente!");
            document.getElementById("contact-form").reset();
        } else {
            console.log(response)
            console.log(formData)
            alert("Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.");
    });
});

document.getElementById("descargar-btn").addEventListener("click", function() {
    
    fetch("http://localhost:8080/descargar-archivo",{
        method:"get"
    })
    .then(response=>{
        if (response.ok){
            console.log("descargando")
        }
    })
    .catch(error =>
    console.log(error.message))
});

let btnDesarrollo= document.getElementById("certificado-desarrollo")
let btnJavascript = document.getElementById("certificado-javascript");
let btnBackend=document.getElementById("certificado-back")

let modal = document.getElementById("myModal");
let contentModal=document.getElementById("modal-content")
let span = document.getElementsByClassName("close")[0];
let img="null"

btnDesarrollo.onclick=function(){
    img=document.createElement("div")
    img.innerHTML=`<img  src="/frontend/assets/images/Certificado-desarrolloWeb.jpeg" class="img" alt="Certificado">`
    contentModal.appendChild(img)
    
    modal.style.display = "block";
}

btnJavascript.onclick=function(){
    img=document.createElement("div")
    img.innerHTML=`<img  src="/frontend/assets/images/Certificado-Javascript.jpeg" class="img" alt="Certificado">`
    contentModal.appendChild(img)
    
    modal.style.display = "block";
}

btnBackend.onclick = function() {
        img=document.createElement("div")
    img.innerHTML=`<img  src="/frontend/assets/images/Certificado-backend.jpeg" class="img" alt="Certificado">`
    contentModal.appendChild(img)
    
    modal.style.display = "block";
}

span.onclick = function() {
    if(img){
        contentModal.removeChild(img);
        img = null;
    }
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none"
    if(img){
        contentModal.removeChild(img);
        img = null;
    }
  }
}

function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}
