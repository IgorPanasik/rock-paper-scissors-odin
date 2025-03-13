// 1. The logic to get the computer choice
const getComputerChoice = () => {
	// Array of choices
	const choices = ['Rock', 'Paper', 'Scissors'];
	// Random index between 0 and 2
	const randomIndex = Math.floor(Math.random() * choices.length);
	// Return the choice at the random index
	return choices[randomIndex];
};
