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

// class FluentCalculator {
//     private result: number;

//     constructor(initialValue: number){
//         this.result = initialValue;
//     }
//     // if you do not give any public or private access modifier, it is public by default
//     add(value: number): this{
//         this.result += value;
//         return this;
//     }

//     subtract(value: number): this{
//         this.result -= value;
//         return this;
//     }

//     multiply(value: number): this{
//         this.result *= value;
//         return this;
//     }

//     divide(value: number): this{
//         this.result /= value;
//         return this;
//     }

//     equals(): number{
//         return this.result;
//     }
// }

// const result = new FluentCalculator(0)
//     .add(5).multiply(2).divide(2).subtract(1).equals();
// console.log(result); // 4

//--------------------------------------------------------------
// INTERFACE
// An interface is a way to define a contract on a function with respect to the arguments and their type.
// Interfaces are also used to define a contract on properties of a class.

// what are the differences between type and interface in typescript?
// In TypeScript, both type and interface can be used to define the shape of an object. However, there are some key differences between them:
// 
// 1. Declaration Merging
// Interface: Interfaces can be merged. If you declare an interface with the same name multiple times, 
// TypeScript will merge them into a single interface
// Type: Types cannot be merged. If you declare a type with the same name multiple times, it will result in an error.

// 2. Extending
// Interface: Interfaces can extend other interfaces. 
//              You can use the extends keyword to create a new interface that extends an existing interface.
// Type: Types can use intersection types to achieve similar functionality to extending interfaces.
// 
// 3. Compatibility
// Interface: Interfaces are open-ended. This means that you can add new properties to an interface without causing errors.
// Type: Types are closed-ended. This means that you cannot add new properties to a type once it has been defined.
// 
// 4. Use Cases
// Interface: Interfaces are typically used to define contracts on object shapes.
// Type: Types are typically used to define aliases for primitive types, union types, tuple types, and other complex types.
// 
// 5. Readability
// Interface: Interfaces are often preferred for readability, as they clearly define the shape of an object.
// Type: Types are often preferred for brevity, as they can be more concise than interfaces in some cases.
// 
// 6. Implementing
// Interface: Interfaces can be implemented by classes. 
//            When a class implements an interface, it must adhere to the contract defined by the interface.
//            Interfaces are primarily used for defining the shape of objects and are often used with classes.
// Type: Types cannot be implemented by classes. 
//       They are used to define aliases for types and cannot be enforced by the TypeScript compiler.
//       Types are more flexible and can be used to define unions, intersections, and other complex types.
// 
// 7. Usage with Primitives and Unions
// Interface: Interfaces cannot be used with primitive types or unions.
// Type: Types can be used with primitive types, unions, and other complex types.

// Also, interfaces can be used to define contracts on object types, while types can be used to define aliases for object types.
// In general, if you are defining a contract on an object shape, you should use an interface.
// If you are defining an alias for a type, you should use a type.

// type MyType = {
//     prop: number;
// } extends {condition:true} ? {ekstraProp: string} : {ekstraProp: number};

// interface A {
//     good(x: number): string;
//     bad(x: number): string;
// }

// interface B extends A {
//     good(x: number | string): string;
//     bad(x: number): string;
// } // Error: Property 'good' in type 'B' is not assignable to the same property in base type 'A'.

// type A = {
//     good(x: number): string;
//     bad(x: number): string;
// }

// type B = A & {
//     good(x: number | string): string;
//     bad(x: number): string;
// }

// type DogType = {
//     name: string;
//     breed: string;
//     age: number;
//     speak: (sound: string) => void;
// }
// interface Dog extends Animal {
//     name: string;
//     breed: string;
//     age: number;
//     speak(sound: string): void;
// }
// interface Animal {
//     canFly: boolean;
// }

// typescript combines the two interfaces into one (defined identical) interface with the properties of both interfaces.
// interface User {
//     name: string | number | null | undefined;
// }
// interface User {
//     age: number;
//     // name: number; // Error: Property 'name' of type 'number' is not assignable to string

// }
// let user: User = { name: 'Alice', age: 30 };

/* 
    Difference between 'extends' and 'implements' in TypeScript

extends means:
The new class is a child. It gets benefits coming with inheritance. 
It has all the properties and methods of its parent. 
It can override some of these and implement new ones, but the parent stuff is already included.

implements means:
The new class can be treated as the same "shape", but it is not a child. 
It could be passed to any method where Person is required, regardless of having a different parent than Person.


// https://stackoverflow.com/questions/38834625/whats-the-difference-between-extends-and-implements-in-typescript
*/

// interface Animal { // modifiers are not allowed in interfaces such as public, private, protected
//     readonly name: string;
//     eat(food: string): void;
//     sleep(hours: number): void;
// }

// interface Pet {
//     bark(): void;
// }

// class Dog implements Animal, Pet {
//     readonly name: string;
//     constructor(name: string) {
//         this.name = name;
//      }
//     eat(food: string): void {
//         console.log(`Eating ${food}`);
//     }
//     sleep(hours: number) {
//         console.log(`Sleeping for ${hours} hours`);
//     }
//     bark() {
//         console.log('Barking');
//     }
// }

//--------------------------------------------------------------
// Generic Classes
// Generic classes are classes that can work with any data type.
// You can create a generic class by using the angle brackets <> to specify a type parameter.
// The type parameter can be used as a placeholder for the actual data type that will be used with the class.

// class Dog {
//     run() {
//         console.log('Running D');
//     }
// }

// class Cat {
//     run() {
//         console.log('Running C');
//     }
// }
// let dog = new Dog();
// let cat = new Cat();

// // function move(animal: Dog) {
// //     animal.run(); // run gives error because it is protected
// // }
// // move(dog); // Running
// // move(cat); // Error: Argument of type 'Cat' is not assignable to parameter of type 'Dog'.

// function runAnimal<T extends Dog | Cat>(animal: T): void {
//     animal.run();
// }
// runAnimal(dog); // Running D
// runAnimal(cat); // Running C

// class Box<T> {
//     private value: T;
//     constructor(value: T) {
//         this.value = value;
//     }
//     getValue(): T {
//         return this.value;
//     }
//     setValue(value: T): void {
//         this.value = value;  
//     }
// }

// const numberBox = new Box<number>(10);
// console.log(numberBox.getValue()); // 10
// numberBox.setValue(20);
// console.log(numberBox.getValue()); // 20

// const stringBox = new Box<string>('Hello');
// console.log(stringBox.getValue()); // Hello
// stringBox.setValue('World');
// console.log(stringBox.getValue()); // World

//--------------------------------------------------------------
// Statics

// class Example {
//     static staticProperty = 'static property';
//     instanceProperty = 'instance property';

//     constructor(instanceProperty: string) {
//         this.instanceProperty = instanceProperty;
//         // this.staticProperty = 'static property'; // Error: Property 'staticProperty' is a static member of type 'Example'
//     }
//     static staticMethod() {
//         console.log('Static method');
//     }
//     static Add(a: number, b: number) {
//         return a + b;
//     }
//     instanceMethod() {
//         console.log('Instance method');
//     }
// }

// // Example.staticProperty = 'static property'; // OK
// // Example.instanceProperty = 'instance property'; // Error: Property 'instanceProperty' is a static member of type 'Example'
// // Example.staticMethod(); // Static method
// // Example.instanceMethod(); // Error: Property 'instanceMethod' does not exist on type 'typeof Example'

// const example = new Example('new instance property');
// // example.staticProperty = 'new static property'; // Error: Property 'staticProperty' does not exist on type 'Example'
// example.instanceProperty = 'new instance property'; // OK
// Example.staticMethod(); // Static method
// example.instanceMethod(); // Instance method
// Example.Add(1, 2); // 3

// class Singleton {
//     private static instance: Singleton | null = null;
//     private constructor() { } // private constructor to prevent instantiation from outside the class
//     static getInstance(): Singleton {
//         if (!Singleton.instance) {
//             Singleton.instance = new Singleton();
//         }
//         return Singleton.instance;
//     }
// }
// const singleton1 = Singleton.getInstance(); // singleton1 is the only instance
// const singleton2 = Singleton.getInstance(); // singleton1 and singleton2 are the same instance
// console.log(singleton1 === singleton2); // true

//--------------------------------------------------------------
// Class Decorators
// Decorators are a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter.
// Decorators use the form @expression, where expression must evaluate to a function 
// that will be called at runtime with information about the decorated declaration.
// Decorators are a proposed feature for JavaScript and are available as an experimental feature of TypeScript.


// as a first step, you need to enable the experimentalDecorators option in your tsconfig.json file.
// -->     "experimentalDecorators": true, 

// function LogInstantiation<T extends {new (...args: any[]): {}}>(constructor: T) { 
//     // T is a constructor function
//     return class extends constructor { // return a new class that extends the original constructor
//         constructor(...args: any[]) { // override the original constructor
//             super(...args); // call the original constructor. if you do not call super, the instance will not be created
//             console.log(`New instance of ${constructor.name}`);
//             console.log(`Insantiated ${constructor.name} with arguments: ${JSON.stringify(args)}`);
//         }
//     }
// }

// @LogInstantiation
// class Example {
//     constructor(public message: string) {
//         console.log(`Example instantiated with message: ${message}`);
//     }
// }

// const example = new Example('Hello, world!');
// Outputs with order:
/* 
Example instantiated with message: Hello, world!
New instance of Example
Insantiated Example with arguments: ["Hello, world!"]
*/

//--------------------------------------------------------------
// Property Decorators
// Property decorators are used to add metadata to class properties.
// Property decorators are declared just before a property declaration.
// Property decorators are applied to the property descriptor for the property, 
// and can be used to observe, modify, or replace a property definition.

// function LogInstantiation<T extends {new (...args: any[]): {}}>(constructor: T) { 
//     // T is a constructor function
//     return class extends constructor { // return a new class that extends the original constructor
//         constructor(...args: any[]) { // override the original constructor
//             super(...args); // call the original constructor. if you do not call super, the instance will not be created
//             console.log(`New instance of ${constructor.name}`);
//             console.log(`Insantiated ${constructor.name} with arguments: ${JSON.stringify(args)}`);
//         }
//     }
// }

// function LogProperty(target: any, key: string) {
//     console.log(`Property ${key} declared on ${target.constructor.name}`);
// }

// @LogInstantiation
// class MyClass {
//     @LogProperty
//     myProperty: string;
//     constructor(myProperty: string) {
//         this.myProperty = myProperty;
//     }
// }

// @LogInstantiation
// class Example {
//     constructor(public message: string) {
//         console.log(`Example instantiated with message: ${message}`);
//     }
// }
// const myClass = new MyClass(''); 
// outputs with order:
/*
Property myProperty declared on MyClass
New instance of MyClass
Insantiated MyClass with arguments: [""]
*/

//--------------------------------------------------------------
// Decorator Factories
// Decorator factories are functions that return decorator functions.
// Decorator factories allow you to configure decorators with parameters.
// Decorator factories are used to create decorators that accept arguments.

// function LogInstantiation<T extends {new (...args: any[]): {}}>(constructor: T) { 
//     // T is a constructor function
//     return class extends constructor { // return a new class that extends the original constructor
//         constructor(...args: any[]) { // override the original constructor
//             super(...args); // call the original constructor. if you do not call super, the instance will not be created
//             console.log(`New instance of ${constructor.name}`);
//             console.log(`Insantiated ${constructor.name} with arguments: ${JSON.stringify(args)}`);
//         }
//     }
// }

// function LogProperty(target: any, key: string) {
//     console.log(`Property ${key} declared on ${target.constructor.name}`);
// }

// function LogMessage(message: string) {
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//         const originalMethod = descriptor.value;
//         descriptor.value = function (...args: any[]) {
//             console.log(`[${message}] Method ${propertyKey} declared on ${target.constructor.name} 
//                 and called with arguments: ${JSON.stringify(args)}`);
//             return originalMethod.apply(this, args); // call the original method. if you do not call it, the method will not be executed
//             //this is the instance of the class
//             //args are the arguments passed to the method
//             //apply is used to call the original method with the instance and arguments
//         }
//         return descriptor;
//     }
// }

// @LogInstantiation
// class MyClass {
//     @LogProperty
//     myProperty: string;
//     constructor(myProperty: string) {
//         this.myProperty = myProperty;
//     }
// }

// @LogInstantiation
// class Example {
//     constructor(public message: string) {
//         console.log(`Example instantiated with message: ${message}`);
//     }
//     @LogMessage('custom log message')
//     exampleMethod(arg1: number, arg2: string) {
//         console.log(`Example method called with arguments: ${arg1}, ${arg2}`);
//     }
// }

// const example = new Example('Hello, world!');
// example.exampleMethod(1, 'test');
// outputs with order:
/*
Property myProperty declared on MyClass
Example instantiated with message: Hello, world!
New instance of Example
Insantiated Example with arguments: ["Hello, world!"]
[custom log message] Method exampleMethod declared on Example
                and called with arguments: [1,"test"]
Example method called with arguments: 1, test

*/

//--------------------------------------------------------------
// Method Decorators
// Method decorators are used to add metadata to class methods.
// Method decorators are declared just before a method declaration.
// Method decorators are applied to the property descriptor for the method,
// and can be used to observe, modify, or replace a method definition.
// function LogInstantiation<T extends {new (...args: any[]): {}}>(constructor: T) { 
//     // T is a constructor function
//     return class extends constructor { // return a new class that extends the original constructor
//         constructor(...args: any[]) { // override the original constructor
//             super(...args); // call the original constructor. if you do not call super, the instance will not be created
//             console.log(`New instance of ${constructor.name}`);
//             console.log(`Insantiated ${constructor.name} with arguments: ${JSON.stringify(args)}`);
//         }
//     }
// }

// function LogProperty(target: any, key: string) {
//     console.log(`Property ${key} declared on ${target.constructor.name}`);
// }

// function LogMessage(message: string) {
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//         const originalMethod = descriptor.value;
//         descriptor.value = function (...args: any[]) {
//             console.log(`[${message}] Method ${propertyKey} declared on ${target.constructor.name} 
//                 and called with arguments: ${JSON.stringify(args)}`);
//             return originalMethod.apply(this, args); // call the original method. if you do not call it, the method will not be executed
//             //this is the instance of the class
//             //args are the arguments passed to the method
//             //apply is used to call the original method with the instance and arguments
//         }
//         return descriptor;
//     }
// }

// function LogMethod(target: any, key: string, descriptor: PropertyDescriptor) {
//     const originalMethod = descriptor.value;
//     descriptor.value = function (...args: any[]) {
//         console.log(`Method ${key} declared on ${target.constructor.name} 
//             and called with arguments: ${JSON.stringify(args)}`);
//         return originalMethod.apply(this, args);
//     }
//     return descriptor;
// }

// function timing(target: any, key: string, descriptor: PropertyDescriptor) {
//     const originalMethod = descriptor.value;
//     descriptor.value = function (...args: any[]) {
//         const startTime = Date.now();
//         console.time(key); // start a timer with the method name this belong to ts
//         const result = originalMethod.apply(this, args);
//         console.timeEnd(key); // end the timer with the method name this belong to ts --> output: exampleMethod2: 0.38ms
//         const endTime = Date.now();
//         const duration = endTime - startTime;
//         console.log(`Method ${key} took ${duration}ms to execute`); // output: Method exampleMethod2 took 2ms to execute
//         return result;
//     }
//     return descriptor;
// }

// @LogInstantiation
// class MyClass {
//     @LogProperty
//     myProperty: string;
//     constructor(myProperty: string) {
//         this.myProperty = myProperty;
//     }
// }

// @LogInstantiation
// class Example {
//     constructor(public message: string) {
//         console.log(`Example instantiated with message: ${message}`);
//     }
//     @LogMessage('custom log message')
//     @LogMethod
//     exampleMethod(arg1: number, arg2: string) {
//         console.log(`Example method called with arguments: ${arg1}, ${arg2}`);
//     }
//     @timing
//     exampleMethod2() {
//         console.log('Example method called with arguments: NONE');
//     }
// }

// const example = new Example('Hello, world!');
// example.exampleMethod(1, 'test');
// example.exampleMethod2(); 
// Example method called with arguments: NONE
// exampleMethod2: 0.38ms
// Method exampleMethod2 took 2ms to execute

//--------------------------------------------------------------
// Accessor Decorators
// Accessor decorators are used to add metadata to class accessors (getters and setters).
// Accessor decorators are declared just before an accessor declaration.
// Accessor decorators are applied to the property descriptor for the accessor,
// and can be used to observe, modify, or replace an accessor definition.

// function LogInstantiation<T extends {new (...args: any[]): {}}>(constructor: T) { 
//     // T is a constructor function
//     return class extends constructor { // return a new class that extends the original constructor
//         constructor(...args: any[]) { // override the original constructor
//             super(...args); // call the original constructor. if you do not call super, the instance will not be created
//             console.log(`New instance of ${constructor.name}`);
//             console.log(`Insantiated ${constructor.name} with arguments: ${JSON.stringify(args)}`);
//         }
//     }
// }

// function LogProperty(target: any, key: string) {
//     console.log(`Property ${key} declared on ${target.constructor.name}`);
// }

// function LogMessage(message: string) {
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//         const originalMethod = descriptor.value;
//         descriptor.value = function (...args: any[]) {
//             console.log(`[${message}] Method ${propertyKey} declared on ${target.constructor.name} 
//                 and called with arguments: ${JSON.stringify(args)}`);
//             return originalMethod.apply(this, args); // call the original method. if you do not call it, the method will not be executed
//             //this is the instance of the class
//             //args are the arguments passed to the method
//             //apply is used to call the original method with the instance and arguments
//         }
//         return descriptor;
//     }
// }

// function LogMethod(target: any, key: string, descriptor: PropertyDescriptor) {
//     const originalMethod = descriptor.value;
//     descriptor.value = function (...args: any[]) {
//         console.log(`Method ${key} declared on ${target.constructor.name} 
//             and called with arguments: ${JSON.stringify(args)}`);
//         return originalMethod.apply(this, args);
//     }
//     return descriptor;
// }

// function timing(target: any, key: string, descriptor: PropertyDescriptor) {
//     const originalMethod = descriptor.value;
//     descriptor.value = function (...args: any[]) {
//         const startTime = Date.now();
//         console.time(key); // start a timer with the method name this belong to ts
//         const result = originalMethod.apply(this, args);
//         console.timeEnd(key); // end the timer with the method name this belong to ts --> output: exampleMethod2: 0.38ms
//         const endTime = Date.now();
//         const duration = endTime - startTime;
//         console.log(`Method ${key} took ${duration}ms to execute`); // output: Method exampleMethod2 took 2ms to execute
//         return result;
//     }
//     return descriptor;
// }

// function LogAccessor(target: any, key: string, descriptor: PropertyDescriptor) {
//     const originalGetter = descriptor.get;
//     const originalSetter = descriptor.set;
//     if (originalGetter) {
//         descriptor.get = function () {
//             console.log(`Getter ${key} declared on ${target.constructor.name}`);
//             return originalGetter.call(this);
//         }
//     }
//     if (originalSetter) {
//         descriptor.set = function (value: any) {
//             console.log(`Setter ${key} declared on ${target.constructor.name}`);
//             originalSetter.call(this, value);
//         }
//     }
//     return descriptor;
// }

// @LogInstantiation
// class MyClass {
//     @LogProperty
//     myProperty: string;
//     constructor(myProperty: string) {
//         this.myProperty = myProperty;
//     }
// }

// @LogInstantiation
// class Example {
// private _message: string;
// constructor(public message: string) {
//     this._message = message;
//         console.log(`Example instantiated with message: ${message}`);
//     }
//     @LogMessage('custom log message')
//     @LogMethod
//     exampleMethod(arg1: number, arg2: string) {
//         console.log(`Example method called with arguments: ${arg1}, ${arg2}`);
//     }
//     @timing
//     exampleMethod2() {
//         console.log('Example method called with arguments: NONE');
//     }
//     @LogAccessor
//     get exampleProperty(): string {
//         console.log('Getting example property');
//         return this._message;
//     }
//     set exampleProperty(value: string) {
//         console.log(`Setting example property to ${value}`);
//         this._message = value;
//     }
// }

// const example = new Example('Hello, world!');
// example.exampleProperty = 'new value';
// console.log(example.exampleProperty); // example property

//--------------------------------------------------------------
// Parameter Decorators
// Parameter decorators are used to add metadata to class constructor parameters.
// Parameter decorators are declared just before a parameter declaration.
// Parameter decorators are applied to the property descriptor for the parameter,
// and can be used to observe, modify, or replace a parameter definition.
// import "reflect-metadata";

// const requiredMetadataKey = Symbol("required");

// function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
//     let existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
//     existingRequiredParameters.push(parameterIndex);
//     Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameters, target, propertyKey);
// }

// function validate(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<(...args: any[])=> any>) {  
//     let method = descriptor.value!; // ! is used to tell the compiler that the value will not be null or undefined
//     descriptor.value = function(...args: any[]) {
//         let requiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName);
//         if (requiredParameters) {
//             for (let parameterIndex of requiredParameters) {
//                 // const parameterValue = args[parameterIndex];
//                 if (parameterIndex >= args.length || args[parameterIndex] === undefined) {
//                     throw new Error(`Missing required argument.${parameterIndex}, ${args[parameterIndex]}`);
//                 }
//             }
//         }
//         return method.apply(this, args);
//     }
// }

// class Example {
//     private _message: string;

//     constructor(public message: string) {
//         this._message = message;
//         console.log(`Example instantiated with message: ${message}`);
//     }
   
//     @validate
//     exampleMethod(@required arg1: number, arg2: string) {
//         console.log(`Example method called with arguments: ${arg1}, ${arg2}`);
//     }
// }

// const example = new Example('Hello, world!');
// example.exampleMethod(1, 'test'); // Example method called with arguments: 1, test
// // example.exampleMethod(1); // Error: Missing required argument.1, undefined
// // example.exampleMethod(1, undefined); // Error: Missing required argument.1, undefined
// // example.exampleMethod(undefined, 'test'); // Error: Missing required argument.0, undefined

//--------------------------------------------------------------
// Final 

// class FakeFinal {
//     message: string;

//     private constructor (message: string) {
//         this.message = message;
//     }

//     static create(message: string): FakeFinal {
//         return new FakeFinal(message);
//     }
// }

// // class SubFakeFinal extends FakeFinal { // Error: Constructor of class 'FakeFinal' is private and only accessible within the class declaration.
// //     constructor(message: string) {
// //         super(message);
// //     }
// // }

// const fakeFinal = FakeFinal.create('Hello, world!');
// console.log(fakeFinal.message); // Hello, world!

