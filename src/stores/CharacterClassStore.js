import { CHARACTER_CLASSES } from '../constants/CharacterClasses'

export class CharacterClass {
  constructor(className, json) {
    this.className = className;
    this.json = json;
  }

  static get(className) {
    return new CharacterClass(className, CHARACTER_CLASSES[className]);
  }

  get icon() { return "characterIcon{0}".format(this.className); }
  get matFront() { return "characterMatFront{0}".format(this.className); }
  get matBack() { return "characterMatBack{0}".format(this.className); }
  get race() { return this.json.race; }
  get handSize() { return this.json.handSize; }
  get hitPoints() { return this.json.hitpoints; }
  hitPointsForLevel(level) {
    return this.json.hitpoints[level] === undefined ? 0: this.json.hitpoints[level];
  }
}
