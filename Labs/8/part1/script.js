// види 
let number =42;
console.log(number, typeof number)
 let string = "Hello Js:";
 console.log(string, typeof string)
 let boolean = true;
 console.log(boolean, typeof boolean)
 let object = {name: "Artem", age:17};
 console.log(object, typeof object)
 let array = [1 , 2 , 3 , 4 , 5];
 console.log(array, typeof array)
 let varfunction = function(){
 } ;
 console.log(varfunction, typeof varfunction)
 let Varundefind;
 console.log(Varundefind, typeof Varundefind)
 let varnul = null;
 console.log(varnul, typeof varnul) // хоча це об'єкт але у нього є свій тип)

//конвертація  
const num1 = 123;
const varstring = "456";

var convertString = String(num1)
console.log(num1, typeof convertString)
var convertNum = parseInt(varstring)
console.log(varstring, typeof convertNum)

// порівняння
let comparison = 25;
let comparison2 = "mom";
let final = console.log( "Порівняння",comparison === comparison2);


 
// Base64 шифрування
var fn1 = () => {
    var str = window.btoa('TEMNOV ARTEM'); // приймає рядок і кодує  
    console.log('Encrypted:', str); // виводить

    var str2 = window.atob(str); // функція приймає значення закодованого тексту і перевоторює знову у нормальний текст
    console.log('Decrypted:', str2); //виводить декодовене повідомлення 
   }
   fn1();
   //код шифрування знайшов у інернеті на англ ресурсі