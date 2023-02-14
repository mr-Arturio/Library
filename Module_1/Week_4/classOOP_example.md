
# OOP

---
### Object-oriented programming concept example

```Javascript
class Account { // Account class that will keep track of the user and their balance.

  constructor(username) { // constructor method is an important part of creating objects in JavaScript and is used to set up the initial state of the object when it is created.
    this.username = username;
    this.transactions = [];
  }

  get balance() { // Calculate the balance using the transaction objects.
    let balance = 0;
    for (let sum of this.transactions) {
      balance += sum.value;
    }
    return balance;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

}

class Transaction { //Superclass - core information, here we use it for Deposit & Withdrawal
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() { //'commit()' method is used to execute the transaction by updating the balance in the account.
    if (!this.isAllowed()) {
      return false;
    }
    this.time = new Date();//Keep track of the time of the transaction
    this.account.addTransaction(this);
    return true;
  }

}

class Deposit extends Transaction { // Deposit is a subclass. extends - keyword for inherit behaviour (Deposit inherit Transaction constructor)
  get value() {
    return this.amount;
  }

  isAllowed() { //always allowed
    return true;
  }

}

class Withdrawal extends Transaction { // Withdrawal is a subclass. extends - keyword for inherit behaviour (Withdrawal inherit Transaction constructor)
  get value() {
    return -this.amount;
  }

  isAllowed() {
    return (this.account.balance - this.amount >= 0);
  }

}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account('snow-patro');

console.log('Starting Account Balance: ', myAccount.balance);

t1 = new Withdrawal(1.00, myAccount);
console.log('Commit result:', t1.commit());
console.log('Transaction 1:', t1);
console.log('Account Balance: ', myAccount.balance);

t2 = new Deposit(120.00, myAccount);
console.log('Commit result:', t2.commit());
console.log('Transaction 2:', t2);
console.log('Account Balance: ', myAccount.balance);

t3 = new Withdrawal(9.99, myAccount);
console.log('Commit result:', t3.commit());
console.log('Transaction 3:', t3);
console.log('Account Balance: ', myAccount.balance);

console.log('Account Transaction History: ', myAccount.transactions);
```
* ```Account``` class is created with a constructor method that initializes two instance variables ```username``` and ```transactions``` to keep track of the user and their account transactions respectively. ```username``` is a string that represents the name of the account holder, and ```transactions``` is an empty array.
* ```get balance()``` method is used to calculate the balance of the account by iterating through the ```transactions``` array and adding up the value of each transaction. If the transaction is a deposit, its ```value``` will be positive, and if it's a withdrawal, it will be negative.
* ```addTransaction(transaction)``` method is used to add new transactions to the ```transactions``` array of an account.
* ```Transaction``` class is created as a superclass that contains core information about a transaction. It has a constructor method that takes two parameters: ```amount``` and ```account```. The ```amount``` parameter represents the value of the transaction, and the ```account``` parameter represents the account to which the transaction is associated.
* ```commit()``` method is used to execute the transaction by updating the balance in the account. It first checks if the transaction is allowed by calling ```isAllowed()``` method, which is overridden in each of the subclasses. If the transaction is allowed, ```time``` instance variable is set to the current date and time, and the transaction is added to the account's transaction history using the ```addTransaction()``` method.
* ```Deposit``` and ```Withdrawal``` classes are created as subclasses of ```Transaction```. Both of these classes inherit the ```Transaction``` constructor and add some additional functionality. ```Deposit``` only allows deposits, and its ```isAllowed()``` method always returns true. ```Withdrawal``` only allows withdrawals, and its ```isAllowed()``` method returns true only if the account has enough balance to cover the amount being withdrawn.
* Finally, the driver code is written to test the functionality of the classes. It creates a new account using the ```Account``` class constructor and initializes it with a username. Then, it performs three transactions (one withdrawal and two deposits) using the ```Withdrawal``` and ```Deposit``` classes, and outputs the results of each transaction and the current balance of the account.




