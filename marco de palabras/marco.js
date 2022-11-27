reto = () => {
    const texto = ("¿que te parece el reto?");
    const dividir = texto.split(" ");
    palabras = 0;

    dividir.forEach( letra => {
        if(letra.length > palabras) {
            palabras = letra.length
        }
    });
    
    console.log("*".repeat(palabras + 4));

    dividir.forEach (letra => {
        console.log(`* ${letra}${" ".repeat(palabras - letra.length)} *`);
    })

    console.log("*".repeat(palabras + 4))
}


reto()