
const verificar = () => {
    let texto = prompt("Ingresar texto:");
    let palabra = prompt("Ingresar palabra a buscar:");
    const resultado4 = document.getElementById("resultado4"); 
    const contiene = texto.toLowerCase().includes(palabra.toLowerCase());
   resultado4.classList.remove("rojo", "verde");  
    
   if (contiene) {
        resultado4.classList.add("verde"); 
        elementoResultado.innerHTML = `el texto contiene "${palabra}".`;
    } else {
       resultado4.classList.add("rojo");
      resultado4.innerHTML = `el texto NO contiene "${palabra}".`;
    }
};