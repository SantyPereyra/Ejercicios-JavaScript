
const sumar= () => {
    let total = 0;
    let ar = [2, 7, 3, 4, 5];
    ar.forEach(function(a) { total += a; });
    const resultado6 = document.getElementById("resultado6"); 
    
    resultado6.innerHTML = 
    `  ${ar.join(' ')} 
    <br>
     resultado: ${total} `;
}