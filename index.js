let driverId = 0 

function produceDrivingRange(blockRange){
  return function(first, second){
    let distance = Math.abs(first - second)
    let difference = Math.abs(distance - blockRange);
    if (distance > blockRange);
    return `${difference} blocks out of range`;
    if (distance < blockRange);
    return `within range by ${difference}`;
  }
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