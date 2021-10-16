let input = document.querySelector("#input");
let boton = document.querySelector(".boton");
let resultado = document.querySelector("#resultado");

let productos = [
  { nombre: "Banana", valor: 500 },
  { nombre: "Manzana", valor: 500 },
  { nombre: "Naranja", valor: 500 },
  { nombre: "Pera", valor: 500 },
  { nombre: "Limon", valor: 500 },
  { nombre: "Ciruela", valor: 500 },
  { nombre: "Frutilla", valor: 500 },
  { nombre: "Durazno", valor: 500 },
  { nombre: "Kiwi", valor: 500 },
];

function filtrar() {
  resultado.innerHTML = "";
  //console.log(input.value);
  let textoInput = input.value.toLowerCase();

  for (let producto of productos) {
    let nombre = producto.nombre.toLowerCase();
    if (nombre.indexOf(textoInput) !== -1) {
      resultado.innerHTML += `<li>${producto.nombre} - 
        valor: ${producto.valor}</li>`;
    }
  }

  if (resultado.innerHTML == "") {
    resultado.innerHTML += `<li>Producto no encontrado...</li>`;
  }
}

boton.addEventListener("click", function () {
  filtrar();
});
//  por letra ingresada
input.addEventListener("keyup", filtrar);

//con fcn activa para ver todos los productos
filtrar();

let render2 = function render() {
  console.log("hola");
};
