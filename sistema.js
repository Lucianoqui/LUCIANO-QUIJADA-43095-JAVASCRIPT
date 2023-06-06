const carrito = [];

const ordenarMenorMayor = () => {
    productos.sort((a, b) => a.precio - b.precio)
    mostrarListaOrdenada()
};

const ordenarMayorMenor = () => {
    productos.sort((a, b) => b.precio - a.precio)
    mostrarListaOrdenada()
};

const mostrarListaOrdenada = () => {
    const listaOrdenada = productos.map(producto => {
        return producto.nombre+' - U$S '+producto.precio
    });
    alert('Lista de precios:'+'\n\n'+listaOrdenada.join('\n'));
    comprarProductos(listaOrdenada);
};

const comprarProductos = (listaDeProductos) => {
    let continuarCompra;
    let productoNombre = '';
    let productoCantidad = 0;

    do {
        productoNombre = prompt('Digite nombre de Producto a Comprar'+'\n\n'+listaDeProductos.join('\n'));
        productoCantidad = parseInt(prompt('¿Cantidad deseada?'));

        const producto = productos.find(producto => producto.nombre.toLowerCase() === productoNombre.toLowerCase());

        if (producto) {
            agregarAlCarrito(producto, producto.id, productoCantidad);
        } else {
            alert('El producto no se encuentra disponible!');
        }

        continuarCompra = confirm('¿Desea añadir otro Producto?')
    } while (continuarCompra);

    confirmarCompra();
};

const agregarAlCarrito = (producto, productoId, productoCantidad) => {
    const productoRepetido = carrito.find(producto => producto.id === productoId);
    if (productoRepetido) {
        productoRepetido.cantidad += productoCantidad
    } else {
        producto.cantidad += productoCantidad;
        carrito.push(producto)
    }
    console.log(carrito)
};

const eliminarProductoCarrito = (productoNombre) => {
    carrito.forEach((producto, index) => {
        if (producto.nombre.toLowerCase() === productoNombre) {
            if (producto.cantidad > 1) {
                producto.cantidad--
            } else {
                carrito.splice(index, 1)
            }
        }
    })
    confirmarCompra()
};

const confirmarCompra = () => {
    const listaProductos = carrito.map(producto => {
        return producto.nombre+' - Cantidad: '+producto.cantidad
    });

    const confirmar = confirm('Su Compra: '
        +'\n\n'+listaProductos.join('\n')
        +'\n\nPara continuar clic en <Aceptar> o <Cancelar> para eliminar productos del carrito.'
    );

    if (confirmar) {
        finalizarCompra(listaProductos);
    } else {
        const productoAEliminar = prompt('Ingrese el nombre del producto a dar de baja:');
        eliminarProductoCarrito(productoAEliminar);
    }
};

const finalizarCompra = (listaProductos) => {
    const cantidadTotal = carrito.reduce((acc, elemento) => acc + elemento.cantidad, 0);
    const precioTotal = carrito.reduce((acc, elemento) => acc + (elemento.precio * elemento.cantidad), 0);

    alert('Ud. adquirio lo siguiente:'
        +'\n\n'+listaProductos.join('\n')
        +'\n\nTotal de productos: '+cantidadTotal
        +'\n\nEl total de su compra es de: '+precioTotal
        +'\n\nGracias por su compra'
    );
};

const comprar = () => {
    const prodEco = confirm('Ordena de menor a mayor precio? (<Aceptar> = SI o <Cancelar> = NO)');
    if (prodEco) {
        ordenarMenorMayor()
    } else {
        ordenarMayorMenor()
    }
};

comprar()