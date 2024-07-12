export default class StringCalculator {
  public add(str: string): number {
    if (str === "") {
      return 0;
    }

    const nums = str.split(",");

    if (nums.length === 1) {
      return Number(nums[0]);
    }

    return Number(nums[0]) + Number(nums[1]);
  }
}
