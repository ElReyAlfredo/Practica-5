let obj = {
  nombre: "Jorge",
  edad: 19,
  apellido: "Delgado",
  keypress: function () {
    return "Se ha presionado una tecla";
  },
  mouseOver: function () {
    return "El puntero del mouse esta arriba";
  },
};

console.log(obj.nombre);
console.log(obj["nombre"]);

//Si hay myKey le pongo el nombre en una de las llaves me va a imprimir lo del objeto
let myKey = "nombre";
console.log(obj[myKey]);

myKey = "keypress";
console.log(obj[myKey]());

myKey = "mouseOver";
console.log(obj[myKey]());

//ARRYS
let myArray = [];

myArray.push(4);
myArray.push("una cadena");
myArray.push(obj);
myArray.push(function () {
  return "hola desde el array";
});

//console.log(myArray[3]()); // Asi accedes a la funcion en el array
console.log(myArray[2].keypress());
//Se da cuenta que contiene una funcion anonima porque no tiene nomre dicha funcion y para ejecutarla es
console.log(myArray[3]()); //Si tiene un console.log saldra el resultado y un undefinido, para arreglar eso se cambia por retrun
//En js todos los tipos de datos son objetos, entonces el array acepta todo, ya que es una direccion de memoria.
//Es por eso que el array admite todo tipo de dato

let funcArray = [];
funcArray.push(() => {
  console.log("Function 1");
});
funcArray.push(() => {
  console.log("Function 2");
});
funcArray.push(() => {
  console.log("Function 3");
});

funcArray.forEach((arr) => {
  arr();
});

var Emitter = require("./emitter");

var emtr = new Emitter();

emtr.on("greet", () => {
  console.log("Somewhere, some said hello");
});
emtr.on("greet", () => {
  console.log("A greeting occurred!");
});

console.log("Hello");
emtr.emit("greet");
//Aqui ejecuta las dos funciones que llamamos greet, porque exiten dos con ese nombre

emtr.on("jump", () => {
  console.log("someone jumped!");
});

console.log(emtr); //Asi es como estamos llama
emtr.emit("jump");

//Ejecuta lo que hay en el metodo jump, es decir su contenido

//Basicamente el emmiter es un generador de metodos de un objeto donde tu puedes darle un nombre y tambien crear una funcion, la ventaja es que puedes repetir el nombre que quieras infinitaente
//Entoces con el metodo on lo creas y el metodo emit lo mandas llamar
