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

// Desafio dia 3

function iniciarJuego() {

  let area = prompt("¿Quieres seguir en el área de Front-End o Back-End? (Escribe 'Front-End' o 'Back-End')").toLowerCase();

  if (area === "front-end") {
    let tecnologia = prompt("¿Quieres aprender React o Vue? (Escribe 'React' o 'Vue')").toLowerCase();
    alert(`¡Genial! Aprender ${tecnologia} te ayudará a desarrollar interfaces interactivas.`);
  } else if (area === "back-end") {
    let tecnologia = prompt("¿Quieres aprender C# o Java? (Escribe 'C#' o 'Java')").toLowerCase();
    alert(`¡Genial! Aprender ${tecnologia} te ayudará a desarrollar servidores y bases de datos.`);
  } else {
    alert("Debes escribir 'Front-End' o 'Back-End'. Inténtalo de nuevo.");
    return iniciarJuego();
  }

  let especializacion = prompt("¿Quieres especializarte en el área elegida o convertirte en Fullstack? (Escribe 'Especializarme' o 'Fullstack')").toLowerCase();

  if (especializacion === "especializarme") {
    alert("¡Buena elección! La especialización te permitirá ser un experto en tu área.");
  } else if (especializacion === "fullstack") {
    alert("¡Increíble! Convertirse en Fullstack te dará más oportunidades en el mercado.");
  } else {
    alert("Debes escribir 'Especializarme' o 'Fullstack'.");
  }

  let tecnologias = [];
  while (true) {
    let nuevaTecnologia = prompt("¿Hay alguna otra tecnología que te gustaría aprender? (Escribe la tecnología o 'ok' para salir)").toLowerCase();

    if (nuevaTecnologia === "ok") {
      break;
    }

    tecnologias.push(nuevaTecnologia);
    alert(`¡Genial! Aprender ${nuevaTecnologia} te abrirá nuevas oportunidades.`);
  }

  alert(`Resumen de tu aprendizaje: \nÁrea elegida: ${area}\nEspecialización: ${especializacion}\nTecnologías adicionales: ${tecnologias.join(", ")}`);
}

iniciarJuego();

// Desafio dia 4

