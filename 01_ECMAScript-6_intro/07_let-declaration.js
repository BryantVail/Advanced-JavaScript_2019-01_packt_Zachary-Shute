// 07_let-declaration.js

// Declared and Initialized
let example = { prop1: "test"};
console.log("example: ", example);
//expected output: 'example: {prop1: "test"}'
// value reassigned
example = 5;
console.log(example); //expected output: 5


// Temporal Dead Zone Example
{
    // TDZ; scope is opened, & declaration of variable is not done.
    console.log(example);
    // expect ReferenceError because 'example' is not defined
    let example = "example";

}










