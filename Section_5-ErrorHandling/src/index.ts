// // Null Exception Handling

// function divide(a: number, b: number): number | null {
//   if (b === 0) {
//     throw new Error("Cannot divide by zero");
//     //return null;
//   }
//   return a / b;
// }

// try {
//   const result = divide(10, 0);
//   console.log(result);
// } catch (error) {
//   if (error instanceof Error) {
//     console.error(error.message);
//   }
// }

// const result = divide(10, 0);
// if (result === null) {
//   console.error("Invalid operation");
// } else {
//   console.log(result);
// }
// // returning exceptions

// class DivideByZero extends RangeError {}

// function divide2(a: number, b: number): number | DivideByZero {
//   if (b === 0) {
//     throw new Error("Cannot divide by zero");
//     //return null;
//   }
//   return a / b;
// }

// try {
//   const result = divide2(10, 0);
//   console.log(result);
// } catch (error) {
//   if (error instanceof Error) {
//     console.error(error.message);
//   }
// }

// const result2 = divide2(10, 0);
// if (result2 instanceof DivideByZero) {
//     console.error(result2.message);
// }
// else {
//     console.log(result2);
// }

// Option error handling 

export interface Option<T> { // export?? it will be explain on section modules
    flatMap<U>(func: (value: T) => None): None;
    flatMap<U>(func: (value: T) => Option<U>): Option<U>;
    getOrElse(value: T): T;
}

class Some<T> implements Option<T>{  
    constructor(private value: T){}

    flatMap<U>(func: (value: T) => None): None;
    flatMap<U>(func: (value: T) => Some<U>): Some<U>;

    flatMap<U>(func: (value: T) => Option<U>): Option<U> {
        return func(this.value);
    }
    getOrElse(value: T): T {
        return this.value
    }
}

class None implements Option<never>{

    flatMap(): None {
        return this;
    }
    // flatMap<U>(func: (value: never) => Option<U>): Option<U> {
    //     return this; // returning itself wont cause an error
    // }
    getOrElse<U>(value: U): U {
        return value;
    }

}

function Option<T>(value: null| undefined) : None
function Option<T>(value: T): Some<T>
function Option<T>(value: T): Option<T> {
    if (value === null) {
        return new None;
    }
    return new Some(value);
}


 function divide(a: number, b: number): Option<number>
 {
    if (b === 0) {
        return new None();
    }
    return Option(a/b);
 }

 const result = divide(10, 3);
 if (result instanceof Some){
    console.log(result.getOrElse(0));
 } else {
    console.log("Error: divide by zero");
 }
