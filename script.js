// 3. Declare the players score variables
let humanScore = 0;
let computerScore = 0;

// 1. The logic to get the computer choice
const getComputerChoice = () => {
	// Array of choices
	const choices = ['rock', 'paper', 'scissors'];
	// Random index between 0 and 2
	const randomIndex = Math.floor(Math.random() * choices.length);
	// Return the choice at the random index
	return choices[randomIndex];
};

// 2. The logic to get the human choice
const getHumanChoice = () => {
	// Save user input, convert to lowerCase input and remove spaces
	const userInput = prompt('Your choice').toLocaleLowerCase().trim();
	const userChoice = ['rock', 'paper', 'scissors'];

	if (!userInput)
		alert('Please make your choice again, the entry should not be empty');

	if (!userChoice.includes(userInput)) {
		alert('You should introduce rock, scissors or paper');
		return;
	}
	return userInput;
};

// 4. Write the logic to play a single round
const playRound = (computerChoice, humanChoice) => {
	const winConditions = {
		rock: 'scissors',
		paper: 'rock',
		scissors: 'paper',
	};
	if (humanChoice === computerChoice) {
		console.log('Draw!');
	} else if (winConditions[humanChoice] === computerChoice) {
		console.log(
			`You Win! ${
				humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
			} beats ${
				computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
			}`,
		);
		humanScore += 1;
	} else {
		console.log(
			`Computer Win! ${
				computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
			} beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}`,
		);
		computerScore += 1;
	}

	console.log(`Computer: ${computerChoice}, Human: ${humanChoice}`);
	console.log(`Computer: ${computerScore}, Human: ${humanScore}`);
};
const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();
playRound(computerSelection, humanSelection);
