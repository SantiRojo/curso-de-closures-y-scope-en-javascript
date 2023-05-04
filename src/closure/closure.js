// Closures: permiten acceder al ámbito de una función exterior desde una función interior. En Js, las clausuras se crean cada vez que una función es creada. A diferencia de otros conceptos (como funciones, variables u otros) los closures no son siempre utilizados.

// Tenemos una closure cuando una función cualquiera accede a una variable fuera de su contexto y la recuerda.

function gretting() {
  let userName = 'Santi';

  function displayUserName() {
    return `Hola ${userName}`;
  }
  return displayUserName;
}

const g = gretting();
console.log(g);
console.log(g());