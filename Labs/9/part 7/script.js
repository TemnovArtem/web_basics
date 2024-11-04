const car = {
  speedometer: 0, 

  // Метод для встановлення значення speedometer
  setSpeed(value){
    this.speedometer = value;
    return this; // Повертаємо об'єкт car для ланцюжкового виклику
  },

  // Метод для отримання значення speedometer
  getSpeed(){
    return this.speedometer;
  },

  // Метод для скидання значення speedometer
  clearSpeed(){
    this.speedometer = 0;
    return this; // Повертаємо об'єкт car для ланцюжкового виклику
  }
};

// Приклад ланцюжкового виклику
console.log(car.setSpeed(200).setSpeed(300).getSpeed()); // Виведе: 300
car.clearSpeed();
console.log(car.getSpeed()); // Виведе: 0
