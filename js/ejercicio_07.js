/*7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 

input: 15 , 3, 9


Output: El 15 es el número más grande*/

let numero1 = parseInt(prompt('ingrese el primer numero'));
let numero2 = parseInt(prompt('ingrese el segundo numero'));
let numero3 = parseInt(prompt('ingrese el tercer numero'));

if(numero1 === numero2 || numero1 == numero3){
    document.write(`Hay numeros repetidos`);
}else if(numero2 === numero1 || numero2 === numero3 ){
    document.write(`Hay numeros repetidos`);
}else if(numero1 > numero2 && numero1 > numero3){
    document.write(`El numero 1 (${numero1}) es mayor que el numero 2 (${numero2}) y el numero 3 (${numero3})` );
} else if(numero2 > numero3){
    document.write(`El numero 2 (${numero2}) es mayor que el numero 1 (${numero1}) y el numero 3 (${numero3})` );
} else {
    document.write(`El numero 3 (${numero3}) es mayor que el numero 1 (${numero1}) y el numero 2 (${numero2})` );
}