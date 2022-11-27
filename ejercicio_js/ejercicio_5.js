/* Completar las condiciones de los if del siguiente script para que los mensajes se muestren siempre de forma correcta*/

const numero1 = 5;
const numero2 = 8;
//if agrega condiciones, estas condiciones explican al programa lo que debe hacer si se llega a cumplir dicha condición.
if(numero1 < numero2){
  console.log(`${numero1} no es mayor que ${numero2}`)
}

if(numero2 > 0){
  console.log(`${numero2} es un número positivo`)
}

if(numero1 > 0 || numero1 != 0){
  console.log(`${numero1} es mayor o distinto de 0`)
}

if(numero1 + 1 <= numero2){
  console.log(`Incrementar en 1 unidad el valor de ${numero1} no lo hace mayor o igual que ${numero2}`)
}
