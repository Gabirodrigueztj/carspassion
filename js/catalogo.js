document.addEventListener("DOMContentLoaded", function () {
    const jsonFilePath = "Json/productos.json";
    cargarProductos(jsonFilePath);
});

function cargarProductos(jsonFilePath) {
    fetch(jsonFilePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al cargar el archivo JSON: ${response.status}`);
            }
            return response.json();
        })
        .then(productos => {
            const productosContainer = document.getElementById("productos-container");
            productos.forEach(producto => {
                const productoHTML = `
                    <div class="catalogo-item" onclick="mostrarDetalles('${producto.id}')">
                        <img src="${producto.imagen}" alt="${producto.nombre}">
                        <h3>${producto.nombre}</h3>
                        <p>${producto.precio}</p>
                    </div>
                `;
                productosContainer.innerHTML += productoHTML;
            });
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

function mostrarDetalles(productId) {

    window.location.href = `muestra.html?id=${productId}`;
}
