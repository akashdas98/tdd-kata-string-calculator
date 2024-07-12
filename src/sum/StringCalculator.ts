export default class StringCalculator {
  public add(str: string): number {
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
      return ac + Number(cv);
    }, 0);
  }

  public getCalledCount(): number {
    return 0;
  }
}
