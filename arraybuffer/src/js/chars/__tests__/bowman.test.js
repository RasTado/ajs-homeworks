import Bowman from "../bowman";

test("Bowman Attack", () => {
  const testChar = new Bowman("Test");
  expect(testChar.attack).toBe(25);
});

test("Bowman Defence", () => {
  const testChar = new Bowman("Test");
  expect(testChar.defence).toBe(25);
});
