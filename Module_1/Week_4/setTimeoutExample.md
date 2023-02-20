### **setTimeout simple exemple**

Here is a simple implementation of printing out each word in an array of words, with a delay of 1 second between each word.
___
```javascript
const wordList = ["one", "two", "three"];
for (let i = 0; i < wordList.length; i++) {
  setTimeout(() => {
    console.log(wordList[i]);
  }, 1000 * i);
}
```
* The `wordList` array contains three elements: "one", "two", and "three".
* The for loop initializes a counter variable `i` to `0`, and then checks if i is less than the length of the `wordList` array (`wordList.length`).
* Inside the loop, a `setTimeout` function is called with a callback function that prints the current element of `wordList`:  `process.stdout.write(`) method is used instead of console.log() to print the characters without adding a new line after each character..
* The `setTimeout` function is also given a delay of 1000 * i milliseconds, where i is the current value of the loop counter variable.
* The loop then increments `i` by 1 and repeats the process, printing the next element of the wordList array with an additional delay of 1000 milliseconds.
The loop continues until i is equal to the length of the `wordList` array, at which point the loop terminates.


#### Another wariant of the same code
```javascript
const wordList = ["one", "two", "three"];
let index = 0;

function printWord() {
  console.log(wordList[index]);
  index++;
  if (index < wordList.length) {
    setTimeout(printWord, 1000);
  }
}

printWord();
```
* The array of words is defined as `wordList`, with the values "one", "two", and "three".
* The variable `index` is initialized to 0.
* The function `printWord` is defined, which logs the word at the current index in the `wordList` array to the console using `console.log()`, increments the index variable by 1, and then sets a timeout for 1 second using `setTimeout()`.
* The `printWord` function is called initially to start the process.
* The `printWord` function is recursively called using `setTimeout` until the `index` variable is greater than or equal to the length of the `wordList` array.