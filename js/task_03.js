function findLongestWord(string = "") {
  let wordOfString = string.split(" ");
  let words = "";
  for (const word of wordOfString) {
    if (word.length > words.length) {
      words = word;
    }
  }

  return words;
}

console.log(findLongestWord("Google do a roll"));
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// let wordOfString = ["Google", "do", "a", "roll"];
// let words = "";
// for (const word of wordOfString) {
//   word.length > words.length;
//   words = word;
// }
// console.log(words);
