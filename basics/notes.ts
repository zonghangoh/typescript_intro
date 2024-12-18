// 1. BASIC TYPES

let myName:string = "bob";
let myAge:number = 28;
let isHappy:boolean = true;

// Objects
let person: {
    name: string; 
    age: number;
} = {
    name: 'Max',
    age: 30
}

// Object types are inferred if you're creating one directly
let person1 = {
    name: 'Max', // inferred as `string`
    age: 30      // inferred as `number`
}

// Arrays
let favoritActivities: string[];
favoritActivities = ['Sports'];

// Tuples
const role: [number, string] = [2, 'author'];

// Functions

// Typescript allows you to define params and return types.

function add(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log(num);
}

// Function types
let combinedValues: (a: number, b: number) => number;

// 2. TYPES AND INTERFACES

type Person = {
    name: string;
    age: number;
}

interface Person {
    name: string;
    age: number;
}

interface Admin extends Person {
    privileges: string[];
}

// 3. TECHNIQUES

// 3.1 Type Intersection

type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
}

// 3.2 Type Unions

type Combinable = string | number;

// 3.3 Type Guards
function combine(input1: Combinable, input2: Combinable) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

// 3.4 Optional Chaining

const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: {
        title: 'CEO',
        description: 'My own company'
    }
};

console.log(fetchedUserData.job && fetchedUserData.job.title); // The JS way
console.log(fetchedUserData?.job?.title); // The TS way

// 3.5 Type Casting

const userInputElement = document.getElementById('user-input')! as HTMLInputElement;

// 3.6 Index Properties 

interface ErrorContainer {
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email',
    username: 'Must start with a captial character'
}

// 3.7 Nullish Coalescing 

type StoredData = string;
const userInput = null;
const storedData:StoredData = userInput ?? 'DEFAULT';

// 3.8 keyof, typeof, index access
type Point = { x: number; y: number };
type P = keyof Point;

let s = "hello";
let n: typeof s;

type AnotherPerson = { age: number; name: string; alive: boolean };
type Age = AnotherPerson["age"]; // number