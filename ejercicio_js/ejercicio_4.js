/* A partir del siguiente array que se proporciona: const valores = [true, 5, false, 'hola', 'adios', 2];
1.determinar cual de los dos elementos de texto es mayor.
2.Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro false.
3.Determinar el resultado de las cuatro operaciones matemáticas realizadas con los dos elementos numéricos*/

const valores = [true,5,false,'hola','adios',2]
//con la funcion filter podemos crear un nuevo array que filtra los datos que deseamos obtener de un array.
const filtrarValores = valores.filter((valor)=>{
//con if puedo indicar una condicion que ayude a filtrar mejor los datos, en este caso uso la propiedad typeof para filtrar los datos que sean strings. además, explico que el valor total de letras debe ser mayor a 0(por el hecho que contamos a partir de 0 o de 'ninguna letra'.
  if((typeof(valor) === 'string') && (valor.length > 0)){
// al cumplirse la condición,hago que la letra ahora sea el valor total de letras y declaro una variable que va a llamarse texto Mayor en donde se establece el string que tenga mayor cantidad de letras.
    letra = valor.length;
    textoMayor = `el texto mayor es ${valor} con ${valor.length} palabras`
  }
})
//muestro en consola el texto mayor = 'el texto mayor es adios con 5 palabras'
textoMayor

const filtarBoleanos = valores.filter((valor)=>{
  //en este caso la propiedad typeof ayuda a que se filtren unicamente los valores boleanos, aquellos que son true o false. si es verdadero, lo mostrara en consola.
  if((typeof(valor) === 'boolean') && (valor == true)){
    console.log(valor)
  }
  //si es un valor falso, lo mostrara,tambien,en la consola.
   if((typeof(valor) === 'boolean') && (valor == false)){
    console.log(valor)
  }
})

const filtrarValoresNumeros = valores.filter((valor)=>{
  //en este caso la propiedad typeof ayuda a filtrar unicamente los valores que son numeros.
  if(typeof(valor) === 'number'){
  return valor;
    }
})
//declaro dos variables que tengan las posiciones del nuevo array de numeros filtrados.
let primerValor = filtrarValoresNumeros[0];
let segundoValor = filtrarValoresNumeros[1];

//sumo los valores en una variable llamada suma en donde se suman los valores que se encuentran en la posición 0 y la posición 1.
suma = `la suma de ${primerValor} y ${segundoValor} es de ${primerValor + segundoValor}`;
//resto los valores en una variable llamada resta en donde se restan los valores que se encuentran en la posición 0 y la posición 1.
resta = `la resta de ${primerValor} y ${segundoValor} es de ${primerValor - segundoValor}`;
//multiplico los valores en una variable llamada multiplicación en donde se multiplican los valores que se encuentran en la posición 0 y la posición 1.
multiplicación = `la multiplicación de ${primerValor} y ${segundoValor} es de ${primerValor * segundoValor}`;
//divido los valores en una variable llamada división en donde se dividen los valores que se encuentran en la posición 0 y la posición 1.
división = `la división de ${primerValor} y ${segundoValor} es de ${primerValor / segundoValor}`;