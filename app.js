// Creamos un array para almacenar los nombres de nuestros amigos.
let nombresAmigos = [];

// Implementamos una funcion para actualizar la lista de nuestros amigos.
function agregarAmigos() {
    let nombre = document.getElementById("amigo").value;
    if (nombre !== "") {
        nombresAmigos.push(nombre);
        mostrarAmigos();
        limpiarCampo();
    }else{
        alert("Por favor, ingrese un nombre de amigo valido. ");
    }
}

function mostrarAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < nombresAmigos.length; i++){
        let listaNombres = document.createElement("li");
        listaNombres.textContent = nombresAmigos[i];
        lista.appendChild(listaNombres);
    }
}

function limpiarCampo(){
    document.getElementById("amigo").value = '';
}

function sortearAmigos(){
    let resultado = document.getElementById('resultado')
    if (nombresAmigos.length < 3){
        alert("Ingrese mas nombres para crear la lista.");
    }else{
        let amigoAleatorio = Math.floor(Math.random()*nombresAmigos.length);
        let eleccion = nombresAmigos[amigoAleatorio];
        console.log(eleccion);
        resultado.innerHTML = `Tu amigo secreto es ${eleccion}`;
    }
}
