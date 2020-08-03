1. 

function repeat(value) {
    var arr = []; //empty array
    for (var i = 0; i < 3; i++) {  //iteration over each index
      arr.push(value); //push value to new array 3 times
    }
    return arr.join().split(",").map(Number); //return as one array (as oppose to mini subarrays)
  }
  
  
  repeat([1, 2, 3])