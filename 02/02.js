import { exampleInput, puzzleInput } from "./inputs.js";

const separateReports = (inputData) =>
	inputData
		.trim()
		.split("\n")
		.map((report) => report.split(/\s+/).map(Number));

const analyzeReports = (inputData) => {
	const reports = separateReports(inputData);

	let safeReports = 0;

	reports.forEach((report) => {
		if (checkDiffBetweenLevels(report)) safeReports++;
	});

	return safeReports;
};

const checkDiffBetweenLevels = (report) => {
	let diff = report[0] - report[1];
	let badLevels = 0;
	if (Math.abs(diff) > 3) badLevels++;

	for (let i = 1; i < report.length - 1; i++) {
		const newDiff = report[i] - report[i + 1];
		if (Math.abs(newDiff) > 3) badLevels++;
		if (!((diff > 0 && newDiff > 0) || (diff < 0 && newDiff < 0))) badLevels++;
		diff = newDiff;
	}

	return badLevels <= 1;
};

export default analyzeReports;
