            // перше завдання
// const array1 = [1, 2, 3];                    
// const array2 = [10, 20, 30, 40];             
// const array3 = [5, 15, 25, 35, 45];          
// const array4 = [7, 14, 21, 28, 35, 42];     
// const array5 = [100, 200, 300, 400, 500, 600, 700];  


//     function sum(){
//     let total1 = 0;
// for(let i=0 ;i < array1.length; i++ ){
// total1 += array1[i];


// }

// return total1;
 
// }

// console.log(sum());

//     function sum2(){    
//     let total2 = 0;
// for(let i=0;i < array2.length; i++ ){
// total2 += array2[i];


// }
// return total2;
 
// }
// console.log(sum2());

//     function sum3(){
//     let total3 = 0;
// for(let i=0 ;i < array3.length; i++ ){
// total3 += array3[i];


// }
// return total3;
 
// }
// console.log(sum3());

//     function sum4(){
//     let total4 = 0;
// for(let i=0 ;i < array4.length; i++ ){
// total4 += array4[i];


// }
// return total4;
 
// }
// console.log(sum4());  

//     function sum5(){
//     let total5 = 0;
// for(let i=0 ;i < array5.length; i++ ){
// total5 += array5[i];


// }
// return total5;
 
// }
// console.log(sum5());

// const result1 = sum();
// const result2 = sum2();
// const result3 = sum3();
// const result4 = sum4();
// const result5 = sum5();
// const lastarray = [result1, result2, result3, result4, result5];
// console.log(lastarray);

// let max = Math.max(...lastarray)
// console.log( max);
  




                //2 завдання
                //1 варінат роботи


let randomNumber1 = String(Math.floor(Math.random()*10000000000000000000));
let randomNumber2 = String(Math.floor(Math.random()*100000000000000000000000));
let randomNumber3 = String(Math.floor(Math.random()*100000000000000000000000000000000));



//     function getlenght1(){
// let x = randomNumber1.length
// return x;
// }

// let length = getlenght1()   
// console.log(length);


//     function getlenght2(){
//     let y = randomNumber2.length
//     return y;
//     }
//     let length2 = getlenght2()
//     console.log(length2)

//     function getlenght3(){
//         let z = randomNumber3.length
//         return z;
//         }
        
//         let length3 = getlenght3()   
//         console.log(length3);

//         let sumer = length+length2+length3;
//         console.log(sumer)

       
        //2 варіант роботи 


// let add = randomNumber1+randomNumber2+randomNumber3;
// console.log(add)


                    //3 варіант

        

        // let com = parseInt(randomNumber1);
        // let com2 = parseInt(randomNumber2);
        // let com3 = parseInt(randomNumber3);

        // let sumcom = com+com2+com3;
        // console.log(sumcom);

                    //3 задача 

let array1 = [3, 8, 15, 15, 22, 37, 15];
let array2 = [5, 15, 18, 15, 22];

console.log(array1);
console.log(array2);

function arrayDiff(arr1, arr2) {
    let result = [...arr1]; // копіюємо масив 

    for (let i = 0; i < arr2.length; i++) {
        let elem = arr2[i]; // пам'ять для збереження індекса елемента масиву
        let index = result.indexOf(elem); // Знах. індекс елемента з мас. arr2 у result
        if (index !== -1) {
            result.splice(index, 1); // Видалення знайдений елемента з result
        }
    }

    return result; 
}

let result = arrayDiff(array1, array2);
console.log(result, "Новий масив");

