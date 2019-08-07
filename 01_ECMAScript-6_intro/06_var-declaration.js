// 06_var-declaration.js
    // declaring variables
// referenced before declaration
console.log(example);//expected output: undefined
var example = 'example';



// create, assign, reassign at will
//declared & assigned
var example = {prop1: "test"};
console.log('example: ', example);
//expect output: "example: {prop1: "test"} "
//value reassigned
example = 5;
console.log(example); //expected output: 5;



