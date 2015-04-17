module.exports.reversePlusOne = function(arrayItems) {
  var array = arrayItems;
  array.reverse();
  array.unshift(1);
  return array;
};


module.exports.plusesEverywhere = function(arrayItems) {
  var array = arrayItems;
  //array.splice(1, 0, '+');
  var string = array.join('+');
  return string;
};


module.exports.arrayQuantityPlusOne = function(numbersArray) {
  //var array = numbersArray;
  return numbersArray.length + 1;
  //return numbersArray;

};