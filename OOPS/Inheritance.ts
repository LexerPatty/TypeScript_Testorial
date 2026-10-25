// Parent class
class Animal {
    eat() {
        console.log("This animal is eating.");
    }
}

// Child class
class Dog extends Animal {
    bark() {
        console.log("Dog is barking!");
    }
}

// Another child class
class Cat extends Animal {
    meow() {
        console.log("Cat is meowing!");
    }
}

// Create objects
const dog = new Dog();
const cat = new Cat();

dog.eat();  // Inherited from Animal
dog.bark(); // Defined inside Dog

cat.eat();  // Inherited from Animal
cat.meow(); // Defined inside Cat