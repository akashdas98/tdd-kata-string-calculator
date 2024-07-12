import StringCalculator from "./StringCalculator";

describe("StringCalculator class tests", () => {
  const stringCalculator = new StringCalculator();

  describe("Add function adds two numbers and returns result", () => {
    const add: (str: string) => number = stringCalculator.add;

    test("Returns 0 when given empty string", () => {
      expect(add("")).toBe(0);
    });

    test("Returns the number when given one number", () => {
      expect(add("1")).toBe(1);
      expect(add("57")).toBe(57);
      expect(add("43")).toBe(43);
    });
  });
});
