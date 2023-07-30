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

  get stoned() {
    return Character.stoned;
  }

  set stoned(state) {
    Character.stoned = state;
    if (!Character.extTypesStoned.includes(this.type)) {
      Character.stoned = false;
    }
  }

  attackEnemy(target, dist) {
    let damagePoints = this.attack - this.attack * 0.1 * (dist - 1);
    if (Character.stoned) {
      damagePoints -= Math.log2(dist) * 5;
    }
    target.damage(damagePoints);
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

Character.stoned = false;

Character.extTypesStoned = ["Magician", "Daemon"];
