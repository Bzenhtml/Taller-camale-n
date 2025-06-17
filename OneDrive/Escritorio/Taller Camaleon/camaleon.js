let imagenes = [ //lista de objetos
    {
        "url": "contenido/Taller camaleón (1).jpg",
        "nombre": "Taller Camaleón",
        "Precio": "Precio: $79.990",
        "descripcion":"¡Descripcion!"

    },
    {
  "url": "contenido/Taller camaleón (1).jpg",
        "nombre": "Taller Camaleón",
        "Precio": "Precio: $79.990",
        "descripcion":"¡Descripcion!"

    },
    {
       "url": "contenido/Taller camaleón (1).jpg",
        "nombre": "Taller Camaleón",
        "Precio": "Precio: $79.990",
        "descripcion":"¡Descripcion!"

    },
] //Con esto definiremos una estructura para que la funcion de volver y adelantar no se desordene


let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('carrutexto')
let actual = 0 //Creacion de variable y de donde extraeremos las fuentes, colores, etc
posicionCarrusel()

atras.addEventListener('click', function(){ //Reaccionar al hacer click en las flechas
    actual -=1

    if (actual == -1){
        actual = imagenes.length - 1
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h1>${imagenes[actual].nombre}</h1>
      <h3>${imagenes[actual].Precio}</h3>
    <h3>${imagenes[actual].descripcion}</h3> 
     
    `//De aqui se obtienen los valores para que no se pierdan al volver y avanzar con las flechas
    posicionCarrusel()
})  
adelante.addEventListener('click', function(){
    actual +=1

    if (actual == imagenes.length){
        actual = 0
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    //de aqui se extrae la imagen solicitada en la url
    texto.innerHTML = `
  <h1>${imagenes[actual].nombre}</h1>
      <h3>${imagenes[actual].Precio}</h3>
    <h3>${imagenes[actual].descripcion}</h3>
      
     `
    posicionCarrusel()
})  

function posicionCarrusel() { //funcion 5 actualiza la posicion del carrusel
    puntos.innerHTML = "" //hace que unicamente se vea un punto marcado y no todos
    for (var i = 0; i <imagenes.length; i++){ //recorre las imagenes del carrusel
        if(i == actual){ //verifica si la imagen actual i es la que se encuentra activa
            puntos.innerHTML += '<p class="bold">.<p>' //si la imagen se encuentra activa, el punto donde esta resalta
        }
        else{
            puntos.innerHTML += '<p>.<p>' //si no es la que se encuentra activa, el punto no resalta
        } 
    } 
} //Funcion 4?
document.addEventListener("keyup", e=>{ //Al presionar una tecla habrá un evento, e representa a la tecla
    if (e.target.matches(".filtro-producto")){ //define que la accion unicamente salga de filtro de juego, nuestra barra de busqueda
        document.querySelectorAll(".marcoProducto").forEach((producto)=>{ //recorre nuestras vitrinas a las que les llamamos jueggos, 
        // con el forEach recorremos todas nuestras vitrinas paso por paso
producto.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) 
           ?producto.classList.remove("filtro")
           :producto.classList.add("filtro"); 
        })
    }
})

