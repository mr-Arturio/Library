## Recursion
**Recursion** is an alternative to traditional looping that allows you to do the same thing, just in a slightly different way. Recursion isn't necessarily a better way of doing this, it's just a different way of doing this.

```javascript
function countEvenToTwelve(number) {
  if (number <= 12) {// Recursive Case
    console.log(number);
    // The function will call itself again and get closer to the base case
    countEvenToTwelve(number + 2);
  }
  // Base case, do nothing when number > 12
};
countEvenToTwelve(4);
```

#### Regular loop
```javascript
let number = 0;
while (number <= 12) {
  console.log(number);
  number += 2;
}
```

## Conclusion
**Recursion** is a tool you can use as an alternative to traditional iteration using for and while loops.

* Every recursive function must have a base case and a recursive case.
* Each recursive call should break down the current problem into a smaller, simpler one.
* The recursive calls must eventually reach the smallest version of the problem, the base case.
* The base case is when the problem can be solved without further recursion.