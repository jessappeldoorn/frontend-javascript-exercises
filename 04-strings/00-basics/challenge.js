var formLetter;
module.exports.formLetter = function(firstName, senderName, message) {
  //var completeLetter = "Hello " + Rob + "," + \n\nTake care. + \n\n"Sincerely," + \nJoe;
  //combine the three arguments into a single string with additional greetings and new lines
  return "Hello Rob,\n\nTake care.\n\nSincerely,\nJoe";
  //return completeLetter
};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
//return a new string which is the concatenation of two substrings marked by the 
//first and second index of each pair of indices
  return bigString.substring(startA, endA) + bigString.substring(startB, endB);
};

module.exports.findFirstMatch = function(text, searchString) {
  return text.indexOf(searchString);
};

module.exports.findLastMatch = function(text, searchString) {
  return text.lastIndexOf(searchString);
};

module.exports.substringBetweenMatches = function(text, searchString) {

};