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

//--------------------------------------------------------------
// GENERATOR FUNCTIONS OR GENERATORS

// function* infiniteSequence() { // asterisk is used to define a generator function
//     let i = 0;
//     let j = 1;
//     while (true) {
//         yield i; // yield keyword is used to pause and resume a generator function
//         [i, j] = [j, i + j];
//     }
// }

// let fibGenerator = infiniteSequence();
// let result = fibGenerator.next(); // output: {value: 0, done: false}
// console.log(result.value);
// result = fibGenerator.next(); // output: {value: 1, done: false}
// console.log(result.value); // output: 1
// result = fibGenerator.next(); // output: {value: 1, done: false}
// console.log(result.value); // output: 1
// result = fibGenerator.next(); // output: {value: 2, done: false}
// console.log(result.value); // output: 2
// result = fibGenerator.next(); // output: {value: 3, done: false}
// console.log(result.value); // output: 3 
// result = fibGenerator.next(); // output: {value: 5, done: false}
// console.log(result.value); // output: 5

//--------------------------------------------------------------
// ITERATORS
// let numbers = {
//     *[Symbol.iterator]() { // generator function that returns an iterator object. asterisk is used to define a generator function
//         for (let n = 1; n <= 10; n++) {
//             yield n; // yield keyword is used to pause and resume a generator function
//         }
//     }
// }
// for (let a of numbers) {
//     console.log(a); // output: 1 2 3 4 5 6 7 8 9 10
// }

// let all = [...numbers]; // output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let [one, two, ...rest] = numbers; // output: 1 2 [3, 4, 5, 6, 7, 8, 9, 10]
// console.log(all); // output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// //console.log(one, two, three, four, five, six, seven, eight, nine, ten); // it will give an error because the variables are not defined
// console.log(one, two, rest); // output: 1 2 [3, 4, 5, 6, 7, 8, 9, 10]
// console.log(rest); // output: [3, 4, 5, 6, 7, 8, 9, 10]

//--------------------------------------------------------------
// CALL SIGNATURES
// a call signature is a type signature for a function
// x: number, y: number => number; // call signature
// function add(x: number, y: number): number {
//     return x + y;
// }
// type Add = (x: number, y?: number) => number; // call signature, type cannot be assigned to a value, contextual typing is used to infer the type
// let add2: Add = (a, b = 1) => a + b;
// console.log(add2(1)); // output: 2

// function increment(f: (index: number) => void, n: number) { // f is a function that takes an index and returns void
//     // a callback function is a function that is passed as an argument to another function
//     for (let i = 0; i < n; i++) {
//         f(i);
//     }
// }
// increment(i => console.log(i), 5); // output: 0 1 2 3 4

//--------------------------------------------------------------
// SHORTHAND SIGNATURE
// type Add = (x: number, y: number) => number;
// FULL SIGNATURE
// type FullAdd = {
//     (x: number, y: number): number;
// };
//--------------------------------------------------------------
// OVERLOAD Function
// type Greet = {
//     (name: string): string;
//     (name: string, age: number): string;
// }
// let greet: Greet = (name: string, ageOrUndefined?: number) => {
//     if (ageOrUndefined === undefined) {
//         return `Hello ${name}`;
//     }
//     else {
//         const age = ageOrUndefined; // ageOrUndefined is a number
//         return `Hello ${name}, you are ${age} years old`;
//     }
// }

//--------------------------------------------------------------
// GENERIC FUNCTIONS
// type Swap = { // generic function, polimorphic function
//     (a: number, b: number): [number, number]
//     (a: string, b: string): [string, string]
//     (a: boolean, b: boolean): [boolean, boolean]
// }
// let swap: Swap = (a, b) => [b, a] as any;
// const resultNumber = swap(10, 20);
// console.log(resultNumber); // output: [20, 10]
// const resultString = swap('hello', 'world');
// console.log(resultString); // output: ['world', 'hello']
// const resultBoolean = swap(true, false);
// console.log(resultBoolean); // output: [false, true]

// type Swap = {
//     <T>(a: T, b: T): [T, T]
// }
// const swap: Swap = (a, b) => [b, a];
// const resultNumber = swap(10, 20);
// console.log(resultNumber); // output: [20, 10]
// const resultString = swap('hello', 'world');
// console.log(resultString); // output: ['world', 'hello']
// const resultBoolean = swap(true, false);
// console.log(resultBoolean); // output: [false, true]

// type Swap<T> = { 
//     (a: T, b: T): [T, T]
// }
// // in this case you cannot use string or boolean unless you specify the type, 
// // for every type you need to define a new function with the type
// const swap: Swap<number> = (a, b) => [b, a];
// const resultNumber = swap(10, 20); // output: [20, 10]

// type Swap<T> = {
//     (a: T, b: T): [T, T]
// }
// type Swap = {
//     <T>(a: T, b: T): [T, T]
// };
// type Swap = <T>(a: T, b: T) => [T, T];
// type Swap<T> = (a: T, b: T) => [T, T];
// function Swap<T>(a: T, b: T): [T, T] {
//     return [b, a];
// }

// function reverse<T>(list: T[]): T[] {
//     let reversedList: T[] = [];
//     for (let i = list.length - 1; i >= 0; i--) {
//         reversedList.push(list[i]);
//     }
//     return reversedList;
// }
// let letters = ['a', 'b', 'c', 'd'];
// let numbers = [1, 2, 3, 4];
// let reversedLetters = reverse(letters);
// let reversedNumbers = reverse(numbers);
// console.log(reversedLetters); // output: ['d', 'c', 'b', 'a']
// console.log(reversedNumbers); // output: [4, 3, 2, 1]

// type Filter = {
//     <T>(array: T[], f: (item: T) => boolean): T[]
// }
// let filter: Filter = (array, f) => {
//     let result = [];
//     for (let i = 0; i < array.length; i++) {
//         if (f(array[i])) {
//             result.push(array[i]);
//         }
//     }
//     return result;
// }
// let names = ['David', 'John', 'Doe'];
// let filteredNames = filter(names, name => name.startsWith('D'));
// console.log(filteredNames); // output: ['David', 'Doe']

// type Mapping = {
//     <T, U>(array: T[], f: (item: T) => U): U[]
// }
// let map: Mapping = (array, f) => {
//     let result = [];
//     for (let i = 0; i < array.length; i++) {
//         result.push(f(array[i]));
//     }
//     return result;
// }
// let lengths = map(names, name => name.length);
// console.log(lengths); // output: [5, 4, 3]

// type Reduce = {
//     <T>(array: T[], f: (acc: T, current: T) => T, init: T): T
// }
// let reduce: Reduce = (array, f, init) => {
//     let result = init;
//     for (let i = 0; i < array.length; i++) {
//         result = f(result, array[i]);
//     }
//     return result;
// }
// let sum = reduce([1, 2, 3, 4, 5], (acc, n) => acc + n, 0);
// console.log(sum); // output: 15