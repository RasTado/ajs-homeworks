import Character from "../baseClass";
import Bowman from "../bowman";
import Magician from "../magician";
import Demon from "../daemon";

test.each([
  ["Number name", 100, "Bowman", "Expected name type string"],
  ["Short name", "T", "Bowman", "Expected name min - 2 символа, max - 10"],
  [
    "Long name",
    "TestTestTestTest",
    "Bowman",
    "Expected name min - 2 символа, max - 10",
  ],
  [
    "Wrong type",
    "Test",
    "other",
    "Expected type: Bowman,Swordsman,Magician,Daemon,Undead,Zombie",
  ],
])("Testing error: %s", (_, name, type, errMsg) => {
  expect(() => new Character(name, type)).toThrow(errMsg);
});

test("Levelup: Error", () => {
  const testChar = new Magician("Test");
  testChar.health = 0;
  expect(() => testChar.levelUp()).toThrow("нельзя повысить левел умершего");
});

test("Levelup: Level", () => {
  const testChar = new Magician("Test");
  testChar.levelUp();
  expect(testChar.level).toBe(2);
});

test("Levelup: Health", () => {
  const testChar = new Magician("Test");
  testChar.levelUp();
  expect(testChar.health).toBe(100);
});

test("Levelup: Attack", () => {
  const testChar = new Magician("Test");
  testChar.levelUp();
  expect(testChar.attack).toBe(60);
});

test("Levelup: Defence", () => {
  const testChar = new Magician("Test");
  testChar.levelUp();
  expect(testChar.defence).toBe(48);
});

test("Damage: Health", () => {
  const testChar = new Magician("Test");
  testChar.damage(100);
  expect(testChar.health).toBe(100 - 100 * (1 - 40 / 100));
});

test("Damage: Error", () => {
  const testChar = new Magician("Test");
  testChar.health = 0;
  expect(() => testChar.damage(50)).toThrow("нельзя атаковать умершего");
});

test("Stoned char test", () => {
  const testChar = new Magician("Test");
  testChar.stoned = true;
  expect(testChar.stoned).toBe(true);
});

test("NonStoned char test", () => {
  const testChar = new Bowman("Test");
  testChar.stoned = true;
  expect(testChar.stoned).toBe(false);
});

test("Fight Test (Not Stoned)", () => {
  const testChar1 = new Magician("Test1");
  const testChar2 = new Bowman("Test2");
  testChar1.attackEnemy(testChar2, 3);
  expect(testChar2.health).toBe(
    100 - (50 - 50 * 0.1 * (3 - 1)) * (1 - 25 / 100)
  );
});

test("Fight Test (Stoned)", () => {
  const testChar1 = new Demon("Test1");
  const testChar2 = new Bowman("Test2");
  testChar1.stoned = true;
  testChar1.attackEnemy(testChar2, 2);
  expect(testChar2.health).toBe(
    100 - (50 - 50 * 0.1 * (2 - 1) - Math.log2(2) * 5) * (1 - 25 / 100)
  );
});
