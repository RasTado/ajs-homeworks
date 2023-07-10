import Zombie from "../zombie";

test("Zombie Attack", () => {
  const testChar = new Zombie("Test");
  expect(testChar.attack).toBe(40);
});

test("Zombie Defence", () => {
  const testChar = new Zombie("Test");
  expect(testChar.defence).toBe(10);
});
