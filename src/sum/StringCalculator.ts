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
    let listStartIndex = 0;

    if (str.startsWith("//")) {
      listStartIndex = this.extractDelimiters(str, delimiters);
      str = str.slice(listStartIndex);
    }

    nums = this.splitNumbers(str, delimiters);
    this.checkForNegatives(nums);

    return this.calculateSum(nums);
  }

  private extractDelimiters(str: string, delimiters: string[]): number {
    if (str.startsWith("//[")) {
      let delimiterStartIndex = 3;
      let delimiterEndIndex = str.indexOf("]");
      while (delimiterEndIndex !== -1) {
        const delimiter = str.slice(delimiterStartIndex, delimiterEndIndex);
        delimiters.push(delimiter);
        delimiterStartIndex = delimiterEndIndex + 2;
        delimiterEndIndex = str.indexOf("]", delimiterStartIndex);
      }
      return delimiterStartIndex;
    } else {
      delimiters.push(str[2]);
      return 3;
    }
  }

  private splitNumbers(str: string, delimiters: string[]): string[] {
    delimiters.forEach((delimiter) => {
      str = str.split(delimiter).join(",");
    });
    return str.split(",");
  }

  private checkForNegatives(nums: string[]): void {
    const negativeNumbers = nums.filter((n) => Number(n) < 0);

    if (negativeNumbers.length > 0) {
      const message = `negatives not allowed, value${negativeNumbers.length > 1 ? "s" : ""}: ${negativeNumbers.join(", ")}`;
      throw new Error(message);
    }
  }

  private calculateSum(nums: string[]): number {
    return nums.reduce((total, currentValue) => {
      const num = Number(currentValue);
      return num > 1000 ? total : total + num;
    }, 0);
  }

  public getCalledCount(): number {
    return this.count;
  }
}
