import StringCalculator from "./StringCalculator";

describe("StringCalculator class tests", () => {
  describe("add method adds two numbers and returns result", () => {
    const stringCalculator = new StringCalculator();
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
      expect(add("345,126")).toBe(471);
    });

    test("Returns sum when given multiple numbers separated by comma", () => {
      expect(add("9,36,73")).toBe(118);
      expect(add("3,3,5,13,6,67,3,2")).toBe(102);
    });

    test("Returns sum when given multiple numbers separated by comma or new line", () => {
      expect(add("33\n13\n63\n3")).toBe(112);
      expect(add("3,3,5\n13,6\n67\n3,2")).toBe(102);
    });

    test("Returns sum when given multiple numbers separated by custom delimiter", () => {
      expect(add("//;\n33;13;63;3")).toBe(112);
      expect(add("//h\n33h13h63h3")).toBe(112);
    });

    test("Throws error when called passing a negative number", () => {
      expect(() => add("33,-13\n63,3")).toThrow(
        new Error("negatives not allowed, value: -13")
      );
    });

    test("Throws error when called passing multiple negative numbers", () => {
      expect(() => add("//x\n24x-3x-5x3")).toThrow(
        new Error("negatives not allowed, values: -3, -5")
      );
      expect(() => add("3,3,5\n-13,6\n-67\n3,-2")).toThrow(
        new Error("negatives not allowed, values: -13, -67, -2")
      );
    });

    test("Ignores numbers greater than 1000", () => {
      expect(add("24,1003,1000")).toBe(1024);
      expect(add("1000,1000,999,1001,2000")).toBe(2999);
    });

    test("Custom delimiter of length 2", () => {
      expect(add("//[;s]\n33;s13;s63;s3")).toBe(112);
    });

    test("Custom delimiter of length n", () => {
      expect(add("//[;s,//]\n33;s,//13;s,//63;s,//3")).toBe(112);
    });

    test("Allow multiple custom delimiters", () => {
      expect(add("//[;s,][ee][k;]\n33;s,13ee63k;3")).toBe(112);
    });
  });

  describe("getCalledCount method returns number of times add has been called.", () => {
    test("Returns zero if add hasn't been called yet", () => {
      const stringCalculator = new StringCalculator();
      const getCalledCount = stringCalculator.getCalledCount;

      expect(getCalledCount()).toBe(0);
    });

    test("Returns 1 if add has been called once", () => {
      const stringCalculator = new StringCalculator();
      const add = stringCalculator.add;
      const getCalledCount = stringCalculator.getCalledCount;

      add("");

      expect(getCalledCount()).toBe(1);
    });

    test("Returns n if add has been called n times", () => {
      const stringCalculator = new StringCalculator();
      const add = stringCalculator.add;
      const getCalledCount = stringCalculator.getCalledCount;

      add("");
      add("");
      expect(getCalledCount()).toBe(2);

      add("");
      add("");
      add("");
      expect(getCalledCount()).toBe(5);
    });
  });
});
