/* Un amigo compró 5 BitCoins en 2008. El problema es que tenía en un monedero digital... y no se acuerda de la contraseña!

Nos ha pedido ayuda. Y nos ha dado algunas pistas:

- Es una contraseña de 5 dígitos.
- La contraseña tenía el número 5 repetido dos veces.
- El número a la derecha siempre es mayor o igual que el que tiene a la izquierda.

Nos ha puesto algunos ejemplos:

55678 es correcto lo cumple todo.
12555 es correcto, lo cumple todo.
55555 es correcto, lo cumple todo.

12345 es incorrecto, no tiene el 5 repetido.
57775 es incorrecto, los números no van de forma creciente

Dice que el password está entre los números 11098 y 98123.
Le podemos decir cuantos números cumplen esas reglas dentro de ese rango?*/

const findPassword = ()=>{
    const keys = [];
    for(i = 11098 ; i <= 98123 ; i++){
        let validFive = 0;
        let numberString = i.toString();
        let numberSplit = numberString.split('');
        let firstCondition = true;
        for(let i = 0; i < numberSplit.length; i++){
            if(Number(numberSplit[i]) > Number(numberSplit[i + 1])){
                firstCondition = false;
            }
            if(numberSplit[i] == "5"){
                validFive += 1;
            }
        }
        if(validFive == 2 && firstCondition == true){
            keys.push(i);
        }
    }
    return keys
}

findPassword()

console.log(findPassword().length);