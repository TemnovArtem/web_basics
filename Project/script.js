const date = new Date();
const month = date.getMonth(); // поточний місяц
const autumnMonths = [8, 9, 10]; // місяця осіні

function arrangeSlides() {
    const slider = document.querySelector('.slider'); //шукаємо елемент з класом slider та зберігє у класі slider 
    const autumnSlide = document.getElementById('AutumUzhnu'); // звертаємося до елемента з id AutumUzhnu і зберігаємо у змінній autumslide

    if (slider && autumnSlide) { // Провірка на наявність елементів (Було зроблено тк я криворукий і міг забути додати)
        if (autumnMonths.includes(month)) { //перевірка чи входить число місяця у масив з осінніми датами

            // Якщо місяць осінній, то переміщуємо осінній слайд на початок
            slider.prepend(autumnSlide);
        } else {
            // Якщо не осінь, переміщуємо осінній слайд на кінець
            slider.append(autumnSlide);
        }
    } else {
        console.error("Slider or autumn slide not found.");
    }
}


// для функії після загрузки сторінки
// window.onload = arrangeSlides;
