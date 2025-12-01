
const ordenar=() =>{

    let numeros=[50, 3, 80, 10, 2];
    const ordenado=numeros.slice().sort((a, b) => b - a);
    const resultadoCadena=ordenado;
    
    const resultado10=document.getElementById("resultado10");

    resultado10.innerHTML=`Array ordenado:${resultadoCadena}`;

    resultado10.classList.toggle("destacado");

    const estadoClase = resultado10.classList.contains("destacado") ? "AÑADIDA" : "QUITADA";
    console.log(`clase cambiada a  ${estadoClase}.`);
}