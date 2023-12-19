document.addEventListener("DOMContentLoaded", function () {

// JSON y FETCH

    // Ruta al archivo JSON
    const jsonFilePath = "Json/productos.json";
  
    // Llamada a la función para cargar productos
    cargarProductos(jsonFilePath);
  });
  
  function cargarProductos(jsonFilePath) {
    // Hacer una solicitud fetch para cargar el archivo JSON
    fetch(jsonFilePath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error al cargar el archivo JSON: ${response.status}`);
        }
        return response.json();
      })
      .then(productos => {
        // Obtener el contenedor de productos
        const productosContainer = document.getElementById("productos-container");
  
        // Limpiar el contenedor antes de agregar nuevos productos
        productosContainer.innerHTML = '';
  
        // Recorrer la lista de productos y mostrarlos en la página
        productos.forEach(producto => {
          // Crear elementos HTML para mostrar la información del producto
          const productoHTML = `
            <div class="container-title"><h3>${producto.nombre}</h3></div>
            <div class="container-img">
              <img src="${producto.imagen}" alt="${producto.nombre}">
            </div>
            <div class="container-details-product">
            <!-- Aquí puedes agregar la sección del color -->
            <div class="form-group">
                <label for="colour">Color:</label>
                <select name="colour" id="colour">
                    <option disabled selected value="">Escoje una opcion</option>
                    ${producto.colores.map(color => `<option value="${color}">${color}</option>`).join('')}
                </select>
            </div>
            </div>
            <div class="container-price"> <p>${producto.precio}</p>
            </div>
            <div class="container-description">
              <div class="title-description">
                <h4>Descripción del vehículo</h4>
              </div>
              <div class="text-description">
                <p>${producto.descripcion}</p>
              </div>

              <div class="container-additional-information">
                <div class="title-additional-information"><h4>Informacion adicional</h4></div>
                <div class="text-additional-information"><p>${producto.informacion_adicional}</p></div>
                </div>

            
            </div>
          `;
  
          // Agregar el producto al contenedor
          productosContainer.innerHTML += productoHTML;
          //Toggle of infomation product

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

        });
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }
  