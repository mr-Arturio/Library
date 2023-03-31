### JavaScript implementation of the **binary search algorithm** for searching for a target value within a sorted array of numbers.
Works only on sorted arrays,  If the array is not sorted, you can either sort it first and then perform the binary search, or use a different algorithm such as linear search.(better to sort)
___

```javascript
function binarySearch(array, target) {
  let min = 0;
  let max = array.length - 1;

  while (max >= min) {
    const guess = Math.floor((max + min) / 2);

    if (array[guess] === target) {
      //found it
      return guess;
    } else if (array[guess] < target) {
      //look at the right side of arr
      min = guess + 1;
    } else {
      //look at the left side of arr
      max = guess - 1;
    }
  }

  return -1;
}
```

Example to use 
```javascript
const myArray = [2, 4, 6, 8, 10];
const target = 6;

const result = binarySearch(myArray, target);

console.log(result); // Output: 2 (the index of 6 in myArray)
```

The ```binarySearch``` function takes two arguments: the array to search and the target value to find. It uses a ```while``` loop to repeatedly divide the remaining search space in half until the target value is found or there is no more search space. The function returns the index of the target value in the array if it is found, or ```-1``` if it is not found.