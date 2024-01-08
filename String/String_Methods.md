Here is a nice example where we are using 7 diferent string methods:
`.toLowerCase()`, `.split()`, `.map()`, `.charAt()`, `toUpperCase()`, `.slice()`, `.join()`

Here is the task:<br>
`Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like the and of.`

```JavaScript
function titleCase(str) {

return str
.toLowerCase()
.split(" ")
.map(word => word.charAt(0).toUpperCase() + word.slice(1))
.join(" ");

}

titleCase("I'm a little tea pot");
```

Explanation:
* `.toLowerCase()` 
  * This method converts the entire string `str` to lowercase.
  * It ensures uniformity, so all words start from a consistent state.
  * Example: `"I'm a little tea pot"` becomes `"i'm a little tea pot"`.
* `.split(' ')`
  * This method splits the string into an array of words based on the specified separator, which in this case is a space `' '`.
  * It breaks the sentence into individual words to process them separately.
  * Example: `"i'm a little tea pot"` becomes `["i'm", "a", "little", "tea", "pot"]`.
* `.map(word => ...)`
  * `.map()` is an array method that creates a new array by applying a function to each element of the original array.
  * In this case, the function takes each `word` and transforms it.
  * The arrow function `word => ...` is used to define the transformation.
* `.charAt(0)`
  * Within the `map` method, `word.charAt(0)` gets the first character (at index 0) of each word.
* `.toUpperCase()`
  * Within the `map` method, `word.charAt(0)` gets the first character (at index 0) of each word.
  * `.toUpperCase()` then converts this first character to uppercase.
  * Example: For the word `"i'm"`, `word.charAt(0)` is `"i"`, and `"i".toUpperCase()` becomes `"I"`.
* `.slice(1)`
  * This is used to get the rest of the word, excluding the first character.
  * `slice(1)` slices the string from the second character (index 1) to the end.
  * Example: For the word `"i'm"`, `word.slice(1)` returns `'m'`.
* `.join(' ')`
  * After `map` processes each word, `.join(' ')` reassembles the array of words back into a single string.
  * It inserts spaces between the words, effectively reversing the initial `.split(' ')`.
  * Example: `["I'm", "A", "Little", "Tea", "Pot"]` becomes `"I'm A Little Tea Pot"`.
