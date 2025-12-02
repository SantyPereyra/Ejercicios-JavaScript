

const filtrar = () => { 
    let texto1 = ["sol", "luna", "estrellas", "cielo"];   
    let resultadoFinal = [];
    for (let i = 0; i < texto1.length; i++) {
        const item = texto1[i]; 

        if (item.length >= 4) {
            resultadoFinal.push(item.toUpperCase()); 
        }
    }
    
    console.log(resultadoFinal); 
};