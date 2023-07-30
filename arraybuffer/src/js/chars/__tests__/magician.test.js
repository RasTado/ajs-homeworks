import Magician from "../magician";

test("Magician Attack", () => {
  const testChar = new Magician("Test");
  expect(testChar.attack).toBe(50);
});

test("Magician Defence", () => {
  const testChar = new Magician("Test");
  expect(testChar.defence).toBe(40);
});
