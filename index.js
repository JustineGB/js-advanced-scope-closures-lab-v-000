let driverId = 0 

function produceDrivingRange(blockRange){ //12
  return function(firstNum, secondNum){ //10th, 12th 
    let x = parseInt(firstNum); //10 
    let y = parseInt(secondNum); //12
    let distance = Math.abs(y - x); //2
    let difference = Math.abs(distance - blockRange); //10 
    if (distance > blockRange) { //2 > 12?
      return `${difference} blocks out of range`;}
      else 
      {return `within range by ${difference}`;}
  }
}


// blockRange = 10 
// First = 10
// Second = 18 
// distance = 8 (18-10)
// difference = 2 (8-10)
// 8 > 2 ....





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