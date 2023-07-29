export default class Errors {
  constructor() {
    this.errors = new Map([
      [1, "Some error 1"],
      [2, "Some error 2"],
    ]);
  }

  translate(code) {
    return this.errors.has(code) ? this.errors.get(code) : "Unknown error";
  }
}
