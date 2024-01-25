let stringArr = ['one', 'hey', 'Dave']

let guitars = ['Strat', 'Les Paul', 5150]

let mixedData = ['EVH', '1984', true]

stringArr[0] = 'John'
// stringArr[0] = 1 
// error

stringArr.push('hey')
// stringArr.push(1)
// error

guitars.unshift('Jim') // valid
guitars.unshift('1000') // valid
// guitars.unshift(true) // invalid

// stringArr = guitars
// error
guitars = stringArr

let test = []
let bands: string[] = []
bands.push('Van Halen')

// Tuple
let myTuple: [string, number, boolean] = ['Dave', 42, true]

// myTuple[3] = "Anything"
// error

let mixed = ['John', 1, false]

mixed = myTuple

// myTuple = mixed
// error

// Objects
let myObj: object
myObj = []
console.log(typeof myObj)
myObj = bands
myObj = {}

const exampleObj = {
    prop1: 'Dave',
    prop2: true,
}

// exampleObj.prop1 = 56
// error

exampleObj.prop1 = "John"

// we can use interface also
// interface Guitarist {}
type Guitarist = {
    name?: string;
    // active: boolean,
    active?: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: "Alan",
    active: false,
    albums: [1954, 5150, 'QU12']
}

// evh.years = 40;
// error

// if any attribute is missing TS will give error
let jp: Guitarist = {
    name: "Jimmy",
    albums: ['I', 'II', 'IV']
}

evh = jp

const greetGuitarist = (guitarist: Guitarist) => {
    // checking for name as it is optional field
    if (guitarist.name){
        return `Hello ${guitarist.name.toUpperCase()}!`
    }
    return 'Hello!'
    
}

console.log(greetGuitarist(jp))

// Enums 
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."

enum Grade {
    U = 1, // default value is 0 and other values are in order
    D,
    C,
    B,
    A,
}

console.log(Grade.U)