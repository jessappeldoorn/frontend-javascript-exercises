module.exports.newArray = function(a, b, c, d) {
  newArray = []; 
  newArray.push(a);
  newArray.push(b);
  newArray.push(c);
  newArray.push(d);
  return newArray;
};

module.exports.firstAndLast = function(arrayItems) {
  var array = arrayItems;
  var last = (array.length-1);
  var newArray = [array[0], array[last]];
  return newArray;
};
  /*var stringsArray = ['a', 'b', 'c', 'd'];
  var newArray = [];
  var newArray2 = [];
  var lastElementsIndex = array.length - 1;
  newArray.push(array[lastElementsIndex]);
  newArray.unshift(array[0]);
  return newArray;
};*/


/*module.exports.firstAndLast = function(array) {
  var array = ['one', 3, 'cool', 4];
  var newArray = [];
  newArray.push(array[1]);
  newArray.unshift(array[2]);
  return array;
};*/


/*module.exports.firstAndLast = function(array) {
  array = ['a', 'b', 'c', 'd'];
  newArray = array.splice(1,2);
  return array;
};*/

/*module.exports.firstAndLast = function(array) {
  var array = [];
  var newArray = array.slice(1,3);
  return array;
};*/


 /*module.exports.firstAndLast = function(array) {
  var array = ['one', 3, 'cool', 4];
  var newArray = array.splice(1, 2);
  return array;
};

function firstAndLast(array) {
  var array = ['one', 3, 'cool', 4];
  var newArray = [];
  newArray.push(array[3]);
  newArray.unshift(array[0]);
  return newArray;
};

 module.exports.firstAndLast = function(array) {
  var numbersArray = [1,2,3];
  var stringsArray = ['a', 'b', 'c', 'd'];
  var newArray = [];
  var newArray2 = [];
  
  numbersArray = [1,2,3]) {
    newArray.push(numbersArray[2]);
    newArray.unshift(numbersArray[0]);
    return newArray;
  };
     //stringsArray = ['a', 'b', 'c', 'd'];
    newArray2.push(stringsArray[3]);
    newArray2.unshift(stringsArray[0]);
    return newArray2;
   };*/
