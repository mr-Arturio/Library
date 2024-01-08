## Finders Keepers
Create a function that looks through an array `arr` and returns the first element in it that passes a 'truth test'. This means that given an element `x`, the 'truth test' is passed if `func(x)` is `true`. If no element passes the test, return `undefined`.
___
### Simple solution
```JavaScript
function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];

    if (func(num)) {
      return num;
    }
  }
  return undefined;
}
```

### ```Array.prototype.find()``` solution
```JavaScript
function findElement(arr, func) {
  return arr.find(func);
}
```
Explanation of ```find```:
* Inside the function, ```arr.find(func)``` is called. The ```find``` method is a built-in function in JavaScript arrays that returns the first element in the array that satisfies the provided testing function (```func```).
* The `find` method essentially does what your original loop did: it iterates over each element of the array and applies the callback function `func` to each element.
* If `fun`c returns true for any element, `find` immediately returns that element, stopping further search.
* If no element satisfies the condition (i.e., `func` returns false for all elements), `find` returns `undefined`.
___

Another example of find
```JavaScript
const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected output: 12
```