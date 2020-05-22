// ==== Closures ==== 

// THIS IS A SPACE BETWEEN ANSWERS
console.log('');
// THIS IS A SPACE BETWEEN ANSWERS

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

// Explanation: Nested function can access the variable internal because information can always pass 'downward' through inheritance but cannot pass in the other direciton. Meaning that while const internal's existance can be passed down and accessed by nestedFunction, if nestedFunction then created a variable, that new var would not be accessible by myFunction.


// THIS IS A SPACE BETWEEN ANSWERS
console.log('');
// THIS IS A SPACE BETWEEN ANSWERS


/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function sumation (num){
  sumation = (num * (num+1)) / 2
  return sumation
}

console.log(sumation(4));


// THIS IS A SPACE BETWEEN ANSWERS
console.log('');
// THIS IS A SPACE BETWEEN ANSWERS
