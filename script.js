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

// 5. The logic to play the entire game

const playGame = () => {
	// 3. Declare the players score variables
	let humanScore = 0;
	let computerScore = 0;

	// 4. Write the logic to play a single round
	const playRound = () => {
		const computerChoice = getComputerChoice();
		const humanChoice = getHumanChoice();

		// An object containing winning cases
		const winConditions = {
			rock: 'scissors',
			paper: 'rock',
			scissors: 'paper',
		};

		if (humanChoice === computerChoice) {
			console.log('Draw!');
		} else if (winConditions[humanChoice] === computerChoice) {
			// The key is the user input and the value is the computer's choice
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
	let times = 5;
	while (times > 0) {
		playRound();
		times--;
	}

	console.log(
		`After 5 rounds wins: ${
			humanScore > computerScore ? 'Human' : 'Computer'
		}!`,
	);
};

playGame();
