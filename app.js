// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
function agregarAmigo(){
    let amigo=document.querySelector('#amigo').value;
    if(amigo===''){
        alert('Por favor, ingrese un nombre válido.');
    }else{
        listaAmigos.push(amigo);
        document.querySelector('#amigo').value='';
        actualizarLista();
    }
}

function actualizarLista(){
    let listaMensaje=document.querySelector('#listaAmigos');
    while(listaMensaje.firstChild){
        listaMensaje.removeChild(listaMensaje.firstChild);
    }
    for(let i=0;i<listaAmigos.length;i++){
        let nuevoAmigo=document.createElement('li');
        nuevoAmigo.textContent=listaAmigos[i];
        listaMensaje.appendChild(nuevoAmigo);
    }
}

function sortearAmigo(){
    let cantidadAmigos=listaAmigos.length;
    let indiceAmigo=Math.floor(Math.random()*cantidadAmigos);
    document.querySelector('#resultado').innerHTML="El amigo secreto sorteado es "+listaAmigos[indiceAmigo];
}

let listaAmigos =[];
