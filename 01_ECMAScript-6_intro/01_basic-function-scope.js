// function scope examples
var example = 5;

function test(){
    var testVariable = 10;
    console.log(example);//expect output: 5
    console.log( testVariable ); //expect output: 10

}
test();
console.log( testVariable ); //expect reference error












