const specialChars = `\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`.split("");

function asciiCapitalize(str) {
  let returnString = "";
  for (let i = 0; i <= str.length - 1; i++) {
    if (specialChars.includes(str[i])) {
      returnString += str[i];
      continue;
    }

    if (str.charCodeAt(i) % 2) {
      returnString += str[i].toUpperCase();
    } else {
      returnString += str[i].toLowerCase();
    }
  }
  return returnString;
}

console.log(asciiCapitalize("to be or not to be!"));
console.log(asciiCapitalize("Oh what a beautiful morning."));
