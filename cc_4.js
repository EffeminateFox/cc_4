//Lucas Scott
//U54529624

// Car class and speed definitions
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }
}

//1 Creates a EV class extending Car with a charging definition
class EV extends Car {
  constructor(make, speed, charge) {
    super(make, speed);
    this.charge = charge;
  }

  // 2 Implements chargeBattery method for EV class
  chargeBattery(chargeTo) {
    this.charge = chargeTo;
  }

  // 3 Overrides accelerate method in EV class to adjust speed and charge
  accelerate() {
    this.speed += 20;
    this.charge -= 1;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
  }
}

// 4 Tests EV class methods with different operations.
// Test Data for Tesla Car: A 'Tesla' starting at 120 km/h, with a battery charge of 23%.

const car1 = new EV('Tesla', 120, 23);

// Test the methods
car1.accelerate(); // Tesla going at 140 km/h, with a charge of 22%
car1.brake(); // Tesla going at 135 km/h
car1.chargeBattery(50); // Charge battery to 50%
console.log(`Battery charged to ${car1.charge}%`); // Battery charged to 50%
car1.accelerate(); // Tesla going at 155 km/h, with a charge of 49%
