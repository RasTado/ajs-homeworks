import Validator from "../nickname";

test.each([
  ["username", true],
  ["user155name", true],
  ["user155name", true],
  ["user_155-name", true],
  ["1user_155-name", false],
  ["user_155-name1", false],
  ["user_1555-name", false],
  ["u$ser_155-na$me", false],
])("test check nick name", (nick, exp) => {
  const result = Validator.validateUsername(nick);
  expect(result).toBe(exp);
});
