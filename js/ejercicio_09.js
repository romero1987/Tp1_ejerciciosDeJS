/*9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:



input: Hola mundo
Output: oauo
*/

let frase = prompt('Ingrese una frase');
let i = 0;
//hola mundo

//escribe un programa
//pregunto si el primer caracter es alguna vocal
while(i < frase.length){
   if (frase.charAt(i) === 'a' || frase.charAt(i) === 'e' || frase.charAt(i) === 'i' || frase.charAt(i) === 'o' || frase.charAt(i) === 'u'){
    document.write(frase.charAt(i));
   }    
   i++;
}