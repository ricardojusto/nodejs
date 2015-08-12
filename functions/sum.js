// The JavaScript standard now includes functional additions to array like map,
// filter and reduce, but sadly is missing the convenience functions range and sum.
// Implement a version of range and sum (which you can then copy and use in your future Kata to make them smaller).

// Array.range(start, count) should return an array containing count numbers
// from start to start +
// count Example: Array.range(0, 3) returns [0, 1, 2]

// Array.sum() return the sum of all numbers in the array Example: [0, 1, 2].sum() returns 3
// Example: Array.range(-1,4).sum() should return 2

// While not forbidden try to write both function without using a for loop

var val = [1, 2, 3];

function array(val){
  this.val = val;
}

Array.prototype.sum = function(){
  return this.reduce(function(a, b){
    return a + b;
  });
};

console.log(val.sum());

Array.range = function(start, count){
  var arr = [],
  val = start;
  while(count > 0) {
    arr.push(val);
    count--;
    val++;
  }
  return arr;
};

console.log(Array.range(0,3));