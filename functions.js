//IIFE (Immediately Invoked Function Expression)
/*
(function () {
  alert("Hi Refaat");
})();
*/

//IIFE with param
(function (name) {
  console.log(`Hi ${name}`);
})("Ahmed");

//Functions can either be named or unnamed (anonymous functions):
var namedSum = function sum(a, b) {
  // named
  return a + b;
};

var anonSum = function (a, b) {
  // anonymous
  return a + b;
};

namedSum(1, 3);

anonSum(1, 3);
