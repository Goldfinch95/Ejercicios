// dos funciones
// primera funcion con dos parametros plata y % de interes, tiene que retornar el valor final, la plata con el interes
// segunda funcion obtenerInteresesCompuestos e integrar la antigua funcion. se agrega un tercer parametro de tiempo.


const obtenerInteres = (plata,porcentajeInteres) => {
    let cuenta = plata / 100 * porcentajeInteres;
    let valorFinal = plata + cuenta;
    return valorFinal
}

const obtenerInteresesCompuesto = (plata,porcentajeInteres,tiempo) => {
    let total = 0;
    for(i=0; i < tiempo; i++){
        let total = obtenerInteres(plata,porcentajeInteres);
        plata = total;
        console.log(total)
    }
}


obtenerInteresesCompuesto(500,10,4);




