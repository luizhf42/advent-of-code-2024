import getDistanceAndSimilarity from "./01.js";
import { exampleInput, input } from "./input.js";

describe("Advent of Code 2024 - Day 01", () => {
	it("should return correct distance and similarity of example input", () => {
		const result = getDistanceAndSimilarity(exampleInput);
		expect(result).toEqual({ distance: 11, similarity: 31 });
	});
  it("should return correct distance and similarity of puzzle input", () => {
		const result = getDistanceAndSimilarity(input);
		expect(result).toEqual({ distance: 2430334, similarity: 28786472 });
	});
});
