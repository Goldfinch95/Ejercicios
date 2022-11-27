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

Creauna función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. ¡Y acaba con la travesura del Grinch!*/


const checkLetters = (carta)=>{
    let expReg = /\(\w+[\ñ|\á|\é|\í|\ó|\ú]\w+\)/g
    if(expReg.test(carta)){
      return true
    }
    else{
      return false
    }
  }
  
  
  
  checkLetters("bici coche (balón) bici coche peluche");
  checkLetters("bici coche (balón bici coche");