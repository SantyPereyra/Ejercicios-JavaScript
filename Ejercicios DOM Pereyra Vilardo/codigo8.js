
const contar = () => {  
    let texto = prompt("Ingresar texto");
    const vocales = texto.match(/[aeiou]/gi);
    const cantidad =vocales.length; 

    const resultado8 = document.getElementById("resultado8");

    resultado8.innerHTML = `"${texto}" contiene ${cantidad} vocales:`;
    const cambiotam = 16 + (cantidad * 2); 
    resultado8.style.fontSize = `${cambiotam}px`;
}