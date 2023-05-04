
/* var nameOfDog; */ // En este caso el hoisting declara implícitamente antes del console.log() la variable 'nameOfDog' y le asigna el valor 'undefined'.
// console.log(nameOfDog);
// var nameOfDog = 'Oli';
// console.log(nameOfDog);

nameOfDog();

function nameOfDog() {
  console.log(`El mejor gato es ${nameOfCat}`);
}

var nameOfCat = 'Miguel';