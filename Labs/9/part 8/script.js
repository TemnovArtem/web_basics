// Базовий клас Animal
const Animal = {
    // Метод для виведення звуку тварини
    makeSound() {
        console.log(`${this.name} каже: ${this.sound}`);
    }
};

// Об'єкт Mammal

const Mammal = Object.create(Animal); // Створюємо об'єкт Mammal, що наслідує методи з Animal
// Додаємо showFurColor
Mammal.showFurColor = function() {
    console.log(`${this.name} має хутро ${this.furColor} кольору`);
};

// Об'єкт Bird
const Bird = Object.create(Animal); 

// Додаємо  fly
Bird.fly = function() {
    console.log(`${this.name} ${this.canFly ? 'може' : 'не може'} літати`);
};

// Об'єкт Fish
const Fish = Object.create(Animal); 
// Додаємо showHabitat
Fish.showHabitat = function() {
    console.log(`${this.name} живе у ${this.habitat}`);
};

// Створення об'єкта cat, що наслідується від Mammal
const cat = Object.create(Mammal); 
cat.name = 'Кіт';                 
cat.sound = 'мяу';                
cat.furColor = 'сірий';           

// Створення eagle
const eagle = Object.create(Bird); 
eagle.name = 'Орел';              
eagle.sound = 'кар-кар';          
eagle.canFly = true;              

// Створення  shark
const shark = Object.create(Fish); 
shark.name = 'Акула';             
shark.sound = '...';              
shark.habitat = 'океані';         

//об'єкт cat
cat.makeSound();          // Викликаємо метод makeSound
cat.showFurColor();       // Викликаємо метод showFurColor

//  об'єкт eagle
eagle.makeSound();        
eagle.fly();              

// об'єкт shark
shark.makeSound();        // Викликаємо метод makeSound: "Акула каже: ..."
shark.showHabitat();      // Викликаємо метод showHabitat: "Акула живе у океані"


