function produceDrivingRange(blockRange) {
  return function (start, end) {
  let distance = parseInt(end) - parseInt(start)

  if (blockRange > distance){
    return `within range by ${blockRange - distance}`
  }
  else {
    return `${distance - blockRange} blocks out of range`
    }
  }

  }

  function produceTipCalculator(percentage){
    return function (totalFare){
      return percentage * totalFare
    }
  }

  function createDriver(){
      let driverId = 0; 

      return class {
          constructor(name){
              this.name = name;
              this.id = ++driverId;
          }
      }
  }
