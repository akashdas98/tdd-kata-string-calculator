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

    test("Returns sum when given two numbers separated by comma", () => {
      expect(add("28,32")).toBe(60);
      expect(add("99,6")).toBe(105);
      expect(add("345,1126")).toBe(1471);
    });

    test("Returns sum when given multiple numbers separated by comma", () => {
      expect(add("9,36,73")).toBe(118);
      expect(add("3,3,5,13,6,67,3,2")).toBe(102);
    });
  });
});
