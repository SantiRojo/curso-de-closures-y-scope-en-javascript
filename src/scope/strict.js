'use strict'; // Esta sentencia impide la implementación del hoisting
pi = 3.1416;
console.log(pi);

function myFunction() {
  'use strict';
  return pi = 3.1416;
}

console.log(myFunction());