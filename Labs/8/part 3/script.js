
// Унарний
let x = 10;
x=-x;
console.log(x);
//Бінарний
let y =20, z=5;
console.log(y - z);
// Тернарний
function Log(){
    return "Login: " + (Log ? "Yes" : "No");
}
console.log(Log(true));

console.log(Log(false)); 

// const array1 = ['Н', 'е', 'х', 'а', 'й'];
// const array2 = ['З', 'а', 'в', 'ж', 'д', 'и'];
// const array3 = ['Б', 'у', 'д', 'е'];
// const array4 = ['с', 'о', 'н', 'ц', 'е'];
const array1 = ['Нехай завжди буде сонце,'];
const array2 = ['Нехай завжди буде небо,'];
const array3 = ['Нехай завжди буде мама,'];
const array4 = ['Нехай завжди буду я.']
const final = array1.concat(array2,array3,array4);
console.log(final);