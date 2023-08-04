import TeamIter from "./symbols_iterators";
import TeamGen from "./symbols_generators";

import Character from "./chars/baseClass";
import Swordsman from "./chars/swordsman";
import Magician from "./chars/magician";

const teamI = new TeamIter();
teamI.addChar(new Swordsman("test1.1"));
teamI.addChar(new Magician("test1.2"));
for (const ch of teamI) {
  console.log(ch);
}

const teamG = new TeamGen();
teamG.addChar(new Swordsman("test2.1"));
teamG.addChar(new Magician("test2.2"));
for (const ch of teamG[Symbol.iterator]()) {
  console.log(ch);
}
