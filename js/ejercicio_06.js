let numero1 = parseInt(prompt('ingrese el primer numero'));
let numero2 = parseInt(prompt('ingrese el segundo numero'));
if(numero1 > numero2){
    document.write(`El numero ${numero1} es mayor que el ${numero2}`);
} else{
        document.write(`El numero ${numero2} es mayor que el ${numero1}`);
}