### setTimeout simple exemple

Here is a simple implementation of printing out each word in an array of words, with a delay of 1 second between each word.
___
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

