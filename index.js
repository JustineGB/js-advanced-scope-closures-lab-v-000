let driverId = 0 

function produceDrivingRange(){
  return function(){}
}

function produceTipCalculator(){
  
}

function createDriver() {
  return class Driver {
  constructor(name) {
    this.name = name
    this.id = ++driverId;
    }
  }
}