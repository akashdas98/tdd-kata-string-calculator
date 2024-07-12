export default class StringCalculator {
  public add(str: string): number {
    const nums = str.split(",");
    return nums.reduce((ac, cv) => ac + Number(cv), 0);
  }
}
