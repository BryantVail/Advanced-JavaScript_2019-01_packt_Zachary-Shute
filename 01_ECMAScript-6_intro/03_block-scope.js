//03_block-scope.js

//top level scope
function scopeExample(){
    //scope block 1
    for(let i =0; i< 10; i++){/*scope-block-2*/}
    if(true){
        /* scope-block-3 */
    } else{
        // scope-block-4
    }
    // braces without keywords also create scope
    {
        // scope-block-5
    }
    //scope-block-1
}
//global-scope














