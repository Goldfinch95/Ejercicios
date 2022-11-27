/* Definir una función que determine si la cadena de texto que se le pasa como párametro es un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de palindromo complejo: "la ruta nos aporto otro paso natural".*/

const comprobar = (string) => {

    const frase = string.toLowerCase().split("").join("").replace(/ /g, "");
    console.log(frase);

    // Primero busco reveritr las palabras, creo una variable que se va a llamar revertir que va a tomar el dato que viene del parametro. luego lo va a convertir en minúsculas(toLowerCase()), para que la comprobacion sea mas facil de identificar. despues va a separar los caracteres (split("")), los va a dar vuelta (reverse()) y los volveraa unir en un string(join()). por ultimo se sacaran los espacios(replace(/ /g,"")) de esta manera elimina globalmente los caracteres que involucran un espacio

    const revertir = frase.split("").reverse().join("").replace(/ /g, "");
    console.log(revertir);

    //seguido compruebo si ambas frases coinciden, en caso de que si despliega la frase de confirmación

    if(frase == revertir){
        console.log('es palíndromo');
    }
    //si no lo es, mostrara la frase de negación
    else{
        console.log('no es palíndromo');
    }
}

//comprobar('la ruta nos aporta otro paso natural');
//comprobar('perro');