// capitalize words
function capitalizeWords(str) {
  let words = str.split(" ");
  let result = [];

  for (let word of words) {
    result.push(word[0].toUpperCase() + word.slice(1));
  }
  return result.join(" ");
}

console.log(capitalizeWords("hello ji world"));
