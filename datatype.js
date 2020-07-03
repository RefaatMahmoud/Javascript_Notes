//Page 50

/**
 * String
 * Number
 * Object
 * Undefined
 * Null
 * Bool
 * Array
 */

let $number = 2;
console.log(typeof $number); //number
console.log(Object.prototype.toString.call($number)); //[object Number]
console.log($number instanceof Object); //false
console.log($number instanceof Number); //true

const $arr = [1, 2, 3];
console.log(typeof $arr); //object
console.log(Object.prototype.toString.call($arr)); //[object Array]
console.log($arr instanceof Object); //true
console.log($arr instanceof Array); //true

// $arr.s
