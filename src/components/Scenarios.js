import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import GameStore from '../stores/GameStore';
import GameActions from '../actions/GameActions';
import * as ACHIEVEMENTS from './Achievements';
import * as PARTY from './Party';

export const SCENARIOS = [
  {}, // dummy scenario 0, just to make indexing by scenario number easier - eg. scenarios[1] refers to scenario number 1
  { 
    title: "Black Barrow",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Barrow Lair",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.FIRST_STEPS] 
  },
  { 
    title: "Inox Encampment",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_MERCHANT_FLEES],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Crypt of the Damned",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Ruinous Crypt",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Decaying Crypt",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Vibrant Grotto",
    globalAchievementsRequired: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_POWER_OF_ENHANCEMENT, ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_MERCHANT_FLEES],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Gloomhaven Warehouse",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_DEAD_INVADE],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.JEKSERAHS_PLANS] 
  },
  { 
    title: "Diamond Mine",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_MERCHANT_FLEES],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Plane of Elemental Power",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_RIFT_NEUTRALIZED],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Gloomhaven Square A",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.END_OF_THE_INVASION],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Gloomhaven Square B",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.END_OF_THE_INVASION],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Temple of the Seer",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Frozen Hollow",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Shrine of Strength",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Mountain Pass",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Lost Island",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Abandoned Sewers",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Forgotten Crypt",
    globalAchievementsRequired: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_POWER_OF_ENHANCEMENT],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Necromancer's Sanctum",
    globalAchievementsRequired: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_MERCHANT_FLEES],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Infernal Throne",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_RIFT_NEUTRALIZED],
    partyAchievementsRequired: [] 
  },
  { 
    // note this scenario requires special handling because the party needs EITHER ONE of these achievements as a prerequisite
    title: "Temple of the Elements",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.A_DEMONS_ERRAND, PARTY.PARTY_ACHIEVEMENTS.FOLLOWING_CLUES],
    onlyOneAchievementRequired: true
  },
  { 
    title: "Deep Ruins",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Echo Chamber",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Icecrag Ascent",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    // note this scenario requires special handling because the party needs EITHER ONE of these achievements as a prerequisite
    title: "Ancient Cistern",
    globalAchievementsRequired: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.WATER_BREATHING],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.THROUGH_THE_RUINS],
    onlyOneAchievementRequired: true 
  },
  { 
    title: "Ruinous Rift",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.ARTIFACT_LOST],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.STONEBREAKERS_CENSER] 
  },
  { 
    title: "Outer Ritual Chamber",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.DARK_BOUNTY] 
  },
  { 
    title: "Sanctuary of Gloom",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.AN_INVITATION] 
  },
  { 
    title: "Shrine of the Depths",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.THE_VOICES_COMMAND] 
  },
  { 
    title: "Plane of Night",
    globalAchievementsRequired: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_POWER_OF_ENHANCEMENT, ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.ARTIFACT_RECOVERED],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Decrepit Wood",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.THE_VOICES_COMMAND] 
  },
  { 
    // note this scenario requires special handling because the party needs EITHER ONE of these achievements as a prerequisite
    title: "Savvas Armory",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.THE_VOICES_COMMAND, PARTY.PARTY_ACHIEVEMENTS.THE_DRAKES_COMMAND],
    onlyOneAchievementRequired: true
  },
  { 
    title: "Scorched Summit",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.THE_DRAKES_COMMAND] 
  },
  { 
    title: "Gloomhaven Battlements A",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_RIFT_NEUTRALIZED],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.A_DEMONS_ERRAND] 
  },
  { 
    title: "Gloomhaven Battlements B",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_RIFT_NEUTRALIZED],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.A_DEMONS_ERRAND] 
  },
  { 
    title: "Doom Trench",
    globalAchievementsRequired: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.WATER_BREATHING],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Slave Pens",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Treacherous Divide",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Ancient Defense Network",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.THE_VOICES_COMMAND, PARTY.PARTY_ACHIEVEMENTS.THE_VOICES_TREASURE] 
  },
  { 
    title: "Timeworn Tomb",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.THE_VOICES_COMMAND] 
  },
  { 
    title: "Realm of the Voice",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.THE_SCEPTER_AND_THE_VOICE] 
  },
  { 
    title: "Drake Nest",
    globalAchievementsRequired: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_POWER_OF_ENHANCEMENT],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Tribal Assault",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.REDTHORNS_AID] 
  },
  { 
    title: "Rebel Swamp",
    globalAchievementsRequired: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.CITY_RULE_DEMONIC],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Nightmare Peak",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.ACROSS_THE_DIVIDE] 
  },
  { 
    title: "Lair of the Unseeing Eye",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.THROUGH_THE_TRENCH] 
  },
  { 
    title: "Shadow Weald",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.REDTHORNS_AID] 
  },
  { 
    title: "Rebel's Stand",
    globalAchievementsRequired: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.CITY_RULE_DEMONIC],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Ghost Fortress",
    globalAchievementsRequired: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.CITY_RULE_DEMONIC],
    globalAchievementsRequiredIncomplete: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.ANNIHILATION_OF_THE_ORDER],
    partyAchievementsRequired: [] 
  },
  { 
    title: "The Void",
    globalAchievementsRequired: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.END_OF_CORRUPTION_1, ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.END_OF_CORRUPTION_2, ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.END_OF_CORRUPTION_3],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Noxious Cellar",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Crypt Basement",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Palace of Ice",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Foggy Thicket",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Bandit's Wood",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Investigation",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Bloody Shack",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Forgotten Grove",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Alchemy Lab",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Fading Lighthouse",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Pit of Souls",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Magma Pit",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Underwater Lagoon",
    globalAchievementsRequired: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.WATER_BREATHING],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Sulfur Mine",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Clockwork Cove",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Arcane Library",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Toxic Moor",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Well of the Unfortunate",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Chained Isle",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Windswept Highlands",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Oozing Grove",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Rockslide Ridge",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Merchant Ship",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.HIGH_SEA_ESCORT] 
  },
  { 
    title: "Overgrown Graveyard",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.GRAVE_JOB] 
  },
  { 
    title: "Harrower Mine",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Vault of Secrets",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Sacrifice Pit",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Lost Temple",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.FISHS_AID] 
  },
  { 
    title: "Vigil Keep",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Temple of the Eclipse",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Burning Mountain",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Shadows Within",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.BAD_BUSINESS] 
  },
  { 
    title: "Crystalline Cave",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.TREMORS] 
  },
  { 
    title: "Sun Temple",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Harried Village",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Corrupted Cove",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.THE_POISONS_SOURCE] 
  },
  { 
    title: "Plane of Water",
    globalAchievementsRequired: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.WATER_BREATHING],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.WATER_STAFF] 
  },
  { 
    title: "Syndicate Hideout",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.SIN_RA] 
  },
  { 
    title: "Demonic Rift",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Wild Melee",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Back Alley Brawl",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.DEBT_COLLECTION] 
  },
  { 
    title: "Sunken Vessel",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.A_MAP_TO_TREASURE] 
  },
  { 
    title: "Vermling Nest",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Payment Due",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.THROUGH_THE_NEST] 
  },
  // KICKSTARTER SCENARIOS
  { 
    title: "Just Another Night",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "A Quatryl Scorned",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Unreliable Medicine",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Unlikely Allies",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "The Sun Spire",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "A Ship in a Storm",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Arrival in Chains",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "The Doctor's Lab",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Skewed Perspective",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Panic Room",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  // SOLO SCENARIOS
  { 
    title: "Return to the Black Barrow",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "An Unfortunate Intrusion",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Corrupted Laboratory",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Armory Heist",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Stone Defense",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Rodent Liberation",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Caravan Escort",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Unnatural Insults",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Storage Fees",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Plane of the Wild Beasts",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Harvesting the Night",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Plagued Crypt",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Battle of the Bards",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Corrupted Hunt",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Aftermath",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "Elemental Secrets",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
  { 
    title: "The Caged Bear",
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [] 
  },
];

class ScenariosComponent extends Component {

  constructor() {
    super();

    this.state = GameStore.getGame();

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    GameStore.addGameChangeListener(this.onChange);
  }

  componentWillUnmount() {
    GameStore.removeGameChangeListener(this.onChange);
  }

  onChange() {
    this.setState(GameStore.getGame());
  }

  isAllowedToDoScenario(number) {
    let scenario = SCENARIOS[number];

    if (scenario.onlyOneAchievementRequired) {
      // there are some scenarios that require only one of their listed achievements and this is one of them

      // does the scenario have any required global achievements?
      if (scenario.globalAchievementsRequired.length > 0) {
        for (let i=0; i<scenario.globalAchievementsRequired.length; i++) {
          let requiredGlobalAchievement = scenario.globalAchievementsRequired[i];

          if (this.state.globalAchievements[requiredGlobalAchievement] === "true") {
            // we have this achievement, which is sufficient for us to do the scenario
            return true;
          }
          else {
            // we do not have this particular required global achievement - carry on!
          }
        }
      }

      // does the scenario have any required party achievements?
      if (scenario.partyAchievementsRequired.length > 0) {
        for (let i=0; i<scenario.partyAchievementsRequired.length; i++) {
          let requiredPartyAchievement = scenario.partyAchievementsRequired[i];

          if (this.state.partyAchievements[requiredPartyAchievement] === "true") {
            // we have this achievement, which is sufficient for us to do the scenario
            return true;
          }
          else {
            // we do not have this particular required party achievement - carry on!
          }
        }
      }

      // we didn't have any single one of the requirements :(
      return false;
    }
    else {
      // does the scenario have any required global achievements?
      if (scenario.globalAchievementsRequired.length > 0) {
        for (let i=0; i<scenario.globalAchievementsRequired.length; i++) {
          let requiredGlobalAchievement = scenario.globalAchievementsRequired[i];

          if (this.state.globalAchievements[requiredGlobalAchievement] === "true") {
            // we have this achievement - carry on!
          }
          else {
            // we do not have the required global achievement :(
            return false;
          }
        }
      }

      // does the scenario have any required global achievements that should be incomplete?
      if (scenario.globalAchievementsRequiredIncomplete.length > 0) {
        for (let i=0; i<scenario.globalAchievementsRequiredIncomplete.length; i++) {
          let requiredGlobalAchievementIncomplete = scenario.globalAchievementsRequiredIncomplete[i];

          if (!this.state.globalAchievements[requiredGlobalAchievementIncomplete]) {
            // we do not have this achievement - carry on!
          }
          else {
            // we have the global achievement, so we can't do this scenario :(
            return false;
          }
        }
      }

      // does the scenario have any required party achievements?
      if (scenario.partyAchievementsRequired.length > 0) {
        for (let i=0; i<scenario.partyAchievementsRequired.length; i++) {
          let requiredPartyAchievement = scenario.partyAchievementsRequired[i];

          if (this.state.partyAchievements[requiredPartyAchievement] === "true") {
            // we have this achievement - carry on!
          }
          else {
            // we do not have the required party achievement :(
            return false;
          }
        }
      }
    }

    // none of the above cases apply - we're allowed to do the scenario
    return true;
  }

  makeScenarioColumn(number) {
    // mainly just for testing - make sure we're not trying to render a scenario that doesn't exist
    if (number >= SCENARIOS.length) {
      return "";
    }

    let scenario = SCENARIOS[number];

    let buttonStyle = "";

    if (this.state.scenariosComplete.indexOf(number) >= 0) {
      // scenario is complete - no need to check requirements
      buttonStyle = "btn-scoundrel";
    }
    else if (this.state.scenariosUnlocked.indexOf(number) >= 0) {
      // scenario is unlocked but we haven't done it yet - check the requirements
      if (this.isAllowedToDoScenario(number)) {
        // we are allowed to do this scenario
        buttonStyle = "btn-doomstalker";
      }
      else {
        // there is a party or global achievement blocking us from doing this scenario (this could change later)
        buttonStyle = "btn-lightning"; 
      }
    }

    // just save some space on mobiles by shrinking the buttons when they are showing only a number
    let xs = 6;

    // always show number, but only show scenario title if it is unlocked
    let buttonText = number;

    // special text on button for kickstarter scenarios:
    if (number >= 96 && number <= 105) {
      buttonText = "K" + (buttonText - 95); // will show K1 - K10 instead of the number
    }

    // special text on button for solo scenarios
    if (number >= 106 && number <= 122) {
      buttonText = "S" + (buttonText - 105); // will show K1 - K10 instead of the number
    }

    if (this.state.scenariosUnlocked.indexOf(number) >= 0) {
      buttonText += ": " + scenario.title;
      xs = 12;
    }

    return (
      <Col key={number} xs={xs} md={4} lg={3}>
        <Button onClick={() => this.toggleScenarioClick(number)} className={buttonStyle} block>{buttonText}</Button>
      </Col>
    );
  }

  completeScenario(number) {
    let scenariosCompleteCopy = this.state.scenariosComplete;

    // double check it's not already completed
    if (scenariosCompleteCopy.indexOf(number) >= 0) {
      return;
    }

    scenariosCompleteCopy.push(number);

    this.setState({
      scenariosComplete: scenariosCompleteCopy
    }, function() {
      GameActions.changeGame(this.state);
    });
  }

  unlockScenario(number) {
    let scenariosUnlockedCopy = this.state.scenariosUnlocked;

    // double check it's not already unlocked
    if (scenariosUnlockedCopy.indexOf(number) >= 0) {
      return;
    }
    
    scenariosUnlockedCopy.push(number);

    this.setState({
      scenariosUnlocked: scenariosUnlockedCopy
    }, function() {
      GameActions.changeGame(this.state);
    });
  }

  lockScenario(number) {
    // to lock a scenario, it needs to be removed from both the unlocked and completed lists

    let scenariosCompleteCopy = this.state.scenariosComplete;
    let scenariosUnlockedCopy = this.state.scenariosUnlocked;

    let indexOfScenarioToRemoveFromUnlocked = scenariosUnlockedCopy.indexOf(number);
    let indexOfScenarioToRemoveFromComplete = scenariosCompleteCopy.indexOf(number);

    if (indexOfScenarioToRemoveFromUnlocked >= 0) {
      scenariosUnlockedCopy.splice(indexOfScenarioToRemoveFromUnlocked, 1);
    }

    if (indexOfScenarioToRemoveFromComplete >= 0) {
      scenariosCompleteCopy.splice(indexOfScenarioToRemoveFromComplete, 1);
    }

    this.setState({
      scenariosComplete: scenariosCompleteCopy,
      scenariosUnlocked: scenariosUnlockedCopy
    }, function() {
      GameActions.changeGame(this.state);
    });
  }

  toggleScenarioClick(number) {
    if (this.state.scenariosComplete.indexOf(number) >= 0) {
      // scenario is complete: mark it is locked again (this step allows users to undo their mistakes)
      this.lockScenario(number);
    }
    else if (this.state.scenariosUnlocked.indexOf(number) >= 0) {
      // scenario is unlocked but we haven't done it yet

      if (this.isAllowedToDoScenario(number)) {
        // we are allowed to do this scenario: mark it as complete
        this.completeScenario(number);
      }
      else {
        // something is blocking us from completing this scenario: mark it as locked again (this step allows users to undo their mistakes)
        this.lockScenario(number);
      }
    }
    else {
      // scenario is locked: mark it as unlocked
      this.unlockScenario(number);
    }
  }

  render() {
    let campaignMissionColumns = [];
    let personalQuestColumns = [];
    let randomScenarioColumns = [];
    let otherColumns = [];
    let kickstarterColumns = [];
    let soloColumns = [];

    // campaign missions
    for (let i=1; i<= 51; i++) {
      campaignMissionColumns.push(this.makeScenarioColumn(i));
    }

    // personal quests
    for (let i=52; i<= 62; i++) {
      personalQuestColumns.push(this.makeScenarioColumn(i));
    }

    // random scenarios
    for (let i=63; i<= 71; i++) {
      randomScenarioColumns.push(this.makeScenarioColumn(i));
    }

    // other
    for (let i=72; i<= 95; i++) {
      otherColumns.push(this.makeScenarioColumn(i));
    }

    // kickstarter scenarios
    for (let i=96; i<= 105; i++) {
      kickstarterColumns.push(this.makeScenarioColumn(i));
    }

    // kickstarter scenarios
    for (let i=106; i<= 122; i++) {
      soloColumns.push(this.makeScenarioColumn(i));
    }

    return (
      <div className="container scenarios-container">
      	<Grid>
          <Row>
            <Col xs={12}>
              <p>You can track your campaign's progress of <strong>unlocking and completing</strong> scenarios with the buttons below.</p>
              <p>Each button has a number that corresponds to a scenario in the scenario book. Selecting a scenario button will reveal its name and mark it as <strong>unlocked</strong>. You can do this when you place a sticker on the map.</p>
              <p>Selecting a scneario that has been unlocked will change its status to <strong>completed</strong>.</p>
              <p>Both the <strong>party achievements</strong> and <strong>global achievements</strong> that you have marked as gained and lost in the app will determine whether you are eligible to do a scenario in campaign mode. The status of a scenario will <strong>update automatically</strong> as you gain and lose party and global achievements.</p>
              <p>Please note that the achievement requirements should be up to date for the <strong>second printing</strong> of Gloomhaven, because there were a number of loopholes closed. Please see the <strong>Scenario book</strong> and <strong>Sticker sheets</strong> section of <a href="https://boardgamegeek.com/thread/1761512/official-second-printing-change-log">Official Second Printing Change Log</a> for further details if you own the original printing.</p>
              <p>The <strong>Kickstarer scenarios</strong> start with <strong>K</strong> (eg. K9). The <strong>solo scenarios</strong> start with <strong>S</strong> (eg. S11) and are in the order presented in the solo scenario book.</p>
            </Col>
          </Row>
          <Row className="scenario-key">
            <Col xs={12} md={4} className="text-center">
              <Button className="btn-scoundrel">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button> Scenario successfully complete
            </Col>
            <Col xs={12} md={4} className="text-center">
              <Button className="btn-doomstalker">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button> Scenario unlocked
            </Col>
            <Col xs={12} md={4} className="text-center">
              <Button className="btn-lightning">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button> Ineligible for scenario
            </Col>
          </Row>
      		<Row>
      			{campaignMissionColumns}
      		</Row>
          <hr />
          <Row>
            {personalQuestColumns}
          </Row>
          <hr />
          <Row>
            {randomScenarioColumns}
          </Row>
          <hr />
          <Row>
            {otherColumns}
          </Row>
          <hr />
          <Row>
            {kickstarterColumns}
          </Row>
          <hr />
          <Row>
            {soloColumns}
          </Row>
      	</Grid>
      </div>
    );
  }
}

export default ScenariosComponent;