// Type Guards

// typeof Operator
// Type guards are some expression that performs a runtime check that guarantees the type in some scope.
// TypeScript uses the typeof keyword to define type guards.
// The typeof keyword is used to get the type of a variable or object or function.
// The typeof operator returns a string indicating the type of the unevaluated operand.
// The typeof operator is used to get the data type (returns a string) of its operand.
// The operand can be either a literal or an expression.
// The typeof operator is used to check the data type of a variable.

function printLength(input: string | string[]): void {
  if (typeof input === 'string') {
    console.log(input.length);
  } else {
    console.log(input.length);
  }
}

printLength('Hello World');
printLength(['Hello', 'World']);
//printLength([1, 2, 3, 4, 5]); // Error: Argument of type 'number[]' is not assignable to parameter of type 'string | string[]'.
// Type 'number[]' is not assignable to type 'string[]'.

// instanceof Operator
// The instanceof operator is used to check the type of an object at runtime.
// The instanceof operator returns true if the object is an instance of the specified object.
// The instanceof operator returns false if the object is not an instance of the specified object.
// The instanceof operator is used to check the type of an object at runtime.

interface Vehicle {
  start() : void;
}

class Motorcycle implements Vehicle {
  start() {
    console.log('Engine started');
  }
}

class Bicycle implements Vehicle {
  start() {
    console.log('Pedaling');
  }
}

function move(vehicle: Vehicle) {
  if (vehicle instanceof Motorcycle) {
    vehicle.start();
  } else {
    vehicle.start();
  }
}

move(new Motorcycle());
move(new Bicycle());

// IS Operator
// The is operator is used to check the type of an object at runtime.
// The in operator is used to check if a property is in an object.
// The in operator returns true if the specified property is in the specified object.
// The in operator returns false if the specified property is not in the specified object.
// The in operator is used to check if a property is in an object.

interface Dog {
  bark(): void;
}

interface Cat {
  meow(): void;
}   

function isDog(animal: Dog | Cat): animal is Dog {
  return (animal as Dog).bark !== undefined;
}

function makeSound(animal: Dog | Cat) {
  if (isDog(animal)) {
    animal.bark();
  } else {
    animal.meow();
  }
}

const dog: Dog = {
  bark() {
    console.log('Woof! Woof!');
  }
}

const cat: Cat = {
  meow() {
    console.log('Meow! Meow!');
  }
}

makeSound(dog);
makeSound(cat);

// User-Defined Type Guards
// User-defined type guards are some expressions that perform a runtime check that guarantees the type in some scope.
// User-defined type guards are created by defining a function that returns a type predicate.
// User-defined type guards are used to narrow down the type of a variable.
// User-defined type guards are used to check the type of an object at runtime.
// User-defined type guards are used to check if a property is in an object.

function isString(value: any): value is string {
  return typeof value === 'string';
}

function printValue(value: any) {
  if (isString(value)) {
    console.log(value.length);
  } else {
    console.log(value.length);
  }
}

printValue('Hello World');
printValue(['Hello', 'World']);
//printValue([1, 2, 3, 4, 5]); // Error: Argument of type 'number[]' is not assignable to parameter of type 'string | string[]'.

// Multiple Type Guards
// Multiple type guards are used to check the type of an object at runtime.
// Multiple type guards are used to check if a property is in an object.
// Multiple type guards are used to narrow down the type of a variable.
// Multiple type guards are used to check the type of a variable.

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function isBoolean(value: any): value is boolean {
  return typeof value === 'boolean';
}

function printValue2(value: any) {
  if (isString(value)) {
    console.log(value.length);
  } else if (isNumber(value)) {
    console.log(value.toFixed(2));
  } else if (isBoolean(value)) {
    console.log(value ? 'Yes' : 'No');
  } else {
    console.log(value.length);
  }
}

printValue2('Hello World');
printValue2(123.456);
printValue2(true);
printValue2(['Hello', 'World']);

// Union Type Guards
// Union type guards are used to check the type of an object at runtime.
// Union type guards are used to check if a property is in an object.
// Union type guards are used to narrow down the type of a variable.
// Union type guards are used to check the type of a variable.

type Shape = Circle | Square;

interface Circle {
  kind: 'circle';
  radius: number;
}

interface Square {
  kind: 'square';
  side: number;
}

function getArea(shape: Shape): number {
//   if (shape.kind === 'circle') {
//     console.log(Math.PI * shape.radius ** 2);
//   } else {
//     console.log(shape.side ** 2);
//   }
    switch (shape.kind) {
        case 'circle':
        return Math.PI * shape.radius ** 2;
        
        case 'square':
        return shape.side ** 2;
    }
}

const circle: Circle = {
  kind: 'circle',
  radius: 5
}

const square: Square = {
  kind: 'square',
  side: 5
}

console.log(getArea(circle));
console.log(getArea(square));

// Nominal Typing
// Nominal typing is a type system that uses names to distinguish between types.

type CompanyId = string & { readonly brand: unique symbol }; // Nominal Typing, & is used to combine types and { readonly brand: unique symbol } is used to create a unique type.
type OrderId = string & { readonly brand: unique symbol };
type UserId = string & { readonly brand: unique symbol };

function queryForUser(id: UserId){
    return id;
}

function CompanyId(id: string){
    return id as CompanyId;
}

function OrderId(id: string){
    return id as OrderId;
}

function UserId(id: string){
    return id as UserId;
}

const companyId = CompanyId('12mmmmmmm3');
const orderId = OrderId('1234');
const userId = UserId('1234');
console.log(queryForUser(userId)); 