module.exports.equalStrings = function(stringOne, stringTwo) {
  return stringOne === stringTwo;
};

module.exports.notEqual = function(one, two) {
  return (one !== two ) || (one != two);
  //return true unless the two arguments are the same type (===) and are equal (==) to each other
};

module.exports.inBetween = function(lower, middle, upper) {
  return (lower <= middle) && (middle <= upper);
//return a boolean that tells us whether middle is in between upper and lower
};

module.exports.outsideRanges = function(number) {
  return (number < 2 || number > 5) && (number < 10 || number > 20) && (number < 43 || number > 75);
 // return (number < 10 || number > 20) || (number < 42);
//  return (number < 42 || number > 75) && (number != 75);
  //return (number < 0 || number > 6);
};

module.exports.nameAndPrice = function(name, price) {
  return (name === "LATimes" || name === "NYTimes") && (price >= 1);

};