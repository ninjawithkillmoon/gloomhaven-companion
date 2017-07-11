import { LEVEL_THRESHOLDS } from '../constants/CharacterClasses'
import { CharacterClass } from './CharacterClassStore'


export class Character {
  static nextId = 0;

  constructor(name, className) {
    this._json = {
      name: name,
      className : className,
      xp : 0,
      gold : 0,
      notes: "",
      id : Character.nextId++
    };
  }

  static fromJSON(json) {
    let c = new Character("", "");
    c._json = json;
    Character.nextId = c.id + 1;
    return c;
  }

  get name() { return this._json.name; }
  set name(val) {this._json.name = val; }

  get className() { return this._json.className; }

  get xp() { return parseInt(this._json.xp, 10); }
  set xp(val) { this._json.xp = val; }

  get gold() { return parseInt(this._json.gold, 10); }
  set gold(val) { this._json.gold = val; }

  get notes() { return this._json.notes; }
  set notes(val) { this._json.notes = val; }

  get id() { return this._json.id; }

  get class() {
    return CharacterClass.get(this.className);
  }

  get level() {
    let maxLevel = 0;
    for (let key in LEVEL_THRESHOLDS) {
      if (this.xp < LEVEL_THRESHOLDS[key]) return key - 1;
      maxLevel = key;
    }
    return maxLevel;
  }

  json(asString) {
    return asString ? JSON.stringify(this._json) : this._json;
  }

  saveToJson(json) {
    this._json = json;
  }

}
