function agregarAmigo(){
    let input = document.getElementById("amigo").value;

    if (input) {   
        let listaAmigos = document.getElementById("listaAmigos");
        let li = [];
        li.push(input);
        listaAmigos.innerHTML += "<li>" + li + "</li>";
        input.value = "";
        limpiarResultado();
    }
    else {
        alert("Por favor, ingresa un nombre de amigo.");
    }
    document.getElementById("amigo").value = "";
}

function limpiarLista(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
}

function limpiarResultado(){
    document.getElementById("resultado").textContent = "";
}

function sortearAmigo(){
    let listaAmigos = document.getElementById("listaAmigos").children;
    
    if (listaAmigos.length === 0){
        alert("Ingresa 2 amigos para sortear");
    }else{
        let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
        let amigoSeleccionado = listaAmigos[indiceAleatorio].textContent;
        document.getElementById("resultado").textContent = "El amigo seleccionado es: " + amigoSeleccionado;
        limpiarLista();
    }
}