export default class Character {
  constructor(name, type) {
    if (typeof name !== "string") {
      throw new Error("Expected name type string");
    }
    if (name.length < 2 || name.length > 10) {
      throw new Error("Expected name min - 2 символа, max - 10");
    }
    if (!Character.extTypes.includes(type)) {
      throw new Error(`Expected type: ${Character.extTypes}`);
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
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
