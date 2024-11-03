// Базовий клас Animal
class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    
    makeSound() {
        console.log(`${this.name} каже: ${this.sound}`);
    }
}

// Клас Mammal, що наслідується від Animal
class Mammal extends Animal {
    constructor(name, sound, furColor) {
        super(name, sound); // викликаємо конструктор базового класу
        this.furColor = furColor;
    }
    
    showFurColor() {
        console.log(`${this.name} має хутро ${this.furColor} кольору`);
    }
}

// Клас Bird, що наслідується від Animal
class Bird extends Animal {
    constructor(name, sound, canFly) {
        super(name, sound);
        this.canFly = canFly;
    }
    
    fly() {
        if (this.canFly) {
            console.log(`${this.name} може літати`);
        } else {
            console.log(`${this.name} не може літати`);
        }
    }
}

// Клас Fish, що наслідується від Animal
class Fish extends Animal {
    constructor(name, sound, habitat) {
        super(name, sound);
        this.habitat = habitat;
    }
    
    showHabitat() {
        console.log(`${this.name} живе у ${this.habitat}`);
    }
}

// Створюємо об'єкти для перевірки
const cat = new Mammal('Кіт', 'мяу', 'сірий');
const eagle = new Bird('Орел', 'кар-кар', true);
const shark = new Fish('Акула', '...', 'океані');

// Використовуємо методи
cat.makeSound();          // Виведе: "Кіт каже: мяу"
cat.showFurColor();       // Виведе: "Кіт має хутро сірого кольору"

eagle.makeSound();        // Виведе: "Орел каже: кар-кар"
eagle.fly();              // Виведе: "Орел може літати"

shark.makeSound();        // Виведе: "Акула каже: ..."
shark.showHabitat();      // Виведе: "Акула живе у океані"
