import StringCalculator from "./StringCalculator";

describe("StringCalculator class tests", () => {
  const stringCalculator = new StringCalculator();

  describe("Add function adds two numbers and returns result", () => {
    const add: (str: string) => number = stringCalculator.add;

    test("Returns 0 when given empty string", () => {
      expect(add("")).toBe(0);
    });
  });
});
