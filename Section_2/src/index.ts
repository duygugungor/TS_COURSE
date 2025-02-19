// FUNCTIONS

// function add(x: number, y: number): number {
//     // basic model of a function
//     return x + y;
// }
// let sum = add(1, 2);
// console.log(sum); // output: 3

// let add2 = function(x: number, y: number): number {
//     return x + y;   
// }
// let sum = add(1, 2); 
// console.log(sum);// output: 3
// let add3 = (x: number, y: number): number => {
//     return x + y;
// }
// let add4 = (x: number, y: number): number => x + y;
// let add5 = (x: number, y: number) => x + y;

//--------------------------------------------------------------
// ARGUMENTS, PARAMETERS AND RETURN TYPES

// //function greet(name: string, message?: string) { --> no longer need to the return statement
// //function greet(name: string, message: string) { --> you must pass 2 parameters to the function
// //function greet(name: string, message: string = 'Hello') { --> you can pass 1 parameter to the function
// function greet(name: string, message?: string): string {

//     if (message === undefined || message === null) {
//         console.log(name);
//         return `Hello ${name}`;
        
//     }
//     else {
//         console.log(message + ' ' +  name);
//         return `Hello ${name}, ${message}`;
//     }
// }

// function add(numbers: number[]): number {
//     return numbers.reduce((total, n) => total + n, 0); 
//     // reduce method is used to sum all the numbers in the array,
//     // 0 is the initial value, total is the accumulator and n is the current value
// }

// function add2(x: number, y: number) {
//     return x + y;
// }

// console.log(add([1, 2, 3, 4, 5])); // output: 15
// add.apply(null, [[1, 2]]); // output: 3 --> apply is used to call a function with a given this value and arguments provided as an array
// add.call(null, [1, 2]); // output: 3  --> call is used to call a function with a given this value and arguments provided individually
// add.bind(null, [1, 2])(); // output: 3 --> bind is used to create a new function that, when called, has its this keyword set to the provided value

// add2(1, 2); // output: 3
// add2(...[1, 2]); // output: 3 --> spread operator is used to pass an array as individual arguments
// add2.apply(null, [1, 2]); // output: 3
// add2.call(null, 1, 2); // output: 3
// add2.bind(null, 1, 2)(); // output: 3


// function sum(...numbers: number[]): number {
//     return numbers.reduce((total, n) => total + n, 0);
// }
// console.log(sum(1, 2, 3, 4, 5)); // output: 15
//  function formatDate(this: Date){
//     return`${this.getDate()}/${this.getMonth()}/${this.getFullYear()}`;
//  }
//  console.log(formatDate.call(new Date())); // output: current date 19/1/2025
//  console.log(formatDate.apply(new Date())); // output: current date
//  console.log(formatDate.bind(new Date())()); // output: current date

//--------------------------------------------------------------
// LOOPS

// for (let i = 0; i < 5; i++) {
//     console.log(i); // output: 0 1 2 3 4
// }
// let arr = [10, 20, 30, 40, 50];
// for (let el of arr) {
//     console.log(el); // output: 10 20 30 40 50
// }
// let j =0;
// while (j < 5) {
//     console.log(j); // output: 0 1 2 3 4
//     j++;
// }

// let k = 0;
// do { 
//     console.log(k); // output: 0 1 2 3 4
//     k++;
// } while (k < 5);

// arr.forEach((el, index) => {
//     console.log(`Index ${index}: ${el}`); // output: Index 0: 10 Index 1: 20 Index 2: 30 Index 3: 40 Index 4: 50
// });

// type MyList = [number?, string?, boolean?];
// let arr2: MyList = [1, 'hello', true];
// arr2.push(2); // output: [1, 'hello', true, 2]
// arr2.push('world'); // output: [1, 'hello', true, 2, 'world']
// type MyObject = {a: number; b: number; c: number; [key: string]: number};
// let obj: MyObject = {a: 1, b: 2, c: 3};
// obj.d = 4; // output: {a: 1, b: 2, c: 3, d: 4}
// obj['e'] = 5; // output: {a: 1, b: 2, c: 3, d: 4, e: 5
// for (let key in obj) {
//     console.log(`${key}: ${obj[key]}`); // output: a: 1 b: 2 c: 3 d: 4 e: 5
// }