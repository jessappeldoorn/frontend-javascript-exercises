// take two arguments, a conditionalFn and an actionFn.
// call actionFn until conditionalFn returns false.
// return nothing.

/* EXAMPLE:
conditionalFn = function() { return false; };
actionFn = function() { console.log("Hello!"); };
stream(conditionalFn, actionFn); // Prints nothing.

counter = 10;
conditionalFn = function() { 
  counter--;
  return counter >= 0; 
};
stream(conditionalFn, actionFn); // should print "Hello" 10 times.*/

module.exports.stream = function(conditionalFn, actionFn) {
    while(conditionalFn() === true) {
      actionFn();
  }
};


// take an array of numbers as an argument.
// return the sum of the numbers.
// this function should use a while loop.

/* EXAMPLE:
   sumNumbers([]); // should return 0.
   sumNumbers([1,2,3,4]); // should return 10. */

module.exports.sumNumbers = function(arr) {
var counter = 0,
    sum = 0;
    console.log(typeof thing);
  while (counter < arr.length) {
    sum += arr[counter];
    counter++;
  }
  return sum;
};

