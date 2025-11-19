// --- FUNCIONES DE LOS EJERCICIOS ---
// NOTA: Para este setup, las funciones no deben usar prompt() ni alert()
// Deben aceptar argumentos fijos y DEVOLVER el resultado o usar console.log.

const ejercicio7 = () => {
    // Ejercicio 7: Filtrar > 4 y Mayúsculas
    let texto1 = ["sol", "luna", "estrellas", "mariposa"];   
    let resultado = texto1.filter(item => item.length > 4).map(item => item.toUpperCase());
    console.log("Array Original:", texto1);
    console.log("Resultado (Solo palabras > 4, en MAYÚSCULAS):", resultado);
    return resultado;
};

const ejercicio8 = () => {
    // Ejercicio 8: Contar Vocales (usando un texto fijo para la demostración)
    const texto = "Santino Pereyra";
    const coincidencias = texto.match(/[aeiou]/gi);
    const cantidad = coincidencias ? coincidencias.length : 0;
    
    console.log(`Texto Analizado: "${texto}"`);
    console.log(`Cantidad de Vocales: ${cantidad}`);
    return cantidad;
};

const ejercicio9 = () => {
    // Ejercicio 9: Reemplazar palabras (fijo)
    const texto = "Me gusta el café con leche, pero no me gusta el café solo.";
    const vieja = "café";
    const nueva = "té";
    const regex = new RegExp(vieja, 'gi');
    const resultado = texto.replace(regex, nueva);

    console.log("Texto Original:", texto);
    console.log(`Reemplazando "${vieja}" por "${nueva}"`);
    console.log("Resultado:", resultado);
    return resultado;
};

const ejercicio10 = () => {
    // Ejercicio 10: Ordenar y Mostrar
    const miArray = [5, 2, 9, 1, 15, 7];
    // Usamos slice() para no modificar el array original
    const ordenado = miArray.slice().sort((a, b) => b - a);
    const resultadoCadena = ordenado.join(',');

    console.log("Array Original:", miArray);
    console.log("Array Ordenado (Mayor a Menor):", ordenado);
    console.log("Resultado en Cadena:", resultadoCadena);
    return resultadoCadena;
};

// -------------------------------------------------------------
// 🌟 LÓGICA CLAVE PARA SIMULAR LA CONSOLA EN EL HTML 🌟
// -------------------------------------------------------------

// Objeto que mapea el nombre del ejercicio a la función
const MAPA_EJERCICIOS = {
    'ejercicio7': ejercicio7,
    'ejercicio8': ejercicio8,
    'ejercicio9': ejercicio9,
    'ejercicio10': ejercicio10
};

// Guardamos la función original de console.log
const originalConsoleLog = console.log;
let salidaHTML = '';

// 1. Sobrescribir console.log temporalmente
const sobrescribirConsole = (elementoSalida) => {
    salidaHTML = ''; // Limpiar la salida anterior
    
    // Sobrescribimos la función log para que escriba en una variable y en la consola real
    console.log = (...args) => {
        // Unir todos los argumentos en una línea
        const mensaje = args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ');
        
        // Agregar al HTML y a la consola real
        salidaHTML += mensaje + '\n';
        originalConsoleLog.apply(console, args);
        
        // Mostrar en el div del HTML
        elementoSalida.innerHTML = salidaHTML;
    };
};

// 2. Función que se llama al hacer clic en el menú
function cargarEjercicio(nombreFuncion) {
    const fn = MAPA_EJERCICIOS[nombreFuncion];
    const consolaDiv = document.getElementById('salidaConsola');
    const codigoPre = document.getElementById('codigoVista');

    if (!fn) {
        consolaDiv.textContent = `Error: Función ${nombreFuncion} no encontrada.`;
        return;
    }
    
    // 3. Mostrar el código de la función
    codigoPre.textContent = fn.toString();
    
    // 4. Configurar la captura de la consola
    sobrescribirConsole(consolaDiv);

    // 5. Ejecutar la función. La salida irá al div del HTML gracias a la sobrescritura.
    consolaDiv.textContent = '...Ejecutando...'; // Mensaje temporal
    fn();
    
    // 6. Restaurar el console.log original después de un breve momento
    // (Se usa un timeout para dar tiempo a que se ejecute la función)
    setTimeout(() => {
        console.log = originalConsoleLog;
    }, 10);
    
    // Previene que el navegador salte (por el href="#")
    return false; 
}