let driverId = 0 

function produceDrivingRange(blockRange){
  return function(first, second){
    let distance = Math.abs(first - second)
    let blockRange = second - first
    if (blockRange > 10);
    return `${blockRange} blocks out of range`;
    if (blockRange < 10);
    return `within range by ${blockRange}`;
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