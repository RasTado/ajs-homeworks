import Character from "../baseClass";

test.each([
  ["Number name", 100, "Bowman", "ext name type string"],
  ["Short name", "T", "Bowman", "min - 2 символа, max - 10"],
  ["Long name", "TestTestTestTest", "Bowman", "min - 2 символа, max - 10"],
  [
    "Wrong type",
    "Test",
    "other",
    "один из типов (строка): Bowman, Swordsman, Magician, Daemon, Undead, Zombie",
  ],
])("Testing error: %s", (_, name, type, errMsg) => {
  expect(() => new Character(name, type)).toThrow(errMsg);
});

test("Levelup: Error", () => {
  const testChar = new Character("Test", "Magician");
  testChar.health = 0;
  expect(() => testChar.levelUp()).toThrow("нельзя повысить левел умершего");
});

test("Levelup: Level", () => {
  const testChar = new Character("Test", "Magician");
  testChar.levelUp();
  expect(testChar.level).toBe(2);
});

test("Levelup: Health", () => {
  const testChar = new Character("Test", "Magician", 10, 40);
  testChar.levelUp();
  expect(testChar.health).toBe(100);
});

test("Levelup: Attack", () => {
  const testChar = new Character("Test", "Magician", 10, 40);
  testChar.levelUp();
  expect(testChar.attack).toBe(12);
});

test("Levelup: Defence", () => {
  const testChar = new Character("Test", "Magician", 10, 40);
  testChar.levelUp();
  expect(testChar.defence).toBe(48);
});

test("Damage: Health", () => {
  const testChar = new Character("Test", "Magician", 10, 40);
  testChar.damage(100);
  expect(testChar.health).toBe(100 - 100 * (1 - 40 / 100));
});

test("Damage: Error", () => {
  const testChar = new Character("Test", "Magician", 10, 40);
  testChar.health = 0;
  expect(() => testChar.damage(50)).toThrow("нельзя атаковать умершего");
});
