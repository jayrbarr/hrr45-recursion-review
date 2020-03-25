// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  switch (typeof obj) {
  case 'number':
  case 'boolean':
    return '' + obj;
  case 'string':
    return '"' + obj + '"';
  case 'function':
  case 'undefined':
    break;
  default:
    if (Array.isArray(obj)) {
      return stringifyArray(obj);
    }
    if (obj === null) {
      return 'null';
    }
    return stringifyObject(obj);
  }
};

var stringifyArray = function(arr) {
  return '[' + arr.map((item) => stringifyJSON(item)).join(',') + ']';
};

var stringifyObject = function(obj) {
  var tempArr = [];
  for (let key in obj) {
    let value = stringifyJSON(obj[key]);
    if (value) {
      tempArr.push('"' + key + '":' + value);
    }
  }
  return '{' + tempArr.join(',') + '}';
};