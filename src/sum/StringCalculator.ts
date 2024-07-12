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
      delimiters.push(str[2]);
      str = str.slice(3);
    }

    const pattern = new RegExp(`[${delimiters.join("")}]`);
    nums = str.split(pattern);

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
