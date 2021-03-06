class Numerology {
  getNumber(letter) {
    switch(letter.toLowerCase()) {
      case "a":
      case "j":
      case "s":
      case "1": return 1;
      case "b":
      case "k":
      case "t":
      case "2": return 2;
      case "c":
      case "l":
      case "u":
      case "3": return 3;
      case "d":
      case "m":
      case "v":
      case "4": return 4;
      case "e":
      case "n":
      case "w":
      case "5": return 5;
      case "f":
      case "o":
      case "x":
      case "6": return 6;
      case "g":
      case "p":
      case "y":
      case "7": return 7;
      case "h":
      case "q":
      case "z":
      case "8": return 8;
      case "i":
      case "r":
      case "9": return 9;
      default: return 0;
    }
  }

  getNumberArray(inputString) {
    let numberArray = [];

    for (let i = 0; i < inputString.length; i += 1) {
      numberArray.push(this.getNumber(inputString[i]));
    }

    return numberArray;
  }

  getDestinyNumber(name) {
    let destinyNumber;
    let numberArray = this.getNumberArray(name);
    let sum = this.getArraySum(numberArray);

    while (sum > 9) {
      numberArray = this.convertSumToNumberArray(sum);
      sum = this.getArraySum(numberArray);
    }

    destinyNumber = sum;

    return destinyNumber;
  }

  getArraySum(numberArray) {
    let sum = 0;

    for (let i = 0; i < numberArray.length; i += 1) {
      sum += numberArray[i];
    }

    return sum;
  }

  convertSumToNumberArray(sum) {
    let sumString = sum.toString();
    let numberArray = this.getNumberArray(sumString);
    return numberArray;
  }

  getBirthForceNumber(dateOfBirth) {
    return this.getDestinyNumber(dateOfBirth);
  }

  getHeartsDesireNumber(name) {
    let vowels = "";

    for (let i = 0; i < name.length; i += 1) {
      vowels += this.stripConsonants(name[i]);
    }

    return this.getDestinyNumber(vowels);
  }

  stripConsonants(letter) {
    switch(letter.toLowerCase()) {
      case "a":
      case "e": 
      case "i": 
      case "o":
      case "u": return letter.toLowerCase();
      default: return "";
    }
  }

  getPersonalityNumber(name) {
    let consonants = "";

    for (let i = 0; i < name.length; i += 1) {
      consonants += this.stripVowels(name[i]);
    }

    return this.getDestinyNumber(consonants);
  }

  stripVowels(letter) {
    switch(letter.toLowerCase()) {
      case "j":
      case "s":
      case "b":
      case "k":
      case "t":
      case "c":
      case "l":
      case "d":
      case "m":
      case "v":
      case "n":
      case "w":
      case "f":
      case "x":
      case "g":
      case "p":
      case "y":
      case "h":
      case "q":
      case "z":
      case "r": return letter.toLowerCase();
      default: return "";
    }
  }

  getRealityNumber(name, dateOfBirth) {
    let destinyNumber = this.getDestinyNumber(name);
    let birthNumber = this.getBirthForceNumber(dateOfBirth);
    let sum = destinyNumber + birthNumber;
    let numberArray = [];

    while (sum > 9) {
      numberArray = this.convertSumToNumberArray(sum);
      sum = this.getArraySum(numberArray);
    }    

    return sum;
  }
}

export default Numerology;
