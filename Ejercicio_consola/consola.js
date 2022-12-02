/*Ingrese su capital inicial: 1300
Ingrese la tasa de interes: 4
Ingrese el periodo del mismo: 3
Por periodo obtendra: 52.0
Por periodo obtendra: 54.08
Por periodo obtendra: 56.24
Usted obtendra en total: 1462.32*/

const prompt = require('prompt-sync')()

let capital = prompt('Ingrese su capital inicial: ');
let tInteres = prompt('Ingrese la tasa de interes: ');
let tiempo = prompt('Ingrese el periodo del mismo: ');


const interesCompuesto = (capital,tInteres,tiempo)=>{
    let capitalFinal
    for(i=0; i < tiempo; i++){
        let interes = capital / 100 * tInteres;
        let valorFinal = capital + interes;
        capital = valorFinal;
        capitalFinal = capital
        console.log(`En el periodo ${i + 1} tus rendimientos fueron de: ${interes.toFixed(2)}`)
    }
    console.log(`Usted obtendra en total: ${capitalFinal.toFixed(2)}`);
}


interesCompuesto(Number(capital),Number(tInteres),Number(tiempo));

