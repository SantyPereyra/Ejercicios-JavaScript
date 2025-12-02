

const ordenar = () => { 

    let numeros = [5, 3, 8, 1, 2];

    const ordenado = numeros.sort((a, b) => b - a);
    const resultadoCadena = ordenado.join('-');
    console.log(`Resultado de la función: "${resultadoCadena}"`); 
  
};