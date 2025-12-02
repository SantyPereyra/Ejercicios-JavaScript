const unir = () => {

    let texto1 = prompt("Ingresar primer texto");
    let texto2 = prompt("Ingresar segundo texto");
    const resultado = texto1.concat(" ", texto2).toUpperCase();
    const resultado5 = document.getElementById("resultado5"); 
resultado5.innerHTML = `${resultado}`;


}