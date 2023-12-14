// catalogo-script.js

document.addEventListener("DOMContentLoaded", function () {
    const catalogContainer = document.getElementById("catalog-container");
    const selectedProductContainer = document.getElementById("selected-product");

    // Obtener productos desde un JSON (puedes cargarlos con fetch)
    const productos = "Json/productos.json"
;
    // Mostrar productos en el catálogo
    productos.forEach(producto => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>${producto.precio}</p>
            <button onclick="mostrarProducto(${producto.id})">Ver Detalles</button>
        `;
        catalogContainer.appendChild(productCard);
    });

    // Función para mostrar detalles del producto seleccionado
    window.mostrarProducto = function (productId) {
        // Buscar el producto por ID
        const selectedProduct = productos.find(producto => producto.id === productId);

        // Mostrar el producto seleccionado
        selectedProductContainer.innerHTML = `
            <h2>${selectedProduct.nombre}</h2>
            <p>${selectedProduct.precio}</p>
            <p>Detalles adicionales del producto...</p>
        `;
    };
});
