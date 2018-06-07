var words = ["ground", "control", "to", "major", "tom"];

// Callback functions
var countLength = function(item) {
  return item.length;
};

var capLetter = function (item) {
  return item.toUpperCase();
};

var reverseWord = function (item) {
  return item.split('').reverse().join('');
};
// Callback functions

function showLength(array, doSomething){
  var result = [];
  array.forEach( function(word) {
    result.push(doSomething(word));
  });
  return result;
};
console.log(showLength(words, countLength));

function showCapWords(array, doSomething) {
  var result = [];
  array.forEach (function (word) {
    result.push(doSomething(word));
  });
  return result;
};
console.log(showCapWords(words,capLetter));

function showReversedWords (array, doSomething) {
  var result = [];
  array.forEach (function (word) {
    result.push(doSomething(word));
  });
  return result;
}
console.log(showReversedWords(words,reverseWord));



// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]