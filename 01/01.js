export const getDistanceAndSimilarity = (inputList) => {
	const [leftList, rightList] = transformListsInArrays(inputList);
	const distance = getDistance(leftList, rightList);
	const similarity = getSimilarity(leftList, rightList);
	return { distance, similarity };
};

const transformListsInArrays = (list) => {
	const rows = list
		.trim()
		.split("\n")
		.map((row) => row.split(/\s+/).map(Number));
	const leftList = rows.map((row) => row[0]);
	const rightList = rows.map((row) => row[1]);

	return [leftList, rightList];
};

const getDistance = (leftList, rightList) => {
	const sortedLeftList = leftList.sort((a, b) => a - b);
	const sortedRightList = rightList.sort((a, b) => a - b);

	let distance = 0;
	for (let i = 0; i < sortedLeftList.length; i++) {
		distance += Math.abs(sortedLeftList[i] - sortedRightList[i]);
	}

	return distance;
};

const getRepetitionsPerNumber = (rightList) => {
	const repetitionsPerNumber = {};
	rightList.forEach((number) => {
		repetitionsPerNumber[number] = (repetitionsPerNumber[number] || 0) + 1;
	});

	return repetitionsPerNumber;
};

const getSimilarity = (leftList, rightList) => {
	const repetitionsPerNumber = getRepetitionsPerNumber(rightList);
	let similarity = 0;
	leftList.forEach((number) => {
		similarity += number * repetitionsPerNumber[number] || 0;
	});

	return similarity;
};

export default getDistanceAndSimilarity;