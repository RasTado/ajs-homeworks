import Team from "../teamClass";
import Swordsman from "../chars/swordsman";
import Magician from "../chars/magician";

test("Test add char", () => {
  const testTeam = new Team();
  const testChar1 = new Swordsman("Test");
  testTeam.add(testChar1);
  expect(testTeam.members.size).toBe(1);
});

test("Test add all chars", () => {
  const testTeam = new Team();
  const testChar1 = new Swordsman("Test");
  const testChar2 = new Magician("Test");
  testTeam.addAll(testChar1, testChar2);
  testTeam.addAll(testChar1, testChar2);
  expect(testTeam.members.size).toBe(2);
});

test("Test error add alredy selected char", () => {
  const testTeam = new Team();
  const testChar1 = new Swordsman("Test");
  const testChar2 = new Magician("Test");
  testTeam.add(testChar1);
  testTeam.add(testChar2);
  expect(() => {
    testTeam.add(testChar1);
  }).toThrow("Character already selected");
});

test("Test array", () => {
  const testTeam = new Team();
  const testChar1 = new Swordsman("Test");
  const testChar2 = new Magician("Test");
  testTeam.addAll(testChar1, testChar2);
  expect(testTeam.toArray()).toEqual([testChar1, testChar2]);
});
