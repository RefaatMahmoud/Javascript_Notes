/**
 * var keyword create function scope variable
 * let keyword create block scope variable that can be  assignement in it's block scope
 * const keyword creates a block-scope variable that cannot be reassigned
 */

// const x = 10;
// x = 20;  //error assignement

const person = {
  name: "john",
};
person.name = "ahmed";
console.log(person); // works

if (true) {
  var y = 10;
  let x = 10;
}

console.log(y); //works
//console.log(x); //is not defined
