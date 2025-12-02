const filtrar = () => {

    let ar = [5, 12, 8, 52, 9];
    const filtrado = ar.filter((a => a > 10));
    
    const resultado3 = document.getElementById("resultado3"); 
    
    resultado3.innerHTML = `[${filtrado.join(', ')}]`;
}