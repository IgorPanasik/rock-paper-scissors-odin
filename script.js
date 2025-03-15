const getComputerChoice = () => {
	const choices = ['rock', 'paper', 'scissors'];
	const randomIndex = Math.floor(Math.random() * choices.length);

	return choices[randomIndex];
};

const getHumanChoice = () => {
	const userInput = prompt('Your choice');

	if (userInput === null) {
		alert('You canceled the input');
		return;
	}

	const trimmedInput = userInput.toLowerCase().trim();
	const userChoice = ['rock', 'paper', 'scissors'];

	if (!trimmedInput) {
		alert('Please make your choice again, the entry should not be empty');
		return;
	}

	if (!userChoice.includes(userInput)) {
		alert('You should introduce rock, scissors or paper');
		return;
	}

	return trimmedInput;
};

const playRound = (humanScore, computerScore) => {
	const computerChoice = getComputerChoice();
	const humanChoice = getHumanChoice();

	const winConditions = {
		rock: 'scissors',
		paper: 'rock',
		scissors: 'paper',
	};

	if (humanChoice === computerChoice) {
		console.log('Draw!');
		// The key is the user input and the value is the computer's choice
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

const playGame = () => {
	let humanScore = 0;
	let computerScore = 0;

	let times = 5;
	while (times > 0) {
		// Call playRound 5 times
		playRound(humanScore, computerScore);
		times -= 1;
	}

	console.log(
		`After 5 rounds wins: ${
			humanScore > computerScore ? 'Human' : 'Computer'
		}!`,
	);
};

playGame();
