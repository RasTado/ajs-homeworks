export default class TeamIter {
  constructor() {
    this.chars = [];
  }

  addChar(char) {
    this.chars.push(char);
  }

  [Symbol.iterator]() {
    let i = 0;
    const team = this.chars;
    return {
      next() {
        if (i > team.length) {
          return { value: "chars are over", done: true };
        }
        return { value: team[i++], done: false };
      },
    };
  }
}
