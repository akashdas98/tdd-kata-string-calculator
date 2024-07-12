export default class StringCalculator {
  private count: number = 0;

  constructor() {
    this.add = this.add.bind(this);
    this.getCalledCount = this.getCalledCount.bind(this);
  }

  public add(str: string): number {
    this.count++;
    const delimiters = [",", "\n"];
    let nums: string[] = [];
    if (str.startsWith("//")) {
      let delimiter: string;
      let listStartIndex: number;
      if (str.startsWith("//[")) {
        let delimiterStartIndex = 3;
        let delimiterEndIndex: number = str.indexOf("]");
        while (delimiterEndIndex !== -1) {
          delimiter = str.slice(delimiterStartIndex, delimiterEndIndex);
          delimiters.push(delimiter);
          delimiterStartIndex = delimiterEndIndex + 2;
          delimiterEndIndex = str.indexOf("]", delimiterStartIndex);
        }
        listStartIndex = delimiterStartIndex;
      } else {
        delimiter = str[2];
        delimiters.push(delimiter);
        listStartIndex = 3;
      }

      str = str.slice(listStartIndex);
    }

    delimiters.forEach((delimiter) => (str = str.split(delimiter).join(",")));

    nums = str.split(",");

    const negativeNumbers = nums.filter((n) => Number(n) < 0);

    if (negativeNumbers.length === 1) {
      throw new Error(`negatives not allowed, value: ${negativeNumbers[0]}`);
    }
    if (negativeNumbers.length > 1) {
      throw new Error(
        `negatives not allowed, values: ${negativeNumbers.join(", ")}`
      );
    }

    return nums.reduce((ac, cv) => {
      const num = Number(cv);

      if (num > 1000) {
        return ac;
      }

      return ac + num;
    }, 0);
  }

  public getCalledCount(): number {
    return this.count;
  }
}
