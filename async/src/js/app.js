import GameSavingLoaderPromise from "./GameSavingLoaderPromise";
import GameSavingLoaderAsync from "./GameSavingLoaderAsync";

// цепочки .then().then()
GameSavingLoaderPromise.load().then(
  (saving) => {
    console.log(saving);
  },
  (error) => {
    console.error("error", error);
  }
);

// с использованием async/await
(async () => {
  try {
    const gameSaving = await GameSavingLoaderAsync.load();
    console.log(gameSaving);
  } catch (error) {
    console.error("error", error);
  }
})();
