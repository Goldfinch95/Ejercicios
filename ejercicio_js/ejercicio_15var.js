/*El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lio.
Las cartas son una cadena de texto que incluye regalos y parentesis ().

Para saber si una carta es válida, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

Pero ojo! Porque el grinch ha dejado llaves { y corchetes [ dentro de los parentesis que hacen que no sean validas. Por suerte sólo los ha dejado en medio de los paréntesis...

Ejemplos

"bici coche (balón) bici coche peluche" // -> ✅
"(muñeca) consola bici" // ✅

"bici coche (balón bici coche" // -> ❌
"peluche (bici [coche) bici coche balón" // -> ❌
"(peluche {) bici" // -> ❌
"() bici" // ❌

Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. ¡Y acaba con la travesura del Grinch!*/

//array de los caracteres no validos
const noValid = ["[","]","{","}"];

const checkLetters = (carta)=>{
    const cartaSplit = carta.split(" ");
  //por cada juguete de la carta
    for(toy of cartaSplit){
      //si empieza con parentesis y no termina cerrando los parentesis devuelve false, y si tiene solo parentesis tambien devuelve falso
      if(toy.startsWith('(') && !toy.endsWith(')') || toy == '()'){
        return false
      }   
    for(let i = 0 ; i > noValid ; i++){
    //si el juguete incluye uno de los caracteres no validos devuelve false.  
      if(toy.includes(noValid)){
        return false
      }
    }
    }
  //cumplida las condiciones devolvera true
  return true
  }
  
  
  
  checkLetters("bici coche (balón) bici coche peluche");
checkLetters("(muñeca) consola bici");

checkLetters("bici coche (balón bici coche");
checkLetters("peluche (bici [coche) bici coche balón");
checkLetters("(peluche {) bici");
checkLetters("() bici");