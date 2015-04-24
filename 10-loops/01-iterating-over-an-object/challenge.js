//accept one argument, an object
//return an array of each of the keys in the object

//EXAMPLE: getKeys({name: "Rob", age: 101}) // returns ["name", "age"]   

module.exports.getKeys = function(obj) {
  var newArray = [];          // create an empty array to store the object properties
    for(var prop in obj) {    // cycle through the object to get the properties
      newArray.unshift(prop)  // push the properties to the new array
    }
    return(newArray);         // return the new array
  };


//accept one argument, an object
//return an array of each of the values in the object

//EXAMPLE:  getValues({name: "Rob", age: 101}) // returns ["Rob", 101]

module.exports.getValues = function(obj) {
  var newArray = [];            // create an empty array to store the objects properties/values
    for(var prop in obj) {      // cycle through the object to get the properties
      for(var key in obj) {     // cycle through the object to get the key values
        newArray.push(prop)
        newArray.push(obj[key])
      }     
    }
    return newArray;
  };

//convert the object passed in to an array of strings
//each string should be in the format of "[key] is [value]" for each key/value pair in the object
//if an empty object is passed in, an empty array should be returned

//EXAMPLE:  objectToArray({name: "Rob", age: 101}) // should return ["name is Rob", "age is 101"]

module.exports.objectToArray = function(obj) {
  var stringArray = [];         // create empty array to store new strings from the object
    for(var prop in obj) {      // cycle through the object properties
      for(var key in obj) {      // cycle throught the object key values
        stringArray.push(prop + " is " + obj[key])      // push these values concatenated to become a string to the new array
      }
    }
    return stringArray;    // return an array of strings
  };
 