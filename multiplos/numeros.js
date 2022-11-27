//Escribir un programa que muestre en pantalla los números del 1 al 100, sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por “buzz” y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 (o de 15), por la palabra “fizzbuzz//


const multiplos = document.getElementById ('numeros');

const contar = () =>{
    let numeros = '';
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            document.write (`${"fizzbuzz"}<br>`);
        }
        else if (i % 3 === 0){
            document.write (`${"buzz"}<br>`)
        }
        else if (i % 5 === 0){
            document.write (`${"fizz"}<br>`)
        }
        else {
            document.write(`${i}<br>`)
        }
    }
    multiplos.innerHTML = numeros;
    
}




contar();

/*multiplo es cuando te dan un numero que puede ser multiplicado por un numero Anterior.//
ej: 15 = 3x5/
ej: 5 = no es multiplo de ningun numero.*/