// кількість рядків у верхній частині 
const rows = 5;

//  цикл для верхньої частини фігури 
for (let i = 1; i <= rows; i++) {

  console.log('*'.repeat(i * 2 + 7));
}

// цикл для нижньої частини фігури
for (let i = rows - 1; i >= 0; i--) {
  
  console.log('*'.repeat(i * 2 + 7));
}


// завдання з таймером 

let startTime = new Date().getTime(); 
let currentTime = startTime; 

while (currentTime - startTime < 10000) { 
    currentTime = new Date().getTime(); 
}

console.log("10 секунд минуло!");