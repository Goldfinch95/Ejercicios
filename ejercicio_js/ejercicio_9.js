/* Definir una función que muestre información sobre una cadena de texto que se le pase como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada por mayúsculas, sólo por minúsculas o por una mezcla de ambas.*/

const comprobar = (string) => {

    //primero debo comprobar que el argumento que paso sea un string compuesto por minúsculas por medio del metodo toLowerCase() que devuelve al string en minúsculas.

    if(string.toLowerCase() == string){
        console.log(`${string} esta conformado por minúsculas`);
    }

    //luego compruebo que el argumento que paso sea un string compuesto por mayúsculas por medio del metodo toUpperCase() que devuelve al string en mayúsculas.
     
    if(string.toUpperCase() == string){
        console.log(`${string} esta conformado por mayúsculas`);
    }

    // por ultimo si el argumento contiene tanto mayúsculas como minúsculas la consola desplegara una frase.

    else{
        console.log(`${string} esta conformado por mayúsculas y minúsculas`);
    }
}

//comprobar('hola');
//comprobar('HOLA');
//comprobar('hOlA');