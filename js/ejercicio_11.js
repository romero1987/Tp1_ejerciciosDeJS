/*11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
Ejemplo: 

input: 20
input: 210


Output: El 20 es divisible por 2 y por 5.
Output: El 210 es divisible por 2, por 3, por 5 y por 7.*/

//2, 3, 5 o 7
let num = parseInt(prompt(`ingrese un numero`));

if(num %2 == 0 && num %3 == 0 && num %5 == 0 && num %7 == 0){
    document.write(`el numero ${num} es divisible por 2, por 3, por 5 y por 7`);
}else if (num %2 == 0 && num %3 == 0 && num %5 == 0){
    document.write(`el numero ${num} es divisible por 2, por 3, por 5`);
}else if (num %2 == 0 && num %3 == 0){
    document.write(`el numero ${num} es divisible por 2 y por 3`);
}else if (num %2 == 0 && num %5 == 0){
    document.write(`el numero ${num} es divisible por 2 y por 5`);
}else if (num %2 == 0 && num %7 == 0){
    document.write(`el numero ${num} es divisible por 2 y por 7`);
}else if (num %2 == 0){
    document.write(`el numero ${num} es divisible por 2`);

}else if (num %3 == 0 && num %5 == 0 && num %7){
    document.write(`el numero ${num} es divisible por 5 y por 7`);
}else if (num %3 == 0 && num %5 == 0){
    document.write(`el numero ${num} es divisible por 3 y por 5`);
}else if (num %3 == 0 && num %7 == 0){
    document.write(`el numero ${num} es divisible por 3 y por 7`);
}else if (num %3 == 0){
    document.write(`el numero ${num} es divisible por 3`);
}
else if (num %5 == 0 && num %7 == 0){
    document.write(`el numero ${num} es divisible por 5 y por 7`);
}else if (num %5 == 0){
    document.write(`el numero ${num} es divisible por 5`);
}else if (num %7 == 0){
    document.write(`el numero ${num} es divisible por 7`);
}