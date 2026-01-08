// capitalize words
function capitalizeWords(str) {
  let words = str.split(" ");
  let result = [];

  for (let word of words) {
    result.push(word.toUpperCase());
  }
  return result.join(" ");
}

console.log(capitalizeWords("hello hi hi world"));

// another way

function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word.toUpperCase())
    .join(" ");
}

console.log(capitalizeWords("hello ji  world"));
