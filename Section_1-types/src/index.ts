// console.log('Hello, world!');


// ANY type
// let x: any = 5;
// let y: any = ['string'];
// let z: any = x+y;
// console.log(z); // output: 5string
// Note: in tsconfig file "strict": true, so it will give error in above code in normal condition. but because i speficied "any" type, it will not give error. 


// UNKNOWN type (similar to any type)
// let x: unknown = 1;
// let y = x === 1; // it will give error because x is of type unknown
// // let z = x + 1;
// if (typeof x === 'number') { // --> refining part
//     // let z = x + y;
//     // console.log(z);
//     // output: Operator '+' cannot be applied to types 'number' and 'boolean'.
//     let z = x + 1;
//     console.log(z);
//     // output: 2
// }

// BOOLEAN type
// let v = true;
// var w = false;
// // let and var usage is same in typescript but let is more recommended because it has block scope and var has function scope. 
// // however, in this case, it will not make any difference. hoisting is not an issue here.
// let x:boolean = true;
// let y: true = true;
// let z: false = false;
// // let a: true = false; // it will give error because false is not assignable to true
// // let b: false = true; // it will give error because true is not assignable to false

// NUMBER type
// let a = 123;
// var b = Infinity*0.1; //Infinity is a global obj in js
// const c= 5432; // const is a constant variable. it cannot be changed.
// let d: number = 123;
// let e: 123 = 123;
// // let f: 123 = 456; // it will give error because 456 is not assignable to 123

// STRING type
// let a = 'hello';
// var b = "world";
// const c = `hello world`; // backticks can be used for string interpolation
// let d: string = 'hello';
// let e: 'hello' = 'hello';

//SYMBOL type
// let a = Symbol('a');
// let a2 = Symbol('a'); 
// let c = a === a2; it will give false because symbols are unique.
// let b: symbol = Symbol('b');
// const c: unique symbol = Symbol('c'); // --> unique symbol must be defined with const!!! if you hover over c you will see "typeof c" but others will show "symbol"
// let d: unique symbol = c; // it will give error because unique symbol is unique and cannot be assigned to another unique symbol.

// OBJECT type
// let a = {x: 1, y: 2}; // it is an object with properties x and y. because I did not specify any type it is more flexible than second example.
// let b: object = {x: 1, y: 2}; // because object is a type, it can be assigned to any object. 
// // But it is not recommended because it is too general. Also you cannot access properties of object type.
// // console.log(b.x); // it will give error because object type does not have property x.
// // let c: {x: number, y: number} = {x: 1, y: 2}; // this is a type of object with specific properties. it will not give error because it is correct. console.log(c.x) will not give error. 
// // let d: {x: number, y: number} = {x: 1, y: 2, z: 3}; // it will give error because z is not defined in the type.
// // let e: {x: number, y: number} = {x: 1}; // it will give error because y is missing in the object.
// let f: {x?: number, y?: number} = {x: 1}; // it will not give error because x and y are optional.
// let g: Object; // it is a type of object but it is not recommended. Equal to empty object type. {} is more recommended.

// TYPE ALIASES
// type Name = string;
// type Age = number;
// type Person = { name: Name, age: Age };
// let person: Person = {name: 'John', age: 30}; 
// let person2 = {name: 'Jane', age: 25};

// UNION and INTERSECTION
// let a: string | number = 1; // it can be either string or number
// let b: string | number = 'hello'; // it can be either string or number
// let c: string | number = true; // it will give error because it can be either string or number
// type Name = string;
// type Age = number;
// type Grade = number;
// type Person = { name: Name, age: Age , parent?: Person, grade: Grade};
// type Child = { name: Name, age: Age, parent: Person };
// type Unionize = Person | Child;
// type Intersection = Person & Child;
// let u: Unionize = {name: 'John', age: 30, parent: {
//     name: 'John', 
//     age: 50, 
//     grade: 0
// }};
// let i: Intersection = {name: 'Jane', age: 25, parent: {
//     name: 'John', 
//     age: 50, 
//     grade: 0
// }, 
// grade: 100};

// ARRAY type
// let a = [1, 2, 3]; // it is an array of numbers
// let b: number[] = [1, 2, 3]; // it is an array of numbers
// let c: Array<number> = [1, 2, 3]; // it is an array of numbers
// c.push(4); // it will not give error because it is an array of numbers
// // c.push('hello'); // it will give error because it is an array of numbers
// console.log(c); // output: [1, 2, 3, 4]
// c.pop(); // it will remove the last element of the array
// console.log(c); // output: [1, 2, 3]
// c.unshift(0); // it will add 0 to the beginning of the array
// console.log(c); // output: [0, 1, 2, 3]
// c.shift(); // it will remove the first element of the array 
// console.log(c); // output: [1, 2, 3]
// c[0] = 0; // it will change the first element of the array to 0
// console.log(c); // output: [0, 2, 3]
// c[1] = 1; // it will change the second element of the array to 1    
// console.log(c); // output: [0, 1, 3]
// let twoTypes = [1, 'hello']; // it is an array of two types
// let twoTypes2: (number | string)[] = [1, 'hello']; // it is an array of two types
// let modify = twoTypes.map((x) => {
//     if (typeof x === 'number') {
//         return x + 1;
//     } else {
//         return x.toUpperCase();
//     }
// });
// console.log(modify); // output: [2, 'HELLO']

// TUPLE type : how to defined it matters 
// let a = [1, 'hello']; // it is an array of two types
// let b: [number, string] = [1, 'hello']; // it is a tuple of two types
// // let c: [number, string] = ['hello', 1]; // it will give error because the order is wrong
// // let d: [number, string] = [1, 'hello', 2]; // it will give error because the length is wrong
// let e: [number, string, number] = [1, 'hello', 2]; // it is a tuple of three types
// let f: [number, string, number?] = [1, 'hello']; // it will not give error because supports optional
// let g: [number, number, ...string[]] = [1, 2, 'hello', 'world']; // it is a tuple of two numbers and rest of them are strings
// let h: [number, number, ...string[]] = [1, 2]; // it is a tuple of two numbers
// let i: [number, number, ...number[]] = [1, 2, 3, 4]; // it is a tuple of two numbers and rest of them are numbers
// let j: [number, number, ...number[]] = [1, 2, 'hello']; // it will give error because the third element is not a number 
// let roArray: readonly number[] = [1, 2, 3]; // it is a readonly array
// // roArray.push(4); // it will give error because it is a readonly array
// let arr: readonly number[] = roArray.concat(3); 
// console.log(arr); // output: [1, 2, 3, 3]
// console.log(arr.slice(2,3)); // output: [3]
// console.log(arr.slice(2,5)); // output: [3, 3]
// let arr2: readonly number[] = [...roArray, 4];
// console.log(arr2); // output: [1, 2, 3, 4]
// let arr3: readonly number[] = [...roArray, ...[4, 5, 6]];
// console.log(arr3); // output: [1, 2, 3, 4, 5, 6]

//NULL, UNDEFINED, VOID, NEVER types
// let n = null; // it is a null type --> absence of value
// let u = undefined; // it is an undefined type --> not been assigned a value yet
// let v: void = undefined; // it is a void type  --> is a function that does not return a value
// let nvr: never; // it is a never type  --> is a function that never return a value
// let n2: null = null; // it is a null type
// let u2: undefined = undefined; // it is an undefined type
// let v2: void = null; // it will give error because null is not assignable to void
// let v3: void = 1; // it will give error because 1 is not assignable to void

//ENUM type
//  enum Animal {
//      Dog = 1,
//         Cat = 2,
//         Lion = 3};
// let a: Animal = Animal.Dog;
// let b = Animal['Cat'];
// const enum Color {
//     Red = 'red',
//     Green = 'green',
//     Blue = 'blue'
// }