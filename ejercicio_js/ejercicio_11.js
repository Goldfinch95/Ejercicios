/* Definir la siguiente jerarquía de objetos, haciendo uso de los prototipos de JavaScript: 

- Objeto Persona con las propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.

- Objeto Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar().

- Objeto Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar().

Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento de la jerarquía.*/

//creo una función llamada NewPersona, donde se creá el objeto persona.
const NewPersona = (nombre,edad,genero) => {
//creo un array

persona = {};

//paso los parametros

persona.nombre = nombre;
persona.edad = edad;
persona.genero = genero;

//creó la  obtDetalles

persona.obtDetalles = function(){
    console.log(persona.nombre , persona.edad, persona.genero)
}

//creó la función registrar del objeto Estudiante
persona.registrar = function(curso,grupo){
    persona.curso = curso;
    persona.grupo = grupo;
}

//creó la función asignar del objeto Profesor
persona.asignar = function(asignatura,nivel){
    persona.asignatura = asignatura;
    persona.nivel = nivel;
}

//retorno los datos a persona

return persona

}

// creó una variable que va a tener el nombre del estudiante al cual voy a pasar los parametros que recibira la función NewPersona.

const alan = NewPersona('alan', 17, 'hombre');

//objetos que se muestran en la consola

console.log(alan)

//llamando a la función obtDetalles()

console.log(alan.obtDetalles())

//llamando a la función registrar() y pasando sus parametros.

console.log(alan.registrar('6to','sociales'));

//llamando a la función asignar() y pasando sus parametros.

console.log(alan.asignar('historia',6));

//objeto final heredando funciones

console.log(alan)

