// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function (item, index) {
    if (item === "Waldo") {
      found(index);
    }
  })
}

function actionWhenFound(index) {
  console.log("Found him at " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);