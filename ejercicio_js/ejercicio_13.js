/* Crear las expresiones regulares necesarias para resolver los siguientes puntos:

1.Crear una expresión regular valide una fecha en formato "XX/XX/XXXX", donde "X" es un dígito. Probarlo con la expresión: "Nací el 05/04/1982 en Donostia.".
2.Crear una expresión regular que valide una dirección de email. Para simplificar, los valores antes de la @ pueden contener cualquier carácter alfanumérico, y los caracteres . y -, mientras que los valores tra la @ pueden contener caracteres alfanuméricos, y el tipo de dominio puede tener una longitud de 2 o 3 caracteres.
3.Dados un nombre y un apellido, crear la expresión regulatr necesaria para mostrarlos en orden inverso y separados por una coma. Por ejemplo, la cadena "John Smith", convertirla en "Smith, John".*/

const texto = 'Nací el 05/04/1982 en Donostia.';

// esta expresion dice buscar dos digitos, luego un /, luego otros dos digitos, otra vez un / y por ultimo 4 digitos.
let expReg = /\d{2}\/\d{2}\/\d{4}/;


texto;
//para comprobar que devuelve true utilizamos la propiedad test
expReg.test(texto);
//para comprobar visualmente en consola lo que devuelve utilizamos la propiedad exec
//expReg.exec(texto);

const texto2 = 'mi email es facu-vila@hotmail.com';
// esta expresion dice buscar un grupo entre caracteres que sean letras minusculas,mayusculas,numeros o punto o guion, estas pueden ser 1 o más, luego debe tener un @, luego otro grupo de caracteres que posean minusculas,mayusuculas o numeros, luego un punto y por ultimo un conjunto de caracteres que sean minusculas,mayusculas o numeros que sean entre 2 o 3 caracteres.
let expReg2 = /[a-zA-Z0-9.-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,3}/;

texto2;

expReg2.test(texto2);
//expReg2.exec(texto2);

const comprobar = (nombre) => {
 //el parametro nombre sera la variable texto3. 
  texto3 = nombre;
  console.log(texto3)
  // si la variable 3 cuenta con varios caracteres de palabra, luego un espacio, otro caracter de palabra y por ultimo supuestos espacio y caracter de palabra.
  if(/\w+\ \w+\ ?\w+?/.test(texto3)){
   //entonces con la propiedad split creamos un nuevo array que divide el string y lo almacenamos en la variable dividir. 
    dividir = texto3.split(' ');
    console.log(dividir)
    //creamos una nueva variable retornar
    retornar = '';
    //realizo un ciclo for
    for(let i = 0; i < dividir.length;i++){
    //dentro del ciclo, se suma la posicion 1 de dividir + el string de la , + la posicion 0 de dividir. esto se almacena en la varibale retornar 
      retornar = dividir[i] + ', ' + dividir[0]
    }
    //al finalizar el ciclo se muestra en consola el resultado apellido, nombre.
    console.log(retornar)
}
}

comprobar('John Smith');
