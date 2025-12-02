
const crear = () => {
    let palabras = ["sol", "luna", "tierra", "marte", "jupiter"]; 	
    const filtrados = palabras.filter(item => item.length >= 4);
    
    const content7 = document.getElementById("contenedor7"); 
    filtrados.forEach(item => {
        const parrafo = document.createElement('p');
        parrafo.textContent = item.toUpperCase();
        content7.appendChild(parrafo);
    });
};      


