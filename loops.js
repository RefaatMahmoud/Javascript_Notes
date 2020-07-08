/**
 * for (;;)
 * while
 * do while
 * for .. of => [array,string]
 * for .. in => [object]
 * map => [array]
 */

// for .. of with array
const iterable = [0, 1, 2];
for (let i of iterable) {
  console.log(i);
}

// for of with string
const string = "abc";
for (let chr of string) {
  console.log(chr);
}

//A Set object will eliminate duplicates.
const names = ["bob", "alejandro", "zandra", "anna", "bob"];
const uniqueNames = new Set(names);
for (let name of uniqueNames) {
  console.log(name);
}

//map
Array.from(new Set(names)).map((name) => console.log(name));

/**
 * for...of loops do not work directly on plain Objects; but, it is possible to iterate over an object’s properties by
   switching to a for...in loop, or using Object.keys() :
*/

const someObject = { name: "Mike" };
for (let key of Object.keys(someObject)) {
  console.log(key + ": " + someObject[key]);
}

for (let key in someObject) {
  if (someObject.hasOwnProperty(key)) {
    console.log(key + ": " + someObject[key]);
  }
}
