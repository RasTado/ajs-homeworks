export default class TeamGen {
  constructor() {
    this.chars = [];
  }

  addChar(char) {
    this.chars.push(char);
  }

  *[Symbol.iterator]() {
    // это генератор
    // и здесь есть доступ к this
    // остаётся лишь правильно написать yield
    for (let i = 0; i < this.chars.length; i++) {
      yield this.chars[i];
    }
  }
}
