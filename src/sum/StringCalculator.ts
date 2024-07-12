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

    return nums.reduce((ac, cv) => ac + Number(cv), 0);
  }
}
