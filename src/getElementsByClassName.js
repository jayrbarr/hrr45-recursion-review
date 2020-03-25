// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  var node = node || document.body;
  var results = [];
  if (typeof node.classList !== 'undefined' && node.classList.contains(className)) {
    results.push(node);
  }
  node.childNodes.forEach((item) => results = results.concat(getElementsByClassName(className, item)));
  return results;
};
