/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

const numbers = [32, 5634, 475, 432, 6346, 7546,878,31,535,765,24 ] ;

function findLargestElement(arr) {
    arr.sort((a,b) => a-b);
    console.log(arr);
    console.log(arr[arr.length -1]) ;
}
findLargestElement(numbers);