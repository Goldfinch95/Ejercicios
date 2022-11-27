/* El factorial de un número entero n es una operación matemática que consiste en multiplicar todos los factores n x (n-1) x (n-2) x ... x 1. Así, el factorial de 5 (escrito como 5!) es igual a: 5! = 1 x 2 x 3 x 4 x 5 = 120.

Utilizando la estructura for, crear un script que calcule el factorial de un número entero.*/

const factorial = (number) => {

    //la variable comienzo inicializa en 1, para facilitar la comprension.

    let comienzo = 1;

    for (let i = 1; i < number; i++) {

        //comienzo = 1 x 2 = memoria x 3 x 4 x 5.
        //incializo la variable memoria que va a almacenar el dato o el resultado de comienzo multiplicando el index(las vueltas que recorre)

        const memoria = comienzo * i;

        //luego el dato almacenado en  la variable memoria va a ser transferido a la variable comienzo.

        comienzo = memoria;

        //se muestra en consola el resultado del proceso.5! = 1 x 2 x 3 x 4 x 5 = 120.
        
        console.log(comienzo);
    }
}

factorial(5);