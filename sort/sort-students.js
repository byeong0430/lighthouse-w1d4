var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

console.log(
  students.sort(function (a, b){
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();

    if (nameA < nameB) {
      return -1; // There is no negative index. But -1 means the beginning of an array
    } else if (nameA > nameB) {
      return 1;
    } else {
      // If names are equal, sort by descending age
      return b.age - a.age;
    }
  })
);