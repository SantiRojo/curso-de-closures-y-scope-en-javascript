var firstName; // Cuando sólo declaramos una variable, sin inicializarla, implícitamente toma el valor de 'undefined'
firstName = 'Santi';
console.log(firstName);

var lastName = 'Rojo'; // Declarar / asignar
lastName = 'Franco'; // reasignar
console.log(lastName);

var secondName = 'Fermín'; // declarando / asignando
var secondName = 'Fidel'; // reasignando
console.log(secondName);

// Let
let fruit = 'Apple'; // declarar y asignar
fruit = 'Kiwi'; // reasignar

/* let fruit = 'Banana'; */ // No es posible redeclarar una variable declarada con 'let'

// Const
const animal = 'dog'; // declarando y asignando
/* animal = 'cat'; */ // No es posible REASIGNAR una variable declarada con 'let'
/* const animal = 'snake'; */ // No es posible REDECLARAR una variable declarada con 'const'
console.log(animal);

const vehicles = [];
vehicles.push('car');
console.log(vehicles);

vehicles.pop();
console.log(vehicles);