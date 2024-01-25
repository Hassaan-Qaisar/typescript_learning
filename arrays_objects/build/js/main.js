"use strict";
let stringArr = ['one', 'hey', 'Dave'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', '1984', true];
stringArr[0] = 'John';
// stringArr[0] = 1 
// error
stringArr.push('hey');
// stringArr.push(1)
// error
guitars.unshift('Jim'); // valid
guitars.unshift('1000'); // valid
// guitars.unshift(true) // invalid
// stringArr = guitars
// error
guitars = stringArr;
let test = [];
let bands = [];
bands.push('Van Halen');
// Tuple
let myTuple = ['Dave', 42, true];
// myTuple[3] = "Anything"
// error
let mixed = ['John', 1, false];
mixed = myTuple;
// myTuple = mixed
// error
