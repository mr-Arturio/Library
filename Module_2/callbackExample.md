## Callback Review
___
```javascript
const forEach = (array, action) => { //forEach(someArrays, logThatElement) //action is a callback function
  //function (array, action){} 
for(const element of array){         //looping througth array, element = each array piece
  action(element); //== logThatElement(element)          // some manipulations with array elements
}
}

const logThatElement = function(element){ //run as action
  console.log(element + '🔥');           //prints line 4
}

const someArrays = [1, 2, 3, 4, 5]; 

forEach(someArrays, logThatElement); //execution? (array, action)
//forEach([1, 2, 3, 4, 5], function(element){ console.log(element + '🔥'));
```
* This code defines a **higher-order** function called `forEach`, which takes an array and a **callback function** (`action`) as its arguments.
* The `logThatElemen`t function is defined as a **callback function** that takes an element as an argument and logs it to the console along with an emoji.
* When `forEach(someArrays, logThatElement)` is executed, it calls the `forEach` function with `someArrays` as the first argument and `logThatElement` as the second argument. The `forEach` function then iterates through each element of `s`omeArrays` and calls `logThatElement` with that element as an argument. For each element in `someArrays`, the output to the console will be the element followed by a fire emoji.
### Result
```1🔥
2🔥
3🔥
4🔥
5🔥