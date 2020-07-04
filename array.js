//"Array-like Object"
let userInfo = {
  0: "Refaat",
  1: "Aish",
  2: 25,
  length: 3,
};

//convert "Array-like Object" to Real Array
console.log(Array.prototype.slice.call(userInfo)); //output :  ["Refaat", "Aish", 25]
console.log(Array.from(userInfo)); //output :  ["Refaat", "Aish", 25]

//iterate it as array
Array.prototype.forEach.call(userInfo, function (val) {
  console.log(val);
});

// Reduce to get single value
const numbers = [1, 2, 3, 4];

//sum
console.log(numbers.reduce((a, b) => a + b));

//find max
console.log(numbers.reduce((a, b) => (a >= b ? a : b)));

//find min
console.log(numbers.reduce((a, b) => (a <= b ? a : b)));

//map
console.log(
  numbers.map((value, index) => `current index ${index} with value ${value}`)
);

// filter
var people = [
  {
    id: 1,
    name: "John",
    age: 28,
  },
  {
    id: 2,
    name: "Jane",
    age: 31,
  },
  {
    id: 3,
    name: "Peter",
    age: 55,
  },
];

let getYoung = people.filter(function (person) {
  return person.age < 35;
});

console.log(getYoung);
//also array filter may be used to remove element in array

//Destructing Array
const triangle = [3, 4, 5];
const [length, height, hypotenuse] = triangle;
console.log("length=", length, "height=", height, "hypotenuse=", hypotenuse);

//clone array
let original = [1, 3, 5, 7];
// let clone = Array.from(original);
// let clone = Array.of(...original);
// let clone = Array.prototype.slice.call(original);
//let clone = [].slice.call(original);
let clone = [...original]; //spread operator
clone.push(9);
console.log(original, clone);

//conat array
console.log(original.concat(clone));
console.log([...original, ...clone]); //spread operator

//The rest operator does the opposite of the spread operator by coalescing several elements into a single one
[a, b, ...rest] = [1, 2, 3, 4, 5, 6]; // rest is assigned [3, 4, 5, 6]
// rest collection as argument
function restFunc(a, b, ...rest) {
  console.log(rest);
}
restFunc(0, 1, 2, 3, 4, 5, 6);

//search into array using find method

//remove all items in array using arr.length = 0

//find max in array
let arr = [1, 2, 3, 4, 5];
console.log(Math.max(...arr));
console.log(Math.max.apply(null, arr));

// join method convert array to string
// split method split string to array
// slice method to copy part of array

//Flattening Array
let arr_input = [["$6"], ["$12"], ["$25"], ["$25"], ["$18"], ["$22"], ["$10"]];
let flat_arr = Array.prototype.concat(...arr_input);
console.log("flat array", flat_arr);
