// 1. The logic to get the computer choice
const getComputerChoice = () => {
	// Array of choices
	const choices = ['Rock', 'Paper', 'Scissors'];
	// Random index between 0 and 2
	const randomIndex = Math.floor(Math.random() * choices.length);
	// Return the choice at the random index
	return choices[randomIndex];
};

// 2. The logic to get the human choice
const getHumanChoice = () => {
	const userInput = prompt('Your choice');
	if (!userInput)
		return alert(
			'Please make your choice again, the entry should not be empty',
		);
	if (
		userInput.toLowerCase() !== 'rock' &&
		userInput.toLowerCase() !== 'paper' &&
		userInput.toLowerCase() !== 'scissors'
	) {
		alert('You should introduce rock, scissors or paper');
	}
	return userInput;
};
