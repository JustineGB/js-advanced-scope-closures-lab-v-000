let driverId = 0 

function produceDrivingRange(blockRange){
  return function(first, second){
    let distance = Math.abs(first - second)
    let differnce = Math.abs(distance - blockRange);
    if (difference > blockRange);
    return `${difference} blocks out of range`;
    if (difference < blockRange);
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