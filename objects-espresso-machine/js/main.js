//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class ExpressoMachine {
  constructor(name, modelNumber, yearMft, color, boilingTime) {
    this.name = name;
    this.modelNumber = modelNumber;
    this.yearMft = yearMft;
    this.color = color;
    this.boilingTime = boilingTime;
  }

  boilWater() {
    if (this.boilingTime === 200) {
      console.log(`water is boiled`);
      releaseSteam();
    }
  }
  releaseSteam() {
    console.log(`close door`);
  }
    
}
