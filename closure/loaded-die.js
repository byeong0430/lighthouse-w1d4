function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  let i = 0; // Beginning index of Array list

  return function() {
    let listItem = list[i]; // Store each array item
    i += 1; // Add 1 to each index
    return listItem;
  }
}

// Below assigns the anynomous function to Variable rollLoadedDIe
var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6