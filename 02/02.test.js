import analyzeReports from "./02";
import { exampleInput, puzzleInput } from "./inputs";

describe("Advent of Code 2024 - Day 02", () => {
	it("should return correct number of safe reports in example input", () => {
		const safeReports = analyzeReports(exampleInput);
		expect(safeReports).toEqual(4);
	});
	it("should return correct number of safe reports in example input", () => {
		const safeReports = analyzeReports(puzzleInput);
		expect(safeReports).toEqual(566);
	});
});
