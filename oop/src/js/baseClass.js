export default class Character {
  constructor(name, type, attack = undefined, defence = undefined) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;

    if (typeof name !== "string") {
      throw new Error("ext name type string");
    }
    if (name.length < 2 || name.length > 10) {
      throw new Error("min - 2 символа, max - 10");
    }
    if (!Character.extTypes.includes(type)) {
      throw new Error(
        "один из типов (строка): Bowman, Swordsman, Magician, Daemon, Undead, Zombie",
      );
    }
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error("нельзя повысить левел умершего");
    }
    this.level += 1;
    this.health = 100;
    this.attack *= 1.2;
    this.defence *= 1.2;
  }

  damage(points) {
    if (this.health <= 0) {
      throw new Error("нельзя атаковать умершего");
    }
    this.health -= points * (1 - this.defence / 100);
  }
}

Character.extTypes = [
  "Bowman",
  "Swordsman",
  "Magician",
  "Daemon",
  "Undead",
  "Zombie",
];
