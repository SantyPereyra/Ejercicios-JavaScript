

const reemplazar = (texto, palabraVieja, palabraNueva) => { 
 texto = prompt("Ingresar texto: "); // 
    palabraVieja = prompt("Ingresar palabra a reemplzar del texto: "); 
    palabraNueva = prompt("Ingresar palabra de remplazo: "); // 

    let textoOriginal = texto; 
    let textoReemplazado = texto.replace(palabraVieja, palabraNueva);
console.log(`Original: "${textoOriginal}"`);
console.log(`Resultado: "${textoReemplazado}"`);
 
    
};