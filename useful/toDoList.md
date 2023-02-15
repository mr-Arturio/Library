# OOP - Object Oriented Programming
**Examples:**

---
### Simple example 
* In object oriented programming, we use objects to group related variables and functions together to keep our code more organized. If we have different pieces of code that all relate to a dog, let's put them in a dog object


```javascript
const dog = {
  sound: "woof", // Property
  breed: "shih tzu", // Property
  speak: function() { // Method
     console.log(this.sound);
  },
  teachMeSomething: function() {
    if (dog === this) {
      console.log('dog === this');
    }
    this.speak();
  }
};

dog.teachMeSomething(); //woof
```
* The ```teachMeSomething``` function is executed, and because it is called on the ```dog``` object, ```this``` inside the function will refer to the ```dog``` object. This means that ```dog === this``` will evaluate to true, and the string ```dog === this``` will be logged to the console.
* Next, the ```speak``` method is called, which will log the value of ```this.sound``` to the console. Because ```this``` inside the speak method refers to the dog object, the value of ```this.sound``` will be the string value stored in the ```sound``` property of the ```dog``` object.
---
### Regular code step by step transformation:
## 1 
### *Basic Code*
---
``` javascript
// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
const taskDescriptions = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  taskTitles.push(title);
  taskDescriptions.push(description);
  tasksComplete.push(false);
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
function completeTask(taskIndex) {
  taskComplete[taskIndex] = true;
}

// Print the state of a task to the console in a nice readable way
function logTaskState(taskIndex) {
  const title = taskTitles[taskIndex];
  const complete = taskComplete[taskIndex];
  console.log(`${title} has${complete ? " " : " not "}been completed`);
}

// DRIVER CODE BELOW

newTask("Clean Cat Litter"); // task 0
newTask("Do Laundry"); // task 1

logTaskState(0); // Clean Cat Litter has not been completed
completeTask(0);
logTaskState(0); // Clean Cat Litter has been completed
```

## 2
### *Refactor Functions*
---
```javascript
function logTaskState(task) {
  console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
}

// marks the provided task as completed
function completeTask(task) {
  task.complete = true;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

logTaskState(task1); // Clean Cat Litter has not been completed
completeTask(task1);
logTaskState(task1); // Clean Cat Litter has been completed

console.log(tasks);
```

## 3
### *Use Methods*
---
```javascript
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

// DRIVER CODE CHANGES BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed
```

