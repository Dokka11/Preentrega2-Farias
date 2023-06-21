class Producto {
    constructor(nombre, cantidad, precio){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}
const bolsaDeCompras = [];

const AK47HeadShot = new Producto("AK47HeadShot", 1, 67);
const AK47PhantomDisruptor = new Producto("AK47PhantomDisruptor", 1, 7.5);
const AK47VULCAN = new Producto("AK47VULCAN", 1, 683);
const AWPNeoNoir = new Producto("AWPNeoNoir", 1, 27.5);
const AWPChromaticAberration = new Producto("AWPChromaticAberration", 1, 31.3);
const KarambitGammaDoppler = new Producto("KarambitGammaDoppler", 1, 1768);

let dinero = 0;


const elementoDinero = document.querySelector("#dinero");
elementoDinero.innerText = dinero;
const elementoBolsa = document.querySelector("#bolsa");

function comprar(producto){
    if (bolsaDeCompras.length + producto.cantidad > 7) {
        alert("Demasiadas Skins, No entran en la oferta de intercambio!.");
        alert("Muchas gracias por usar este mercado <3.");
    }else{
        bolsaDeCompras.push(producto);
        dinero = dinero + producto.precio;
        bolsaProductos();
    }
}

function bolsaProductos(){
    elementoBolsa.innerHTML = "";
    for(const producto of bolsaDeCompras){
        let indiceProducto = bolsaDeCompras.indexOf(producto);
        let elementoProducto = `<div class="cursor prodCompradosBg" onclick="devolver(${indiceProducto})"><img src="img/${producto.nombre}.png" alt="" class="mt-2"><h3>${producto.nombre}</h3>
        </div>`;
        elementoBolsa.innerHTML += elementoProducto;
    }
    elementoDinero.innerText = dinero;
    console.log(bolsaDeCompras);
}


function devolver(indice){
    const producto = bolsaDeCompras[indice];
    dinero = dinero - producto.precio;
    bolsaDeCompras.splice(indice, 1);
    bolsaProductos();
}