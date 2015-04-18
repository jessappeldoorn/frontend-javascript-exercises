module.exports.createCourse = function(title, duration, students) {
  var course = {};
  var title = 'Full Stack Engineering';
  var duration = '4 weeks';
  var students = ['Rob', 'Tim', 'Joe'];
  course.title = title
  course.duration = duration
  course.students = students
  return course;
};

module.exports.addProperty = function(teacher, favoriteStudent, name) {
  //function addProperty(object, newProp, newValue) {
  // var teacher = object;
  // var favoriteStudent = newProp;
  // var name = newValue;
  
  // teacher = {subject: 'Algebra 2', school: 'Berkeley High School'};
/*  if(favoriteStudent === teacher.favoriteStudent) {
    return teacher;
  } else {
    teacher.favoriteStudent = name;
    return teacher;
  }*/

  /* 
  var newObject = { name: "Mr. Object", "age": 10 };
  newObject.name // "Mr. Object"
  newObject[name] //"Mr. Object"
  newObject.age // undefined
  newObject["age"] // 10
  */

  //If object already has newProp, return the object argument.
  if(teacher[favoriteStudent]){
    return teacher;
  }
  //If object doesn't already have a property named newProp, 
  //then add newProp with value of newValue to object

  else{
    teacher[favoriteStudent] = name;
    return teacher;
  }
};
  //var  = {};


module.exports.formLetter = function(object) {
  var letter = object;
  var letter = {
    recipient: "David",
    msg: "What up, thug?",
    sender: "Arnold"
  };
  var letterStr = "Hello " + letter.recipient + ",\n\n" + letter.msg + "\n\nSincerely,\n" + letter.sender;
  return letterStr;
};

module.exports.canIGet = function(item, money) {
  //var productIWant = item;
  //var myMoney = money;
/*  var a = {
    product: 'Mac Pro',
    price: 2499,
  };
  var b = {
    product: 'MacBook Air',
    price: 999,
  };
  var c = {
    product: 'MacBook Pro',
    price: 1200,
  };
  var d = {
    product: 'Apple Sticker',
    price: 1,
  };*/

  var AppleStore = {
    'Mac Pro': 2499,
    'MacBook Air': 999,
    'MacBook Pro': 1299,
    'Apple Sticker': 1
  }

   // return (a.price < money && a.product == item) || (c.price < money && c.product === item) || (MacPro.price < money && MacPro === item) || (AppleSticker.price < money && AppleSticker === item);
   console.log("I want to spend $" + AppleStore[item] + " and I have $" + money + " dollars.");
   return (AppleStore[item] <= money );
  };


//};