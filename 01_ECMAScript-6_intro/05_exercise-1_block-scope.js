// 05_exercise-1_block-scope.js

function fn1(){
    console.log("scope1");
    let scope = 5;
    console.log(scope);
    {
        console.log("scope 2");
        let scope = "different scope";
        console.log(scope);
    }
    {
        console.log("scope 3");
        let scope = "third scope";
        console.log(scope);

    }
}
fn1();


// scope1
// 5
// scope 2
// different scope
// scope 3
// third scope








