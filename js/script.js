
  //*******************/
  document.addEventListener("DOMContentLoaded", function () {
    const productId = obtenerParametroDeURL("id");
    if (productId) {
        cargarDetallesDelProducto(productId);
    }
});

function obtenerParametroDeURL(parametro) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(parametro);
}

function cargarDetallesDelProducto(productId) {
    const jsonFilePath = "Json/productos.json";
    fetch(jsonFilePath)
        .then(response => response.json())
        .then(productos => {
            const producto = productos.find(p => p.id === parseInt(productId));
            if (producto) {
                const productoDetalleContainer = document.getElementById("productos-container");
                const productoHTML = `
            <div class="container-title"><h3>${producto.nombre}</h3></div>
            <div class="product-container">
            <div class="container-img">
              <img src="${producto.imagen}" alt="${producto.nombre}" id="Car-Photo">
            </div>
            <div class="container-details-product">
            <!-- Aquí puedes agregar la sección del color -->
            
            <div class="container-description">
              <div class="title-description">
                <h4>Descripción del vehículo</h4>
              </div>
              <div class="text-description">
                <p>${producto.descripcion}</p>
              </div>

              <div class="container-additional-information">
                <div class="title-additional-information"><h4>Informacion adicional</h4></div>
                <div class="text-additional-information">
                                <div class="container-price"> 
                                    <h4>Precio de lanzamiento</h4>
                                    <p>${producto.precio}</p>
                                 </div>
                <p>${producto.informacion_adicional}</p></div>
                </div>
            </div>
            
            

            </div>
            </div>

            <div class="container">
            <div class="gallery">

                <a href="Autos/${producto.nombre}/1.png" data-lightbox="models"  data-title="${producto.nombre}">
                    <img src="Autos/${producto.nombre}/1.png" alt="">
                </a>
                <a href="Autos/${producto.nombre}/2.png" data-lightbox="models"  data-title="${producto.nombre}">
                    <img src="Autos/${producto.nombre}/2.png" alt="">
                </a>
                <a href="Autos/${producto.nombre}/3.png" data-lightbox="models"  data-title="${producto.nombre}">
                    <img src="Autos/${producto.nombre}/3.png" alt="">
                </a>
                <a href="Autos/${producto.nombre}/4.png" data-lightbox="models"  data-title="${producto.nombre}">
                    <img src="Autos/${producto.nombre}/4.png" alt="">
                </a>
                


            </div>

            <div class="gallery">

                <a href="Autos/${producto.nombre}/5.png" data-lightbox="models"  data-title="${producto.nombre}">
                    <img src="Autos/${producto.nombre}/5.png" alt="">
                </a>
                <a href="Autos/${producto.nombre}/6.png" data-lightbox="models"  data-title="${producto.nombre}">
                    <img src="Autos/${producto.nombre}/6.png" alt="">
                </a>
                <a href="Autos/${producto.nombre}/7.png" data-lightbox="models"  data-title="${producto.nombre}">
                    <img src="Autos/${producto.nombre}/7.png" alt="">
                </a>
                <a href="Autos/${producto.nombre}/8.png" data-lightbox="models"  data-title="${producto.nombre}">
                    <img src="Autos/${producto.nombre}/8.png" alt="">
                </a>
                


            </div>

        </div>
          `;
                productoDetalleContainer.innerHTML = productoHTML;
            } else {
                console.error("Producto no encontrado");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });

        // Toggle title
const toggleDescription = document.querySelector(".title-description")
const toggleAdditionalInformation = document.querySelector(".title-additional-information")


// Toggle Text
const contentDescription = document.querySelector(".text-description")
const contentAdditionalInformation = document.querySelector(".text-additional-information")


//funciones Toggle
toggleDescription.addEventListener("click", ()=> {
    contentDescription.classList.toggle("hidden");
});
toggleAdditionalInformation.addEventListener("click", ()=> {
    contentAdditionalInformation.classList.toggle("hidden");
});
} 