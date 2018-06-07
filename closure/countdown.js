var countdownGenerator = function (x) {
  var whatToSay = ['Blast Off!', 1, 2, 3];
  var index = x;
  var statement;

  return function(){
    if (index >= 1) {
      statement = `T-minus ${whatToSay[index]}...`;
    } else if (index === 0) {
      statement = whatToSay[index];
    } else {
      statement = 'Rockets already gone, bub!';
    }
    index--;
    console.log(statement);
  }
};

// This assigns the anonymous function to a variable called countdown.
// Everytime countdown() is executed, it executes the previously anonymous function using variables outside of it (closure function).
var countdown = countdownGenerator(3); 
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!