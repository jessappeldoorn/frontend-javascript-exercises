module.exports.addItem = function(item, list) {
  //function addItem(item, list) {
  for(var i = 0; i < list.length; i++) {
    if(item === list[i]) {
      return list;
    } else {
      list.push(item);
      return list;
    }
  }
};

module.exports.reverseSortedList = function(list) {
  //var list = ['banana', 'orange', 'apple'];
  var listSorted = list.sort();
  //array.reverse();
  listSorted.reverse();
  return listSorted;
};
