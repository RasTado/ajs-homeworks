import Swordsman from "../swordsman";

test("Swordsman Attack", () => {
  const testChar = new Swordsman("Test");
  expect(testChar.attack).toBe(40);
});

test("Swordsman Defence", () => {
  const testChar = new Swordsman("Test");
  expect(testChar.defence).toBe(10);
});
