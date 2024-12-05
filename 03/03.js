const regex = /mul\((\d+),(\d+)\)/g;

const getFinalSum = (input) => {
	const inputParts = splitInput(input);
	let sum = sumMultiplicationsInPart(inputParts[0]);
	const filteredInputParts = inputParts.filter(
		(part) => part.substring(0, 2) === "()"
	);
	
	filteredInputParts.forEach((part) => {
		sum += sumMultiplicationsInPart(part);
	});

	return sum;
};

const splitInput = (input) => input.split("do");

const sumMultiplicationsInPart = (inputPart) => {
	const matches = findAllMatches(inputPart);
	let sum = 0;
	matches.forEach((match) => {
		sum += match[1] * match[2];
	});

	return sum;
};

const findAllMatches = (input) => {
	const matches = [...input.matchAll(regex)];
	return matches;
};

export default getFinalSum;
