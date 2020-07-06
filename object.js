let userInfo = {
  fName: "refaat",
  lName: "Aish",
  graduationData: {
    faculty: "FCI",
    degree: "Excellent",
  },
};
// object are non primitive
/*
let userData = userInfo;
userData.foo = "foo"; // original chagned
*/

//shallow clone (Object.assign or spread operator) which not deep so that original will changed in deep level
/*
let userData = Object.assign({}, userInfo);
userData.foo = "foo"; // original not chagned
userData.graduationData.bar = "bar"; //original changed
*/

// Deep clonein
let userData = JSON.parse(JSON.stringify(userInfo));
userData.graduationData.foo = "foo";
console.log(userInfo, userData);

// loop example
function getObjectData(object) {
  for (let property in object) {
    if (object.hasOwnProperty(property)) {
      if (typeof object[property] == "object") {
        return getObjectData(object[property]);
      }
      console.log(`property ${property} , value ${object[property]} `);
    }
  }
}

//console.log(getObjectData(userInfo));

//convert object to array
var obj = {
  a: "hello",
  b: "this is",
  c: "javascript!",
};
var arr1 = Object.keys(obj).map((key) => obj[key]);
console.log(arr1);

//convert object to array with key and value using Object.entries
var arr = Object.entries(obj);
for ([key, value] of arr) {
  console.log(key); // a ,b ,c
  console.log(value); // hello , this is , javascript!
}

/**
 * Loop cases in object
 * [1] for .. in
 * [2] Object.keys()
 * [3] Object.getOwnPropertyNames => get (enumerable & non enumerable)
 */

// to extract object values => Object.values()
