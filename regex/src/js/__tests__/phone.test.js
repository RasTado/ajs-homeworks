import phoneCorrector from "../phone";

test.each([
  ["8 (927) 000-00-00", "+79270000000"],
  ["+7 960 000 00 00", "+79600000000"],
  ["+86 000 000 0000", "+860000000000"],
])("test phone corrector", (number, exp) => {
  const result = phoneCorrector(number);
  expect(result).toBe(exp);
});
