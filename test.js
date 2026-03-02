class vehicule {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  display() {
    console.log(this.make + " " + this.model + " (" + this.year + ")");
  }
}

class car extends vehicule {
  constructor(make, model, year, door) {
    super(make, model, year);
    this.doors = door;     
  }                        

  display() {
    console.log(
      this.make + " " +
      this.model + " (" +
      this.year + ") - " +
      this.doors + " doors"
    );
  }
}

const car1 = new car("mercedes", "prado", 2022, 4);
car1.display();