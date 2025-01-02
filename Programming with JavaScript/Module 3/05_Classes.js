class Car {
  constructor(color, speed) {
    this.color = color;
    this.speed = speed;
  }

  turboOn() {
    console.log("turbo is on");
  }
}

let car1 = new Car("red", 170);
car1.turboOn();
