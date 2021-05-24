// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints +=`Points for'${word[i]}': ${pointValue}\n`
		 }
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.clear(); 
  //  console.log("Let's play some scrabble! Enter a word: " );
  //  console.log(scoringAlgorithms[2].scoreFunction(''));
};

function simpleScore(word) {
  return word.length;
}
// let vowelBonusScore;
function vowelBonusScore(word) {
  word = word.toLowerCase();//part b2
  let score = 0
  let vowels = ['a', 'e', 'i', 'o', 'u']
  // we are looping through each letter of the word
  // if any given letter is vowel, score should go up be 3
  // if its not a vowel it only goes up by 1
  // if word I is in a list of vowels; the score goes up by 3
  // array.includes(2);     // true
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      score = score + 3;
    } else {
      score = score + 1;
    }
  }
  return score;
}

let scrabbleScore;

const scoringAlgorithms = [
  {
    name: 'Simple Score',
    description: 'Each letter is worth one point',
    scoreFunction: simpleScore
  },
  {
    name: 'Bonus Vowels',
    description: 'Vowels are 3pts, consonants are 1 pt',
    scoreFunction: vowelBonusScore
  },
  {
    name: 'Scrabble',
    description: 'The old scrabble score method',
    scoreFunction: oldScrabbleScorer
  }
];
function scorerPrompt() {
 let word = input.question("Let's play some scrabble! Enter a word: ");
 let typeOfScore = input.question(
    `Which scoring algorithm would you like to use?
    
0 - Simple: One point per character
1 - Vowel Bonus: Vowels are worth 3 points
2 - Scrabble: Uses scrabble point system

Enter 0, 1, or 2: `); 

 if (typeOfScore === '0') {
    console.log(`Score for ${word}: 
    ${scoringAlgorithms[0].scoreFunction(word)}`);
  } else if
    (typeOfScore === '1') {
    console.log(`Score for ${word}: 
    ${scoringAlgorithms[1].scoreFunction(word)}`);
  } else if
    (typeOfScore === '2') {
    console.log(`Score for ${word}:
${scoringAlgorithms[2].scoreFunction(word)}`);
  }
}
let newPointStructure = {};
function transform(oldPointStructure) {
 

  for(let key in oldPointStructure) {
      let valueArray = oldPointStructure[key];
      for(let i = 0; i < valueArray.length; i++) {
        let value = valueArray[i];
        newPointStructure[value] = key;
      }
    }
  return newPointStructure;
}



// let newPointStructure = transform(oldPointStructure); newPointStructure[''] = 0;

function runProgram() {
   initialPrompt();
   
  //  console.log(scoringAlgorithms[2].scoreFunction(''));
   scorerPrompt();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};