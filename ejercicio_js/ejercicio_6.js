/* El cálculo de la letra del Documento Nacional de Identidad (DNI) es un proceso matemático sencillo que se basa en obtener el resto de la división entera del número del DNI y el número 23. A partir del resto de la división, se obtiene la letra seleccionándola dentro de un array de letras

El array de letras es:*/

const letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T']

/* Por tanto si el resto de la división es 0, la letra del DNI es la T y si el resto es 3 la letra es la A. Con estos datos, elabrorar un pequeño script que:

1.Almacene en una variable el número del DNI indicado por el usuario y en otra variable la letra del DNI que se ha indicado.
2.En el primer lugar(y en una sola instrucción) se debe comporbar si el número es menor que 0 o mayor que 99999999. Si ese es el caso, se muestra un mensaje al usuario indicando que el número proporcionado no es válido y el programa no muestra más mensajes.
3.Si el número es válido, se calcula la letra que le corresponde según el método explicado anteriormente.
4.Una vez calculada la letra, se debe comparar con la letra indicada por el usuario. Si no coinciden, se muestra un mensaje al usuario diciéndole que la letra que ha indicado no es correcta. En otro caso, se muestra un mensaje indicando que el número y la letra de DNI son correctos.*/

const dni = 38;

const indicación = 'F';

if(dni < 0 || dni > 99999999){
    console.log('el número proporicionado no es válido');
}
else{

    //se puede dividir con % con una variable que representa un número.

    const división = dni % 23;

// hago que el dato del resultado de la división entre dni y 23 se almacene en la variable división y luego que división sea la posición de la letra que debe traer.

const selección = letras[división];

console.log(selección);

if (selección != indicación) {
    console.log('la letra que ha indicado no es correcta');
}
else{
    console.log('el número y la letra del DNI son correctos');
}
}