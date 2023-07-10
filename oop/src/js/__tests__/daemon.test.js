import Daemon from "../daemon";

test("Daemon Attack", () => {
  const testChar = new Daemon("Test");
  expect(testChar.attack).toBe(10);
});

test("Daemon Defence", () => {
  const testChar = new Daemon("Test");
  expect(testChar.defence).toBe(40);
});
