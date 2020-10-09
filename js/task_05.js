function checkForSpam(str) {
  "use strict";
  return (
    str.toLowerCase().includes("sale") || str.toLowerCase().includes("spam")
  );
}

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best SALE offers now!")); // true

console.log(checkForSpam("[spam] How to earn fast money?")); // true
