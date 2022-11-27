/*¡Es hora de poner el árbol de navidad en casa! 🎄
Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.
Si le pasamos el argumento 5, se pintaría esto:
Imagen
Creamos un triángulo de asteriscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.
Otro ejemplo con un árbol de altura 3:
Imagen
Ten en cuenta que el árbol es un string y necesitas los saltos de línea \n para cada línea para que se forme bien el árbol.*/

altura = 5
const arbolNavideño = (altura) =>{
for(i = 0; i < altura ; i++){
hojas = '_'.repeat(altura - i-1) + '*'.repeat(i*2 + 1) +'_'.repeat(altura - i -1);
console.log(hojas)
}
console.log('_'.repeat(altura - 1) + '#'.repeat(1) + '_'.repeat(altura - 1))
console.log('_'.repeat(altura - 1) + '#'.repeat(1) + '_'.repeat(altura - 1))
}

arbolNavideño(5)
