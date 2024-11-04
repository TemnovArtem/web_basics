
let date = new Date();
let month = date.getMonth();
const springMonths = [2, 3, 4]; //  березень  квітень  травень
const summerMonths = [5, 6, 7]; //  червень  липень  серпень
const autumnMonths = [8, 9, 10]; //  вересень  жовтень  листопад
const winterMonths = [11, 0, 1]; //  грудень  січень  лютий

function arrangeSlides() {
    const slider = document.querySelector('.slider'); //шукаємо елемент з класом slider та зберігє у класі slider 
    const autumnSlide = document.getElementById('AutumUzhnu');   // звертаємося до елемента з id AutumUzhnu і зберігаємо у змінній autumslide
    const springSlide = document.getElementById('SpringUzhnu');
    const summerSlide = document.getElementById('SummerUzhnu');
    const winterSlide = document.getElementById('WinterUzhnu');


    if (slider && autumnSlide) { // Провірка на наявність елементів (Було зроблено тк я криворукий і міг забути додати:3)

        if (autumnMonths.includes(month)) { //перевірка чи входить число місяця у масив з осінніми датами

            // Якщо місяць осінній, то переміщуємо осінній слайд на початок
            slider.prepend(autumnSlide);
            
        } else {
            // Якщо не осінь, переміщуємо осінній слайд на кінець
            slider.append(autumnSlide);
        }




        if (springMonths.includes(month)) { 

            slider.prepend(springSlide);
            
        } else {
         
            slider.append(springSlide);
        }


        if (winterMonths.includes(month)) { 

     
            slider.prepend(winterSlide);
            
        } else {
   
            slider.append(winterSlide);
        }


        if (summerMonths.includes(month)) { 

            
            slider.prepend(summerSlide);
            
        } else {
           
            slider.append(summerSlide);
        }

        
    } else {
        console.error("Слайдера нема, найди той слайдер");
    }
}    
window.onload = arrangeSlides; // Виклик функції при завантаженні сторінки

// function click() {
//     // Додаємо обробник події для WinterUzhnu
//     document.getElementById("WinterUzhnu").addEventListener("click", function() {
//         document.getElementById("loadWinterId").classList.add("mom");
//     }, false);

//     // Додаємо обробники для інших слайдів, якщо потрібно
//     document.getElementById("AutumUzhnu").addEventListener("click", function() {
//         document.getElementById("loadWinterId").classList.add("mom");
//     }, false);

//     document.getElementById("SummerUzhnu").addEventListener("click", function() {
//         document.getElementById("loadWinterId").classList.add("mom");
//     }, false);

//     document.getElementById("SpringUzhnu").addEventListener("click", function() {
//         document.getElementById("loadWinterId").classList.add("mom");
//     }, false);
// }

// 
// window.onload = function() {
//     click();
//     arrangeSlides(); // Виклик функції arrangeSlides, якщо вона визначена
// };



