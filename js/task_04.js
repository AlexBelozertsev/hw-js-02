function formatString(string, maxLength = 40) {
  let letterOfString = string.split("");
  if (letterOfString.length > maxLength) {
    letterOfString.splice(maxLength, letterOfString.length - maxLength, "...");
  }
  return letterOfString.join("");
}

// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// 'Curabitur ligula sapien, tincidunt non.'

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// 'Vestibulum facilisis, purus nec pulvinar...'

//console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));
// 'Vestibulum facilisis, purus ne...'
