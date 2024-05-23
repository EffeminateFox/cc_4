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

// 4A Initializes EV class methods with different operations, A 'Tesla' starting at 120 km/h, with a battery charge of 23%.

const car1 = new EV('Tesla', 120, 23);

// 4B Dynamic testing
console.log(`Initial state: ${car1.make} at ${car1.speed} km/h with a charge of ${car1.charge}%`);

console.log('Accelerating...');
car1.accelerate(); 

console.log('Braking...');
car1.brake();

console.log('Charging battery to 50%...');
car1.chargeBattery(50); 

console.log('Accelerating again...');
car1.accelerate(); 

console.log('Braking again...');
car1.brake(); 

console.log('Charging battery to 100%...');
car1.chargeBattery(100); 

console.log('Accelerating...');
car1.accelerate(); 

console.log('Final state:', car1);
