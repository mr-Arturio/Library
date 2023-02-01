// FUNCTION IMPLEMENTATION
```javascript
const assertEqual = (actual, expected) => {
  console.log((actual === expected) ? `🟢🟢🟢Assertion passed ${actual} === ${expected}` : `🔴🔴🔴Assertion Failed ${actual} !== ${expected}`);
}; // Our assertEqual function can only compare primitive values.


// TEST CODE
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);
assertEqual('Blue', 'blue');
assertEqual('red', 'red');
assertEqual(!true, false);
```