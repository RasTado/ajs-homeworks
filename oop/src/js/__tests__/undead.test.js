import Undead from "../undead";

test("Undead Attack", () => {
  const testChar = new Undead("Test");
  expect(testChar.attack).toBe(25);
});

test("Undead Defence", () => {
  const testChar = new Undead("Test");
  expect(testChar.defence).toBe(25);
});
