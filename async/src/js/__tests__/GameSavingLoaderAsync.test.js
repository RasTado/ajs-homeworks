import GameSavingLoaderAsync from "../GameSavingLoaderAsync.js";
import GameSaving from "../GameSavingSpec.js";

const exp = new GameSaving(9, 1546300800, {
  id: 1,
  name: "Hitman",
  level: 10,
  points: 2000,
});

test("test async function", async () => {
  expect.assertions(1);
  expect(await GameSavingLoaderAsync.load()).toEqual(exp);
});
