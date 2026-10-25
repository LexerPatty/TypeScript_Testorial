/*
Classes is the blueprint of the object. It is a template for creating objects. 
It encapsulates data for the object and methods to manipulate that data.

Class = The blueprint for a car.
Object = An actual car made using that blueprint.
Properties = Information about the car, like its color and brand.
Methods = Actions the car can perform, like starting or stopping.

*/


// class Car {
//     brand: string;
//     color: string;

//     constructor(brand: string, color: string) {
//         this.brand = brand;
//         this.color = color;
//     }

//     start() {
//         console.log(`${this.brand} is starting!`);
//     }
// }


class Product {
    name : string;
    price : number;
    pid : number;
    inCart=false;
    isOrdered=false;


    constructor(name: string, price: number, pid: number) {
        this.name = name;
        this.price = price;
        this.pid = pid
    }

    addToCart():void{
        this.inCart=true
    }

    buyProduct(){
        if (this.inCart){
            this.isOrdered=true
            console.log(`Product ${this.name} is ordered successfully!`);
        }
        else{
            console.log(`Product ${this.name} is not in the cart. Please add it to the cart before ordering.`);
        }
    }
}


var product = new Product("Laptop", 1000, 101);

// PRODUCT ADD TO CART
product.addToCart();
console.log(`Product ${product.name} is added to the cart.`);

console.log(product);


