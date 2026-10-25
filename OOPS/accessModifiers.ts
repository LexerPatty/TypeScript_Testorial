/*
What is Access Modifiers.
Public.
Private.
Protected.

*/



// PUBLIC 
class Student {
    public name: string = "Rahul";
}

const student = new Student();

console.log(student.name);



// PRIVATE 
class BankAccount {
    private balance: number = 5000;

    showBalance() {
        console.log(this.balance);
    }
}

const account = new BankAccount();

account.showBalance();       // Works: 5000
// console.log(account.balance); // Error


// PROTECTED
class Animal {
    protected sound: string = "Bark";
}

class Dog extends Animal {
    showSound() {
        console.log(this.sound);
    }
}

const dog = new Dog();

dog.showSound();            // Works: Bark
// console.log(dog.sound);  // Error