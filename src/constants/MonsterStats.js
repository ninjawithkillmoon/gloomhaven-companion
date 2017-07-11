// taken from https://raw.githubusercontent.com/GinoGalotti/gloomycompanion/monster-stats/scenarios.js

export const MONSTERS = {
  "monsters": {
    "Ancient Artillery": {
      "standeeCount": 6,
      "level": [
        {
          "level": 0,
          "normal": {
            "health": 4,
            "move": 0,
            "attack": 2,
            "range": 4,
            "attributes": []
          },
          "elite": {
            "health": 7,
            "move": 0,
            "attack": 3,
            "range": 5,
            "attributes": []
          }
        },
        {
          "level": 1,
          "normal": {
            "health": 6,
            "move": 0,
            "attack": 2,
            "range": 4,
            "attributes": []
          },
          "elite": {
            "health": 9,
            "move": 0,
            "attack": 3,
            "range": 5,
            "attributes": []
          }
        },
        {
          "level": 2,
          "normal": {
            "health": 7,
            "move": 0,
            "attack": 2,
            "range": 5,
            "attributes": []
          },
          "elite": {
            "health": 11,
            "move": 0,
            "attack": 3,
            "range": 6,
            "attributes": []
          }
        },
        {
          "level": 3,
          "normal": {
            "health": 8,
            "move": 0,
            "attack": 3,
            "range": 5,
            "attributes": []
          },
          "elite": {
            "health": 13,
            "move": 0,
            "attack": 4,
            "range": 6,
            "attributes": []
          }
        },
        {
          "level": 4,
          "normal": {
            "health": 9,
            "move": 0,
            "attack": 4,
            "range": 5,
            "attributes": []
          },
          "elite": {
            "health": 13,
            "move": 0,
            "attack": 4,
            "range": 6,
            "attributes": [
              "%target% 2"
            ]
          }
        },
        {
          "level": 5,
          "normal": {
            "health": 11,
            "move": 0,
            "attack": 4,
            "range": 6,
            "attributes": []
          },
          "elite": {
            "health": 15,
            "move": 0,
            "attack": 4,
            "range": 7,
            "attributes": [
              "%target% 2"
            ]
          }
        },
        {
          "level": 6,
          "normal": {
            "health": 14,
            "move": 0,
            "attack": 4,
            "range": 6,
            "attributes": []
          },
          "elite": {
            "health": 16,
            "move": 0,
            "attack": 5,
            "range": 7,
            "attributes": [
              "%target% 2"
            ]
          }
        },
        {
          "level": 7,
          "normal": {
            "health": 16,
            "move": 0,
            "attack": 4,
            "range": 7,
            "attributes": []
          },
          "elite": {
            "health": 20,
            "move": 0,
            "attack": 5,
            "range": 7,
            "attributes": [
              "%target% 2"
            ]
          }
        }
      ]
    },
    "Bandit Archer": {
      "standeeCount": 6,
      "level": [
        {
          "level": 0,
          "normal": {
            "health": 4,
            "move": 2,
            "attack": 2,
            "range": 3,
            "attributes": []
          },
          "elite": {
            "health": 6,
            "move": 2,
            "attack": 3,
            "range": 3,
            "attributes": []
          }
        },
        {
          "level": 1,
          "normal": {
            "health": 5,
            "move": 2,
            "attack": 2,
            "range": 4,
            "attributes": []
          },
          "elite": {
            "health": 7,
            "move": 2,
            "attack": 3,
            "range": 5,
            "attributes": []
          }
        },
        {
          "level": 2,
          "normal": {
            "health": 6,
            "move": 3,
            "attack": 2,
            "range": 4,
            "attributes": []
          },
          "elite": {
            "health": 9,
            "move": 3,
            "attack": 3,
            "range": 5,
            "attributes": []
          }
        },
        {
          "level": 3,
          "normal": {
            "health": 6,
            "move": 3,
            "attack": 3,
            "range": 4,
            "attributes": []
          },
          "elite": {
            "health": 10,
            "move": 3,
            "attack": 4,
            "range": 5,
            "attributes": []
          }
        },
        {
          "level": 4,
          "normal": {
            "health": 8,
            "move": 3,
            "attack": 3,
            "range": 4,
            "attributes": []
          },
          "elite": {
            "health": 10,
            "move": 3,
            "attack": 4,
            "range": 6,
            "attributes": [
              "%poison%"
            ]
          }
        },
        {
          "level": 5,
          "normal": {
            "health": 10,
            "move": 3,
            "attack": 3,
            "range": 5,
            "attributes": []
          },
          "elite": {
            "health": 12,
            "move": 4,
            "attack": 4,
            "range": 6,
            "attributes": [
              "%poison%"
            ]
          }
        },
        {
          "level": 6,
          "normal": {
            "health": 10,
            "move": 3,
            "attack": 4,
            "range": 5,
            "attributes": []
          },
          "elite": {
            "health": 13,
            "move": 4,
            "attack": 5,
            "range": 6,
            "attributes": [
              "%poison%"
            ]
          }
        },
        {
          "level": 7,
          "normal": {
            "health": 13,
            "move": 3,
            "attack": 4,
            "range": 5,
            "attributes": []
          },
          "elite": {
            "health": 17,
            "move": 4,
            "attack": 5,
            "range": 6,
            "attributes": [
              "%poison%"
            ]
          }
        }
      ]
    },
    "Bandit Guard": {
      "standeeCount": 6,
      "level": [
        {
          "level": 0,
          "normal": {
            "health": 5,
            "move": 2,
            "attack": 2,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 9,
            "move": 2,
            "attack": 3,
            "range": 0,
            "attributes": []
          }
        },
        {
          "level": 1,
          "normal": {
            "health": 6,
            "move": 3,
            "attack": 2,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 9,
            "move": 2,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%shield% 1"
            ]
          }
        },
        {
          "level": 2,
          "normal": {
            "health": 6,
            "move": 3,
            "attack": 3,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 10,
            "move": 2,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%shield% 1"
            ]
          }
        },
        {
          "level": 3,
          "normal": {
            "health": 9,
            "move": 3,
            "attack": 3,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 10,
            "move": 3,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%shield% 2"
            ]
          }
        },
        {
          "level": 4,
          "normal": {
            "health": 10,
            "move": 4,
            "attack": 3,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 11,
            "move": 3,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%muddle%",
              "%shield% 2"
            ]
          }
        },
        {
          "level": 5,
          "normal": {
            "health": 11,
            "move": 4,
            "attack": 4,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 12,
            "move": 3,
            "attack": 5,
            "range": 0,
            "attributes": [
              "%muddle%",
              "%shield% 2"
            ]
          }
        },
        {
          "level": 6,
          "normal": {
            "health": 14,
            "move": 4,
            "attack": 4,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 14,
            "move": 4,
            "attack": 5,
            "range": 0,
            "attributes": [
              "%muddle%",
              "%shield% 2"
            ]
          }
        },
        {
          "level": 7,
          "normal": {
            "health": 16,
            "move": 5,
            "attack": 4,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 14,
            "move": 3,
            "attack": 5,
            "range": 0,
            "attributes": [
              "%muddle%",
              "%shield% 3"
            ]
          }
        }
      ]
    },
    "Black Imp": {
      "standeeCount": 10,
      "level": [
        {
          "level": 0,
          "normal": {
            "health": 3,
            "move": 1,
            "attack": 1,
            "range": 3,
            "attributes": []
          },
          "elite": {
            "health": 4,
            "move": 1,
            "attack": 2,
            "range": 3,
            "attributes": [
              "%poison%"
            ]
          }
        },
        {
          "level": 1,
          "normal": {
            "health": 4,
            "move": 1,
            "attack": 1,
            "range": 3,
            "attributes": [
              "%poison%"
            ]
          },
          "elite": {
            "health": 6,
            "move": 1,
            "attack": 2,
            "range": 3,
            "attributes": [
              "%poison%"
            ]
          }
        },
        {
          "level": 2,
          "normal": {
            "health": 5,
            "move": 1,
            "attack": 1,
            "range": 4,
            "attributes": [
              "%poison%"
            ]
          },
          "elite": {
            "health": 8,
            "move": 1,
            "attack": 2,
            "range": 4,
            "attributes": [
              "%poison%"
            ]
          }
        },
        {
          "level": 3,
          "normal": {
            "health": 5,
            "move": 1,
            "attack": 2,
            "range": 4,
            "attributes": [
              "%poison%"
            ]
          },
          "elite": {
            "health": 8,
            "move": 1,
            "attack": 3,
            "range": 4,
            "attributes": [
              "Attackers gain Disadvantage",
              "%poison%"
            ]
          }
        },
        {
          "level": 4,
          "normal": {
            "health": 7,
            "move": 1,
            "attack": 2,
            "range": 4,
            "attributes": [
              "%poison%"
            ]
          },
          "elite": {
            "health": 11,
            "move": 1,
            "attack": 3,
            "range": 4,
            "attributes": [
              "Attackers gain Disadvantage",
              "%poison%"
            ]
          }
        },
        {
          "level": 5,
          "normal": {
            "health": 9,
            "move": 1,
            "attack": 2,
            "range": 4,
            "attributes": [
              "%poison%"
            ]
          },
          "elite": {
            "health": 12,
            "move": 1,
            "attack": 3,
            "range": 5,
            "attributes": [
              "Attackers gain Disadvantage",
              "%poison%"
            ]
          }
        },
        {
          "level": 6,
          "normal": {
            "health": 10,
            "move": 1,
            "attack": 3,
            "range": 4,
            "attributes": [
              "%poison%"
            ]
          },
          "elite": {
            "health": 14,
            "move": 1,
            "attack": 4,
            "range": 5,
            "attributes": [
              "Attackers gain Disadvantage",
              "%poison%"
            ]
          }
        },
        {
          "level": 7,
          "normal": {
            "health": 12,
            "move": 1,
            "attack": 3,
            "range": 4,
            "attributes": [
              "%poison%"
            ]
          },
          "elite": {
            "health": 17,
            "move": 1,
            "attack": 4,
            "range": 5,
            "attributes": [
              "Attackers gain Disadvantage",
              "%poison%"
            ]
          }
        }
      ]
    },
    "Cave Bear": {
      "standeeCount": 4,
      "level": [
        {
          "level": 0,
          "normal": {
            "health": 7,
            "move": 3,
            "attack": 3,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 11,
            "move": 3,
            "attack": 4,
            "range": 0,
            "attributes": []
          }
        },
        {
          "level": 1,
          "normal": {
            "health": 9,
            "move": 3,
            "attack": 3,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 14,
            "move": 3,
            "attack": 4,
            "range": 0,
            "attributes": []
          }
        },
        {
          "level": 2,
          "normal": {
            "health": 11,
            "move": 4,
            "attack": 3,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 17,
            "move": 4,
            "attack": 4,
            "range": 0,
            "attributes": []
          }
        },
        {
          "level": 3,
          "normal": {
            "health": 13,
            "move": 4,
            "attack": 4,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 20,
            "move": 4,
            "attack": 5,
            "range": 0,
            "attributes": []
          }
        },
        {
          "level": 4,
          "normal": {
            "health": 16,
            "move": 4,
            "attack": 4,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 21,
            "move": 5,
            "attack": 5,
            "range": 0,
            "attributes": [
              "%wound%"
            ]
          }
        },
        {
          "level": 5,
          "normal": {
            "health": 17,
            "move": 5,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%wound%"
            ]
          },
          "elite": {
            "health": 24,
            "move": 5,
            "attack": 6,
            "range": 0,
            "attributes": [
              "%wound%"
            ]
          }
        },
        {
          "level": 6,
          "normal": {
            "health": 19,
            "move": 5,
            "attack": 5,
            "range": 0,
            "attributes": [
              "%wound%"
            ]
          },
          "elite": {
            "health": 28,
            "move": 5,
            "attack": 7,
            "range": 0,
            "attributes": [
              "%wound%"
            ]
          }
        },
        {
          "level": 7,
          "normal": {
            "health": 22,
            "move": 5,
            "attack": 5,
            "range": 0,
            "attributes": [
              "%wound%"
            ]
          },
          "elite": {
            "health": 33,
            "move": 5,
            "attack": 7,
            "range": 0,
            "attributes": [
              "%wound%"
            ]
          }
        }
      ]
    },
    "City Archer": {
      "standeeCount": 6,
      "level": [
        {
          "level": 0,
          "normal": {
            "health": 4,
            "move": 1,
            "attack": 2,
            "range": 3,
            "attributes": []
          },
          "elite": {
            "health": 6,
            "move": 1,
            "attack": 3,
            "range": 4,
            "attributes": []
          }
        },
        {
          "level": 1,
          "normal": {
            "health": 5,
            "move": 1,
            "attack": 2,
            "range": 4,
            "attributes": []
          },
          "elite": {
            "health": 6,
            "move": 1,
            "attack": 3,
            "range": 5,
            "attributes": [
              "%pierce% 1",
              "%shield% 1"
            ]
          }
        },
        {
          "level": 2,
          "normal": {
            "health": 6,
            "move": 1,
            "attack": 3,
            "range": 4,
            "attributes": []
          },
          "elite": {
            "health": 7,
            "move": 1,
            "attack": 4,
            "range": 5,
            "attributes": [
              "%pierce% 2",
              "%shield% 1"
            ]
          }
        },
        {
          "level": 3,
          "normal": {
            "health": 6,
            "move": 2,
            "attack": 3,
            "range": 4,
            "attributes": [
              "%shield% 1"
            ]
          },
          "elite": {
            "health": 8,
            "move": 2,
            "attack": 4,
            "range": 5,
            "attributes": [
              "%pierce% 2",
              "%shield% 2"
            ]
          }
        },
        {
          "level": 4,
          "normal": {
            "health": 8,
            "move": 2,
            "attack": 3,
            "range": 5,
            "attributes": [
              "%shield% 1"
            ]
          },
          "elite": {
            "health": 10,
            "move": 2,
            "attack": 4,
            "range": 6,
            "attributes": [
              "%pierce% 2",
              "%shield% 2"
            ]
          }
        },
        {
          "level": 5,
          "normal": {
            "health": 9,
            "move": 2,
            "attack": 4,
            "range": 5,
            "attributes": [
              "%shield% 1"
            ]
          },
          "elite": {
            "health": 11,
            "move": 2,
            "attack": 5,
            "range": 6,
            "attributes": [
              "%pierce% 3",
              "%shield% 2"
            ]
          }
        },
        {
          "level": 6,
          "normal": {
            "health": 9,
            "move": 3,
            "attack": 4,
            "range": 5,
            "attributes": [
              "%shield% 2"
            ]
          },
          "elite": {
            "health": 12,
            "move": 3,
            "attack": 6,
            "range": 6,
            "attributes": [
              "%pierce% 3",
              "%shield% 2"
            ]
          }
        },
        {
          "level": 7,
          "normal": {
            "health": 10,
            "move": 3,
            "attack": 4,
            "range": 6,
            "attributes": [
              "%shield% 2"
            ]
          },
          "elite": {
            "health": 13,
            "move": 3,
            "attack": 6,
            "range": 7,
            "attributes": [
              "%pierce% 3",
              "%shield% 3"
            ]
          }
        }
      ]
    },
    "City Guard": {
      "standeeCount": 6,
      "level": [
        {
          "level": 0,
          "normal": {
            "health": 5,
            "move": 2,
            "attack": 2,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 6,
            "move": 2,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%shield% 1"
            ]
          }
        },
        {
          "level": 1,
          "normal": {
            "health": 5,
            "move": 2,
            "attack": 2,
            "range": 0,
            "attributes": [
              "%shield% 1"
            ]
          },
          "elite": {
            "health": 6,
            "move": 2,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%shield% 2"
            ]
          }
        },
        {
          "level": 2,
          "normal": {
            "health": 7,
            "move": 2,
            "attack": 2,
            "range": 0,
            "attributes": [
              "%shield% 1"
            ]
          },
          "elite": {
            "health": 9,
            "move": 2,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%shield% 2"
            ]
          }
        },
        {
          "level": 3,
          "normal": {
            "health": 8,
            "move": 2,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%shield% 1"
            ]
          },
          "elite": {
            "health": 9,
            "move": 2,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%retaliate% 1",
              "%shield% 2"
            ]
          }
        },
        {
          "level": 4,
          "normal": {
            "health": 9,
            "move": 3,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%shield% 1"
            ]
          },
          "elite": {
            "health": 10,
            "move": 3,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%retaliate% 2",
              "%shield% 2"
            ]
          }
        },
        {
          "level": 5,
          "normal": {
            "health": 10,
            "move": 3,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%shield% 2"
            ]
          },
          "elite": {
            "health": 12,
            "move": 3,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%retaliate% 2",
              "%shield% 3"
            ]
          }
        },
        {
          "level": 6,
          "normal": {
            "health": 11,
            "move": 3,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%shield% 2"
            ]
          },
          "elite": {
            "health": 13,
            "move": 3,
            "attack": 5,
            "range": 0,
            "attributes": [
              "%retaliate% 3",
              "%shield% 3"
            ]
          }
        },
        {
          "level": 7,
          "normal": {
            "health": 13,
            "move": 3,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%shield% 2"
            ]
          },
          "elite": {
            "health": 14,
            "move": 3,
            "attack": 6,
            "range": 0,
            "attributes": [
              "%retaliate% 3",
              "%shield% 3"
            ]
          }
        }
      ]
    },
    "Cultist": {
      "standeeCount": 6,
      "level": [
        {
          "level": 0,
          "normal": {
            "health": 4,
            "move": 2,
            "attack": 1,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 7,
            "move": 2,
            "attack": 2,
            "range": 0,
            "attributes": []
          }
        },
        {
          "level": 1,
          "normal": {
            "health": 5,
            "move": 2,
            "attack": 1,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 9,
            "move": 2,
            "attack": 2,
            "range": 0,
            "attributes": []
          }
        },
        {
          "level": 2,
          "normal": {
            "health": 7,
            "move": 2,
            "attack": 1,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 12,
            "move": 2,
            "attack": 2,
            "range": 0,
            "attributes": []
          }
        },
        {
          "level": 3,
          "normal": {
            "health": 9,
            "move": 3,
            "attack": 1,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 13,
            "move": 3,
            "attack": 2,
            "range": 0,
            "attributes": [
              "%curse%"
            ]
          }
        },
        {
          "level": 4,
          "normal": {
            "health": 10,
            "move": 3,
            "attack": 2,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 15,
            "move": 3,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%curse%"
            ]
          }
        },
        {
          "level": 5,
          "normal": {
            "health": 11,
            "move": 3,
            "attack": 2,
            "range": 0,
            "attributes": [
              "%curse%"
            ]
          },
          "elite": {
            "health": 18,
            "move": 3,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%curse%"
            ]
          }
        },
        {
          "level": 6,
          "normal": {
            "health": 14,
            "move": 3,
            "attack": 2,
            "range": 0,
            "attributes": [
              "%curse%"
            ]
          },
          "elite": {
            "health": 22,
            "move": 3,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%curse%"
            ]
          }
        },
        {
          "level": 7,
          "normal": {
            "health": 15,
            "move": 3,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%curse%"
            ]
          },
          "elite": {
            "health": 25,
            "move": 3,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%curse%"
            ]
          }
        }
      ]
    },
    "Deep Terror": {
      "standeeCount": 10,
      "level": [
        {
          "level": 0,
          "normal": {
            "health": 3,
            "move": 0,
            "attack": 2,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 5,
            "move": 0,
            "attack": 3,
            "range": 0,
            "attributes": []
          }
        },
        {
          "level": 1,
          "normal": {
            "health": 4,
            "move": 0,
            "attack": 2,
            "range": 0,
            "attributes": [
              "%retaliate% 1"
            ]
          },
          "elite": {
            "health": 6,
            "move": 0,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%retaliate% 1"
            ]
          }
        },
        {
          "level": 2,
          "normal": {
            "health": 4,
            "move": 0,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%retaliate% 1"
            ]
          },
          "elite": {
            "health": 7,
            "move": 0,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%retaliate% 1"
            ]
          }
        },
        {
          "level": 3,
          "normal": {
            "health": 5,
            "move": 0,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%retaliate% 2"
            ]
          },
          "elite": {
            "health": 8,
            "move": 0,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%retaliate% 2"
            ]
          }
        },
        {
          "level": 4,
          "normal": {
            "health": 6,
            "move": 0,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%retaliate% 2"
            ]
          },
          "elite": {
            "health": 9,
            "move": 0,
            "attack": 5,
            "range": 0,
            "attributes": [
              "%retaliate% 2"
            ]
          }
        },
        {
          "level": 5,
          "normal": {
            "health": 7,
            "move": 0,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%retaliate% 3"
            ]
          },
          "elite": {
            "health": 11,
            "move": 0,
            "attack": 5,
            "range": 0,
            "attributes": [
              "%retaliate% 3"
            ]
          }
        },
        {
          "level": 6,
          "normal": {
            "health": 8,
            "move": 0,
            "attack": 5,
            "range": 0,
            "attributes": [
              "%retaliate% 3"
            ]
          },
          "elite": {
            "health": 13,
            "move": 0,
            "attack": 6,
            "range": 0,
            "attributes": [
              "%retaliate% 3"
            ]
          }
        },
        {
          "level": 7,
          "normal": {
            "health": 9,
            "move": 0,
            "attack": 5,
            "range": 0,
            "attributes": [
              "%retaliate% 4"
            ]
          },
          "elite": {
            "health": 15,
            "move": 0,
            "attack": 6,
            "range": 0,
            "attributes": [
              "%retaliate% 4"
            ]
          }
        }
      ]
    },
    "Earth Demon": {
      "standeeCount": 6,
      "level": [
        {
          "level": 0,
          "normal": {
            "health": 7,
            "move": 1,
            "attack": 3,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 10,
            "move": 2,
            "attack": 4,
            "range": 0,
            "attributes": []
          }
        },
        {
          "level": 1,
          "normal": {
            "health": 9,
            "move": 1,
            "attack": 3,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 13,
            "move": 2,
            "attack": 4,
            "range": 0,
            "attributes": []
          }
        },
        {
          "level": 2,
          "normal": {
            "health": 12,
            "move": 1,
            "attack": 3,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 18,
            "move": 2,
            "attack": 4,
            "range": 0,
            "attributes": []
          }
        },
        {
          "level": 3,
          "normal": {
            "health": 13,
            "move": 2,
            "attack": 3,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 20,
            "move": 2,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%immobilize%"
            ]
          }
        },
        {
          "level": 4,
          "normal": {
            "health": 15,
            "move": 2,
            "attack": 4,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 21,
            "move": 3,
            "attack": 5,
            "range": 0,
            "attributes": [
              "%immobilize%"
            ]
          }
        },
        {
          "level": 5,
          "normal": {
            "health": 17,
            "move": 2,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%immobilize%"
            ]
          },
          "elite": {
            "health": 25,
            "move": 3,
            "attack": 5,
            "range": 0,
            "attributes": [
              "%immobilize%"
            ]
          }
        },
        {
          "level": 6,
          "normal": {
            "health": 20,
            "move": 2,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%immobilize%"
            ]
          },
          "elite": {
            "health": 27,
            "move": 3,
            "attack": 6,
            "range": 0,
            "attributes": [
              "%immobilize%"
            ]
          }
        },
        {
          "level": 7,
          "normal": {
            "health": 22,
            "move": 3,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%immobilize%"
            ]
          },
          "elite": {
            "health": 32,
            "move": 3,
            "attack": 6,
            "range": 0,
            "attributes": [
              "%immobilize%"
            ]
          }
        }
      ]
    },
    "Flame Demon": {
      "standeeCount": 6,
      "level": [
        {
          "level": 0,
          "normal": {
            "health": 2,
            "move": 3,
            "attack": 2,
            "range": 3,
            "attributes": [
              "Flying",
              "%shield% 2"
            ]
          },
          "elite": {
            "health": 3,
            "move": 3,
            "attack": 2,
            "range": 3,
            "attributes": [
              "Flying",
              "%shield% 3"
            ]
          }
        },
        {
          "level": 1,
          "normal": {
            "health": 2,
            "move": 3,
            "attack": 2,
            "range": 3,
            "attributes": [
              "Flying",
              "%shield% 3"
            ]
          },
          "elite": {
            "health": 3,
            "move": 3,
            "attack": 2,
            "range": 4,
            "attributes": [
              "Flying",
              "%retaliate% 2: %range% 2",
              "%shield% 4"
            ]
          }
        },
        {
          "level": 2,
          "normal": {
            "health": 3,
            "move": 3,
            "attack": 3,
            "range": 3,
            "attributes": [
              "Flying",
              "%shield% 3"
            ]
          },
          "elite": {
            "health": 4,
            "move": 3,
            "attack": 3,
            "range": 4,
            "attributes": [
              "Flying",
              "%retaliate% 3: %range% 2",
              "%shield% 4"
            ]
          }
        },
        {
          "level": 3,
          "normal": {
            "health": 3,
            "move": 3,
            "attack": 3,
            "range": 4,
            "attributes": [
              "Flying",
              "%retaliate% 2: %range% 2",
              "%shield% 3"
            ]
          },
          "elite": {
            "health": 5,
            "move": 3,
            "attack": 3,
            "range": 5,
            "attributes": [
              "Flying",
              "%retaliate% 3: %range% 3",
              "%shield% 4"
            ]
          }
        },
        {
          "level": 4,
          "normal": {
            "health": 3,
            "move": 4,
            "attack": 3,
            "range": 4,
            "attributes": [
              "Flying",
              "%retaliate% 3: %range% 2",
              "%shield% 3"
            ]
          },
          "elite": {
            "health": 5,
            "move": 4,
            "attack": 4,
            "range": 5,
            "attributes": [
              "Flying",
              "%retaliate% 4: %range% 3",
              "%shield% 4"
            ]
          }
        },
        {
          "level": 5,
          "normal": {
            "health": 4,
            "move": 4,
            "attack": 3,
            "range": 4,
            "attributes": [
              "Flying",
              "%retaliate% 3: %range% 2",
              "%shield% 4"
            ]
          },
          "elite": {
            "health": 6,
            "move": 4,
            "attack": 4,
            "range": 5,
            "attributes": [
              "Flying",
              "%retaliate% 4: %range% 3",
              "%shield% 5"
            ]
          }
        },
        {
          "level": 6,
          "normal": {
            "health": 4,
            "move": 4,
            "attack": 4,
            "range": 4,
            "attributes": [
              "Flying",
              "%retaliate% 4: %range% 2",
              "%shield% 4"
            ]
          },
          "elite": {
            "health": 7,
            "move": 4,
            "attack": 5,
            "range": 5,
            "attributes": [
              "Flying",
              "%retaliate% 5: %range% 3",
              "%shield% 5"
            ]
          }
        },
        {
          "level": 7,
          "normal": {
            "health": 5,
            "move": 4,
            "attack": 4,
            "range": 5,
            "attributes": [
              "Flying",
              "%retaliate% 4: %range% 3",
              "%shield% 4"
            ]
          },
          "elite": {
            "health": 8,
            "move": 4,
            "attack": 5,
            "range": 6,
            "attributes": [
              "Flying",
              "%retaliate% 5: %range% 4",
              "%shield% 5"
            ]
          }
        }
      ]
    },
    "Frost Demon": {
      "standeeCount": 6,
      "level": [
        {
          "level": 0,
          "normal": {
            "health": 5,
            "move": 2,
            "attack": 3,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 10,
            "move": 3,
            "attack": 3,
            "range": 0,
            "attributes": []
          }
        },
        {
          "level": 1,
          "normal": {
            "health": 6,
            "move": 2,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%retaliate% 1"
            ]
          },
          "elite": {
            "health": 10,
            "move": 3,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%retaliate% 2"
            ]
          }
        },
        {
          "level": 2,
          "normal": {
            "health": 7,
            "move": 3,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%retaliate% 2"
            ]
          },
          "elite": {
            "health": 12,
            "move": 4,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%retaliate% 2"
            ]
          }
        },
        {
          "level": 3,
          "normal": {
            "health": 8,
            "move": 3,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%retaliate% 2"
            ]
          },
          "elite": {
            "health": 14,
            "move": 4,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%retaliate% 3"
            ]
          }
        },
        {
          "level": 4,
          "normal": {
            "health": 10,
            "move": 3,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%retaliate% 2"
            ]
          },
          "elite": {
            "health": 18,
            "move": 4,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%retaliate% 3"
            ]
          }
        },
        {
          "level": 5,
          "normal": {
            "health": 11,
            "move": 3,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%retaliate% 3"
            ]
          },
          "elite": {
            "health": 20,
            "move": 4,
            "attack": 5,
            "range": 0,
            "attributes": [
              "%retaliate% 3"
            ]
          }
        },
        {
          "level": 6,
          "normal": {
            "health": 12,
            "move": 3,
            "attack": 5,
            "range": 0,
            "attributes": [
              "%retaliate% 3"
            ]
          },
          "elite": {
            "health": 22,
            "move": 4,
            "attack": 5,
            "range": 0,
            "attributes": [
              "%retaliate% 4"
            ]
          }
        },
        {
          "level": 7,
          "normal": {
            "health": 14,
            "move": 3,
            "attack": 5,
            "range": 0,
            "attributes": [
              "%retaliate% 3"
            ]
          },
          "elite": {
            "health": 25,
            "move": 4,
            "attack": 5,
            "range": 0,
            "attributes": [
              "%retaliate% 4"
            ]
          }
        }
      ]
    },
    "Forest Imp": {
      "standeeCount": 10,
      "level": [
        {
          "level": 0,
          "normal": {
            "health": 1,
            "move": 3,
            "attack": 1,
            "range": 3,
            "attributes": [
              "%shield% 1"
            ]
          },
          "elite": {
            "health": 4,
            "move": 3,
            "attack": 1,
            "range": 3,
            "attributes": [
              "%shield% 1"
            ]
          }
        },
        {
          "level": 1,
          "normal": {
            "health": 2,
            "move": 3,
            "attack": 1,
            "range": 3,
            "attributes": [
              "%shield% 1"
            ]
          },
          "elite": {
            "health": 5,
            "move": 3,
            "attack": 2,
            "range": 3,
            "attributes": [
              "%shield% 1"
            ]
          }
        },
        {
          "level": 2,
          "normal": {
            "health": 2,
            "move": 3,
            "attack": 2,
            "range": 3,
            "attributes": [
              "%shield% 1"
            ]
          },
          "elite": {
            "health": 6,
            "move": 3,
            "attack": 2,
            "range": 3,
            "attributes": [
              "%curse%",
              "%shield% 1"
            ]
          }
        },
        {
          "level": 3,
          "normal": {
            "health": 3,
            "move": 4,
            "attack": 2,
            "range": 4,
            "attributes": [
              "%shield% 1"
            ]
          },
          "elite": {
            "health": 7,
            "move": 4,
            "attack": 2,
            "range": 4,
            "attributes": [
              "%curse%",
              "%shield% 1"
            ]
          }
        },
        {
          "level": 4,
          "normal": {
            "health": 3,
            "move": 4,
            "attack": 2,
            "range": 4,
            "attributes": [
              "%shield% 2"
            ]
          },
          "elite": {
            "health": 7,
            "move": 4,
            "attack": 2,
            "range": 4,
            "attributes": [
              "%curse%",
              "%shield% 2"
            ]
          }
        },
        {
          "level": 5,
          "normal": {
            "health": 4,
            "move": 4,
            "attack": 2,
            "range": 4,
            "attributes": [
              "%curse%",
              "%shield% 2"
            ]
          },
          "elite": {
            "health": 8,
            "move": 4,
            "attack": 3,
            "range": 4,
            "attributes": [
              "%curse%",
              "%shield% 2"
            ]
          }
        },
        {
          "level": 6,
          "normal": {
            "health": 4,
            "move": 4,
            "attack": 3,
            "range": 4,
            "attributes": [
              "%curse%",
              "%shield% 2"
            ]
          },
          "elite": {
            "health": 9,
            "move": 4,
            "attack": 4,
            "range": 4,
            "attributes": [
              "%curse%",
              "%shield% 2"
            ]
          }
        },
        {
          "level": 7,
          "normal": {
            "health": 6,
            "move": 4,
            "attack": 3,
            "range": 4,
            "attributes": [
              "%curse%",
              "%shield% 2"
            ]
          },
          "elite": {
            "health": 11,
            "move": 4,
            "attack": 4,
            "range": 4,
            "attributes": [
              "%curse%",
              "%shield% 2"
            ]
          }
        }
      ]
    },
    "Giant Viper": {
      "standeeCount": 10,
      "level": [
        {
          "level": 0,
          "normal": {
            "health": 2,
            "move": 2,
            "attack": 1,
            "range": 0,
            "attributes": [
              "%poison%"
            ]
          },
          "elite": {
            "health": 3,
            "move": 2,
            "attack": 2,
            "range": 0,
            "attributes": [
              "%poison%"
            ]
          }
        },
        {
          "level": 1,
          "normal": {
            "health": 3,
            "move": 2,
            "attack": 1,
            "range": 0,
            "attributes": [
              "%poison%"
            ]
          },
          "elite": {
            "health": 5,
            "move": 2,
            "attack": 2,
            "range": 0,
            "attributes": [
              "%poison%"
            ]
          }
        },
        {
          "level": 2,
          "normal": {
            "health": 4,
            "move": 3,
            "attack": 1,
            "range": 0,
            "attributes": [
              "%poison%"
            ]
          },
          "elite": {
            "health": 7,
            "move": 3,
            "attack": 2,
            "range": 0,
            "attributes": [
              "%poison%"
            ]
          }
        },
        {
          "level": 3,
          "normal": {
            "health": 4,
            "move": 3,
            "attack": 2,
            "range": 0,
            "attributes": [
              "%poison%"
            ]
          },
          "elite": {
            "health": 8,
            "move": 3,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%poison%"
            ]
          }
        },
        {
          "level": 4,
          "normal": {
            "health": 6,
            "move": 3,
            "attack": 2,
            "range": 0,
            "attributes": [
              "%poison%"
            ]
          },
          "elite": {
            "health": 11,
            "move": 3,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%poison%"
            ]
          }
        },
        {
          "level": 5,
          "normal": {
            "health": 7,
            "move": 3,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%poison%"
            ]
          },
          "elite": {
            "health": 13,
            "move": 4,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%poison%"
            ]
          }
        },
        {
          "level": 6,
          "normal": {
            "health": 8,
            "move": 4,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%poison%"
            ]
          },
          "elite": {
            "health": 14,
            "move": 4,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%poison%"
            ]
          }
        },
        {
          "level": 7,
          "normal": {
            "health": 10,
            "move": 4,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%poison%"
            ]
          },
          "elite": {
            "health": 17,
            "move": 4,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%poison%"
            ]
          }
        }
      ]
    },
    "Harrower Infester": {
      "standeeCount": 4,
      "level": [
        {
          "level": 0,
          "normal": {
            "health": 6,
            "move": 2,
            "attack": 2,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 12,
            "move": 2,
            "attack": 2,
            "range": 0,
            "attributes": []
          }
        },
        {
          "level": 1,
          "normal": {
            "health": 7,
            "move": 2,
            "attack": 2,
            "range": 0,
            "attributes": [
              "%retaliate% 1"
            ]
          },
          "elite": {
            "health": 12,
            "move": 3,
            "attack": 2,
            "range": 0,
            "attributes": [
              "%retaliate% 2"
            ]
          }
        },
        {
          "level": 2,
          "normal": {
            "health": 8,
            "move": 2,
            "attack": 2,
            "range": 0,
            "attributes": [
              "%retaliate% 2"
            ]
          },
          "elite": {
            "health": 14,
            "move": 3,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%retaliate% 2"
            ]
          }
        },
        {
          "level": 3,
          "normal": {
            "health": 10,
            "move": 2,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%retaliate% 2"
            ]
          },
          "elite": {
            "health": 17,
            "move": 3,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%retaliate% 3"
            ]
          }
        },
        {
          "level": 4,
          "normal": {
            "health": 12,
            "move": 3,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%retaliate% 2"
            ]
          },
          "elite": {
            "health": 19,
            "move": 3,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%retaliate% 3"
            ]
          }
        },
        {
          "level": 5,
          "normal": {
            "health": 12,
            "move": 3,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%retaliate% 3"
            ]
          },
          "elite": {
            "health": 21,
            "move": 3,
            "attack": 5,
            "range": 0,
            "attributes": [
              "%retaliate% 3"
            ]
          }
        },
        {
          "level": 6,
          "normal": {
            "health": 15,
            "move": 3,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%retaliate% 3"
            ]
          },
          "elite": {
            "health": 22,
            "move": 4,
            "attack": 5,
            "range": 0,
            "attributes": [
              "%retaliate% 4"
            ]
          }
        },
        {
          "level": 7,
          "normal": {
            "health": 17,
            "move": 3,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%retaliate% 4"
            ]
          },
          "elite": {
            "health": 26,
            "move": 4,
            "attack": 5,
            "range": 0,
            "attributes": [
              "%retaliate% 4"
            ]
          }
        }
      ]
    },
    "Hound": {
      "standeeCount": 6,
      "level": [
        {
          "level": 0,
          "normal": {
            "health": 4,
            "move": 3,
            "attack": 2,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 6,
            "move": 5,
            "attack": 2,
            "range": 0,
            "attributes": []
          }
        },
        {
          "level": 1,
          "normal": {
            "health": 4,
            "move": 4,
            "attack": 2,
            "range": 0,
            "attributes": [
              "%retaliate% 1"
            ]
          },
          "elite": {
            "health": 6,
            "move": 5,
            "attack": 2,
            "range": 0,
            "attributes": [
              "%retaliate% 2"
            ]
          }
        },
        {
          "level": 2,
          "normal": {
            "health": 6,
            "move": 4,
            "attack": 2,
            "range": 0,
            "attributes": [
              "%retaliate% 1"
            ]
          },
          "elite": {
            "health": 7,
            "move": 5,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%retaliate% 2"
            ]
          }
        },
        {
          "level": 3,
          "normal": {
            "health": 8,
            "move": 4,
            "attack": 2,
            "range": 0,
            "attributes": [
              "%retaliate% 1"
            ]
          },
          "elite": {
            "health": 8,
            "move": 5,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%retaliate% 2"
            ]
          }
        },
        {
          "level": 4,
          "normal": {
            "health": 8,
            "move": 4,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%retaliate% 1"
            ]
          },
          "elite": {
            "health": 11,
            "move": 5,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%retaliate% 2"
            ]
          }
        },
        {
          "level": 5,
          "normal": {
            "health": 9,
            "move": 4,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%retaliate% 2"
            ]
          },
          "elite": {
            "health": 12,
            "move": 5,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%retaliate% 3"
            ]
          }
        },
        {
          "level": 6,
          "normal": {
            "health": 11,
            "move": 5,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%retaliate% 2"
            ]
          },
          "elite": {
            "health": 15,
            "move": 6,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%retaliate% 3"
            ]
          }
        },
        {
          "level": 7,
          "normal": {
            "health": 15,
            "move": 5,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%retaliate% 2"
            ]
          },
          "elite": {
            "health": 15,
            "move": 6,
            "attack": 5,
            "range": 0,
            "attributes": [
              "%retaliate% 4"
            ]
          }
        }
      ]
    },
    "Inox Archer": {
      "standeeCount": 6,
      "level": [
        {
          "level": 0,
          "normal": {
            "health": 5,
            "move": 2,
            "attack": 2,
            "range": 2,
            "attributes": []
          },
          "elite": {
            "health": 7,
            "move": 2,
            "attack": 3,
            "range": 3,
            "attributes": []
          }
        },
        {
          "level": 1,
          "normal": {
            "health": 6,
            "move": 2,
            "attack": 2,
            "range": 3,
            "attributes": []
          },
          "elite": {
            "health": 8,
            "move": 2,
            "attack": 3,
            "range": 4,
            "attributes": []
          }
        },
        {
          "level": 2,
          "normal": {
            "health": 8,
            "move": 2,
            "attack": 2,
            "range": 3,
            "attributes": []
          },
          "elite": {
            "health": 11,
            "move": 2,
            "attack": 3,
            "range": 4,
            "attributes": []
          }
        },
        {
          "level": 3,
          "normal": {
            "health": 9,
            "move": 2,
            "attack": 3,
            "range": 3,
            "attributes": []
          },
          "elite": {
            "health": 13,
            "move": 2,
            "attack": 4,
            "range": 4,
            "attributes": []
          }
        },
        {
          "level": 4,
          "normal": {
            "health": 10,
            "move": 3,
            "attack": 3,
            "range": 3,
            "attributes": []
          },
          "elite": {
            "health": 14,
            "move": 3,
            "attack": 4,
            "range": 4,
            "attributes": [
              "%wound%"
            ]
          }
        },
        {
          "level": 5,
          "normal": {
            "health": 12,
            "move": 3,
            "attack": 3,
            "range": 4,
            "attributes": []
          },
          "elite": {
            "health": 17,
            "move": 3,
            "attack": 4,
            "range": 5,
            "attributes": [
              "%wound%"
            ]
          }
        },
        {
          "level": 6,
          "normal": {
            "health": 12,
            "move": 3,
            "attack": 4,
            "range": 4,
            "attributes": [
              "%wound%"
            ]
          },
          "elite": {
            "health": 19,
            "move": 3,
            "attack": 5,
            "range": 5,
            "attributes": [
              "%wound%"
            ]
          }
        },
        {
          "level": 7,
          "normal": {
            "health": 15,
            "move": 3,
            "attack": 4,
            "range": 4,
            "attributes": [
              "%wound%"
            ]
          },
          "elite": {
            "health": 23,
            "move": 3,
            "attack": 5,
            "range": 5,
            "attributes": [
              "%wound%"
            ]
          }
        }
      ]
    },
    "Inox Guard": {
      "standeeCount": 6,
      "level": [
        {
          "level": 0,
          "normal": {
            "health": 5,
            "move": 2,
            "attack": 2,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 9,
            "move": 1,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%retaliate% 1"
            ]
          }
        },
        {
          "level": 1,
          "normal": {
            "health": 8,
            "move": 2,
            "attack": 2,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 10,
            "move": 2,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%retaliate% 2"
            ]
          }
        },
        {
          "level": 2,
          "normal": {
            "health": 9,
            "move": 2,
            "attack": 3,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 12,
            "move": 2,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%retaliate% 2"
            ]
          }
        },
        {
          "level": 3,
          "normal": {
            "health": 11,
            "move": 3,
            "attack": 3,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 15,
            "move": 2,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%retaliate% 3"
            ]
          }
        },
        {
          "level": 4,
          "normal": {
            "health": 12,
            "move": 3,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%retaliate% 1"
            ]
          },
          "elite": {
            "health": 17,
            "move": 2,
            "attack": 5,
            "range": 0,
            "attributes": [
              "%retaliate% 3"
            ]
          }
        },
        {
          "level": 5,
          "normal": {
            "health": 13,
            "move": 3,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%retaliate% 1"
            ]
          },
          "elite": {
            "health": 19,
            "move": 2,
            "attack": 5,
            "range": 0,
            "attributes": [
              "%retaliate% 4"
            ]
          }
        },
        {
          "level": 6,
          "normal": {
            "health": 16,
            "move": 3,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%retaliate% 1"
            ]
          },
          "elite": {
            "health": 21,
            "move": 3,
            "attack": 5,
            "range": 0,
            "attributes": [
              "%retaliate% 4"
            ]
          }
        },
        {
          "level": 7,
          "normal": {
            "health": 19,
            "move": 3,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%retaliate% 2"
            ]
          },
          "elite": {
            "health": 23,
            "move": 3,
            "attack": 6,
            "range": 0,
            "attributes": [
              "%retaliate% 4"
            ]
          }
        }
      ]
    },
    "Inox Shaman": {
      "standeeCount": 4,
      "level": [
        {
          "level": 0,
          "normal": {
            "health": 4,
            "move": 1,
            "attack": 2,
            "range": 3,
            "attributes": []
          },
          "elite": {
            "health": 6,
            "move": 2,
            "attack": 3,
            "range": 3,
            "attributes": []
          }
        },
        {
          "level": 1,
          "normal": {
            "health": 6,
            "move": 1,
            "attack": 2,
            "range": 3,
            "attributes": []
          },
          "elite": {
            "health": 9,
            "move": 2,
            "attack": 3,
            "range": 3,
            "attributes": []
          }
        },
        {
          "level": 2,
          "normal": {
            "health": 7,
            "move": 2,
            "attack": 2,
            "range": 3,
            "attributes": []
          },
          "elite": {
            "health": 11,
            "move": 3,
            "attack": 3,
            "range": 3,
            "attributes": []
          }
        },
        {
          "level": 3,
          "normal": {
            "health": 9,
            "move": 2,
            "attack": 2,
            "range": 4,
            "attributes": []
          },
          "elite": {
            "health": 14,
            "move": 3,
            "attack": 3,
            "range": 4,
            "attributes": []
          }
        },
        {
          "level": 4,
          "normal": {
            "health": 10,
            "move": 2,
            "attack": 3,
            "range": 4,
            "attributes": []
          },
          "elite": {
            "health": 16,
            "move": 3,
            "attack": 4,
            "range": 4,
            "attributes": []
          }
        },
        {
          "level": 5,
          "normal": {
            "health": 13,
            "move": 2,
            "attack": 3,
            "range": 4,
            "attributes": []
          },
          "elite": {
            "health": 20,
            "move": 3,
            "attack": 4,
            "range": 4,
            "attributes": []
          }
        },
        {
          "level": 6,
          "normal": {
            "health": 15,
            "move": 3,
            "attack": 3,
            "range": 4,
            "attributes": []
          },
          "elite": {
            "health": 24,
            "move": 4,
            "attack": 4,
            "range": 4,
            "attributes": []
          }
        },
        {
          "level": 7,
          "normal": {
            "health": 16,
            "move": 3,
            "attack": 4,
            "range": 4,
            "attributes": []
          },
          "elite": {
            "health": 27,
            "move": 4,
            "attack": 5,
            "range": 4,
            "attributes": []
          }
        }
      ]
    },
    "Living Bones": {
      "standeeCount": 10,
      "level": [
        {
          "level": 0,
          "normal": {
            "health": 5,
            "move": 2,
            "attack": 1,
            "range": 0,
            "attributes": [
              "%target% 2"
            ]
          },
          "elite": {
            "health": 6,
            "move": 4,
            "attack": 2,
            "range": 0,
            "attributes": [
              "%target% 2"
            ]
          }
        },
        {
          "level": 1,
          "normal": {
            "health": 5,
            "move": 3,
            "attack": 1,
            "range": 0,
            "attributes": [
              "%target% 2",
              "%shield% 1"
            ]
          },
          "elite": {
            "health": 6,
            "move": 4,
            "attack": 2,
            "range": 0,
            "attributes": [
              "%target% 3",
              "%shield% 1"
            ]
          }
        },
        {
          "level": 2,
          "normal": {
            "health": 5,
            "move": 3,
            "attack": 2,
            "range": 0,
            "attributes": [
              "%target% 2",
              "%shield% 1"
            ]
          },
          "elite": {
            "health": 7,
            "move": 4,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%target% 3",
              "%shield% 1"
            ]
          }
        },
        {
          "level": 3,
          "normal": {
            "health": 7,
            "move": 3,
            "attack": 2,
            "range": 0,
            "attributes": [
              "%target% 2",
              "%shield% 1"
            ]
          },
          "elite": {
            "health": 10,
            "move": 4,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%target% 3",
              "%shield% 1"
            ]
          }
        },
        {
          "level": 4,
          "normal": {
            "health": 7,
            "move": 3,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%target% 2",
              "%shield% 1"
            ]
          },
          "elite": {
            "health": 11,
            "move": 4,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%target% 3",
              "%shield% 1"
            ]
          }
        },
        {
          "level": 5,
          "normal": {
            "health": 9,
            "move": 3,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%target% 2",
              "%shield% 1"
            ]
          },
          "elite": {
            "health": 11,
            "move": 4,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%target% 3",
              "%shield% 2"
            ]
          }
        },
        {
          "level": 6,
          "normal": {
            "health": 10,
            "move": 4,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%target% 2",
              "%shield% 1"
            ]
          },
          "elite": {
            "health": 11,
            "move": 6,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%target% 3",
              "%shield% 2"
            ]
          }
        },
        {
          "level": 7,
          "normal": {
            "health": 13,
            "move": 4,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%target% 2",
              "%shield% 1"
            ]
          },
          "elite": {
            "health": 14,
            "move": 6,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%target% 3",
              "%shield% 2"
            ]
          }
        }
      ]
    },
    "Living Corpse": {
      "standeeCount": 6,
      "level": [
        {
          "level": 0,
          "normal": {
            "health": 5,
            "move": 1,
            "attack": 3,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 10,
            "move": 1,
            "attack": 3,
            "range": 0,
            "attributes": []
          }
        },
        {
          "level": 1,
          "normal": {
            "health": 7,
            "move": 1,
            "attack": 3,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 10,
            "move": 1,
            "attack": 4,
            "range": 0,
            "attributes": []
          }
        },
        {
          "level": 2,
          "normal": {
            "health": 9,
            "move": 1,
            "attack": 3,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 13,
            "move": 1,
            "attack": 4,
            "range": 0,
            "attributes": []
          }
        },
        {
          "level": 3,
          "normal": {
            "health": 10,
            "move": 1,
            "attack": 4,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 13,
            "move": 2,
            "attack": 5,
            "range": 0,
            "attributes": []
          }
        },
        {
          "level": 4,
          "normal": {
            "health": 11,
            "move": 2,
            "attack": 4,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 15,
            "move": 2,
            "attack": 5,
            "range": 0,
            "attributes": [
              "%poison%"
            ]
          }
        },
        {
          "level": 5,
          "normal": {
            "health": 13,
            "move": 2,
            "attack": 4,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 17,
            "move": 2,
            "attack": 6,
            "range": 0,
            "attributes": [
              "%poison%"
            ]
          }
        },
        {
          "level": 6,
          "normal": {
            "health": 14,
            "move": 2,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%poison%"
            ]
          },
          "elite": {
            "health": 21,
            "move": 2,
            "attack": 6,
            "range": 0,
            "attributes": [
              "%poison%"
            ]
          }
        },
        {
          "level": 7,
          "normal": {
            "health": 15,
            "move": 2,
            "attack": 5,
            "range": 0,
            "attributes": [
              "%poison%"
            ]
          },
          "elite": {
            "health": 25,
            "move": 2,
            "attack": 6,
            "range": 0,
            "attributes": [
              "%poison%"
            ]
          }
        }
      ]
    },
    "Living Spirit": {
      "standeeCount": 6,
      "level": [
        {
          "level": 0,
          "normal": {
            "health": 2,
            "move": 2,
            "attack": 2,
            "range": 2,
            "attributes": [
              "%shield% 1"
            ]
          },
          "elite": {
            "health": 3,
            "move": 3,
            "attack": 3,
            "range": 3,
            "attributes": [
              "%shield% 2"
            ]
          }
        },
        {
          "level": 1,
          "normal": {
            "health": 2,
            "move": 2,
            "attack": 2,
            "range": 2,
            "attributes": [
              "%shield% 2"
            ]
          },
          "elite": {
            "health": 3,
            "move": 3,
            "attack": 3,
            "range": 3,
            "attributes": [
              "%shield% 3"
            ]
          }
        },
        {
          "level": 2,
          "normal": {
            "health": 2,
            "move": 3,
            "attack": 2,
            "range": 3,
            "attributes": [
              "%shield% 2"
            ]
          },
          "elite": {
            "health": 3,
            "move": 4,
            "attack": 3,
            "range": 4,
            "attributes": [
              "%shield% 3"
            ]
          }
        },
        {
          "level": 3,
          "normal": {
            "health": 3,
            "move": 3,
            "attack": 3,
            "range": 3,
            "attributes": [
              "%shield% 2"
            ]
          },
          "elite": {
            "health": 4,
            "move": 4,
            "attack": 4,
            "range": 4,
            "attributes": [
              "%shield% 3"
            ]
          }
        },
        {
          "level": 4,
          "normal": {
            "health": 3,
            "move": 3,
            "attack": 3,
            "range": 3,
            "attributes": [
              "%shield% 3"
            ]
          },
          "elite": {
            "health": 4,
            "move": 4,
            "attack": 4,
            "range": 4,
            "attributes": [
              "%shield% 4"
            ]
          }
        },
        {
          "level": 5,
          "normal": {
            "health": 4,
            "move": 3,
            "attack": 3,
            "range": 4,
            "attributes": [
              "%shield% 3"
            ]
          },
          "elite": {
            "health": 6,
            "move": 4,
            "attack": 4,
            "range": 4,
            "attributes": [
              "%shield% 4"
            ]
          }
        },
        {
          "level": 6,
          "normal": {
            "health": 4,
            "move": 3,
            "attack": 4,
            "range": 4,
            "attributes": [
              "%shield% 3"
            ]
          },
          "elite": {
            "health": 7,
            "move": 4,
            "attack": 5,
            "range": 5,
            "attributes": [
              "%shield% 4"
            ]
          }
        },
        {
          "level": 7,
          "normal": {
            "health": 6,
            "move": 3,
            "attack": 4,
            "range": 4,
            "attributes": [
              "%shield% 3"
            ]
          },
          "elite": {
            "health": 9,
            "move": 4,
            "attack": 5,
            "range": 5,
            "attributes": [
              "%shield% 4"
            ]
          }
        }
      ]
    },
    "Lurker": {
      "standeeCount": 6,
      "level": [
        {
          "level": 0,
          "normal": {
            "health": 5,
            "move": 2,
            "attack": 2,
            "range": 0,
            "attributes": [
              "%target% 2"
            ]
          },
          "elite": {
            "health": 7,
            "move": 2,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%target% 2",
              "%shield% 1"
            ]
          }
        },
        {
          "level": 1,
          "normal": {
            "health": 7,
            "move": 2,
            "attack": 2,
            "range": 0,
            "attributes": [
              "%target% 2",
              "%pierce% 1"
            ]
          },
          "elite": {
            "health": 9,
            "move": 2,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%target% 2",
              "%pierce% 1",
              "%shield% 1"
            ]
          }
        },
        {
          "level": 2,
          "normal": {
            "health": 9,
            "move": 3,
            "attack": 2,
            "range": 0,
            "attributes": [
              "%target% 2",
              "%pierce% 1"
            ]
          },
          "elite": {
            "health": 12,
            "move": 3,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%target% 2",
              "%pierce% 2",
              "%shield% 1"
            ]
          }
        },
        {
          "level": 3,
          "normal": {
            "health": 10,
            "move": 3,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%target% 2",
              "%pierce% 2"
            ]
          },
          "elite": {
            "health": 14,
            "move": 3,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%target% 2",
              "%pierce% 2",
              "%shield% 1"
            ]
          }
        },
        {
          "level": 4,
          "normal": {
            "health": 10,
            "move": 3,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%target% 2",
              "%pierce% 2",
              "%shield% 1"
            ]
          },
          "elite": {
            "health": 14,
            "move": 3,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%target% 2",
              "%pierce% 3",
              "%shield% 2"
            ]
          }
        },
        {
          "level": 5,
          "normal": {
            "health": 11,
            "move": 3,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%target% 2",
              "%pierce% 2",
              "%shield% 1"
            ]
          },
          "elite": {
            "health": 15,
            "move": 3,
            "attack": 5,
            "range": 0,
            "attributes": [
              "%target% 2",
              "%pierce% 3",
              "%shield% 2"
            ]
          }
        },
        {
          "level": 6,
          "normal": {
            "health": 12,
            "move": 4,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%target% 2",
              "%pierce% 3",
              "%shield% 1"
            ]
          },
          "elite": {
            "health": 16,
            "move": 4,
            "attack": 5,
            "range": 0,
            "attributes": [
              "%target% 2",
              "%pierce% 4",
              "%shield% 2"
            ]
          }
        },
        {
          "level": 7,
          "normal": {
            "health": 14,
            "move": 4,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%target% 2",
              "%pierce% 3",
              "%shield% 1"
            ]
          },
          "elite": {
            "health": 18,
            "move": 4,
            "attack": 5,
            "range": 0,
            "attributes": [
              "%target% 2",
              "%pierce% 4",
              "%shield% 2"
            ]
          }
        }
      ]
    },
    "Ooze": {
      "standeeCount": 10,
      "level": [
        {
          "level": 0,
          "normal": {
            "health": 4,
            "move": 1,
            "attack": 2,
            "range": 2,
            "attributes": []
          },
          "elite": {
            "health": 8,
            "move": 1,
            "attack": 2,
            "range": 3,
            "attributes": []
          }
        },
        {
          "level": 1,
          "normal": {
            "health": 5,
            "move": 1,
            "attack": 2,
            "range": 2,
            "attributes": [
              "%shield% 1"
            ]
          },
          "elite": {
            "health": 9,
            "move": 1,
            "attack": 2,
            "range": 3,
            "attributes": [
              "%shield% 1"
            ]
          }
        },
        {
          "level": 2,
          "normal": {
            "health": 7,
            "move": 1,
            "attack": 2,
            "range": 3,
            "attributes": [
              "%shield% 1"
            ]
          },
          "elite": {
            "health": 11,
            "move": 1,
            "attack": 3,
            "range": 3,
            "attributes": [
              "%shield% 1"
            ]
          }
        },
        {
          "level": 3,
          "normal": {
            "health": 8,
            "move": 1,
            "attack": 3,
            "range": 3,
            "attributes": [
              "%shield% 1"
            ]
          },
          "elite": {
            "health": 11,
            "move": 2,
            "attack": 3,
            "range": 4,
            "attributes": [
              "%poison%",
              "%shield% 1"
            ]
          }
        },
        {
          "level": 4,
          "normal": {
            "health": 9,
            "move": 2,
            "attack": 3,
            "range": 3,
            "attributes": [
              "%shield% 1"
            ]
          },
          "elite": {
            "health": 13,
            "move": 2,
            "attack": 4,
            "range": 4,
            "attributes": [
              "%poison%",
              "%shield% 1"
            ]
          }
        },
        {
          "level": 5,
          "normal": {
            "health": 10,
            "move": 2,
            "attack": 3,
            "range": 3,
            "attributes": [
              "%poison%",
              "%shield% 1"
            ]
          },
          "elite": {
            "health": 15,
            "move": 3,
            "attack": 4,
            "range": 4,
            "attributes": [
              "%poison%",
              "%shield% 1"
            ]
          }
        },
        {
          "level": 6,
          "normal": {
            "health": 12,
            "move": 2,
            "attack": 4,
            "range": 3,
            "attributes": [
              "%poison%",
              "%shield% 1"
            ]
          },
          "elite": {
            "health": 16,
            "move": 3,
            "attack": 4,
            "range": 4,
            "attributes": [
              "%poison%",
              "%shield% 2"
            ]
          }
        },
        {
          "level": 7,
          "normal": {
            "health": 14,
            "move": 2,
            "attack": 4,
            "range": 3,
            "attributes": [
              "%poison%",
              "%shield% 1"
            ]
          },
          "elite": {
            "health": 18,
            "move": 3,
            "attack": 5,
            "range": 4,
            "attributes": [
              "%poison%",
              "%shield% 2"
            ]
          }
        }
      ]
    },
    "Night Demon": {
      "standeeCount": 6,
      "level": [
        {
          "level": 0,
          "normal": {
            "health": 3,
            "move": 3,
            "attack": 3,
            "range": 0,
            "attributes": [
              "Attackers gain Disadvantage"
            ]
          },
          "elite": {
            "health": 5,
            "move": 4,
            "attack": 4,
            "range": 0,
            "attributes": [
              "Attackers gain Disadvantage"
            ]
          }
        },
        {
          "level": 1,
          "normal": {
            "health": 5,
            "move": 3,
            "attack": 3,
            "range": 0,
            "attributes": [
              "Attackers gain Disadvantage"
            ]
          },
          "elite": {
            "health": 8,
            "move": 4,
            "attack": 4,
            "range": 0,
            "attributes": [
              "Attackers gain Disadvantage"
            ]
          }
        },
        {
          "level": 2,
          "normal": {
            "health": 6,
            "move": 3,
            "attack": 4,
            "range": 0,
            "attributes": [
              "Attackers gain Disadvantage"
            ]
          },
          "elite": {
            "health": 11,
            "move": 4,
            "attack": 4,
            "range": 0,
            "attributes": [
              "Attackers gain Disadvantage"
            ]
          }
        },
        {
          "level": 3,
          "normal": {
            "health": 7,
            "move": 4,
            "attack": 4,
            "range": 0,
            "attributes": [
              "Attackers gain Disadvantage"
            ]
          },
          "elite": {
            "health": 13,
            "move": 4,
            "attack": 5,
            "range": 0,
            "attributes": [
              "Attackers gain Disadvantage"
            ]
          }
        },
        {
          "level": 4,
          "normal": {
            "health": 8,
            "move": 4,
            "attack": 5,
            "range": 0,
            "attributes": [
              "Attackers gain Disadvantage"
            ]
          },
          "elite": {
            "health": 15,
            "move": 5,
            "attack": 5,
            "range": 0,
            "attributes": [
              "Attackers gain Disadvantage"
            ]
          }
        },
        {
          "level": 5,
          "normal": {
            "health": 11,
            "move": 4,
            "attack": 5,
            "range": 0,
            "attributes": [
              "Attackers gain Disadvantage"
            ]
          },
          "elite": {
            "health": 17,
            "move": 5,
            "attack": 6,
            "range": 0,
            "attributes": [
              "Attackers gain Disadvantage"
            ]
          }
        },
        {
          "level": 6,
          "normal": {
            "health": 14,
            "move": 4,
            "attack": 5,
            "range": 0,
            "attributes": [
              "Attackers gain Disadvantage"
            ]
          },
          "elite": {
            "health": 21,
            "move": 5,
            "attack": 6,
            "range": 0,
            "attributes": [
              "Attackers gain Disadvantage"
            ]
          }
        },
        {
          "level": 7,
          "normal": {
            "health": 15,
            "move": 4,
            "attack": 6,
            "range": 0,
            "attributes": [
              "Attackers gain Disadvantage"
            ]
          },
          "elite": {
            "health": 21,
            "move": 5,
            "attack": 8,
            "range": 0,
            "attributes": [
              "Attackers gain Disadvantage"
            ]
          }
        }
      ]
    },
    "Rending Drake": {
      "standeeCount": 6,
      "level": [
        {
          "level": 0,
          "normal": {
            "health": 5,
            "move": 3,
            "attack": 3,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 7,
            "move": 4,
            "attack": 4,
            "range": 0,
            "attributes": []
          }
        },
        {
          "level": 1,
          "normal": {
            "health": 6,
            "move": 3,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%wound%"
            ]
          },
          "elite": {
            "health": 7,
            "move": 4,
            "attack": 5,
            "range": 0,
            "attributes": [
              "%wound%"
            ]
          }
        },
        {
          "level": 2,
          "normal": {
            "health": 7,
            "move": 4,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%wound%"
            ]
          },
          "elite": {
            "health": 9,
            "move": 5,
            "attack": 5,
            "range": 0,
            "attributes": [
              "%wound%"
            ]
          }
        },
        {
          "level": 3,
          "normal": {
            "health": 7,
            "move": 4,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%wound%"
            ]
          },
          "elite": {
            "health": 10,
            "move": 5,
            "attack": 6,
            "range": 0,
            "attributes": [
              "%wound%"
            ]
          }
        },
        {
          "level": 4,
          "normal": {
            "health": 9,
            "move": 4,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%wound%"
            ]
          },
          "elite": {
            "health": 11,
            "move": 6,
            "attack": 6,
            "range": 0,
            "attributes": [
              "%wound%"
            ]
          }
        },
        {
          "level": 5,
          "normal": {
            "health": 10,
            "move": 4,
            "attack": 5,
            "range": 0,
            "attributes": [
              "%wound%"
            ]
          },
          "elite": {
            "health": 14,
            "move": 6,
            "attack": 6,
            "range": 0,
            "attributes": [
              "%wound%"
            ]
          }
        },
        {
          "level": 6,
          "normal": {
            "health": 11,
            "move": 5,
            "attack": 5,
            "range": 0,
            "attributes": [
              "%wound%"
            ]
          },
          "elite": {
            "health": 15,
            "move": 6,
            "attack": 7,
            "range": 0,
            "attributes": [
              "%wound%"
            ]
          }
        },
        {
          "level": 7,
          "normal": {
            "health": 14,
            "move": 5,
            "attack": 5,
            "range": 0,
            "attributes": [
              "%wound%"
            ]
          },
          "elite": {
            "health": 18,
            "move": 6,
            "attack": 7,
            "range": 0,
            "attributes": [
              "%wound%"
            ]
          }
        }
      ]
    },
    "Savvas Icestorm": {
      "standeeCount": 4,
      "level": [
        {
          "level": 0,
          "normal": {
            "health": 7,
            "move": 2,
            "attack": 2,
            "range": 3,
            "attributes": [
              "%pierce% 3"
            ]
          },
          "elite": {
            "health": 12,
            "move": 2,
            "attack": 3,
            "range": 4,
            "attributes": [
              "%pierce% 3"
            ]
          }
        },
        {
          "level": 1,
          "normal": {
            "health": 10,
            "move": 2,
            "attack": 2,
            "range": 4,
            "attributes": [
              "%pierce% 3"
            ]
          },
          "elite": {
            "health": 12,
            "move": 2,
            "attack": 3,
            "range": 5,
            "attributes": [
              "%pierce% 3",
              "%shield% 1"
            ]
          }
        },
        {
          "level": 2,
          "normal": {
            "health": 12,
            "move": 3,
            "attack": 2,
            "range": 4,
            "attributes": [
              "%pierce% 3"
            ]
          },
          "elite": {
            "health": 15,
            "move": 3,
            "attack": 3,
            "range": 5,
            "attributes": [
              "%pierce% 3",
              "%shield% 1"
            ]
          }
        },
        {
          "level": 3,
          "normal": {
            "health": 12,
            "move": 3,
            "attack": 3,
            "range": 4,
            "attributes": [
              "%pierce% 3",
              "%shield% 1"
            ]
          },
          "elite": {
            "health": 18,
            "move": 3,
            "attack": 4,
            "range": 6,
            "attributes": [
              "%pierce% 3",
              "%shield% 1"
            ]
          }
        },
        {
          "level": 4,
          "normal": {
            "health": 14,
            "move": 3,
            "attack": 3,
            "range": 5,
            "attributes": [
              "%pierce% 3",
              "%shield% 1"
            ]
          },
          "elite": {
            "health": 19,
            "move": 4,
            "attack": 4,
            "range": 6,
            "attributes": [
              "%pierce% 3",
              "%shield% 2"
            ]
          }
        },
        {
          "level": 5,
          "normal": {
            "health": 16,
            "move": 3,
            "attack": 4,
            "range": 5,
            "attributes": [
              "%pierce% 3",
              "%shield% 1"
            ]
          },
          "elite": {
            "health": 21,
            "move": 4,
            "attack": 5,
            "range": 6,
            "attributes": [
              "%pierce% 3",
              "%shield% 2"
            ]
          }
        },
        {
          "level": 6,
          "normal": {
            "health": 16,
            "move": 3,
            "attack": 4,
            "range": 5,
            "attributes": [
              "%pierce% 3",
              "%shield% 2"
            ]
          },
          "elite": {
            "health": 23,
            "move": 4,
            "attack": 6,
            "range": 6,
            "attributes": [
              "%pierce% 3",
              "%shield% 2"
            ]
          }
        },
        {
          "level": 7,
          "normal": {
            "health": 17,
            "move": 4,
            "attack": 4,
            "range": 6,
            "attributes": [
              "%pierce% 3",
              "%shield% 2"
            ]
          },
          "elite": {
            "health": 24,
            "move": 4,
            "attack": 6,
            "range": 6,
            "attributes": [
              "%pierce% 4",
              "%shield% 3"
            ]
          }
        }
      ]
    },
    "Savvas Lavaflow": {
      "standeeCount": 4,
      "level": [
        {
          "level": 0,
          "normal": {
            "health": 8,
            "move": 3,
            "attack": 2,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 13,
            "move": 3,
            "attack": 3,
            "range": 0,
            "attributes": []
          }
        },
        {
          "level": 1,
          "normal": {
            "health": 9,
            "move": 3,
            "attack": 2,
            "range": 0,
            "attributes": [
              "%poison%"
            ]
          },
          "elite": {
            "health": 15,
            "move": 3,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%wound%"
            ]
          }
        },
        {
          "level": 2,
          "normal": {
            "health": 11,
            "move": 3,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%poison%"
            ]
          },
          "elite": {
            "health": 18,
            "move": 3,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%poison%",
              "%wound%"
            ]
          }
        },
        {
          "level": 3,
          "normal": {
            "health": 14,
            "move": 3,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%poison%"
            ]
          },
          "elite": {
            "health": 21,
            "move": 3,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%poison%",
              "%wound%"
            ]
          }
        },
        {
          "level": 4,
          "normal": {
            "health": 16,
            "move": 3,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%poison%"
            ]
          },
          "elite": {
            "health": 24,
            "move": 4,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%poison%",
              "%wound%"
            ]
          }
        },
        {
          "level": 5,
          "normal": {
            "health": 18,
            "move": 3,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%poison%",
              "%wound%"
            ]
          },
          "elite": {
            "health": 27,
            "move": 4,
            "attack": 5,
            "range": 0,
            "attributes": [
              "%poison%",
              "%wound%"
            ]
          }
        },
        {
          "level": 6,
          "normal": {
            "health": 20,
            "move": 4,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%poison%",
              "%wound%"
            ]
          },
          "elite": {
            "health": 30,
            "move": 4,
            "attack": 6,
            "range": 0,
            "attributes": [
              "%poison%",
              "%wound%"
            ]
          }
        },
        {
          "level": 7,
          "normal": {
            "health": 24,
            "move": 4,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%poison%",
              "%wound%"
            ]
          },
          "elite": {
            "health": 35,
            "move": 4,
            "attack": 6,
            "range": 0,
            "attributes": [
              "%poison%",
              "%wound%"
            ]
          }
        }
      ]
    },
    "Spitting Drake": {
      "standeeCount": 6,
      "level": [
        {
          "level": 0,
          "normal": {
            "health": 5,
            "move": 3,
            "attack": 3,
            "range": 3,
            "attributes": []
          },
          "elite": {
            "health": 8,
            "move": 3,
            "attack": 4,
            "range": 4,
            "attributes": []
          }
        },
        {
          "level": 1,
          "normal": {
            "health": 6,
            "move": 3,
            "attack": 3,
            "range": 3,
            "attributes": []
          },
          "elite": {
            "health": 9,
            "move": 3,
            "attack": 4,
            "range": 4,
            "attributes": [
              "%muddle%"
            ]
          }
        },
        {
          "level": 2,
          "normal": {
            "health": 8,
            "move": 3,
            "attack": 3,
            "range": 3,
            "attributes": [
              "%muddle%"
            ]
          },
          "elite": {
            "health": 10,
            "move": 3,
            "attack": 5,
            "range": 4,
            "attributes": [
              "%muddle%"
            ]
          }
        },
        {
          "level": 3,
          "normal": {
            "health": 8,
            "move": 3,
            "attack": 4,
            "range": 4,
            "attributes": [
              "%muddle%"
            ]
          },
          "elite": {
            "health": 12,
            "move": 3,
            "attack": 5,
            "range": 5,
            "attributes": [
              "%muddle%"
            ]
          }
        },
        {
          "level": 4,
          "normal": {
            "health": 9,
            "move": 4,
            "attack": 4,
            "range": 4,
            "attributes": [
              "%muddle%"
            ]
          },
          "elite": {
            "health": 14,
            "move": 4,
            "attack": 5,
            "range": 5,
            "attributes": [
              "%muddle%"
            ]
          }
        },
        {
          "level": 5,
          "normal": {
            "health": 12,
            "move": 4,
            "attack": 4,
            "range": 4,
            "attributes": [
              "%muddle%"
            ]
          },
          "elite": {
            "health": 16,
            "move": 4,
            "attack": 6,
            "range": 5,
            "attributes": [
              "%muddle%"
            ]
          }
        },
        {
          "level": 6,
          "normal": {
            "health": 13,
            "move": 4,
            "attack": 5,
            "range": 4,
            "attributes": [
              "%muddle%"
            ]
          },
          "elite": {
            "health": 19,
            "move": 4,
            "attack": 6,
            "range": 5,
            "attributes": [
              "%muddle%"
            ]
          }
        },
        {
          "level": 7,
          "normal": {
            "health": 16,
            "move": 4,
            "attack": 5,
            "range": 4,
            "attributes": [
              "%muddle%"
            ]
          },
          "elite": {
            "health": 21,
            "move": 4,
            "attack": 7,
            "range": 5,
            "attributes": [
              "%muddle%"
            ]
          }
        }
      ]
    },
    "Stone Golem": {
      "standeeCount": 6,
      "level": [
        {
          "level": 0,
          "normal": {
            "health": 10,
            "move": 1,
            "attack": 3,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 10,
            "move": 2,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%shield% 1"
            ]
          }
        },
        {
          "level": 1,
          "normal": {
            "health": 10,
            "move": 1,
            "attack": 3,
            "range": 0,
            "attributes": [
              "%shield% 1"
            ]
          },
          "elite": {
            "health": 11,
            "move": 2,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%shield% 2"
            ]
          }
        },
        {
          "level": 2,
          "normal": {
            "health": 11,
            "move": 1,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%shield% 1"
            ]
          },
          "elite": {
            "health": 14,
            "move": 2,
            "attack": 5,
            "range": 0,
            "attributes": [
              "%shield% 2"
            ]
          }
        },
        {
          "level": 3,
          "normal": {
            "health": 11,
            "move": 1,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%shield% 2"
            ]
          },
          "elite": {
            "health": 15,
            "move": 2,
            "attack": 5,
            "range": 0,
            "attributes": [
              "%shield% 3"
            ]
          }
        },
        {
          "level": 4,
          "normal": {
            "health": 12,
            "move": 2,
            "attack": 4,
            "range": 0,
            "attributes": [
              "%shield% 2"
            ]
          },
          "elite": {
            "health": 17,
            "move": 2,
            "attack": 6,
            "range": 0,
            "attributes": [
              "%shield% 3"
            ]
          }
        },
        {
          "level": 5,
          "normal": {
            "health": 13,
            "move": 2,
            "attack": 5,
            "range": 0,
            "attributes": [
              "%shield% 2"
            ]
          },
          "elite": {
            "health": 19,
            "move": 3,
            "attack": 6,
            "range": 0,
            "attributes": [
              "%shield% 3"
            ]
          }
        },
        {
          "level": 6,
          "normal": {
            "health": 16,
            "move": 2,
            "attack": 5,
            "range": 0,
            "attributes": [
              "%shield% 2"
            ]
          },
          "elite": {
            "health": 20,
            "move": 3,
            "attack": 7,
            "range": 0,
            "attributes": [
              "%shield% 3"
            ]
          }
        },
        {
          "level": 7,
          "normal": {
            "health": 16,
            "move": 2,
            "attack": 5,
            "range": 0,
            "attributes": [
              "%shield% 3"
            ]
          },
          "elite": {
            "health": 21,
            "move": 3,
            "attack": 7,
            "range": 0,
            "attributes": [
              "%shield% 4"
            ]
          }
        }
      ]
    },
    "Sun Demon": {
      "standeeCount": 6,
      "level": [
        {
          "level": 0,
          "normal": {
            "health": 5,
            "move": 2,
            "attack": 2,
            "range": 0,
            "attributes": [
              "Advantage",
              "%shield% 1"
            ]
          },
          "elite": {
            "health": 9,
            "move": 2,
            "attack": 3,
            "range": 0,
            "attributes": [
              "Advantage",
              "%shield% 1"
            ]
          }
        },
        {
          "level": 1,
          "normal": {
            "health": 7,
            "move": 2,
            "attack": 2,
            "range": 0,
            "attributes": [
              "Advantage",
              "%shield% 1"
            ]
          },
          "elite": {
            "health": 12,
            "move": 2,
            "attack": 3,
            "range": 0,
            "attributes": [
              "Advantage",
              "%shield% 1"
            ]
          }
        },
        {
          "level": 2,
          "normal": {
            "health": 9,
            "move": 2,
            "attack": 2,
            "range": 0,
            "attributes": [
              "Advantage",
              "%shield% 1"
            ]
          },
          "elite": {
            "health": 13,
            "move": 2,
            "attack": 4,
            "range": 0,
            "attributes": [
              "Advantage",
              "%shield% 1"
            ]
          }
        },
        {
          "level": 3,
          "normal": {
            "health": 10,
            "move": 2,
            "attack": 3,
            "range": 0,
            "attributes": [
              "Advantage",
              "%shield% 1"
            ]
          },
          "elite": {
            "health": 15,
            "move": 3,
            "attack": 4,
            "range": 0,
            "attributes": [
              "Advantage",
              "%shield% 1"
            ]
          }
        },
        {
          "level": 4,
          "normal": {
            "health": 11,
            "move": 3,
            "attack": 3,
            "range": 0,
            "attributes": [
              "Advantage",
              "%shield% 1"
            ]
          },
          "elite": {
            "health": 16,
            "move": 3,
            "attack": 5,
            "range": 0,
            "attributes": [
              "Advantage",
              "%shield% 1"
            ]
          }
        },
        {
          "level": 5,
          "normal": {
            "health": 11,
            "move": 3,
            "attack": 3,
            "range": 0,
            "attributes": [
              "Advantage",
              "%shield% 2"
            ]
          },
          "elite": {
            "health": 16,
            "move": 3,
            "attack": 5,
            "range": 0,
            "attributes": [
              "Advantage",
              "%shield% 2"
            ]
          }
        },
        {
          "level": 6,
          "normal": {
            "health": 12,
            "move": 3,
            "attack": 4,
            "range": 0,
            "attributes": [
              "Advantage",
              "%shield% 2"
            ]
          },
          "elite": {
            "health": 18,
            "move": 4,
            "attack": 5,
            "range": 0,
            "attributes": [
              "Advantage",
              "%shield% 2"
            ]
          }
        },
        {
          "level": 7,
          "normal": {
            "health": 15,
            "move": 3,
            "attack": 4,
            "range": 0,
            "attributes": [
              "Advantage",
              "%shield% 2"
            ]
          },
          "elite": {
            "health": 22,
            "move": 4,
            "attack": 5,
            "range": 0,
            "attributes": [
              "Advantage",
              "%shield% 2"
            ]
          }
        }
      ]
    },
    "Vermling Scout": {
      "standeeCount": 10,
      "level": [
        {
          "level": 0,
          "normal": {
            "health": 2,
            "move": 3,
            "attack": 1,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 4,
            "move": 3,
            "attack": 2,
            "range": 0,
            "attributes": []
          }
        },
        {
          "level": 1,
          "normal": {
            "health": 3,
            "move": 3,
            "attack": 1,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 5,
            "move": 3,
            "attack": 2,
            "range": 0,
            "attributes": []
          }
        },
        {
          "level": 2,
          "normal": {
            "health": 3,
            "move": 3,
            "attack": 2,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 5,
            "move": 4,
            "attack": 3,
            "range": 0,
            "attributes": []
          }
        },
        {
          "level": 3,
          "normal": {
            "health": 5,
            "move": 3,
            "attack": 2,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 7,
            "move": 4,
            "attack": 3,
            "range": 0,
            "attributes": []
          }
        },
        {
          "level": 4,
          "normal": {
            "health": 6,
            "move": 3,
            "attack": 3,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 8,
            "move": 4,
            "attack": 4,
            "range": 0,
            "attributes": []
          }
        },
        {
          "level": 5,
          "normal": {
            "health": 8,
            "move": 3,
            "attack": 3,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 11,
            "move": 4,
            "attack": 4,
            "range": 0,
            "attributes": []
          }
        },
        {
          "level": 6,
          "normal": {
            "health": 9,
            "move": 4,
            "attack": 3,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 12,
            "move": 5,
            "attack": 4,
            "range": 0,
            "attributes": []
          }
        },
        {
          "level": 7,
          "normal": {
            "health": 11,
            "move": 4,
            "attack": 3,
            "range": 0,
            "attributes": []
          },
          "elite": {
            "health": 15,
            "move": 5,
            "attack": 4,
            "range": 0,
            "attributes": []
          }
        }
      ]
    },
    "Vermling Shaman": {
      "standeeCount": 10,
      "level": [
        {
          "level": 0,
          "normal": {
            "health": 2,
            "move": 2,
            "attack": 1,
            "range": 3,
            "attributes": [
              "%shield% 2"
            ]
          },
          "elite": {
            "health": 3,
            "move": 3,
            "attack": 2,
            "range": 3,
            "attributes": [
              "%shield% 2"
            ]
          }
        },
        {
          "level": 1,
          "normal": {
            "health": 2,
            "move": 2,
            "attack": 1,
            "range": 3,
            "attributes": [
              "%shield% 3"
            ]
          },
          "elite": {
            "health": 3,
            "move": 3,
            "attack": 2,
            "range": 3,
            "attributes": [
              "%shield% 3"
            ]
          }
        },
        {
          "level": 2,
          "normal": {
            "health": 3,
            "move": 2,
            "attack": 1,
            "range": 4,
            "attributes": [
              "%shield% 3"
            ]
          },
          "elite": {
            "health": 4,
            "move": 3,
            "attack": 2,
            "range": 4,
            "attributes": [
              "%shield% 3"
            ]
          }
        },
        {
          "level": 3,
          "normal": {
            "health": 3,
            "move": 2,
            "attack": 2,
            "range": 4,
            "attributes": [
              "%shield% 3"
            ]
          },
          "elite": {
            "health": 5,
            "move": 3,
            "attack": 3,
            "range": 4,
            "attributes": [
              "%shield% 3"
            ]
          }
        },
        {
          "level": 4,
          "normal": {
            "health": 3,
            "move": 3,
            "attack": 2,
            "range": 4,
            "attributes": [
              "%muddle%",
              "%shield% 3"
            ]
          },
          "elite": {
            "health": 5,
            "move": 3,
            "attack": 3,
            "range": 4,
            "attributes": [
              "%muddle%",
              "%shield% 4"
            ]
          }
        },
        {
          "level": 5,
          "normal": {
            "health": 4,
            "move": 3,
            "attack": 3,
            "range": 4,
            "attributes": [
              "%muddle%",
              "%shield% 3"
            ]
          },
          "elite": {
            "health": 6,
            "move": 3,
            "attack": 4,
            "range": 4,
            "attributes": [
              "%muddle%",
              "%shield% 4"
            ]
          }
        },
        {
          "level": 6,
          "normal": {
            "health": 5,
            "move": 3,
            "attack": 4,
            "range": 4,
            "attributes": [
              "%muddle%",
              "%shield% 3"
            ]
          },
          "elite": {
            "health": 6,
            "move": 3,
            "attack": 4,
            "range": 4,
            "attributes": [
              "%muddle%",
              "%shield% 5"
            ]
          }
        },
        {
          "level": 7,
          "normal": {
            "health": 7,
            "move": 3,
            "attack": 4,
            "range": 4,
            "attributes": [
              "%muddle%",
              "%shield% 3"
            ]
          },
          "elite": {
            "health": 8,
            "move": 3,
            "attack": 4,
            "range": 4,
            "attributes": [
              "%muddle%",
              "%shield% 5"
            ]
          }
        }
      ]
    },
    "Wind Demon": {
      "standeeCount": 6,
      "level": [
        {
          "level": 0,
          "normal": {
            "health": 3,
            "move": 3,
            "attack": 2,
            "range": 3,
            "attributes": [
              "%shield% 1"
            ]
          },
          "elite": {
            "health": 5,
            "move": 4,
            "attack": 3,
            "range": 4,
            "attributes": [
              "%shield% 1"
            ]
          }
        },
        {
          "level": 1,
          "normal": {
            "health": 3,
            "move": 3,
            "attack": 2,
            "range": 3,
            "attributes": [
              "%shield% 2"
            ]
          },
          "elite": {
            "health": 5,
            "move": 4,
            "attack": 3,
            "range": 4,
            "attributes": [
              "%shield% 2"
            ]
          }
        },
        {
          "level": 2,
          "normal": {
            "health": 4,
            "move": 4,
            "attack": 2,
            "range": 3,
            "attributes": [
              "%shield% 2"
            ]
          },
          "elite": {
            "health": 7,
            "move": 5,
            "attack": 3,
            "range": 4,
            "attributes": [
              "%shield% 2"
            ]
          }
        },
        {
          "level": 3,
          "normal": {
            "health": 5,
            "move": 4,
            "attack": 3,
            "range": 3,
            "attributes": [
              "%shield% 2"
            ]
          },
          "elite": {
            "health": 8,
            "move": 5,
            "attack": 4,
            "range": 4,
            "attributes": [
              "%shield% 2"
            ]
          }
        },
        {
          "level": 4,
          "normal": {
            "health": 7,
            "move": 4,
            "attack": 3,
            "range": 3,
            "attributes": [
              "%shield% 2"
            ]
          },
          "elite": {
            "health": 8,
            "move": 5,
            "attack": 4,
            "range": 4,
            "attributes": [
              "%disarm%",
              "%shield% 2"
            ]
          }
        },
        {
          "level": 5,
          "normal": {
            "health": 9,
            "move": 4,
            "attack": 3,
            "range": 4,
            "attributes": [
              "%shield% 2"
            ]
          },
          "elite": {
            "health": 11,
            "move": 5,
            "attack": 4,
            "range": 4,
            "attributes": [
              "%disarm%",
              "%shield% 2"
            ]
          }
        },
        {
          "level": 6,
          "normal": {
            "health": 10,
            "move": 4,
            "attack": 3,
            "range": 4,
            "attributes": [
              "%shield% 3"
            ]
          },
          "elite": {
            "health": 12,
            "move": 5,
            "attack": 4,
            "range": 4,
            "attributes": [
              "%disarm%",
              "%shield% 3"
            ]
          }
        },
        {
          "level": 7,
          "normal": {
            "health": 11,
            "move": 4,
            "attack": 4,
            "range": 4,
            "attributes": [
              "%shield% 3"
            ]
          },
          "elite": {
            "health": 13,
            "move": 5,
            "attack": 5,
            "range": 4,
            "attributes": [
              "%disarm%",
              "%shield% 3"
            ]
          }
        }
      ]
    },
    "Bandit Commander": {
      "standeeCount": 1,
      "isBoss": true,
      "level": [
        {
          "level": 0,
          "health": "8xC",
          "move": 3,
          "attack": 3,
          "range": 0,
          "special1": [
            "Move to next door and reveal room"
          ],
          "special2": [
            "Summon Living Bones"
          ],
          "immunities": [
            "%stun%",
            "%immobilize%",
            "%curse%"
          ],
          "notes": ""
        },
        {
          "level": 1,
          "health": "10xC",
          "move": 3,
          "attack": 3,
          "range": 0,
          "special1": [
            "Move to next door and reveal room"
          ],
          "special2": [
            "Summon Living Bones"
          ],
          "immunities": [
            "%stun%",
            "%immobilize%",
            "%curse%"
          ],
          "notes": ""
        },
        {
          "level": 2,
          "health": "12xC",
          "move": 4,
          "attack": 3,
          "range": 0,
          "special1": [
            "Move to next door and reveal room"
          ],
          "special2": [
            "Summon Living Bones"
          ],
          "immunities": [
            "%stun%",
            "%immobilize%",
            "%curse%"
          ],
          "notes": ""
        },
        {
          "level": 3,
          "health": "13xC",
          "move": 4,
          "attack": 4,
          "range": 0,
          "special1": [
            "Move to next door and reveal room"
          ],
          "special2": [
            "Summon Living Bones"
          ],
          "immunities": [
            "%stun%",
            "%immobilize%",
            "%curse%"
          ],
          "notes": ""
        },
        {
          "level": 4,
          "health": "15xC",
          "move": 4,
          "attack": 4,
          "range": 0,
          "special1": [
            "Move to next door and reveal room"
          ],
          "special2": [
            "Summon Living Bones"
          ],
          "immunities": [
            "%stun%",
            "%immobilize%",
            "%curse%"
          ],
          "notes": ""
        },
        {
          "level": 5,
          "health": "16xC",
          "move": 5,
          "attack": 5,
          "range": 0,
          "special1": [
            "Move to next door and reveal room"
          ],
          "special2": [
            "Summon Living Bones"
          ],
          "immunities": [
            "%stun%",
            "%immobilize%",
            "%curse%"
          ],
          "notes": ""
        },
        {
          "level": 6,
          "health": "19xC",
          "move": 5,
          "attack": 5,
          "range": 0,
          "special1": [
            "Move to next door and reveal room"
          ],
          "special2": [
            "Summon Living Bones"
          ],
          "immunities": [
            "%stun%",
            "%immobilize%",
            "%curse%"
          ],
          "notes": ""
        },
        {
          "level": 7,
          "health": "23xC",
          "move": 5,
          "attack": 5,
          "range": 0,
          "special1": [
            "Move to next door and reveal room"
          ],
          "special2": [
            "Summon Living Bones"
          ],
          "immunities": [
            "%stun%",
            "%immobilize%",
            "%curse%"
          ],
          "notes": ""
        }
      ]
    },
    "The Betrayer": {
      "standeeCount": 1,
      "isBoss": true,
      "level": [
        {
          "level": 0,
          "health": "10xC",
          "move": 3,
          "attack": 4,
          "range": 3,
          "special1": [
            "Summon Giant Viper and Fear"
          ],
          "special2": [
            "Mind Control"
          ],
          "immunities": [
            "%wound%",
            "%poison%",
            "%stun%",
            "%disarm%",
            "%curse%"
          ],
          "notes": ""
        },
        {
          "level": 1,
          "health": "12xC",
          "move": 3,
          "attack": 5,
          "range": 3,
          "special1": [
            "Summon Giant Viper and Fear"
          ],
          "special2": [
            "Mind Control"
          ],
          "immunities": [
            "%wound%",
            "%poison%",
            "%stun%",
            "%disarm%",
            "%curse%"
          ],
          "notes": ""
        },
        {
          "level": 2,
          "health": "14xC",
          "move": 3,
          "attack": 6,
          "range": 4,
          "special1": [
            "Summon Giant Viper and Fear"
          ],
          "special2": [
            "Mind Control"
          ],
          "immunities": [
            "%wound%",
            "%poison%",
            "%stun%",
            "%disarm%",
            "%curse%"
          ],
          "notes": ""
        },
        {
          "level": 3,
          "health": "16xC",
          "move": 4,
          "attack": 7,
          "range": 4,
          "special1": [
            "Summon Giant Viper and Fear"
          ],
          "special2": [
            "Mind Control"
          ],
          "immunities": [
            "%wound%",
            "%poison%",
            "%stun%",
            "%disarm%",
            "%curse%"
          ],
          "notes": ""
        },
        {
          "level": 4,
          "health": "18xC",
          "move": 4,
          "attack": 8,
          "range": 4,
          "special1": [
            "Summon Giant Viper and Fear"
          ],
          "special2": [
            "Mind Control"
          ],
          "immunities": [
            "%wound%",
            "%poison%",
            "%stun%",
            "%disarm%",
            "%curse%"
          ],
          "notes": ""
        },
        {
          "level": 5,
          "health": "20xC",
          "move": 5,
          "attack": 8,
          "range": 5,
          "special1": [
            "Summon Giant Viper and Fear"
          ],
          "special2": [
            "Mind Control"
          ],
          "immunities": [
            "%wound%",
            "%poison%",
            "%stun%",
            "%disarm%",
            "%curse%"
          ],
          "notes": ""
        },
        {
          "level": 6,
          "health": "23xC",
          "move": 5,
          "attack": 9,
          "range": 5,
          "special1": [
            "Summon Giant Viper and Fear"
          ],
          "special2": [
            "Mind Control"
          ],
          "immunities": [
            "%wound%",
            "%poison%",
            "%stun%",
            "%disarm%",
            "%curse%"
          ],
          "notes": ""
        },
        {
          "level": 7,
          "health": "27xC",
          "move": 5,
          "attack": 9,
          "range": 5,
          "special1": [
            "Summon Giant Viper and Fear"
          ],
          "special2": [
            "Mind Control"
          ],
          "immunities": [
            "%wound%",
            "%poison%",
            "%stun%",
            "%disarm%",
            "%curse%"
          ],
          "notes": ""
        }
      ]
    },
    "Captain of the Guard": {
      "standeeCount": 1,
      "isBoss": true,
      "level": [
        {
          "level": 0,
          "health": "7xC",
          "move": 2,
          "attack": 3,
          "range": 0,
          "special1": [
            "%heal% 2, Affect self and all allies"
          ],
          "special2": [
            "All allies add +1 Attack to all attacks this round",
            "%attack% +1"
          ],
          "immunities": [
            "%disarm%",
            "%wound%",
            "%muddle%",
            "%stun%"
          ],
          "notes": ""
        },
        {
          "level": 1,
          "health": "9xC",
          "move": 2,
          "attack": 3,
          "range": 0,
          "special1": [
            "%heal% 2, Affect self and all allies"
          ],
          "special2": [
            "All allies add +1 Attack to all attacks this round",
            "%attack% +1"
          ],
          "immunities": [
            "%disarm%",
            "%wound%",
            "%muddle%",
            "%stun%"
          ],
          "notes": ""
        },
        {
          "level": 2,
          "health": "11xC",
          "move": 2,
          "attack": 4,
          "range": 0,
          "special1": [
            "%heal% 2, Affect self and all allies"
          ],
          "special2": [
            "All allies add +1 Attack to all attacks this round",
            "%attack% +1"
          ],
          "immunities": [
            "%disarm%",
            "%wound%",
            "%muddle%",
            "%stun%"
          ],
          "notes": ""
        },
        {
          "level": 3,
          "health": "14xC",
          "move": 3,
          "attack": 4,
          "range": 0,
          "special1": [
            "%heal% 2, Affect self and all allies"
          ],
          "special2": [
            "All allies add +1 Attack to all attacks this round",
            "%attack% +1"
          ],
          "immunities": [
            "%disarm%",
            "%wound%",
            "%muddle%",
            "%stun%"
          ],
          "notes": ""
        },
        {
          "level": 4,
          "health": "16xC",
          "move": 3,
          "attack": 5,
          "range": 0,
          "special1": [
            "%heal% 2, Affect self and all allies"
          ],
          "special2": [
            "All allies add +1 Attack to all attacks this round",
            "%attack% +1"
          ],
          "immunities": [
            "%disarm%",
            "%wound%",
            "%muddle%",
            "%stun%"
          ],
          "notes": ""
        },
        {
          "level": 5,
          "health": "20xC",
          "move": 3,
          "attack": 5,
          "range": 0,
          "special1": [
            "%heal% 2, Affect self and all allies"
          ],
          "special2": [
            "All allies add +1 Attack to all attacks this round",
            "%attack% +1"
          ],
          "immunities": [
            "%disarm%",
            "%wound%",
            "%muddle%",
            "%stun%"
          ],
          "notes": ""
        },
        {
          "level": 6,
          "health": "21xC",
          "move": 4,
          "attack": 6,
          "range": 0,
          "special1": [
            "%heal% 2, Affect self and all allies"
          ],
          "special2": [
            "All allies add +1 Attack to all attacks this round",
            "%attack% +1"
          ],
          "immunities": [
            "%disarm%",
            "%wound%",
            "%muddle%",
            "%stun%"
          ],
          "notes": ""
        },
        {
          "level": 7,
          "health": "25xC",
          "move": 4,
          "attack": 6,
          "range": 0,
          "special1": [
            "%heal% 2, Affect self and all allies"
          ],
          "special2": [
            "All allies add +1 Attack to all attacks this round",
            "%attack% +1"
          ],
          "immunities": [
            "%disarm%",
            "%wound%",
            "%muddle%",
            "%stun%"
          ],
          "notes": ""
        }
      ]
    },
    "The Colorless": {
      "standeeCount": 1,
      "isBoss": true,
      "level": [
        {
          "level": 0,
          "health": "9xC",
          "move": 3,
          "attack": 2,
          "range": 0,
          "special1": [
            "%dark%%use_element%: Summon Night Demon",
            "%invisible%, Self"
          ],
          "special2": [
            "%light%%use_element%: Summon Sun Demon",
            "%heal% 4, Self",
            "%shield% 1"
          ],
          "immunities": [
            "%wound%",
            "%poison%",
            "%muddle%",
            "%stun%",
            "%disarm%"
          ],
          "notes": ""
        },
        {
          "level": 1,
          "health": "10xC",
          "move": 3,
          "attack": 3,
          "range": 0,
          "special1": [
            "%dark%%use_element%: Summon Night Demon",
            "%invisible%, Self"
          ],
          "special2": [
            "%light%%use_element%: Summon Sun Demon",
            "%heal% 4, Self",
            "%shield% 1"
          ],
          "immunities": [
            "%wound%",
            "%poison%",
            "%muddle%",
            "%stun%",
            "%disarm%"
          ],
          "notes": ""
        },
        {
          "level": 2,
          "health": "11xC",
          "move": 4,
          "attack": 3,
          "range": 0,
          "special1": [
            "%dark%%use_element%: Summon Night Demon",
            "%invisible%, Self"
          ],
          "special2": [
            "%light%%use_element%: Summon Sun Demon",
            "%heal% 5, Self",
            "%shield% 1"
          ],
          "immunities": [
            "%wound%",
            "%poison%",
            "%muddle%",
            "%stun%",
            "%disarm%"
          ],
          "notes": ""
        },
        {
          "level": 3,
          "health": "12xC",
          "move": 4,
          "attack": 4,
          "range": 0,
          "special1": [
            "%dark%%use_element%: Summon Night Demon",
            "%invisible%, Self"
          ],
          "special2": [
            "%light%%use_element%: Summon Sun Demon",
            "%heal% 5, Self",
            "%shield% 1"
          ],
          "immunities": [
            "%wound%",
            "%poison%",
            "%muddle%",
            "%stun%",
            "%disarm%"
          ],
          "notes": ""
        },
        {
          "level": 4,
          "health": "14xC",
          "move": 4,
          "attack": 4,
          "range": 0,
          "special1": [
            "%dark%%use_element%: Summon Night Demon",
            "%invisible%, Self"
          ],
          "special2": [
            "%light%%use_element%: Summon Sun Demon",
            "%heal% 6, Self",
            "%shield% 1"
          ],
          "immunities": [
            "%wound%",
            "%poison%",
            "%muddle%",
            "%stun%",
            "%disarm%"
          ],
          "notes": ""
        },
        {
          "level": 5,
          "health": "15xC",
          "move": 4,
          "attack": 5,
          "range": 0,
          "special1": [
            "%dark%%use_element%: Summon Night Demon",
            "%invisible%, Self"
          ],
          "special2": [
            "%light%%use_element%: Summon Sun Demon",
            "%heal% 6, Self",
            "%shield% 1"
          ],
          "immunities": [
            "%wound%",
            "%poison%",
            "%muddle%",
            "%stun%",
            "%disarm%"
          ],
          "notes": ""
        },
        {
          "level": 6,
          "health": "17xC",
          "move": 4,
          "attack": 6,
          "range": 0,
          "special1": [
            "%dark%%use_element%: Summon Night Demon",
            "%invisible%, Self"
          ],
          "special2": [
            "%light%%use_element%: Summon Sun Demon",
            "%heal% 7, Self",
            "%shield% 1"
          ],
          "immunities": [
            "%wound%",
            "%poison%",
            "%muddle%",
            "%stun%",
            "%disarm%"
          ],
          "notes": ""
        },
        {
          "level": 7,
          "health": "19xC",
          "move": 5,
          "attack": 7,
          "range": 0,
          "special1": [
            "%dark%%use_element%: Summon Night Demon",
            "%invisible%, Self"
          ],
          "special2": [
            "%light%%use_element%: Summon Sun Demon",
            "%heal% 7, Self",
            "%shield% 1"
          ],
          "immunities": [
            "%wound%",
            "%poison%",
            "%muddle%",
            "%stun%",
            "%disarm%"
          ],
          "notes": ""
        }
      ]
    },
    "Dark Rider": {
      "standeeCount": 1,
      "isBoss": true,
      "level": [
        {
          "level": 0,
          "health": "9xC",
          "move": 2,
          "attack": "3+X",
          "range": 0,
          "special1": [
            "%move% +2",
            "%attack% +0"
          ],
          "special2": [
            "%move% +0",
            "Summon Imp",
            "%attack% -1"
          ],
          "immunities": [
            "%immobilize%",
            "%poison%",
            "%stun%",
            "%disarm%"
          ],
          "notes": "X = Hexes moved"
        },
        {
          "level": 1,
          "health": "10xC",
          "move": 3,
          "attack": "3+X",
          "range": 0,
          "special1": [
            "%move% +2",
            "%attack% +0"
          ],
          "special2": [
            "%move% +0",
            "Summon Imp",
            "%attack% -1"
          ],
          "immunities": [
            "%immobilize%",
            "%poison%",
            "%stun%",
            "%disarm%"
          ],
          "notes": "X = Hexes moved"
        },
        {
          "level": 2,
          "health": "12xC",
          "move": 3,
          "attack": "3+X",
          "range": 0,
          "special1": [
            "%move% +2",
            "%attack% +0"
          ],
          "special2": [
            "%move% +0",
            "Summon Imp",
            "%attack% -1"
          ],
          "immunities": [
            "%immobilize%",
            "%poison%",
            "%stun%",
            "%disarm%"
          ],
          "notes": "X = Hexes moved"
        },
        {
          "level": 3,
          "health": "13xC",
          "move": 3,
          "attack": "4+X",
          "range": 0,
          "special1": [
            "%move% +2",
            "%attack% +0"
          ],
          "special2": [
            "%move% +0",
            "Summon Imp",
            "%attack% -1"
          ],
          "immunities": [
            "%immobilize%",
            "%poison%",
            "%stun%",
            "%disarm%"
          ],
          "notes": "X = Hexes moved"
        },
        {
          "level": 4,
          "health": "15xC",
          "move": 3,
          "attack": "4+X",
          "range": 0,
          "special1": [
            "%move% +2",
            "%attack% +0"
          ],
          "special2": [
            "%move% +0",
            "Summon Imp",
            "%attack% -1"
          ],
          "immunities": [
            "%immobilize%",
            "%poison%",
            "%stun%",
            "%disarm%"
          ],
          "notes": "X = Hexes moved"
        },
        {
          "level": 5,
          "health": "16xC",
          "move": 3,
          "attack": "5+X",
          "range": 0,
          "special1": [
            "%move% +2",
            "%attack% +0"
          ],
          "special2": [
            "%move% +0",
            "Summon Imp",
            "%attack% -1"
          ],
          "immunities": [
            "%immobilize%",
            "%poison%",
            "%stun%",
            "%disarm%"
          ],
          "notes": "X = Hexes moved"
        },
        {
          "level": 6,
          "health": "16xC",
          "move": 4,
          "attack": "5+X",
          "range": 0,
          "special1": [
            "%move% +2",
            "%attack% +0"
          ],
          "special2": [
            "%move% +0",
            "Summon Imp",
            "%attack% -1"
          ],
          "immunities": [
            "%immobilize%",
            "%poison%",
            "%stun%",
            "%disarm%"
          ],
          "notes": "X = Hexes moved"
        },
        {
          "level": 7,
          "health": "18xC",
          "move": 4,
          "attack": "6+X",
          "range": 0,
          "special1": [
            "%move% +2",
            "%attack% +0"
          ],
          "special2": [
            "%move% +0",
            "Summon Imp",
            "%attack% -1"
          ],
          "immunities": [
            "%immobilize%",
            "%poison%",
            "%stun%",
            "%disarm%"
          ],
          "notes": "X = Hexes moved"
        }
      ]
    },
    "Elder Drake": {
      "standeeCount": 1,
      "isBoss": true,
      "level": [
        {
          "level": 0,
          "health": "11xC",
          "move": 0,
          "attack": 3,
          "range": 0,
          "special1": [
            "%attack% +0 %boss-aoe-elder-drake-sp1%"
          ],
          "special2": [
            "%move% and summon 2 Zephyrs"
          ],
          "immunities": [
            "%wound%",
            "%poison%",
            "%disarm%",
            "%immobilize%",
            "%stun%"
          ],
          "notes": ""
        },
        {
          "level": 1,
          "health": "12xC",
          "move": 0,
          "attack": 4,
          "range": 0,
          "special1": [
            "%attack% +0 %boss-aoe-elder-drake-sp1%"
          ],
          "special2": [
            "%move% and summon 2 Zephyrs"
          ],
          "immunities": [
            "%wound%",
            "%poison%",
            "%disarm%",
            "%immobilize%",
            "%stun%"
          ],
          "notes": ""
        },
        {
          "level": 2,
          "health": "15xC",
          "move": 0,
          "attack": 4,
          "range": 0,
          "special1": [
            "%attack% +0 %boss-aoe-elder-drake-sp1%"
          ],
          "special2": [
            "%move% and summon 2 Zephyrs"
          ],
          "immunities": [
            "%wound%",
            "%poison%",
            "%disarm%",
            "%immobilize%",
            "%stun%"
          ],
          "notes": ""
        },
        {
          "level": 3,
          "health": "16xC",
          "move": 0,
          "attack": 5,
          "range": 0,
          "special1": [
            "%attack% +0 %boss-aoe-elder-drake-sp1%"
          ],
          "special2": [
            "%move% and summon 2 Zephyrs"
          ],
          "immunities": [
            "%wound%",
            "%poison%",
            "%disarm%",
            "%immobilize%",
            "%stun%"
          ],
          "notes": ""
        },
        {
          "level": 4,
          "health": "20xC",
          "move": 0,
          "attack": 5,
          "range": 0,
          "special1": [
            "%attack% +0 %boss-aoe-elder-drake-sp1%"
          ],
          "special2": [
            "%move% and summon 2 Zephyrs"
          ],
          "immunities": [
            "%wound%",
            "%poison%",
            "%disarm%",
            "%immobilize%",
            "%stun%"
          ],
          "notes": ""
        },
        {
          "level": 5,
          "health": "22xC",
          "move": 0,
          "attack": 6,
          "range": 0,
          "special1": [
            "%attack% +0 %boss-aoe-elder-drake-sp1%"
          ],
          "special2": [
            "%move% and summon 2 Zephyrs"
          ],
          "immunities": [
            "%wound%",
            "%poison%",
            "%disarm%",
            "%immobilize%",
            "%stun%"
          ],
          "notes": ""
        },
        {
          "level": 6,
          "health": "27xC",
          "move": 0,
          "attack": 6,
          "range": 0,
          "special1": [
            "%attack% +0 %boss-aoe-elder-drake-sp1%"
          ],
          "special2": [
            "%move% and summon 2 Zephyrs"
          ],
          "immunities": [
            "%wound%",
            "%poison%",
            "%disarm%",
            "%immobilize%",
            "%stun%"
          ],
          "notes": ""
        },
        {
          "level": 7,
          "health": "29xC",
          "move": 0,
          "attack": 7,
          "range": 0,
          "special1": [
            "%attack% +0 %boss-aoe-elder-drake-sp1%"
          ],
          "special2": [
            "%move% and summon 2 Zephyrs"
          ],
          "immunities": [
            "%wound%",
            "%poison%",
            "%disarm%",
            "%immobilize%",
            "%stun%"
          ],
          "notes": ""
        }
      ]
    },
    "The Gloom": {
      "standeeCount": 1,
      "isBoss": true,
      "level": [
        {
          "level": 0,
          "health": "20xC",
          "move": 2,
          "attack": 5,
          "range": 0,
          "special1": [
            "%move% +9",
            "%attack% +9"
          ],
          "special2": [
            "Teleport",
            "%attack% +1",
            "%range% 5",
            "%poison%",
            "%wound%",
            "%stun%"
          ],
          "immunities": [
            "%wound%",
            "%poison%",
            "%disarm%",
            "%immobilize%",
            "%muddle%",
            "%stun%",
            "%curse%"
          ],
          "notes": ""
        },
        {
          "level": 1,
          "health": "25xC",
          "move": 2,
          "attack": 5,
          "range": 0,
          "special1": [
            "%move% +9",
            "%attack% +9"
          ],
          "special2": [
            "Teleport",
            "%attack% +1",
            "%range% 5",
            "%poison%",
            "%wound%",
            "%stun%"
          ],
          "immunities": [
            "%wound%",
            "%poison%",
            "%disarm%",
            "%immobilize%",
            "%muddle%",
            "%stun%",
            "%curse%"
          ],
          "notes": ""
        },
        {
          "level": 2,
          "health": "29xC",
          "move": 2,
          "attack": 6,
          "range": 0,
          "special1": [
            "%move% +9",
            "%attack% +9"
          ],
          "special2": [
            "Teleport",
            "%attack% +1",
            "%range% 5",
            "%poison%",
            "%wound%",
            "%stun%"
          ],
          "immunities": [
            "%wound%",
            "%poison%",
            "%disarm%",
            "%immobilize%",
            "%muddle%",
            "%stun%",
            "%curse%"
          ],
          "notes": ""
        },
        {
          "level": 3,
          "health": "35xC",
          "move": 2,
          "attack": 6,
          "range": 0,
          "special1": [
            "%move% +9",
            "%attack% +9"
          ],
          "special2": [
            "Teleport",
            "%attack% +1",
            "%range% 5",
            "%poison%",
            "%wound%",
            "%stun%"
          ],
          "immunities": [
            "%wound%",
            "%poison%",
            "%disarm%",
            "%immobilize%",
            "%muddle%",
            "%stun%",
            "%curse%"
          ],
          "notes": ""
        },
        {
          "level": 4,
          "health": "39xC",
          "move": 3,
          "attack": 7,
          "range": 0,
          "special1": [
            "%move% +9",
            "%attack% +9"
          ],
          "special2": [
            "Teleport",
            "%attack% +1",
            "%range% 5",
            "%poison%",
            "%wound%",
            "%stun%"
          ],
          "immunities": [
            "%wound%",
            "%poison%",
            "%disarm%",
            "%immobilize%",
            "%muddle%",
            "%stun%",
            "%curse%"
          ],
          "notes": ""
        },
        {
          "level": 5,
          "health": "46xC",
          "move": 3,
          "attack": 7,
          "range": 0,
          "special1": [
            "%move% +9",
            "%attack% +9"
          ],
          "special2": [
            "Teleport",
            "%attack% +1",
            "%range% 5",
            "%poison%",
            "%wound%",
            "%stun%"
          ],
          "immunities": [
            "%wound%",
            "%poison%",
            "%disarm%",
            "%immobilize%",
            "%muddle%",
            "%stun%",
            "%curse%"
          ],
          "notes": ""
        },
        {
          "level": 6,
          "health": "50xC",
          "move": 3,
          "attack": 8,
          "range": 0,
          "special1": [
            "%move% +9",
            "%attack% +9"
          ],
          "special2": [
            "Teleport",
            "%attack% +1",
            "%range% 5",
            "%poison%",
            "%wound%",
            "%stun%"
          ],
          "immunities": [
            "%wound%",
            "%poison%",
            "%disarm%",
            "%immobilize%",
            "%muddle%",
            "%stun%",
            "%curse%"
          ],
          "notes": ""
        },
        {
          "level": 7,
          "health": "56xC",
          "move": 3,
          "attack": 9,
          "range": 0,
          "special1": [
            "%move% +9",
            "%attack% +9"
          ],
          "special2": [
            "Teleport",
            "%attack% +1",
            "%range% 5",
            "%poison%",
            "%wound%",
            "%stun%"
          ],
          "immunities": [
            "%wound%",
            "%poison%",
            "%disarm%",
            "%immobilize%",
            "%muddle%",
            "%stun%",
            "%curse%"
          ],
          "notes": ""
        }
      ]
    },
    "Inox Bodyguard": {
      "standeeCount": 2,
      "isBoss": true,
      "level": [
        {
          "level": 0,
          "health": "6xC",
          "move": 2,
          "attack": "C",
          "range": 0,
          "special1": [
            "%move% -1",
            "%attack% -1 %boss-aoe-inox-bodyguard-sp1%"
          ],
          "special2": [
            "%move% +0",
            "%attack% +0",
            "%retaliate% 3"
          ],
          "immunities": [
            "%disarm%",
            "%poison%",
            "%muddle%",
            "%stun%"
          ],
          "notes": "C = Number of Characters"
        },
        {
          "level": 1,
          "health": "7xC",
          "move": 2,
          "attack": "1+C",
          "range": 0,
          "special1": [
            "%move% -1",
            "%attack% -1 %boss-aoe-inox-bodyguard-sp1%"
          ],
          "special2": [
            "%move% +0",
            "%attack% +0",
            "%retaliate% 3"
          ],
          "immunities": [
            "%disarm%",
            "%poison%",
            "%muddle%",
            "%stun%"
          ],
          "notes": "C = Number of Characters"
        },
        {
          "level": 2,
          "health": "9xC",
          "move": 2,
          "attack": "1+C",
          "range": 0,
          "special1": [
            "%move% -1",
            "%attack% -1 %boss-aoe-inox-bodyguard-sp1%"
          ],
          "special2": [
            "%move% +0",
            "%attack% +0",
            "%retaliate% 3"
          ],
          "immunities": [
            "%disarm%",
            "%poison%",
            "%muddle%",
            "%stun%"
          ],
          "notes": "C = Number of Characters"
        },
        {
          "level": 3,
          "health": "10xC",
          "move": 3,
          "attack": "2+C",
          "range": 0,
          "special1": [
            "%move% -1",
            "%attack% -1 %boss-aoe-inox-bodyguard-sp1%"
          ],
          "special2": [
            "%move% +0",
            "%attack% +0",
            "%retaliate% 4"
          ],
          "immunities": [
            "%disarm%",
            "%poison%",
            "%muddle%",
            "%stun%"
          ],
          "notes": "C = Number of Characters"
        },
        {
          "level": 4,
          "health": "11xC",
          "move": 3,
          "attack": "2+C",
          "range": 0,
          "special1": [
            "%move% -1",
            "%attack% -1 %boss-aoe-inox-bodyguard-sp1%"
          ],
          "special2": [
            "%move% +0",
            "%attack% +0",
            "%retaliate% 4"
          ],
          "immunities": [
            "%disarm%",
            "%poison%",
            "%muddle%",
            "%stun%"
          ],
          "notes": "C = Number of Characters"
        },
        {
          "level": 5,
          "health": "13xC",
          "move": 3,
          "attack": "3+C",
          "range": 0,
          "special1": [
            "%move% -1",
            "%attack% -1 %boss-aoe-inox-bodyguard-sp1%"
          ],
          "special2": [
            "%move% +0",
            "%attack% +0",
            "%retaliate% 5"
          ],
          "immunities": [
            "%disarm%",
            "%poison%",
            "%muddle%",
            "%stun%"
          ],
          "notes": "C = Number of Characters"
        },
        {
          "level": 6,
          "health": "15xC",
          "move": 4,
          "attack": "3+C",
          "range": 0,
          "special1": [
            "%move% -1",
            "%attack% -1 %boss-aoe-inox-bodyguard-sp1%"
          ],
          "special2": [
            "%move% +0",
            "%attack% +0",
            "%retaliate% 5"
          ],
          "immunities": [
            "%disarm%",
            "%poison%",
            "%muddle%",
            "%stun%"
          ],
          "notes": "C = Number of Characters"
        },
        {
          "level": 7,
          "health": "17xC",
          "move": 4,
          "attack": "4+C",
          "range": 0,
          "special1": [
            "%move% -1",
            "%attack% -1 %boss-aoe-inox-bodyguard-sp1%"
          ],
          "special2": [
            "%move% +0",
            "%attack% +0",
            "%retaliate% 5"
          ],
          "immunities": [
            "%disarm%",
            "%poison%",
            "%muddle%",
            "%stun%"
          ],
          "notes": "C = Number of Characters"
        }
      ]
    },
    "Jekserah": {
      "standeeCount": 1,
      "isBoss": true,
      "level": [
        {
          "level": 0,
          "health": "6xC",
          "move": 2,
          "attack": 2,
          "range": 0,
          "special1": [
            "Summon Living Bones",
            "%attack% -1, Target all adjacent enemies"
          ],
          "special2": [
            "Summon Living Corpse",
            "%move% -1",
            "%attack% +2"
          ],
          "immunities": [
            "%disarm%",
            "%wound%",
            "%curse%",
            "%stun%"
          ],
          "notes": ""
        },
        {
          "level": 1,
          "health": "7xC",
          "move": 2,
          "attack": 3,
          "range": 0,
          "special1": [
            "Summon Living Bones",
            "%attack% -1, Target all adjacent enemies"
          ],
          "special2": [
            "Summon Living Corpse",
            "%move% -1",
            "%attack% +2"
          ],
          "immunities": [
            "%disarm%",
            "%wound%",
            "%curse%",
            "%stun%"
          ],
          "notes": ""
        },
        {
          "level": 2,
          "health": "9xC",
          "move": 3,
          "attack": 3,
          "range": 0,
          "special1": [
            "Summon Living Bones",
            "%attack% -1, Target all adjacent enemies"
          ],
          "special2": [
            "Summon Living Corpse",
            "%move% -1",
            "%attack% +2"
          ],
          "immunities": [
            "%disarm%",
            "%wound%",
            "%curse%",
            "%stun%"
          ],
          "notes": ""
        },
        {
          "level": 3,
          "health": "12xC",
          "move": 4,
          "attack": 4,
          "range": 0,
          "special1": [
            "Summon Living Bones",
            "%attack% -1, Target all adjacent enemies"
          ],
          "special2": [
            "Summon Living Corpse",
            "%move% -1",
            "%attack% +2"
          ],
          "immunities": [
            "%disarm%",
            "%wound%",
            "%curse%",
            "%stun%"
          ],
          "notes": ""
        },
        {
          "level": 4,
          "health": "13xC",
          "move": 4,
          "attack": 5,
          "range": 0,
          "special1": [
            "Summon Living Bones",
            "%attack% -1, Target all adjacent enemies"
          ],
          "special2": [
            "Summon Living Corpse",
            "%move% -1",
            "%attack% +2"
          ],
          "immunities": [
            "%disarm%",
            "%wound%",
            "%curse%",
            "%stun%"
          ],
          "notes": ""
        },
        {
          "level": 5,
          "health": "15xC",
          "move": 5,
          "attack": 5,
          "range": 0,
          "special1": [
            "Summon Living Bones",
            "%attack% -1, Target all adjacent enemies"
          ],
          "special2": [
            "Summon Living Corpse",
            "%move% -1",
            "%attack% +2"
          ],
          "immunities": [
            "%disarm%",
            "%wound%",
            "%curse%",
            "%stun%"
          ],
          "notes": ""
        },
        {
          "level": 6,
          "health": "18xC",
          "move": 5,
          "attack": 5,
          "range": 0,
          "special1": [
            "Summon Living Bones",
            "%attack% -1, Target all adjacent enemies"
          ],
          "special2": [
            "Summon Living Corpse",
            "%move% -1",
            "%attack% +2"
          ],
          "immunities": [
            "%disarm%",
            "%wound%",
            "%curse%",
            "%stun%"
          ],
          "notes": ""
        },
        {
          "level": 7,
          "health": "22xC",
          "move": 5,
          "attack": 5,
          "range": 0,
          "special1": [
            "Summon Living Bones",
            "%attack% -1, Target all adjacent enemies"
          ],
          "special2": [
            "Summon Living Corpse",
            "%move% -1",
            "%attack% +2"
          ],
          "immunities": [
            "%disarm%",
            "%wound%",
            "%curse%",
            "%stun%"
          ],
          "notes": ""
        }
      ]
    },
    "Merciless Overseer": {
      "standeeCount": 1,
      "isBoss": true,
      "level": [
        {
          "level": 0,
          "health": "6xC",
          "move": 2,
          "attack": "V",
          "range": 0,
          "special1": [
            "All Scouts act again"
          ],
          "special2": [
            "Summon Vermling Scout"
          ],
          "immunities": [
            "%disarm%",
            "%wound%",
            "%curse%",
            "%stun%"
          ],
          "notes": "V = Number of Scouts present"
        },
        {
          "level": 1,
          "health": "8xC",
          "move": 2,
          "attack": "V",
          "range": 0,
          "special1": [
            "All Scouts act again"
          ],
          "special2": [
            "Summon Vermling Scout"
          ],
          "immunities": [
            "%disarm%",
            "%wound%",
            "%curse%",
            "%stun%"
          ],
          "notes": "V = Number of Scouts present"
        },
        {
          "level": 2,
          "health": "9xC",
          "move": 3,
          "attack": "V",
          "range": 0,
          "special1": [
            "All Scouts act again"
          ],
          "special2": [
            "Summon Vermling Scout"
          ],
          "immunities": [
            "%disarm%",
            "%wound%",
            "%curse%",
            "%stun%"
          ],
          "notes": "V = Number of Scouts present"
        },
        {
          "level": 3,
          "health": "11xC",
          "move": 3,
          "attack": "V",
          "range": 0,
          "special1": [
            "All Scouts act again"
          ],
          "special2": [
            "Summon Vermling Scout"
          ],
          "immunities": [
            "%disarm%",
            "%wound%",
            "%curse%",
            "%stun%"
          ],
          "notes": "V = Number of Scouts present"
        },
        {
          "level": 4,
          "health": "12xC",
          "move": 4,
          "attack": "V",
          "range": 0,
          "special1": [
            "All Scouts act again"
          ],
          "special2": [
            "Summon Vermling Scout"
          ],
          "immunities": [
            "%disarm%",
            "%wound%",
            "%curse%",
            "%stun%"
          ],
          "notes": "V = Number of Scouts present"
        },
        {
          "level": 5,
          "health": "14xC",
          "move": 4,
          "attack": "V",
          "range": 0,
          "special1": [
            "All Scouts act again"
          ],
          "special2": [
            "Summon Vermling Scout"
          ],
          "immunities": [
            "%disarm%",
            "%wound%",
            "%curse%",
            "%stun%"
          ],
          "notes": "V = Number of Scouts present"
        },
        {
          "level": 6,
          "health": "16xC",
          "move": 4,
          "attack": "V",
          "range": 0,
          "special1": [
            "All Scouts act again"
          ],
          "special2": [
            "Summon Vermling Scout"
          ],
          "immunities": [
            "%disarm%",
            "%wound%",
            "%curse%",
            "%stun%"
          ],
          "notes": "V = Number of Scouts present"
        },
        {
          "level": 7,
          "health": "19xC",
          "move": 4,
          "attack": "V",
          "range": 0,
          "special1": [
            "All Scouts act again"
          ],
          "special2": [
            "Summon Vermling Scout"
          ],
          "immunities": [
            "%disarm%",
            "%wound%",
            "%curse%",
            "%stun%"
          ],
          "notes": "V = Number of Scouts present"
        }
      ]
    },
    "Prime Demon": {
      "standeeCount": 1,
      "isBoss": true,
      "level": [
        {
          "level": 0,
          "health": "8xC",
          "move": 3,
          "attack": 4,
          "range": 0,
          "special1": [
            "Throne moves",
            "Summon Demon",
            "%move% +2",
            "%attack% -1"
          ],
          "special2": [
            "Throne moves",
            "Summon Demon",
            "%move% +2",
            "%attack% -1"
          ],
          "immunities": [
            "%wound%",
            "%poison%",
            "%disarm%",
            "%immobilize%",
            "%muddle%",
            "%stun%"
          ],
          "notes": ""
        },
        {
          "level": 1,
          "health": "9xC",
          "move": 4,
          "attack": 4,
          "range": 0,
          "special1": [
            "Throne moves",
            "Summon Demon",
            "%move% +2",
            "%attack% -1"
          ],
          "special2": [
            "Throne moves",
            "Summon Demon",
            "%move% +2",
            "%attack% -1"
          ],
          "immunities": [
            "%wound%",
            "%poison%",
            "%disarm%",
            "%immobilize%",
            "%muddle%",
            "%stun%"
          ],
          "notes": ""
        },
        {
          "level": 2,
          "health": "10xC",
          "move": 4,
          "attack": 5,
          "range": 0,
          "special1": [
            "Throne moves",
            "Summon Demon",
            "%move% +2",
            "%attack% -1"
          ],
          "special2": [
            "Throne moves",
            "Summon Demon",
            "%move% +2",
            "%attack% -1"
          ],
          "immunities": [
            "%wound%",
            "%poison%",
            "%disarm%",
            "%immobilize%",
            "%muddle%",
            "%stun%"
          ],
          "notes": ""
        },
        {
          "level": 3,
          "health": "12xC",
          "move": 4,
          "attack": 6,
          "range": 0,
          "special1": [
            "Throne moves",
            "Summon Demon",
            "%move% +2",
            "%attack% -1"
          ],
          "special2": [
            "Throne moves",
            "Summon Demon",
            "%move% +2",
            "%attack% -1"
          ],
          "immunities": [
            "%wound%",
            "%poison%",
            "%disarm%",
            "%immobilize%",
            "%muddle%",
            "%stun%"
          ],
          "notes": ""
        },
        {
          "level": 4,
          "health": "14xC",
          "move": 5,
          "attack": 6,
          "range": 0,
          "special1": [
            "Throne moves",
            "Summon Demon",
            "%move% +2",
            "%attack% -1"
          ],
          "special2": [
            "Throne moves",
            "Summon Demon",
            "%move% +2",
            "%attack% -1"
          ],
          "immunities": [
            "%wound%",
            "%poison%",
            "%disarm%",
            "%immobilize%",
            "%muddle%",
            "%stun%"
          ],
          "notes": ""
        },
        {
          "level": 5,
          "health": "16xC",
          "move": 5,
          "attack": 7,
          "range": 0,
          "special1": [
            "Throne moves",
            "Summon Demon",
            "%move% +2",
            "%attack% -1"
          ],
          "special2": [
            "Throne moves",
            "Summon Demon",
            "%move% +2",
            "%attack% -1"
          ],
          "immunities": [
            "%wound%",
            "%poison%",
            "%disarm%",
            "%immobilize%",
            "%muddle%",
            "%stun%"
          ],
          "notes": ""
        },
        {
          "level": 6,
          "health": "20xC",
          "move": 5,
          "attack": 7,
          "range": 0,
          "special1": [
            "Throne moves",
            "Summon Demon",
            "%move% +2",
            "%attack% -1"
          ],
          "special2": [
            "Throne moves",
            "Summon Demon",
            "%move% +2",
            "%attack% -1"
          ],
          "immunities": [
            "%wound%",
            "%poison%",
            "%disarm%",
            "%immobilize%",
            "%muddle%",
            "%stun%"
          ],
          "notes": ""
        },
        {
          "level": 7,
          "health": "22xC",
          "move": 5,
          "attack": 8,
          "range": 0,
          "special1": [
            "Throne moves",
            "Summon Demon",
            "%move% +2",
            "%attack% -1"
          ],
          "special2": [
            "Throne moves",
            "Summon Demon",
            "%move% +2",
            "%attack% -1"
          ],
          "immunities": [
            "%wound%",
            "%poison%",
            "%disarm%",
            "%immobilize%",
            "%muddle%",
            "%stun%"
          ],
          "notes": ""
        }
      ]
    },
    "The Sightless Eye": {
      "standeeCount": 1,
      "isBoss": true,
      "level": [
        {
          "level": 0,
          "health": "7xC",
          "move": 0,
          "attack": 5,
          "range": 3,
          "special1": [
            "Summon Deep Terror",
            "%attack% -3 %boss-aoe-sightless-eye-sp1%"
          ],
          "special2": [
            "Summon Deep Terror",
            "%attack% -2 %boss-aoe-sightless-eye-sp2%"
          ],
          "immunities": [
            "%stun%",
            "%disarm%",
            "%curse%",
            "%muddle%"
          ],
          "notes": ""
        },
        {
          "level": 1,
          "health": "8xC",
          "move": 0,
          "attack": 6,
          "range": 3,
          "special1": [
            "Summon Deep Terror",
            "%attack% -3 %boss-aoe-sightless-eye-sp1%"
          ],
          "special2": [
            "Summon Deep Terror",
            "%attack% -2 %boss-aoe-sightless-eye-sp2%"
          ],
          "immunities": [
            "%stun%",
            "%disarm%",
            "%curse%",
            "%muddle%"
          ],
          "notes": ""
        },
        {
          "level": 2,
          "health": "10xC",
          "move": 0,
          "attack": 6,
          "range": 3,
          "special1": [
            "Summon Deep Terror",
            "%attack% -3 %boss-aoe-sightless-eye-sp1%"
          ],
          "special2": [
            "Summon Deep Terror",
            "%attack% -2 %boss-aoe-sightless-eye-sp2%"
          ],
          "immunities": [
            "%stun%",
            "%disarm%",
            "%curse%",
            "%muddle%"
          ],
          "notes": ""
        },
        {
          "level": 3,
          "health": "11xC",
          "move": 0,
          "attack": 7,
          "range": 3,
          "special1": [
            "Summon Deep Terror",
            "%attack% -3 %boss-aoe-sightless-eye-sp1%"
          ],
          "special2": [
            "Summon Deep Terror",
            "%attack% -2 %boss-aoe-sightless-eye-sp2%"
          ],
          "immunities": [
            "%stun%",
            "%disarm%",
            "%curse%",
            "%muddle%"
          ],
          "notes": ""
        },
        {
          "level": 4,
          "health": "14xC",
          "move": 0,
          "attack": 7,
          "range": 3,
          "special1": [
            "Summon Deep Terror",
            "%attack% -3 %boss-aoe-sightless-eye-sp1%"
          ],
          "special2": [
            "Summon Deep Terror",
            "%attack% -2 %boss-aoe-sightless-eye-sp2%"
          ],
          "immunities": [
            "%stun%",
            "%disarm%",
            "%curse%",
            "%muddle%"
          ],
          "notes": ""
        },
        {
          "level": 5,
          "health": "15xC",
          "move": 0,
          "attack": 8,
          "range": 3,
          "special1": [
            "Summon Deep Terror",
            "%attack% -3 %boss-aoe-sightless-eye-sp1%"
          ],
          "special2": [
            "Summon Deep Terror",
            "%attack% -2 %boss-aoe-sightless-eye-sp2%"
          ],
          "immunities": [
            "%stun%",
            "%disarm%",
            "%curse%",
            "%muddle%"
          ],
          "notes": ""
        },
        {
          "level": 6,
          "health": "18xC",
          "move": 0,
          "attack": 8,
          "range": 3,
          "special1": [
            "Summon Deep Terror",
            "%attack% -3 %boss-aoe-sightless-eye-sp1%"
          ],
          "special2": [
            "Summon Deep Terror",
            "%attack% -2 %boss-aoe-sightless-eye-sp2%"
          ],
          "immunities": [
            "%stun%",
            "%disarm%",
            "%curse%",
            "%muddle%"
          ],
          "notes": ""
        },
        {
          "level": 7,
          "health": "20xC",
          "move": 0,
          "attack": 9,
          "range": 3,
          "special1": [
            "Summon Deep Terror",
            "%attack% -3 %boss-aoe-sightless-eye-sp1%"
          ],
          "special2": [
            "Summon Deep Terror",
            "%attack% -2 %boss-aoe-sightless-eye-sp2%"
          ],
          "immunities": [
            "%stun%",
            "%disarm%",
            "%curse%",
            "%muddle%"
          ],
          "notes": ""
        }
      ]
    },
    "Winged Horror": {
      "standeeCount": 1,
      "isBoss": true,
      "level": [
        {
          "level": 0,
          "health": "6xC",
          "move": 3,
          "attack": 3,
          "range": 0,
          "special1": [
            "%attack% -1, Target all adjacent enemies",
            "%attack% +0, %range% 3",
            "Hatch eggs"
          ],
          "special2": [
            "Summon C eggs",
            "%move% -1",
            "%attack% +0"
          ],
          "immunities": [
            "%disarm%",
            "%poison%",
            "%muddle%",
            "%stun%",
            "%curse%"
          ],
          "notes": ""
        },
        {
          "level": 1,
          "health": "7xC",
          "move": 4,
          "attack": 3,
          "range": 0,
          "special1": [
            "%attack% -1, Target all adjacent enemies",
            "%attack% +0, %range% 3",
            "Hatch eggs"
          ],
          "special2": [
            "Summon C eggs",
            "%move% -1",
            "%attack% +0"
          ],
          "immunities": [
            "%disarm%",
            "%poison%",
            "%muddle%",
            "%stun%",
            "%curse%"
          ],
          "notes": ""
        },
        {
          "level": 2,
          "health": "8xC",
          "move": 4,
          "attack": 4,
          "range": 0,
          "special1": [
            "%attack% -1, Target all adjacent enemies",
            "%attack% +0, %range% 3",
            "Hatch eggs"
          ],
          "special2": [
            "Summon C eggs",
            "%move% -1",
            "%attack% +0"
          ],
          "immunities": [
            "%disarm%",
            "%poison%",
            "%muddle%",
            "%stun%",
            "%curse%"
          ],
          "notes": ""
        },
        {
          "level": 3,
          "health": "10xC",
          "move": 4,
          "attack": 4,
          "range": 0,
          "special1": [
            "%attack% -1, Target all adjacent enemies",
            "%attack% +0, %range% 3",
            "Hatch eggs"
          ],
          "special2": [
            "Summon C eggs",
            "%move% -1",
            "%attack% +0"
          ],
          "immunities": [
            "%disarm%",
            "%poison%",
            "%muddle%",
            "%stun%",
            "%curse%"
          ],
          "notes": ""
        },
        {
          "level": 4,
          "health": "12xC",
          "move": 5,
          "attack": 4,
          "range": 0,
          "special1": [
            "%attack% -1, Target all adjacent enemies",
            "%attack% +0, %range% 3",
            "Hatch eggs"
          ],
          "special2": [
            "Summon C eggs",
            "%move% -1",
            "%attack% +0"
          ],
          "immunities": [
            "%disarm%",
            "%poison%",
            "%muddle%",
            "%stun%",
            "%curse%"
          ],
          "notes": ""
        },
        {
          "level": 5,
          "health": "14xC",
          "move": 5,
          "attack": 5,
          "range": 0,
          "special1": [
            "%attack% -1, Target all adjacent enemies",
            "%attack% +0, %range% 3",
            "Hatch eggs"
          ],
          "special2": [
            "Summon C eggs",
            "%move% -1",
            "%attack% +0"
          ],
          "immunities": [
            "%disarm%",
            "%poison%",
            "%muddle%",
            "%stun%",
            "%curse%"
          ],
          "notes": ""
        },
        {
          "level": 6,
          "health": "17xC",
          "move": 5,
          "attack": 5,
          "range": 0,
          "special1": [
            "%attack% -1, Target all adjacent enemies",
            "%attack% +0, %range% 3",
            "Hatch eggs"
          ],
          "special2": [
            "Summon C eggs",
            "%move% -1",
            "%attack% +0"
          ],
          "immunities": [
            "%disarm%",
            "%poison%",
            "%muddle%",
            "%stun%",
            "%curse%"
          ],
          "notes": ""
        },
        {
          "level": 7,
          "health": "20xC",
          "move": 5,
          "attack": 5,
          "range": 0,
          "special1": [
            "%attack% -1, Target all adjacent enemies",
            "%attack% +0, %range% 3",
            "Hatch eggs"
          ],
          "special2": [
            "Summon C eggs",
            "%move% -1",
            "%attack% +0"
          ],
          "immunities": [
            "%disarm%",
            "%poison%",
            "%muddle%",
            "%stun%",
            "%curse%"
          ],
          "notes": ""
        }
      ]
    }
  
  }
};

export const SCENARIO_MONSTERS =
    [   { name: "#1 Black Barrow"
        , decks:
            [   {"name": "Bandit Guard", "deck_name": "Guard"}
            ,   {"name": "Bandit Archer", "deck_name": "Archer"}
            ,   {"name": "Living Bones", "deck_name": "Living Bones"}
            ]
        },
        { name: "#2 Barrow Lair"
        , decks:
            [   {"name": "Bandit Archer"}
            ,   {"name": "Bandit Commander"}
            ,   {"name": "Living Bones"}
            ,   {"name": "Living Corpse"}
            ]
        },
        { name: "#3 Inox Encampment"
        , decks:
            [   {"name": "Inox Guard"}
            ,   {"name": "Inox Archer"}
            ,   {"name": "Inox Shaman"}
            ]
        },
        { name: "#4 Crypt of the Damned"
        , decks:
            [   {"name": "Living Bones"}
            ,   {"name": "Bandit Archer"}
            ,   {"name": "Cultist"}
            ,   {"name": "Earth Demon"}
            ,   {"name": "Wind Demon"}
            ]
        },
        { name: "#5 Ruinous Crypt"
        , decks:
            [   {"name": "Cultist"}
            ,   {"name": "Living Bones"}
            ,   {"name": "Living Corpse"}
            ,   {"name": "Night Demon"}
            ,   {"name": "Flame Demon"}
            ,   {"name": "Frost Demon"}
            ]
        },
        { name: "#6 Decaying Crypt"
        , decks:
            [   {"name": "Living Bones"}
            ,   {"name": "Living Corpse"}
            ,   {"name": "Living Spirit"}
            ]
        },
        { name: "#7 Vibrant Grotto"
        , decks:
            [   {"name": "Forest Imp"}
            ,   {"name": "Cave Bear"}
            ,   {"name": "Inox Shaman"}
            ,   {"name": "Earth Demon"}
            ]
        },
        { name: "#8 Gloomhaven Warehouse"
        , decks:
            [   {"name": "Living Bones"}
            ,   {"name": "Living Corpse"}
            ,   {"name": "Inox Bodyguard"}
            ]
        },
        { name: "#9 Diamond Mine"
        , decks:
            [   {"name": "Hound"}
            ,   {"name": "Vermling Scout"}
            ,   {"name": "Merciless Overseer"}
            ]
        },
        { name: "#10 Plane of Elemental Power"
        , decks:
            [   {"name": "Flame Demon"}
            ,   {"name": "Earth Demon"}
            ,   {"name": "Sun Demon"}
            ]
        },
        { name: "#11 Gloomhaven Square A"
        , decks:
            [   {"name": "Living Bones"}
            ,   {"name": "Living Corpse"}
            ,   {"name": "City Guard"}
            ,   {"name": "City Archer"}
            ,   {"name": "Captain of the Guard"}
            ]
        },
        { name: "#12 Gloomhaven Square B"
        , decks:
            [   {"name": "Living Bones"}
            ,   {"name": "Living Corpse"}
            ,   {"name": "Cultist"}
            ,   {"name": "City Guard"}
            ,   {"name": "City Archer"}
            ,   {"name": "Jekserah"}
            ]
        },
        { name: "#13 Temple of the Seer"
        , decks:
            [   {"name": "Stone Golem"}
            ,   {"name": "Cave Bear"}
            ,   {"name": "Living Spirit"}
            ,   {"name": "Spitting Drake"}
            ]
        },
        { name: "#14 Frozen Hollow"
        , decks:
            [   {"name": "Hound"}
            ,   {"name": "Living Spirit"}
            ,   {"name": "Frost Demon"}
            ]
        },
        { name: "#15 Shrine of Strength"
        , decks:
            [   {"name": "Stone Golem"}
            ,   {"name": "Savvas Icestorm"}
            ,   {"name": "Frost Demon"}
            ,   {"name": "Wind Demon"}
            ,   {"name": "Harrower Infester"}
            ]
        },
        { name: "#16 Mountain Pass"
        , decks:
            [   {"name": "Earth Demon"}
            ,   {"name": "Wind Demon"}
            ,   {"name": "Inox Guard"}
            ,   {"name": "Inox Archer"}
            ]
        },
        { name: "#17 Lost Island"
        , decks:
            [   {"name": "Vermling Scout"}
            ,   {"name": "Vermling Shaman"}
            ,   {"name": "Cave Bear"}
            ]
        },
        { name: "#18 Abandoned Sewers"
        , decks:
            [   {"name": "Giant Viper"}
            ,   {"name": "Ooze"}
            ,   {"name": "Vermling Scout"}
            ]
        },
        { name: "#19 Forgotten Crypt"
        , decks:
            [   {"name": "Cultist"}
            ,   {"name": "Living Bones"}
            ,   {"name": "Living Spirit"}
            ,   {"name": "Living Corpse"}
            ]
        },
        { name: "#20 Necromancer's Sanctum"
        , decks:
            [   {"name": "Living Bones"}
            ,   {"name": "Cultist"}
            ,   {"name": "Night Demon"}
            ,   {"name": "Living Corpse"}
            ,   {"name": "Jekserah"}
            ]
        },
        { name: "#21 Infernal Throne"
        , decks:
            [   {"name": "Sun Demon"}
            ,   {"name": "Frost Demon"}
            ,   {"name": "Night Demon"}
            ,   {"name": "Wind Demon"}
            ,   {"name": "Earth Demon"}
            ,   {"name": "Flame Demon"}
            ,   {"name": "Prime Demon"}
            ]
        },
        { name: "#22 Temple of the Elements"
        , decks:
            [   {"name": "Living Bones"}
            ,   {"name": "Cultist"}
            ,   {"name": "Earth Demon"}
            ,   {"name": "Flame Demon"}
            ,   {"name": "Frost Demon"}
            ,   {"name": "Wind Demon"}
            ]
        },
        { name: "#23 Deep Ruins"
        , decks:
            [   {"name": "Stone Golem"}
            ,   {"name": "Ancient Artillery"}
            ,   {"name": "Living Bones"}
            ,   {"name": "Living Spirit"}
            ]
        },
        { name: "#24 Echo Chamber"
        , decks:
            [   {"name": "Rending Drake"}
            ,   {"name": "Ooze"}
            ,   {"name": "Living Spirit"}
            ]
        },
        { name: "#25 Icecrag Ascent"
        , decks:
            [   {"name": "Hound"}
            ,   {"name": "Rending Drake"}
            ,   {"name": "Spitting Drake"}
            ]
        },
        { name: "#26 Ancient Cistern"
        , decks:
            [   {"name": "Living Corpse"}
            ,   {"name": "Ooze"}
            ,   {"name": "Night Demon"}
            ,   {"name": "Black Imp"}
            ]
        },
        { name: "#27 Ruinous Rift"
        , decks:
            [   {"name": "Night Demon"}
            ,   {"name": "Wind Demon"}
            ,   {"name": "Frost Demon"}
            ,   {"name": "Sun Demon"}
            ,   {"name": "Earth Demon"}
            ,   {"name": "Flame Demon"}
            ]
        },
        { name: "#28 Outer Ritual Chamber"
        , decks:
            [   {"name": "Living Corpse"}
            ,   {"name": "Cultist"}
            ,   {"name": "Living Bones"}
            ,   {"name": "Night Demon"}
            ,   {"name": "Sun Demon"}
            ]
        },
        { name: "#29 Sanctuary of Gloom"
        , decks:
            [   {"name": "Living Bones"}
            ,   {"name": "Living Corpse"}
            ,   {"name": "Living Spirit"}
            ,   {"name": "Black Imp"}
            ]
        },
        { name: "#30 Shrine of the Depths"
        , decks:
            [   {"name": "Ooze"}
            ,   {"name": "Lurker"}
            ,   {"name": "Deep Terror"}
            ]
        },
        { name: "#31 Plane of the Night"
        , decks:
            [   {"name": "Deep Terror"}
            ,   {"name": "Night Demon"}
            ,   {"name": "Black Imp"}
            ]
        },
        { name: "#32 Decrepit Wood"
        , decks:
            [   {"name": "Harrower Infester"}
            ,   {"name": "Giant Viper"}
            ,   {"name": "Deep Terror"}
            ,   {"name": "Black Imp"}
            ]
        },
        { name: "#33 Savvas Armory"
        , decks:
            [   {"name": "Savvas Icestorm"}
            ,   {"name": "Savvas Lavaflow"}
            ,   {"name": "Frost Demon"}
            ,   {"name": "Flame Demon"}
            ,   {"name": "Wind Demon"}
            ,   {"name": "Earth Demon"}
            ]
        },
        { name: "#34 Scorched Summit"
        , decks:
            [   {"name": "Rending Drake"}
            ,   {"name": "Spitting Drake"}
            ,   {"name": "Elder Drake"}
            ]
        },
        { name: "#35 Gloomhaven Battlements A"
        , decks:
            [   {"name": "Flame Demon"}
            ,   {"name": "Frost Demon"}
            ,   {"name": "Earth Demon"}
            ,   {"name": "Wind Demon"}
            ]
        },
        { name: "#36 Gloomhaven Battlements B"
        , decks:
            [   {"name": "Flame Demon"}
            ,   {"name": "Frost Demon"}
            ,   {"name": "Earth Demon"}
            ,   {"name": "Wind Demon"}
            ,   {"name": "City Archer"}
            ,   {"name": "Prime Demon"}
            ]
        },
        { name: "#37 Doom Trench"
        , decks:
            [   {"name": "Lurker"}
            ,   {"name": "Deep Terror"}
            ,   {"name": "Harrower Infester"}
            ]
        },
        { name: "#38 Slave Pens"
        , decks:
            [   {"name": "Inox Guard"}
            ,   {"name": "Inox Archer"}
            ,   {"name": "Inox Shaman"}
            ,   {"name": "Stone Golem"}
            ]
        },
        { name: "#39 Treacherous Divide"
        , decks:
            [   {"name": "Cave Bear"}
            ,   {"name": "Frost Demon"}
            ,   {"name": "Spitting Drake"}
            ,   {"name": "Cultist"}
            ,   {"name": "Living Bones"}
            ]
        },
        { name: "#40 Ancient Defense Network"
        , decks:
            [   {"name": "Living Corpse"}
            ,   {"name": "Flame Demon"}
            ,   {"name": "Cave Bear"}
            ,   {"name": "Stone Golem"}
            ,   {"name": "Forest Imp"}
            ]
        },
        { name: "#41 Timeworn Tomb"
        , decks:
            [   {"name": "Ancient Artillery"}
            ,   {"name": "Living Corpse"}
            ,   {"name": "Living Spirit"}
            ,   {"name": "Stone Golem"}
            ]
        },
        { name: "#42 Realm of the Voice"
        , decks:
            [   {"name": "Night Demon"}
            ,   {"name": "Wind Demon"}
            ,   {"name": "Living Spirit"}
            ]
        },
        { name: "#43 - Drake Nest"
        , decks:
            [   {"name": "Flame Demon"}
            ,   {"name": "Rending Drake"}
            ,   {"name": "Spitting Drake"}
            ]
        },
        { name: "#44 Tribal Assault"
        , decks:
            [   {"name": "Inox Guard"}
            ,   {"name": "Inox Archer"}
            ,   {"name": "Hound"}
            ,   {"name": "Inox Shaman"}
            ]
        },
        { name: "#45 Rebel Swamp"
        , decks:
            [   {"name": "City Guard"}
            ,   {"name": "City Archer"}
            ,   {"name": "Hound"}
            ]
        },
        { name: "#46 Nightmare Peak"
        , decks:
            [   {"name": "Night Demon"}
            ,   {"name": "Frost Demon"}
            ,   {"name": "Wind Demon"}
            ,   {"name": "Savvas Icestorm"}
            ,   {"name": "Winged Horror"}
            ]
        },
        { name: "#47 Lair of the Unseeing Eye"
        , decks:
            [   {"name": "Lurker"}
            ,   {"name": "Deep Terror"}
            ,   {"name": "Harrower Infester"}
            ,   {"name": "The Sightless Eye"}
            ]
        },
        { name: "#48 - Shadow Weald"
        , decks:
            [   {"name": "Forest Imp"}
            ,   {"name": "Earth Demon"}
            ,   {"name": "Harrower Infester"}
            ,   {"name": "Dark Rider"}
            ]
        },
        { name: "#49 Rebel's Stand"
        , decks:
            [   {"name": "Giant Viper"}
            ,   {"name": "City Archer"}
            ,   {"name": "City Guard"}
            ,   {"name": "Ancient Artillery"}
            ]
        },
        { name: "#50 Ghost Fortress"
        , decks:
            [   {"name": "Night Demon"}
            ,   {"name": "Sun Demon"}
            ,   {"name": "Earth Demon"}
            ]
        },
        { name: "#51 The Void"
        , decks:
            [   {"name": "The Gloom"}
            ]
        },
        { name: "#52 Noxious Cellar"
        , decks:
            [   {"name": "Spitting Drake"}
            ,   {"name": "Ooze"}
            ,   {"name": "Vermling Scout"}
            ,   {"name": "Living Corpse"}
            ,   {"name": "Vermling Shaman"}
            ]
        },
        { name: "#53 Crypt Basement"
        , decks:
            [   {"name": "Ooze"}
            ,   {"name": "Living Corpse"}
            ,   {"name": "Living Spirit"}
            ,   {"name": "Living Bones"}
            ,   {"name": "Giant Viper"}
            ]
        },
        { name: "#54 Palace of Ice"
        , decks:
            [   {"name": "Cave Bear"}
            ,   {"name": "Living Spirit"}
            ,   {"name": "Frost Demon"}
            ,   {"name": "Harrower Infester"}
            ]
        },
        //TODO Show message that this is random, use deck tab instead
        { name: "#55 Foggy Thicket"
        , decks:
            [ ]
        },
        { name: "#56 Bandit's Wood"
        , decks:
            [   {"name": "Hound"}
            ,   {"name": "Bandit Archer"}
            ,   {"name": "Rending Drake"}
            ,   {"name": "Bandit Guard"}
            ]
        },
        { name: "#57 Investigation"
        , decks:
            [   {"name": "City Guard"}
            ,   {"name": "City Archer"}
            ,   {"name": "Hound"}
            ]
        },
        { name: "#58 Bloody Shack"
        , decks:
            [   {"name": "Earth Demon"}
            ,   {"name": "Harrower Infester"}
            ,   {"name": "Black Imp"}
            ,   {"name": "City Guard"}
            ]
        },
        { name: "#59 Forgotten Grove"
        , decks:
            [   {"name": "Cave Bear"}
            ,   {"name": "Hound"}
            ,   {"name": "Forest Imp"}
            ]
        },
        { name: "#60 Alchemy Lab"
        , decks:
            [   {"name": "Ooze"}
            ,   {"name": "Giant Viper"}
            ,   {"name": "Hound"}
            ,   {"name": "Rending Drake"}
            ,   {"name": "Spitting Drake"}
            ]
        },
        { name: "#61 Fading Lighthouse"
        , decks:
            [   {"name": "Ooze"}
            ,   {"name": "Giant Viper"}
            ,   {"name": "Frost Demon"}
            ,   {"name": "Flame Demon"}
            ]
        },
        { name: "#62 Pit of Souls"
        , decks:
            [   {"name": "Living Bones"}
            ,   {"name": "Living Spirit"}
            ]
        },
        { name: "#63 Magma Pit"
        , decks:
            [   {"name": "Vermling Scout"}
            ,   {"name": "Inox Guard"}
            ,   {"name": "Inox Archer"}
            ,   {"name": "Flame Demon"}
            ]
        },
        { name: "#64 Underwater Lagoon"
        , decks:
            [   {"name": "Ooze"}
            ,   {"name": "Forest Imp"}
            ,   {"name": "Rending Drake"}
            ]
        },
        { name: "#65 Sulfur Mine"
        , decks:
            [   {"name": "Vermling Scout"}
            ,   {"name": "Hound"}
            ,   {"name": "Inox Shaman"}
            ]
        },
        { name: "#66 Clockwork Cove"
        , decks:
            [   {"name": "Ooze"}
            ,   {"name": "Ancient Artillery"}
            ,   {"name": "Living Spirit"}
            ,   {"name": "Stone Golem"}
            ]
        },
        { name: "#67 Arcane Library"
        , decks:
            [   {"name": "Forest Imp"}
            ,   {"name": "Cave Bear"}
            ,   {"name": "Stone Golem"}
            ]
        },
        { name: "#68 Toxic Moor"
        , decks:
            [   {"name": "Rending Drake"}
            ,   {"name": "Black Imp"}
            ,   {"name": "Giant Viper"}
            ,   {"name": "Living Corpse"}
            ]
        },
        { name: "#69 Well of the Unfortunate"
        , decks:
            [   {"name": "Vermling Scout"}
            ,   {"name": "Vermling Shaman"}
            ,   {"name": "Forest Imp"}
            ,   {"name": "Stone Golem"}
            ,   {"name": "Living Spirit"}
            ]
        },
        { name: "#70 Chained Isle"
        , decks:
            [   {"name": "Night Demon"}
            ,   {"name": "Wind Demon"}
            ,   {"name": "Living Spirit"}
            ]
        },
        { name: "#71 Windswept Highlands"
        , decks:
            [   {"name": "Spitting Drake"}
            ,   {"name": "Wind Demon"}
            ,   {"name": "Sun Demon"}
            ]
        },
        { name: "#72 Oozing Grove"
        , decks:
            [   {"name": "Ooze"}
            ,   {"name": "Forest Imp"}
            ,   {"name": "Giant Viper"}
            ]
        },
        { name: "#73 Rockslide Ridge"
        , decks:
            [   {"name": "Hound"}
            ,   {"name": "Inox Archer"}
            ,   {"name": "Ancient Artillery"}
            ,   {"name": "Inox Guard"}
            ,   {"name": "Inox Shaman"}
            ]
        },
        { name: "#74 Merchant Ship"
        , decks:
            [   {"name": "Bandit Guard"}
            ,   {"name": "Bandit Archer"}
            ,   {"name": "Lurker"}
            ,   {"name": "Deep Terror"}
            ]
        },
        { name: "#75 Overgrown Graveyard"
        , decks:
            [   {"name": "Living Bones"}
            ,   {"name": "Living Corpse"}
            ,   {"name": "Living Spirit"}
            ]
        },
        { name: "#76 Harrower Hive"
        , decks:
            [   {"name": "Giant Viper"}
            ,   {"name": "Living Bones"}
            ,   {"name": "Night Demon"}
            ,   {"name": "Harrower Infester"}
            ]
        },
        { name: "#77 Vault of Secrets"
        , decks:
            [   {"name": "City Guard"}
            ,   {"name": "City Archer"}
            ,   {"name": "Stone Golem"}
            ,   {"name": "Hound"}
            ]
        },
        { name: "#78 Sacrifice Pit"
        , decks:
            [   {"name": "Bandit Guard"}
            ,   {"name": "Bandit Archer"}
            ,   {"name": "Cultist"}
            ,   {"name": "Living Bones"}
            ,   {"name": "Black Imp"}
            ]
        },
        { name: "#79 Lost Temple"
        , decks:
            [   {"name": "Stone Golem"}
            ,   {"name": "Giant Viper"}
            ,   {"name": "The Betrayer"}
            ]
        },
        { name: "#80 Vigil Keep"
        , decks:
            [   {"name": "City Guard"}
            ,   {"name": "City Archer"}
            ,   {"name": "Ancient Artillery"}
            ,   {"name": "Hound"}
            ]
        },
        { name: "#81 Temple of the Eclipse"
        , decks:
            [   {"name": "Night Demon"}
            ,   {"name": "Sun Demon"}
            ,   {"name": "Stone Golem"}
            ,   {"name": "Ancient Artillery"}
            ,   {"name": "The Colorless"}
            ]
        },
        { name: "#82 Burning Mountain"
        , decks:
            [   {"name": "Earth Demon"}
            ,   {"name": "Flame Demon"}
            ,   {"name": "Stone Golem"}
            ]
        },
        { name: "#83 Shadows Within"
        , decks:
            [   {"name": "Hound"}
            ,   {"name": "Cultist"}
            ,   {"name": "Living Bones"}
            ,   {"name": "Living Spirit"}
            ,   {"name": "Flame Demon"}
            ]
        },
        { name: "#84 Crystalline Cave"
        , decks:
            [   {"name": "Flame Demon"}
            ,   {"name": "Frost Demon"}
            ,   {"name": "Earth Demon"}
            ]
        },
        { name: "#85 Sun Temple"
        , decks:
            [   {"name": "Hound"}
            ,   {"name": "Black Imp"}
            ,   {"name": "Night Demon"}
            ,   {"name": "Sun Demon"}
            ]
        },
        { name: "#86 Harried Village"
        , decks:
            [   {"name": "Cave Bear"}
            ,   {"name": "Vermling Shaman"}
            ,   {"name": "Vermling Scout"}
            ,   {"name": "Lurker"}
            ]
        },
        { name: "#87 Corrupted Cove"
        , decks:
            [   {"name": "Lurker"}
            ,   {"name": "Deep Terror"}
            ,   {"name": "Ooze"}
            ,   {"name": "Black Imp"}
            ]
        },
        { name: "#88 Plane of Water"
        , decks:
            [   {"name": "Frost Demon"}
            ,   {"name": "Ooze"}
            ,   {"name": "Lurker"}
            ]
        },
        { name: "#89 Syndicate Hideout"
        , decks:
            [   {"name": "Bandit Archer"}
            ,   {"name": "Bandit Guard"}
            ,   {"name": "Cultist"}
            ,   {"name": "Living Bones"}
            ,   {"name": "Giant Viper"}
            ]
        },
        { name: "#90 Demonic Rift"
        , decks:
            [   {"name": "Earth Demon"}
            ,   {"name": "Wind Demon"}
            ,   {"name": "Night Demon"}
            ,   {"name": "Living Spirit"}
            ]
        },
        { name: "#91 Wild Melee"
        , decks:
            [   {"name": "Cave Bear"}
            ,   {"name": "Hound"}
            ,   {"name": "Bandit Guard"}
            ,   {"name": "Bandit Archer"}
            ,   {"name": "Living Spirit"}
            ]
        },
        { name: "#92 Back Alley Brawl"
        , decks:
            [   {"name": "Bandit Guard"}
            ,   {"name": "City Guard"}
            ,   {"name": "Inox Guard"}
            ,   {"name": "Bandit Archer"}
            ,   {"name": "City Archer"}
            ,   {"name": "Savvas Icestorm"}
            ,   {"name": "Frost Demon"}
            ,   {"name": "Wind Demon"}
            ]
        },
        { name: "#93 Sunken Vessel"
        , decks:
            [   {"name": "Lurker"}
            ,   {"name": "Frost Demon"}
            ,   {"name": "Living Spirit"}
            ]
        },
        { name: "#94 Vermling Nest"
        , decks:
            [   {"name": "Hound"}
            ,   {"name": "Vermling Scout"}
            ,   {"name": "Vermling Shaman"}
            ,   {"name": "Cave Bear"}
            ]
        },
        { name: "#95 Payment Due"
        , decks:
            [   {"name": "Deep Terror"}
            ,   {"name": "Flame Demon"}
            ,   {"name": "Earth Demon"}
            ,   {"name": "Savvas Lavaflow"}
            ]
        },
        // Kickstarter scenarios
        { name: "#K1 Just Another Night"
        , decks:
            [   {"name": "Bandit Archer"}
            ,   {"name": "Bandit Guard"}
            ,   {"name": "Inox Archer"}
            ,   {"name": "Inox Guard"}
            ,   {"name": "Inox Shaman"}
            ]
        },
        { name: "#K2 A Quatryl Scorned"
        , decks:
            [   {"name": "Bandit Archer"}
            ,   {"name": "Bandit Guard"}
            ,   {"name": "Ancient Artillery"}
            ]
        },
        { name: "#K3 Unreliable Medicine"
        , decks:
            [   {"name": "Giant Viper"}
            ,   {"name": "Earth Demon"}
            ,   {"name": "Vermling Scout"}
            ,   {"name": "Vermling Shaman"}
            ]
        },
        { name: "#K4 Unlikely Allies"
        , decks:
            [   {"name": "Vermling Scout"}
            ,   {"name": "Giant Viper"}
            ]
        },
        { name: "#K5 The Sun Spire"
        , decks:
            [   {"name": "Vermling Scout"}
            ,   {"name": "Sun Demon"}
            ,   {"name": "Black Imp"}
            ,   {"name": "Vermling Shaman"}
            ]
        },
        { name: "#K6 A Ship in a Storm"
        , decks:
            [   {"name": "Wind Demon"}
            ,   {"name": "Lurker"}
            ,   {"name": "Frost Demon"}
            ]
        },
        { name: "#K7 Arrival in Chains"
        , decks:
            [   {"name": "Cave Bear"}
            ,   {"name": "Rending Drake"}
            ,   {"name": "Spitting Drake"}
            ,   {"name": "Stone Golem"}
            ]
        },
        { name: "#K8 The Doctor's Lab"
        , decks:
            [   {"name": "Living Bones"}
            ,   {"name": "Ancient Artillery"}
            ,   {"name": "Ooze"}
            ,   {"name": "Stone Golem"}
            ]
        },
        { name: "#K9 Skewed Perspective"
        , decks:
            [   {"name": "Hound"}
            ,   {"name": "Cultist"}
            ,   {"name": "Living Spirit"}
            ,   {"name": "Living Bones"}
            ]
        },
        { name: "#K10 Panic Room"
        , decks:
            [   {"name": "Night Demon"}
            ,   {"name": "Deep Terror"}
            ]
        },
        // solo scenarios
        { name: "#S1 - Brute - Return to the Black Barrow"
        , decks:
            [   {"name": "Bandit Guard"}
            ,   {"name": "Bandit Archer"}
            ,   {"name": "Living Bones"}
            ]
        },
        { name: "#S2 - Tinkerer - An Unfortunate Intrusion"
        , decks:
            [   {"name": "City Guard"}
            ,   {"name": "Vermling Scout"}
            ,   {"name": "Vermling Shaman"}
            ]
        },
        { name: "#S3 - Spellweaver - Corrupted Library"
        , decks:
            [   {"name": "Black Imp"}
            ,   {"name": "Spitting Drake"}
            ,   {"name": "Stone Golem"}
            ]
        },
        { name: "#S4 - Scoundrel - Armory Heist"
        , decks:
            [   {"name": "City Guard"}
            ,   {"name": "Stone Golem"}
            ,   {"name": "Ancient Artillery"}
            ]
        },
        { name: "#S5 - Cragheart - Stone Defense"
        , decks:
            [   {"name": "Cave Bear"}
            ,   {"name": "Ooze"}
            ,   {"name": "Sun Demon"}
            ]
        },
        { name: "#S6 - Mindthief - Rodent Liberation"
        , decks:
            [   {"name": "Vermling Scout"}
            ,   {"name": "Vermling Shaman"}
            ,   {"name": "Earth Demon"}
            ]
        },
        { name: "#S7 - Sunkeeper - Caravan Escort"
        , decks:
            [   {"name": "City Guard"}
            ,   {"name": "Bandit Guard"}
            ,   {"name": "Bandit Archer"}
            ,   {"name": "Inox Guard"}
            ,   {"name": "Inox Archer"}
            ,   {"name": "Inox Shaman"}
            ,   {"name": "Vermling Scout"}
            ,   {"name": "Vermling Shaman"}
            ,   {"name": "Cave Bear"}
            ]
        },
        { name: "#S8 - Berserker - Unnatural Insults"
        , decks:
            [   {"name": "Living Corpse"}
            ,   {"name": "Living Bones"}
            ,   {"name": "Cultist"}
            ,   {"name": "Inox Shaman"}
            ]
        },
        { name: "#S9 - Quartermaster - Storage Fees"
        , decks:
            [   {"name": "Hound"}
            ,   {"name": "Bandit Guard"}
            ,   {"name": "Bandit Archer"}
            ]
        },
        { name: "#S10 - Summoner - Plane of the Wild Beasts"
        , decks:
            [   {"name": "Hound"}
            ,   {"name": "Spitting Drake"}
            ,   {"name": "Cave Bear"}
            ]
        },
        { name: "#S11 - Nightshroud - Harvesting the Night"
        , decks:
            [   {"name": "Night Demon"}
            ,   {"name": "Deep Terror"}
            ]
        },
        { name: "#S12 - Plagueherald - Plagued Crypt"
        , decks:
            [   {"name": "Giant Viper"}
            ,   {"name": "Black Imp"}
            ]
        },
        { name: "#S13 - Soothsinger - Battle of the Bards"
        , decks:
            [   {"name": "Bandit  Guard"}
            ,   {"name": "Bandit Archer"}
            ,   {"name": "City Guard"}
            ,   {"name": "City Archer"}
            ,   {"name": "Stone Golem"}
            ,   {"name": "Vermling Shaman"}
            ]
        },
        { name: "#S14 - Doomstalker - Corrupted Hunt"
        , decks:
            [   {"name": "Hound"}
            ,   {"name": "Earth Demon"}
            ,   {"name": "Flame Demon"}
            ,   {"name": "Giant Viper"}
            ,   {"name": "Spitting Drake"}
            ]
        },
        { name: "#S15 - Sawbones - Aftermath"
        , decks:
            [   {"name": "City Guard"}
            ]
        },
        { name: "#S16 - Elementalist - Elemental Secrets"
        , decks:
            [   {"name": "Flame Demon"}
            ,   {"name": "Earth Demon"}
            ,   {"name": "Frost Demon"}
            ,   {"name": "Wind Demon"}
            ]
        },
        { name: "#S17 - Beast Tyrant - The Caged Bear"
        , decks:
            [   {"name": "Hound"}
            ,   {"name": "Forest Imp"}
            ,   {"name": "Rending Drake"}
            ,   {"name": "Vermling Shaman"}
            ,   {"name": "Cave Bear"}
            ]
        },

    ];