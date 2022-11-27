/* hacer una funcion que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados.
además que cuente cuantas veces el resultado de los 2 dados suma 8
en 36000 tiradas
la cantidad de tiradas la tengo que poder modificar cuando ejecuto la funcion */

//funcion tiradas que le paso como parametro number
const tiradas = (number)=> {
    //inicio una variable llamada vecesOcho
    vecesOcho = 0;
    //para simular el lanzamiento de dados utilizo un ciclo for
    for(i = 0; i < number; i++){
    //inicio la variable d1 (que simula el primer dado) en donde utilizo la propiedad Math.random() para que se generen numeros random (entre el 0 y el 1), luego lo multiplico por las caras de los dados y le sumo uno para estabilizar la base al momento de utilizar la propiedad Math.floor() que transforma los numeros decimales en numeros enteros(es decir, redondea el numero)  
    const d1 = Math.floor(Math.random() * 6 + 1);
    //mismo paso para la variable d2(que simula el segundo dado)  
    const d2 = Math.floor(Math.random() * 6 + 1);
     //la variable total es la suma de los numeros random del primer dado y el segundo dado 
    total = d1 + d2;
     //el primer condicional, si el total da 8 entonces sumalo a la variable vecesOcho 
      if(total === 8){
       vecesOcho++;
        
      }
    }
   //muestra en consola cuantas veces se saco el numero 8 
    console.log(`hay ${vecesOcho} tirada que suma 8`)
  }
  
  //llamando a la funcion con 3600 simulaciones de tirada de dados
  tiradas(3600);