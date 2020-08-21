/* advanced case maker that can convert strings into all different kinds of case styles
We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. The following code block will describe all the casing styles to support. We may also receive an array of casing styles, and each of these should be applied.
*/

const makeCase = function (input, cases) {
  if (Array.isArray(cases)) {
    let output = '';
    if (cases.includes('camel') || cases.includes('pascal') || cases.includes('snake') || cases.includes('kebab') || cases.includes('title')) {
      output = styleInput(input, (cases.find(c => c === 'camel' || c === 'pascal' || c === 'snake' || c === 'kebab' || c === 'title')));
      input = output;
    }
    if (cases.includes('vowel') || cases.includes('consonant')) {
      output = styleInput(input, (cases.find(c => c === 'vowel' || c === 'consonant')));
      input = output;
    }
    if (cases.includes('upper') || cases.includes('lower')) {
      output = styleInput(input, (cases.find(c => c === 'upper' || c === 'lower')));
    }
    return output;
  } else {
    return styleInput(input, cases);
  }
}

function styleInput(input, c) {
  switch (c) {
    case 'camel': return camel(input);
    case 'pascal': return pascal(input);
    case 'snake': return snake(input);
    case 'kebab': return kebab(input);
    case 'title': return title(input);
    case 'vowel': return vowel(input);
    case 'consonant': return consonant(input);
    case 'upper': return upper(input);
    case 'lower': return lower(input);
  }
}

function camel(input) {
  let splitInput = input.split(' ');
  for (let i = 1; i < splitInput.length; i++) {
    let capital = splitInput[i].slice(0, 1).toUpperCase();
    splitInput[i] = capital + splitInput[i].substring(1);
  }
  return splitInput.join("");
}

function pascal(input) {
  let splitInput = input.split(' ');
  for (let i = 0; i < splitInput.length; i++) {
    let capital = splitInput[i].slice(0, 1).toUpperCase();
    splitInput[i] = capital + splitInput[i].substring(1);
  }
  return splitInput.join("");
}

function snake(input) {
  let output = "";
  for (char of input) {
    (char === " ") ? output += "_" : output += char;
  }
  return output;
}

function kebab(input) {
  let output = "";
  for (char of input) {
    (char === " ") ? output += "-" : output += char;
  }
  return output;
}

function title(input) {
  let splitInput = input.split(' ');
  for (let i = 0; i < splitInput.length; i++) {
    let capital = splitInput[i].slice(0, 1).toUpperCase();
    splitInput[i] = capital + splitInput[i].substring(1);
  }
  return splitInput.join(" ");
}

function vowel(input) {
  let output = "";
  for (char of input) {
    (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') ? output += char.toUpperCase() : output += char;
  }
  return output;
}

function consonant(input) {
  let output = "";
  for (char of input) {
    (!(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')) ? output += char.toUpperCase() : output += char;
  }
  return output;
}

function upper(input) {
  return input.toUpperCase();
}

function lower(input) {
  return input.toLowerCase();
}

// Testing
console.log(makeCase("this is a string", "camel")); // thisIsAString
console.log(makeCase("this is a string", "pascal")); // ThisIsAString
console.log(makeCase("this is a string", "snake")); // this_is_a_string
console.log(makeCase("this is a string", "kebab")); // this-is-a-string
console.log(makeCase("this is a string", "title")); // This Is A String
console.log(makeCase("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCase("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCase("this is a string", "upper")); // THIS IS A STRING
console.log(makeCase("THIS is a string", "lower")); // this is a string
console.log(makeCase("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING






