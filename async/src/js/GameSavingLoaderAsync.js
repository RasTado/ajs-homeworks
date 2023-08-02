/* eslint-disable consistent-return */
import read from "./reader";
import json from "./parser";
import GameSaving from "./GameSavingSpec";

export default class GameSavingLoaderAsync {
  static async load() {
    try {
      const data = await read();
      const jsonData = await json(data);
      const parseData = JSON.parse(jsonData);
      return new GameSaving(
        parseData.id,
        parseData.created,
        parseData.userInfo
      );
    } catch (error) {
      return error.name;
    }
  }
}
