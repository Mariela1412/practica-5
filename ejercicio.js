function aplicarDescuento(categoria, totalCompra) {
    let descuento = 0;

    if (categoria === 'VIP') {
        if (totalCompra >= 500) {
            descuento = 0.30; 
        } else {
            descuento = 0.15; 
        }
    } else if (categoria === 'Regular') {
        if (totalCompra >= 500) {
            descuento = 0.15; 
        } else {
            descuento = 0.07; 
        }
    } else if (categoria === 'Nuevo') {
        if (totalCompra >= 500) {
            descuento = 0.10; 
        } else {
            descuento = 0.05; 
        }
    } else {
        console.log("Categoría no válida");
        return totalCompra; 
    }

    let totalConDescuento = totalCompra - (totalCompra * descuento);
    return totalConDescuento;
}

let categoriaCliente = 'Regular';
let totalCompraCliente = 300;

let totalFinal = aplicarDescuento(categoriaCliente, totalCompraCliente);
console.log("El total después del descuento es: $" + totalFinal.toFixed(2));



