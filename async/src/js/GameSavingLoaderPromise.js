import read from "./reader";
import json from "./parser";
import GameSaving from "./GameSavingSpec";

export default class GameSavingLoaderPromise {
  static load() {
    return new Promise((resolve) => {
      read()
        .then((data) => json(data))
        .then((jsonData) => {
          const parseData = JSON.parse(jsonData);
          resolve(
            new GameSaving(parseData.id, parseData.created, parseData.userInfo)
          );
        });
    });
  }
}
