// given a normal string of words
// turn it into a percent-encoded string by replacing all whitespace with %20

const urlEncode = function(text) {
  let newString = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      if (i === 0 || i === text.length-1) {
        newString += "";
      } else {
        newString += "%20";
      }
    } else {
      newString += text[i];
    }
  }
  return newString;
};

console.log(urlEncode("Lighthouse Labs")); // Lighthouse%20Labs
console.log(urlEncode(" Lighthouse Labs ")); // Lighthouse%20Labs
console.log(urlEncode("blue is greener than purple for sure")); // blue%20is%20greener%20than%20purple%20for%20sure