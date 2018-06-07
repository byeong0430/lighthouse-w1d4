// Higher-order function: function that receives another function
var wrapLog = function (callback, name) {
  let statement;

  return function () {
    let numInputs = Object.values(arguments); // 'Arguments' stores input arguments passed to a function
    let numInputStr = numInputs.join(', '); // Create a string concatenated with ','
    let calResult = callback.apply(this, numInputs); // Use the callback function conduct calculation
    
    statement = `${name}(${numInputStr}) => ${calResult}`;
    console.log(statement);
  }
};

// Callback function: function that is passed to another function as Object
var area = function (x, y) {
  return x * y;
};

var logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6

// Callback function
var volume = function (x, y, z) {
  return x * y * z;
};

var logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24