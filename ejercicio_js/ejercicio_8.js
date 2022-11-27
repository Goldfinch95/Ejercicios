/* Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.*/

const comprobar = (number) => {

    if(number % 2 == 0){
        console.log('el número es par');
    }
    else{
        console.log('el número es impar');
    }
}

//comprobar(2);
//comprobar(5);