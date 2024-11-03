let car = {
    speedometer: 0,

    // Геттер
    get speed() {
        return this.speedometer;
    },

    // Сеттер
    set speed(value) {
        this.speedometer = value; 
    },

    // Метод для встановлення значення speedometer
    setSpeed: function(value) {
        this.speed = value;
        return this; // Повертає об'єкт для ланцюгового виклику
    },

    // Метод для отримання значення speedometer
    getspeed: function() {
        return this.speed; // Повертає значення speedometer через геттер
    },

    // Метод для очищення speedometer
    clearSpeedometer: function() {
        this.speedometer = 0;
        return this; // Повертає об'єкт для ланцюгового виклику
    }
};


let result = car.setSpeed(200).setSpeed(300).getspeed(); 
car.clearSpeedometer();

console.log(result); 
console.log(car.speed); 
