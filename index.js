let driverId = 0 

function produceDrivingRange(blockRange){
  return function(first, second){
    let distance = Math.abs(parseInt(second) - parseInt(first));
    let difference = Math.abs(distance - blockRange);
    if (distance > blockRange); {
      return `${difference} blocks out of range`}
      else {return `within range by ${difference}`;}
  }
}


blockRange = 10 
First = 10
Second = 18 
distance = 8 (18-10)
difference = 2 (8-10)
8 > 2 ....

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