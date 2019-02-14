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