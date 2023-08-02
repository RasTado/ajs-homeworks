import GameSavingLoaderPromise from "../GameSavingLoaderPromise.js";
import GameSaving from "../GameSavingSpec.js";

const exp = new GameSaving(9, 1546300800, {
  id: 1,
  name: "Hitman",
  level: 10,
  points: 2000,
});

test("test function", (done) => {
  GameSavingLoaderPromise.load().then((obj) => {
    expect(obj).toEqual(exp);
    done();
  });
});
