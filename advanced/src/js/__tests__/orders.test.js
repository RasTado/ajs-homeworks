import orderByProps from "../forin";

const obj = {
  name: "мечник", health: 10, level: 2, attack: 80, defence: 40,
};
const exp1 = [
  { key: "name", value: "мечник" },
  { key: "level", value: 2 },
  { key: "attack", value: 80 },
  { key: "defence", value: 40 },
  { key: "health", value: 10 },
];
test("base sorted", () => {
  const result1 = orderByProps(obj, ["name", "level"]);
  expect(result1).toStrictEqual(exp1);
});
const exp2 = [
  { key: "attack", value: 80 },
  { key: "defence", value: 40 },
  { key: "health", value: 10 },
  { key: "level", value: 2 },
  { key: "name", value: "мечник" },
];
test("base no sorted arg", () => {
  const result2 = orderByProps(obj, []);
  expect(result2).toStrictEqual(exp2);
});
