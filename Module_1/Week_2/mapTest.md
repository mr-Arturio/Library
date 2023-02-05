## *.map()* method
-----

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

Or longer without *.map()* method, just regular loop

```javascript
/ const names = []; //names is a new variable, can be any other word
for (let i = 0; i < animals.length; i++){
names.push(animals[i].name);
}
```