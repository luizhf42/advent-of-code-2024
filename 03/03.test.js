import getFinalSum from "./03";
import { exampleInput, puzzleInput } from "./inputs";

describe("Advent of Code 2024 - Day 03", () => {
	it("should return correct sum of enabled multiplications of example input", () => {
		const sum = getFinalSum(exampleInput);
		expect(sum).toEqual(48);
	});
	it("should return correct sum of enabled multiplications of puzzle input", () => {
		const sum = getFinalSum(puzzleInput);
		expect(sum).toEqual(90669332);
	});
});
