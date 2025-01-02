"use strict";
//this in global space
console.log(this); //globalObject - window,global

//this inside a function

function x() {
  //this
  console.log(this);
}

//this in strict mode - (this substitution)
//if the value of this keyword is undefined or null this keyword
//will be replaced with globalObject only in non strict mode

//this keyword value depends on how this is called
x();
window.x();
let obj = {};


//this inside a object's method
//call apply bind methods (sharing methods)
//this inside arrow function
//this inside nested arrow function
//this inside DOM
