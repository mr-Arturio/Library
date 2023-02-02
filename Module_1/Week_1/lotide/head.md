## Challenge
Create a function head which returns the first item in the array.

```javascript
const head = function (arr) {
 
  return (arr[0]);
};

const assertEqual = (actual, expected) => {
  console.log((actual === expected) ? `🟢🟢🟢Assertion passed ${actual} === ${expected}` : `🔴🔴🔴Assertion Failed ${actual} !== ${expected}`);
};

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5]), 5);
assertEqual(head([]));
assertEqual(head([3]), 2);
assertEqual(head([3], [3, 6]), 3);
```