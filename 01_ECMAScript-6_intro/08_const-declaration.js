// 08_const-declaration.js
// declaring variables

// referenced before declaration
// console.log(example);//'example' not defined

// expect referenceError because 'example' is not defined
const example = 'example';


// non-immutable features of const

//declared & initialized
const example2 = { prop1: 'test'};

// variable re-assigned
// example2 = 5; const cannot be 're-assinged' in whole
//expect 'typeError' error bc variable was declared with 'const'

//object property UPDATED
example2.prop1 = 5;
console.log(example2.prop1);
//expect no error bc ONLY 'sub-property' was changed!!!




