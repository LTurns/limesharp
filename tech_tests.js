1;

function repeat(value) {
  var arr = []; //empty array
  for (var i = 0; i < 3; i++) {
    //iteration over each index
    arr.push(value); //push value to new array 3 times
  }
  return arr.join().split(",").map(Number); //return as one array (as oppose to mini subarrays)
}

repeat([1, 2, 3]);


function reformat(string){
    var noVowels = string.slice(1).replace(/[aeiou]/gi, '').toLowerCase().replace(string[0], '')
    var upperCase = string.slice(0, 1).toUpperCase();
    return "" + upperCase + noVowels
}