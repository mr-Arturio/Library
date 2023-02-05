## *.map()* method
-----
### Test 1
```javascript
//The array of numbers should be the length of each name in the lighthouses.
const lighthouses = [
  "Gibraltar Point",
 "Peggy's Point",
 "Cove Island",
 "Discovery Island",
 "Cape Scott",
 "Point Clark",
 "Kincardine"
 ];

// let howLong = lighthouses.map(num => num.length); 
// console.log(howLong);

console.log(lighthouses.map(num => num.length)); // -> [ 15, 13, 11, 16, 10, 11, 10 ]
```
### Test 2
```javascript
const animals = [
  { name: 'Ivan', species: 'parrot' },
  { name: 'Petr', species: 'dog' },
  { name: 'Slava', species: 'cat' },
  { name: 'Oleg', species: 'dog' },
];

let names = animals.map((creature) => `${creature.name} is a ${creature.species}`); // WOW, no return needed. (creature) is a => function

console.log(names);
```

Or longer without *.map()* method, just regular *for* loop

```javascript
/ const names = []; //names is a new variable, can be any other word
for (let i = 0; i < animals.length; i++){
names.push(animals[i].name);
}
```