/*te ha llegado una carta con todos los regalos que debes preparar. El tema es que es una cadena de texto y es muy dificil de leer. menos mal que han puesto cada regalo separado por un espacio!(aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)

Encima nos hemos dado cuenta que algunas palabras vienen con un _delante de la palabra, por ejemplo _playstation, que signfica que está tachado y no se tiene que contar.

transforma el texto en un objeto que contenga el nombre de cada regalo y las veces que aparece. Por ejemplo si tenemos el texto:

const carta = "bici coche balón _playstation bici coche peluche"
const regalos = listGifts(carta)

console.log (regalos)

{
bici: 2,
coche: 2,
balon: 1.
peluche: 1,
}*/

//mostrar carta
const carta = "bici coche balón _playstation bici coche peluche"



//funcion listGifts que recibe de parametro la carta. esta funcion debe transformar el string en un objeto que contenga a los regalos y la cantidad de veces que aparece.

const listGifts = (carta)=>{
  //sacar los que tengan un _;
  cartaSin_ = carta.replace(/([_])\w+/, '');
  //separar los juguetes;
  array = cartaSin_.split(' ');
  //elminar '' del array
  juguetes =array.filter(juguete => juguete != '')
  //ordenar los elementos repetidos
  ordenar = juguetes.sort();
  //sumar los elementos repetidos
  const resultado = ordenar.reduce((acc, juguete) => ((acc[juguete] = acc[juguete] + 1 || 1), acc), {})
  console.log(resultado);
  //console.log(resultado.bici)
}

//almacenarlo en una variable regalos

const regalos = listGifts(carta);

console.log(regalos);