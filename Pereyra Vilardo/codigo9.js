
const reemplazar= () => {
    
    let texto = prompt("Ingresar texto");
    let vieja = prompt("Palabra a reemplazar");
    let nueva = prompt("Palabra de reemplazo");

    const regex = new RegExp(vieja, 'gi');
    const textofinal = texto.replace(regex, nueva);

    const content9 = document.getElementById("contenedor9"); 
    const nuevoParrafo = document.createElement('p');

    nuevoParrafo.textContent = `Resultado: ${textofinal}`; 
    content9.appendChild(nuevoParrafo);
};