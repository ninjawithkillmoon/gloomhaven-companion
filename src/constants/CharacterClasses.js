export const CharacterClassEnum = Object.freeze( {
  BRUTE: "Brute",
  TINKERER: "Tinkerer",
  MINDTHIEF: "Mindthief",
  SCOUNDREL: "Scoundrel",
  CRAGHEART: "Cragheart",
  SPELLWEAVER: "Spellweaver"
});

export const CHARACTER_CLASSES = {
  "Brute": {
    "race": "Inox",
    "handSize": 10,
    "hitpoints": {
      1: 10,
      2: 12,
      3: 14,
      4: 16,
      5: 18,
      6: 20,
      7: 22,
      8: 24,
      9: 26
    }
  },
  "Cragheart": {
    "race": "Savvas",
    "handSize": 11,
    "hitpoints": {
      1: 10,
      2: 12,
      3: 14,
      4: 16,
      5: 18,
      6: 20,
      7: 22,
      8: 24,
      9: 26
    }
  },
  "Mindthief": {
    "race": "Vermling",
    "handSize": 10,
    "hitpoints": {
      1: 6,
      2: 7,
      3: 8,
      4: 9,
      5: 10,
      6: 11,
      7: 12,
      8: 13,
      9: 14
    }
  },
  "Scoundrel": {
    "race": "Human",
    "handSize": 9,
    "hitpoints": {
      1: 8,
      2: 9,
      3: 11,
      4: 12,
      5: 14,
      6: 15,
      7: 17,
      8: 18,
      9: 20
    }
  },
  "Spellweaver": {
    "race": "Orchid",
    "handSize": 8,
    "hitpoints": {
      1: 6,
      2: 7,
      3: 8,
      4: 9,
      5: 10,
      6: 11,
      7: 12,
      8: 13,
      9: 14
    }
  },
  "Tinkerer": {
    "race": "Quatryl",
    "handSize": 12,
    "hitpoints": {
      1: 8,
      2: 9,
      3: 11,
      4: 12,
      5: 14,
      6: 15,
      7: 17,
      8: 18,
      9: 20
    }
  },
};

export const LEVEL_THRESHOLDS = Object.freeze ({
  2: 45,
  3: 95,
  4: 150,
  5: 210,
  6: 275,
  7: 345,
  8: 420,
  9: 500
});