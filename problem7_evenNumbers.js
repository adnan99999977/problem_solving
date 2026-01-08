// find even number 

function findEvenNumbers(arr) {
  let evens = [];
  for (let num of arr) {
    if (num % 2 === 0) {
      evens.push(num);
    }
  }
  return evens;
}

console.log(findEvenNumbers([1, 2, 3, 4, 5, 6]));


// another way 
function findEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}

console.log(findEvenNumbers([1, 2, 3, 4, 5, 6])); 
