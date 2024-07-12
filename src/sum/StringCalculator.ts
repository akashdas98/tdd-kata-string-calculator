export default class StringCalculator {
  public add(str: string): number {
    if (str === "") {
      return 0;
    }

    return Number(str);
  }
}
