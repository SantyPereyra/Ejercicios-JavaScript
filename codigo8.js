

const vocales = () => { // <-- 1. Recibe el texto como argumento
    let texto=prompt("Ingresar texto: ")

    const coincidencias = texto.match(/[aeiou]/gi);
    const cantidad = coincidencias ? coincidencias.length : 0;
    
    console.log(`El texto contiene ${cantidad} vocales.`);
    return cantidad;
};