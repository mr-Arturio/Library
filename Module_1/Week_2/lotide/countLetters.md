``` javascript
const assertEqual = (actual, expected) => {
  console.log((actual === expected) ? `🟢🟢🟢Assertion passed ${actual} === ${expected}` : `🔴🔴🔴Assertion Failed ${actual} !== ${expected}`);
}; //Our assertEqual function can only compare primitive values

const countLetters = function (text) {
  let quantity = {}; // why {}??

  //const newvar = text.replace(/\s/g, ''); 
  //for (letter of text)
  for (let i = 0; i < text.length; i++) {

    let letter = text[i];
    if (letter !== ' ') {

      if (!quantity[letter]) {
        quantity[letter] = 1;
      } else {
        quantity[letter]++;
      }

    }
  }
  return quantity;
};




console.log(countLetters("lighthouse in the house"));

```