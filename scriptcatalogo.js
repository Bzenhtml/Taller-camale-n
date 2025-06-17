document.addEventListener("scroll", function () {
    document.querySelectorAll(".Producto").forEach(Producto => {  /*Efecto de Fade in en el catalogo*/
        let position = Producto.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            Producto.classList.add("visible");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {  /*Para mostrar y Ocultar el Filtro en un boton*/
    let filtro = document.querySelector(".filtro");
    let botonFiltro = document.querySelector(".mostrar-filtros");

    botonFiltro.addEventListener("click", function () {
        filtro.classList.toggle("activo");
    });
});

document.getElementById("busquedaproducto").addEventListener("click", function () { /*Aqui se aplica la busqueda, con el nombre que se ponga*/
    let filtro = document.getElementById("busqueda").value.toLowerCase(); 
    let productos = document.querySelectorAll(".Producto"); 

    productos.forEach(producto => {
        let nombre = producto.querySelector(".Producto-tittle").textContent.toLowerCase(); 

        if (nombre.includes(filtro)) {
            producto.classList.add("visible"); 
             producto.style.display = "block";
        } else {
            producto.classList.remove("visible");
            producto.style.display = "none";
        }
    });
});

botonaplicarfiltro = document.getElementById("AplicarFiltroId");

botonaplicarfiltro.addEventListener("click", function(){ /*Aqui se aplican los filtros que se pongan: Precio minimo, maximo y el tipo de producto, ademas de que se reorganiza*/

    let precioMin = parseFloat(document.getElementById("precioMinimo").value) || 0;

    let precioMax = parseFloat(document.getElementById("precioMaximo").value) || Infinity;

    let tipoSeleccionado = document.getElementById("tiposproductos").value.toLowerCase();
    
    const columnas = document.querySelectorAll('.producto-col');

    columnas.forEach(col => {

        let precioTexto = col.querySelector(".Producto-precio").textContent.replace(/[^0-9]/g, "") || 0;

        let precio = parseFloat(precioTexto) || 0;

        let tipoTexto = col.querySelector(".Producto-Tipo").textContent.toLowerCase().trim();

        if ((precio >= precioMin && precio <= precioMax) && (tipoSeleccionado === "todos" || tipoTexto.includes(tipoSeleccionado))) {
            col.style.display = "block";
            col.classList.remove("sinscroll");
            void col.offsetWidth;
            col.classList.add("sinscroll");
        } else {
            col.style.display = "none";
            col.classList.remove("sinscroll");
        }
        
    });
});

let botonlimpiar = document.getElementById("LimpiarFiltroId")

botonlimpiar.addEventListener("click", function(){ /*Resetea los filtros y los limpia*/
   
    document.getElementById("busqueda").value = "";
    document.getElementById("precioMinimo").value = "";
    document.getElementById("precioMaximo").value = "";
    document.getElementById("tiposproductos").value = "Todos";

    document.querySelectorAll('.producto-col').forEach(col => {
        col.style.display = "block";
        col.classList.remove("sinscroll");
        void col.offsetWidth;
        col.classList.add("sinscroll");
    });
});