import Character from "./baseClass";

export default class Daemon extends Character {
  constructor(name, type = "Daemon") {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
