//take one object as an argument
//create a new object and copy all of the properties of the input into the new object
//return the new object

//EXAMPLE:  copy({name: "Rob"}) // returns a new object {name: "Rob"}


module.exports.copy = function(obj) {
  var newObject = {};
    for(var prop in obj) {
      newObject[prop] = obj[prop];
    }
    return newObject;
};


/* take two dictionaries as arguments (dest and src) and 
copy all of the properties (e.g. key, value pairs) of src into dest*/
//return a modified dest

/*EXAMPLE:  
extend({name: "Rob"}, {age: 101}) // should modify and return `dest` with content of {name: "Rob", age: 101}
extend({name: "Rob"}, {name: "Steve"}) // should modify and return `dest` with content of {name: "Steve"}*/


module.exports.extend = function(dest, src) {
  for(var prop in src) {
    dest[prop] = src[prop]
  };
  return dest;
};


//take two arguments. The first is an object and the second is an array of elements
//return true when all of the elements in the array are keys in the object, false otherwise

module.exports.hasElems = function(obj, arr) {
  var sameElem = true; 
  for(var i = 0; i < arr.length; i++) {
    // if(arr[i] !== obj[prop] || arr.length !== 0 || Object.keys(arr) !== Object.keys(obj)) {
    //   sameElem = false;
    //   } 
      var arrayProp = arr[i];
      if(obj[arrayProp]){
        sameElem = true;
      }
      else {
        sameElem = false;
        break
      }
    }
    return sameElem;
  };
 