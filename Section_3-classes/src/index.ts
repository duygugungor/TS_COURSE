// DEFINING A CLASS
// class Person {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//   }
// }
// const person = new Person('Alice', 30);
// person.greet();
// person.name = 'Bob'; // OK
// person.age = 25; // OK

// abstract class Animal{
//     private name: string;

//     constructor(name: string){
//         this.name = name;
//     }

//     abstract makeSound(): void;

//     public getName(): string{
//         return this.name;
//     }

//     public sleep(): void{
//         console.log(`${this.name} is sleeping`);
//     }

//     public eat(): void{
//         console.log(`${this.name} is eating`);
//     }
// }

// class Dog extends Animal{
//     private breed: string;
//     constructor(name: string, breed: string){
//         super(name); // super is used to call the constructor of the parent class which is Animal in this case
//         this.breed = breed;
//     }

//     public makeSound(): void {
//         console.log('Bark');
//         //throw new Error("Method not implemented.");
//     }
    
//     public getBreed(): string{
//         return this.breed;
//     }

//     public doDogThings(): void{
//         this.sleep();
//         this.eat();
//         this.makeSound();
//         console.log(`${this.getName()} is doing dog things`);
//     }
    
// }
// // let genericAnimal = new Animal('Animal'); // Cannot create an instance of an abstract class.
// let genericAnimal = new Dog('Dog', 'Labrador');
// console.log(genericAnimal.getName()); // Dog
// genericAnimal.doDogThings(); // Dog is sleeping, Dog is eating, Dog is doing dog things
// console.log(genericAnimal.getBreed()); // Labrador
// genericAnimal.makeSound(); // Bark

// program chaining is a design pattern that allows you to call multiple methods of the same object in a chain.
// This pattern is achieved by returning the object itself in the method.


class FluentCalculator {
    private result: number;

    constructor(initialValue: number){
        this.result = initialValue;
    }
    // if you do not give any public or private access modifier, it is public by default
    add(value: number): this{
        this.result += value;
        return this;
    }

    subtract(value: number): this{
        this.result -= value;
        return this;
    }

    multiply(value: number): this{
        this.result *= value;
        return this;
    }

    divide(value: number): this{
        this.result /= value;
        return this;
    }

    equals(): number{
        return this.result;
    }
}

const result = new FluentCalculator(0)
    .add(5).multiply(2).divide(2).subtract(1).equals();
console.log(result); // 4