// Desafio dia 01

let numeroUn = 1    

let stringUn = '1'

let numeroTreinta = 30

let stringTreinta = '30'

let numeroDiez = 10

let stringDiez = '10'




if (numeroUn == stringUn) {

  console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes')

} else {

  console.log('Las variables numeroUn y stringUn no tienen el mismo valor')

}

 

if (numeroTreinta === stringTreinta) {

  console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo')

} else {

  console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo')

}

 

if (numeroDiez == stringDiez) {

  console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes')

} else {

  console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor')

}

// Desafio dia 02

let nombre = prompt("¿Cuál es tu nombre?");

let edad = prompt("¿Cuántos años tienes?");

let lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");

console.log(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`);

// EJERCICIO OPCIONAL

function respuesta() {
  let pregunta = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`);
  
  if (pregunta == 1) {
    console.log("1 > ¡Muy bien! Sigue estudiando y tendrás mucho éxito.")
  } else if (pregunta == 2) {
    console.log("2 > Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?")
  } else {
    alert("Ingrese solo 1 o 2 dependiendo su respuesta.");
    respuesta();
  }
};

respuesta();