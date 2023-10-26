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