const convertir = () => {
    let texto = prompt("Ingrese un texto:");
    const textoTransformado = texto.trim().toUpperCase();
    const resultado2 = document.getElementById("resultado2"); 
    resultado2.innerHTML = 
    `<p>${textoTransformado}</p>`;
};
