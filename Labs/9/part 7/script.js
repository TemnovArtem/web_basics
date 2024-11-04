const car = {
    speedometer: 0
  };
  
  // Додаємо методи до об'єкта car
  Object.defineProperties(car, {
    setSpeed: {
      value: function(speed) {
        this.speedometer = speed;
        return this; // Повертаємо об'єкт car для ланцюжкового виклику
      }
    },
    getSpeed: {
      value: function() {
        return this.speedometer;
      }
    },
    clearSpeed: {
      value: function() {
        this.speedometer = 0;
        return this; // Повертаємо об'єкт car для ланцюжкового виклику
      }
    }
  });
  
  // Приклад ланцюжкового виклику
  console.log(car.setSpeed(200).setSpeed(300).getSpeed()); // Виведе: 300
  car.clearSpeed();
  console.log(car.getSpeed()); // Виведе: 0
  