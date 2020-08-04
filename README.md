# Limesharp Developer Test

Please, **don't fork this repo**, clone it or download it locally and then commit changes after each task into a new repo of your own, and send us the link. We will get back to you shortly.

Languages accepted: Javascript or PHP.

### Task 1:

Make this work (repeat 3 times the contents of an array):

```javascript
repeat([1, 2, 3]); //[1,2,3,1,2,3,1,2,3]
```
Your solution: 

```javascript
function repeat(value) {
  var arr = []; //empty array
  for (var i = 0; i < 3; i++) {
    //iteration over each index
    arr.push(value); //push value to new array 3 times
  }
  return arr.join().split(",").map(Number); //return as one array (as oppose to mini subarrays)
}
```

###### If we type in our console your function and repeat([1,2,3]) then the result should be [1,2,3,1,2,3,1,2,3]

### Task 2:

Make this work (no vowels, lowercase except the first letter):

```javascript
reformat("liMeSHArp DeveLoper TEST"); //Lmshrp dvlpr tst
```
Your solution:

```javascript 
function reformat(string){
    var noVowels = string.slice(1).replace(/[aeiou]/gi, '').toLowerCase().replace(string[0], '')
    var upperCase = string.slice(0, 1).toUpperCase();
    return "" + upperCase + noVowels
}
```

###### If we type in our console your function and reformat("liMeSHArp DeveLoper TEST") then the result should be Lmshrp dvlpr tst

### Task 3 (optional, for bonus points):

Make this work (without using any built in functions, only a `for` loop, return the next binary number in a string or as an array)

```javascript
next_binary_number([1, 0]); // [1,1]

// possible test cases:
// [1,0] => [1,1]
// [1,1] => [1,0,0]
// [1,1,0] => [1,1,1]
// .......
// [1,0,0,0,0,0,0,0,0,1] => [1,0,0,0,0,0,0,0,1,0]
```

Your solution:

```javascript 
function next_binary_number(value){

  newBinary = value.reverse();
  // console.log(value);

  for(i = 0; i < newBinary.length; i++){
    if (newBinary[i] == 0){ 
       newBinary[i] = 1 
       break;
    }
    if (newBinary[i] == 1){
      newBinary[i] = 0;
    }
  } 
   return newBinary.reverse();
}
next_binary_number([1,1])

###### If we type in our console your function and next_binary_number([1,0,0,0,0,0,0,0,0,1]) then the result should look like 1,0,0,0,0,0,0,0,1,0 (or as an array).

---

If you get invited to the first interview read the "What to expect.md" file.

// expected output: [1, 5, 5, 5]
//  function repeat(value) {
//   var arr = [];
//   for (var i = 0; i < 3; i++) {
//     arr.push(value);
//   }
//   return arr.join().split(",").map(Number);
// traverse from the right 
//  convert all 1s to 0s until we find a 0. Finally convert the found 0 to 1.

function next_binary_number(value){

  
  for (i = value - 1; i >= 0 && i < value; --i) {

    console.log(value[i])
    return value[i];


    //   value[i] = 1
    //   console.log(value);
    //   break 
    // } else if(value[i] == 1) {
    //   value[i] = 0
    //   console.log(value);
    // }
  }
}
next_binary_number([1,0]) // [1,1]


