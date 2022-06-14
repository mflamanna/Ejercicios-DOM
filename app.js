console.log ("estoy conectada")

let listaCompra = ['huevos', 'zanahorias', 'pasta', 'chocolate']

function imprimirItem(item){
    console.log (listaCompra[item])
}


function imprimirCompra(){
    for(item=0; item<listaCompra.length; item++){
       imprimirItem(item)
    }
}

imprimirCompra()

function escribirTitulo (){
    document.write("<h1>Sos una obra de arte</h1>")
}

escribirTitulo()

function cambiarColor(){
    let cuadraRojo = document.querySelector('.cuadradoRojo')
    cuadraRojo.classList.toggle('verde')
}

function escribirTexto (){
    let inputTexto = document.querySelector(".inputTexto").value;
    let titulo = document.getElementById("tituloInput");
    
    if(inputTexto===''){
            window.alert('hey que estoy vacio')
    }
    
    titulo.innerHTML = inputTexto;

}

function imprimirListaCompra(){
    for(item=0; item<listaCompra.length; item++){
        let list = document.getElementById("listaCompraImpresa");
        list.innerHTML += listaCompra[item] + "<br>";
    }
}

imprimirListaCompra()

function imprimirCard(){

    const tituloPeli = document.createElement("h1");
    tituloPeli.textContent = "La La Land";
    tituloPeli.classList.add("diseñoTitulo");
    document.querySelector(".cardPelicula").appendChild(tituloPeli)

    const image = document.createElement('img')
    image.src  = "https://pics.filmaffinity.com/La_ciudad_de_las_estrellas_La_La_Land-262021831-large.jpg";
    image.classList.add("diseñoImagen");
    document.querySelector('.cardPelicula').appendChild(image)

    const sinopsisPeli = document.createElement("p");
    sinopsisPeli.textContent = "Mia (Emma Stone), una joven aspirante a actriz que trabaja como camarera mientras acude a castings, y Sebastian (Ryan Gosling), un pianista de jazz que se gana la vida tocando en sórdidos tugurios, se enamoran, pero su gran ambición por llegar a la cima en sus carreras artísticas amenaza con separarlos.";
    sinopsisPeli.classList.add("diseñoTexto");
    document.querySelector(".cardPelicula").appendChild(sinopsisPeli);

    const añoPeli = document.createElement("p");
    añoPeli.textContent = "Año: 2016";
    añoPeli.classList.add("diseñoTexto")
    document.querySelector(".cardPelicula").appendChild(añoPeli);
    
    const duracionPeli = document.createElement("p");
    duracionPeli.textContent = "Duración: 127 min.";
    duracionPeli.classList.add("diseñoTexto")
    document.querySelector(".cardPelicula").appendChild(duracionPeli);
}

imprimirCard()