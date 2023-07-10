import Bowman from "../bowman";
import Swordsman from "../swordsman";
import Magician from "../magican";
import Undead from "../undead";
import Zombie from "../zombie";
import Daemon from "../daemon";

test("Bowman Attack", () => {
  const testChar = new Bowman("Test");
  expect(testChar.attack).toBe(25);
});

test("Bowman Defence", () => {
  const testChar = new Bowman("Test");
  expect(testChar.defence).toBe(25);
});

test("Swordsman Attack", () => {
  const testChar = new Swordsman("Test");
  expect(testChar.attack).toBe(40);
});

test("Swordsman Defence", () => {
  const testChar = new Swordsman("Test");
  expect(testChar.defence).toBe(10);
});

test("Magician Attack", () => {
  const testChar = new Magician("Test");
  expect(testChar.attack).toBe(10);
});

test("Magician Defence", () => {
  const testChar = new Magician("Test");
  expect(testChar.defence).toBe(40);
});

test("Undead Attack", () => {
  const testChar = new Undead("Test");
  expect(testChar.attack).toBe(25);
});

test("Undead Defence", () => {
  const testChar = new Undead("Test");
  expect(testChar.defence).toBe(25);
});

test("Zombie Attack", () => {
  const testChar = new Zombie("Test");
  expect(testChar.attack).toBe(40);
});

test("Zombie Defence", () => {
  const testChar = new Zombie("Test");
  expect(testChar.defence).toBe(10);
});

test("Daemon Attack", () => {
  const testChar = new Daemon("Test");
  expect(testChar.attack).toBe(10);
});

test("Daemon Defence", () => {
  const testChar = new Daemon("Test");
  expect(testChar.defence).toBe(40);
});
