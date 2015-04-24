//return the sum of all numbers inside of the array that is passed to the function

//if the array is empty, this function should return 0

//EXAMPLE: sumNumbers([1, 2, 3]) // should return 6


module.exports.sumNumbers = function(array) {
  var numbersArray = array;
  var sum = 0;
    for(var i = 0; i < numbersArray.length; i++) {
      sum += numbersArray[i];
  };
    return sum;
};

//split the inputString argument into an array of strings by commas

//return an array with the set of split strings in lowercase format

/* EXAMPLE:
splitAndLowerCaseString("TEST") // returns ["test"]
splitAndLowerCaseString("THIS,IS,SPLIT,BY,COMMAS") // returns ["this", "is", "split", "by", "commas"]
splitAndLowerCaseString("THIS HAS NO COMMAS") // returns ["this has no commas"]*/

//Hint: You should use the built-in string functions split and toLowerCase.


module.exports.splitAndLowerCaseString = function(a) {
var stringArray = a.split(",");
var lowerCaseArray = [];
for(var i = 0; i < stringArray.length; i++) {
  lowerCaseArray.push(stringArray[i].toLowerCase());
  lowerCaseArray
  };
  return lowerCaseArray;
};


//create and return a new array of all inputs as strings

//each of the new strings should start with "[index] is [data element at index]"

/*EXAMPLE: addIndex([1, 2, 3]) // returns ["0 is 1", "1 is 2", "2 is 3"]
addIndex(['My', 1, 'number']) // returns ["0 is My", "1 is 1", "2 is number"]*/

//create new Array to push to
//cycle through original array with for loop then push the concatentation of:  the index of i + "is" + index value

module.exports.addIndex = function(array){
  var numbersArray = array;
  var indexArray = [];
  for(var i = 0; i < numbersArray.length; i++) {
    indexArray.push(numbersArray.indexOf(numbersArray[i]) + " is " + numbersArray[i]);
  }   return indexArray;
};
