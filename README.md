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
    var noVowels = string.slice(1).replace(/[aeiou]/gi, '').toLowerCase() //regExr replacement
    var upperCase = string.slice(0, 1).toUpperCase(); //capitalise first letter
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
    var lastPosition = value.length - 1; //removes one from length

    for (var i = lastPosition; i > 0; i--) {  //counts down new array
        if (value[i] == 0) { 
            value[i] = 1; //change 0 to 1
            return value;  //can return here as nothing else would need to be changed
        }
         if (!value.includes(0)){ //if no zeros and counting up, add to end
          value.push(0);
        }
        value[i] = 0; // if 1, replace with 0
    }
    return value;  //return modified array
}
```

###### If we type in our console your function and next_binary_number([1,0,0,0,0,0,0,0,0,1]) then the result should look like 1,0,0,0,0,0,0,0,1,0 (or as an array).

---

If you get invited to the first interview read the "What to expect.md" file.



