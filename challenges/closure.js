// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
/*
nestedFunction has access to the variable internal, because the function declaration lies in the same lexical environment as the variable declaration
of internal. First nestedFunction would look in its own scope to find a variable named internal. However there isn't one.
so therefore, nestedFunction will look up it's scope chain to find internal, much like myFunction has access to the global variable external.
*/

/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function sumation(param){
  let sum = 0;
  function counter(){
    for(let i = param; i > 0; i--){
      sum += i;
    }
  }
  counter();
  return sum;
}

console.log(sumation(4));