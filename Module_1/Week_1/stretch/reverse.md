## Reversing a String
#### Problem
Write a program that takes any number of command line arguments, all strings, and reverses them before outputting them one at a time to the console.

```javascript
let words = process.argv.slice(2).join('\n');
let backwards = '';
//console.log(words);
for (let i = words.length - 1; i >= 0; i--) {
  backwards += words[i];
}

console.log(backwards);
```

Final resalt a bit different from example 
```
node reverse.js hello goodbye
olleh
eybdoog
```
I have (not without mentor help)
```
eybdoog
olleh
```


### Cunclusion
```process.argv``` is the simplest way of retrieving arguments in Node.js