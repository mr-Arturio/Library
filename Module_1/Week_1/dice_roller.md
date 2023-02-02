## Challenge
Write a program that takes a single parameter from the command line, a number, and rolls that many six-sided dice.

```javascript
const numOfRolls = (num) => {
  let diceNumber = [];
  for (let i = 0; i < num; i++) {   //(let numbers of num) ?
    let eachDice = Math.floor(Math.random() * 6) + 1;
    diceNumber.push(eachDice);
  }
  return diceNumber;
};

console.log(numOfRolls(3));  // .join?
```