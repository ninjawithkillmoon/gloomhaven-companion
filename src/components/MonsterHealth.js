import React, { Component } from 'react';
import { Grid, Row, Col, Button, ProgressBar, Modal } from 'react-bootstrap';
import GameStore from '../stores/GameStore';
import GameActions from '../actions/GameActions';
import GloomhavenIcon from '../components/utils/GloomhavenIcon';
import * as MONSTER_STATS from '../constants/MonsterStats';

const iconWidth = "30px";
const iconWidthSmall = "18px";

class MonsterHealthComponent extends Component {

  constructor() {
    super();

    this.state = {
      game: GameStore.getGame(),
      displayMonsterType: "ACTIVE",
      statusTokenPopup: "",
      statusTokensEnabled: [],
      healAmount: 2,
      endMonsterRoundToggled: false,
      healToggled: false,
      clearAllStatusEffectsToggled: false
    } 

    this.onChange = this.onChange.bind(this);
    this.scenarioGo = this.scenarioGo.bind(this);
  }

  componentWillMount() {
    GameStore.addGameChangeListener(this.onChange);
  }

  componentWillUnmount() {
    GameStore.removeGameChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      game: GameStore.getGame()
    });
  }

  getAllActiveMonsters() {
    let activeMonsterList = [];

    // cycle through all the monsters of all different types, looking for the ones that are active
    for (let monsterNameProperty in this.state.game.monsterHealth.monsters) {
      if (this.state.game.monsterHealth.monsters.hasOwnProperty(monsterNameProperty)) {
        let monsterRecords = this.state.game.monsterHealth.monsters[monsterNameProperty];

        let activeMonsterRecords = monsterRecords.filter(function(currentValue, index) {
          return currentValue.alive;
        });

        activeMonsterList = activeMonsterList.concat(activeMonsterRecords);
      }
    }

    return activeMonsterList;
  }

  getMonsterType(monsterName) {
    return MONSTER_STATS.MONSTERS.monsters[monsterName];
  }

  getMonsterLevelStats(monster) {
    return this.getMonsterType(monster.name).level[monster.level];
  }

  makeMonsterToggleButton(monsterToDisplay) {
    let buttonClass = "btn-monster-dead";
    if (monsterToDisplay.alive) {
      if (monsterToDisplay.elite) {
        buttonClass = "btn-monster-elite";
      }
      else {
        buttonClass = "btn-monster-normal";
      }

      if (monsterToDisplay.summon) {
        buttonClass += " btn-monster-summon";
      }
    }

    buttonClass += " btn-monster";

    let monsterStatusTokens = [];

    if (!monsterToDisplay.statusTokens) {
      monsterToDisplay.statusTokens = [];
    }

    for (let i=0; i<monsterToDisplay.statusTokens.length; i++) {
      let statusToken = monsterToDisplay.statusTokens[i];

      monsterStatusTokens.push(
        <GloomhavenIcon key={i} icon={statusToken} width={iconWidthSmall} />
      );
    }

    let buttonText = monsterToDisplay.name + ' ' + monsterToDisplay.number;
    if (monsterToDisplay.summon && monsterToDisplay.alive) {
      buttonText += '*';
    }

    return (
      <Button block onClick={() => this.toggleMonster(monsterToDisplay)} className={buttonClass}>
        {buttonText} {monsterStatusTokens}
      </Button>
    );
    
  }

  makeMonsterKillButton(monsterToDisplay) {
    return (
      <Button disabled={!monsterToDisplay.alive} block onClick={() => this.showConfirmKillMonster(monsterToDisplay)} className={"btn-lightning" + (!monsterToDisplay.alive ? " btn-disabled" : "")}>Kill Monster</Button>
    );
  }

  calculateBossHealth(healthString, scenarioLevel, numPlaying) {
    let health = 0;

    let healthParts = healthString.split("x");

    for (let i=0; i<healthParts.length; i++) {
      let healthPart = healthParts[i];

      // translate this part of the health string to a number
      if (healthPart === "C") {
        // number of characters
        healthPart = numPlaying;
      }
      else if (healthPart === "L") {
        // scenario level
        healthPart = scenarioLevel;
      }

      if (health <= 0) {
        // this is the first number we're adding to the calculation
        health = healthPart
      }
      else {
        // multiple this number by the previous health number
        health *= healthPart;
      }
    }

    return health;
  }

  makeMonsterHealthProgressBar(monsterToDisplay) {
    let gameCopy = this.state.game;
    let monsterType = this.getMonsterType(monsterToDisplay.name);
    let monsterLevelStats = this.getMonsterLevelStats(monsterToDisplay);

    let maxHealth = 0;

    if (monsterType.isBoss) {
      maxHealth = this.calculateBossHealth(monsterLevelStats.health, monsterToDisplay.level, gameCopy.monsterHealth.defaultNumPlaying);
    }
    else {
      if (monsterToDisplay.elite) {
        maxHealth = monsterLevelStats.elite.health;
      }
      else {
        maxHealth = monsterLevelStats.normal.health;
      }
    }

    let healthNow = maxHealth - monsterToDisplay.damage;
    if (healthNow < 0) {
      healthNow = 0;
    }

    return (
      <ProgressBar label={healthNow} max={maxHealth} min={0} now={healthNow} className="progress-grey" />
    );
  }

  makeMonsterDamageHealButton(monsterToDisplay, isHeal) {
    let text = "-";
    let damageAmount = 1;
    let buttonClass = "btn-doomstalker";

    if (isHeal) {
      text = "+";
      damageAmount = -1;
      buttonClass = "btn-brute";
    }

    if (!monsterToDisplay.alive) {
      buttonClass += " btn-disabled"
    }

    return (
      <Button disabled={!monsterToDisplay.alive} block onClick={() => this.changeMonsterDamage(monsterToDisplay, damageAmount)} className={buttonClass}>{text}</Button>
    );
  }

  makeMonsterScenarioLevelButton(monsterToDisplay) {
    return (
      <Button disabled={!monsterToDisplay.alive} onClick={() => this.changeMonsterScenarioLevel(monsterToDisplay)} className={(!monsterToDisplay.alive ? " btn-disabled" : "")} block>{monsterToDisplay.level}</Button>
    );
  }

  makeDisplayedMonsterSection(monsterToDisplay) {
    let key = monsterToDisplay.name + monsterToDisplay.number;

    let monsterToggleButton = this.makeMonsterToggleButton(monsterToDisplay);
    let monsterKillButton = this.makeMonsterKillButton(monsterToDisplay);
    let monsterHealthProgressBar = this.makeMonsterHealthProgressBar(monsterToDisplay);
    let monsterTakeDamageButton = this.makeMonsterDamageHealButton(monsterToDisplay, false);
    let monsterHealButton = this.makeMonsterDamageHealButton(monsterToDisplay, true);
    let monsterLevelButton = this.makeMonsterScenarioLevelButton(monsterToDisplay);

    return(
      <Col xs={12} md={6} key={key} className="monster-health-col">
        <Row>
          <Col xs={8} className="wide-right">
            {monsterToggleButton}
          </Col>
          <Col xs={4} className="wide-left">
            { this.isDisplayActiveOnly() ? monsterKillButton : monsterLevelButton }
          </Col>
        </Row>
        <Row>
          <Col xs={8} className="wide-right">
            {monsterHealthProgressBar}
          </Col>
          <Col xs={2} className="wide-both">
            {monsterTakeDamageButton}
          </Col>
          <Col xs={2} className="wide-left">
            {monsterHealButton}
          </Col>
        </Row>
      </Col>
    );
  }

  isDisplayActiveOnly() {
    return this.state.displayMonsterType === "ACTIVE";
  }

  makeDisplayedMonsterSections() {
    let displayedMonstersData = [];
    let displayedMonstersHTML = [];

    // find which monsters to display
    if (this.isDisplayActiveOnly()) {
      displayedMonstersData = this.getAllActiveMonsters();
    }
    else {
      displayedMonstersData = this.state.game.monsterHealth.monsters[this.state.displayMonsterType];
    }

    // ensure that monsters are sorted alphabetically by name and then by their number
    if (displayedMonstersData) {
      displayedMonstersData.sort(function(a, b) {
        let aName = a.name.toLowerCase();
        let bName = b.name.toLowerCase();

        if (aName < bName) {return -1;}
        if (aName > bName) {return 1;}
        if (a.number < b.number) {return -1;}
        if (a.number > b.number) {return 1;}
        return 0;
      });

      for (let i=0; i<displayedMonstersData.length; i++) {
        let monsterToDisplay = displayedMonstersData[i];

        displayedMonstersHTML.push(this.makeDisplayedMonsterSection(monsterToDisplay));
      }
    }

    return displayedMonstersHTML;
  }

  getScenarioDetails(scenario) {
    return MONSTER_STATS.SCENARIO_MONSTERS[scenario];
  }

  scenarioGo() {
    let gameCopy = this.state.game;

    // first clear all existing monsters
    gameCopy.monsterHealth.monsters = {};

    // find all the monster types that are in this scenario by default
    let scenarioDetails = this.getScenarioDetails(gameCopy.monsterHealth.scenario - 1); // array starts with scenario 1 at first index, so use -1

    let monsterNames = [];
    for (let i=0; i<scenarioDetails.decks.length; i++) {
      monsterNames.push(scenarioDetails.decks[i].name);
    }

    monsterNames.sort(function(a, b) {
      let aName = a.toLowerCase();
      let bName = b.toLowerCase();

      if (aName < bName) {return -1;}
      if (aName > bName) {return 1;}
      return 0;
    });

    for (let i=0; i<monsterNames.length; i++) {
      let monsterName = monsterNames[i];

      // find the monsters stats in the data structure
      let monsterType = this.getMonsterType(monsterName);

      let monsters = [];

      for (let j=0; j<monsterType.standeeCount; j++) {
        // add a monster record to the data structure
        monsters.push({
          name: monsterName,
          number: j + 1,
          elite: false,
          level: gameCopy.monsterHealth.defaultScenarioLevel,
          alive: false,
          damage: 0,
          statusTokens: []
        });
      }

      gameCopy.monsterHealth.monsters[monsterName] = monsters;
    }

    this.setState({
      game: gameCopy,
      displayMonsterType: "ACTIVE"
    }, function() {
      GameActions.changeGame(this.state.game);
    });
  }

  createMonsterHeaderButton(monsterName) {
    return (
      <Col xs={12} md={3} key={monsterName}>
        <Button onClick={() => this.showMonsters(monsterName)} className="btn-lightning" block>{monsterName}</Button>
      </Col>
    );
  }

  createMonsterHeaderActiveButton() {
    return (
      <Col xs={12} md={3} key={"active"}>
        <Button onClick={() => this.showActiveMonsters()} className="btn-scoundrel" block>All Active</Button>
      </Col>
    );
  }

  showActiveMonsters() {
    this.setState({
      displayMonsterType: "ACTIVE"
    });
  }

  showMonsters(monsterName) {
    this.setState({
      displayMonsterType: monsterName
    });
  }

  createScenarioLevelButton(value, activeValue) {
    return (
      <Col xs={1} md={1} key={value}>
        <Button onClick={() => this.levelButtonClick(value)} className={activeValue === value ? "btn-doomstalker" : ""} block>{value}</Button>
      </Col>
    );
  }

  createNumCharactersButton(value, activeValue) {
    return (
      <Col xs={3} key={value}>
        <Button onClick={() => this.numCharactersButtonClick(value)} className={activeValue === value ? "btn-doomstalker" : ""} block>{value}</Button>
      </Col>
    );
  }

  levelButtonClick(value) {
    let gameCopy = this.state.game;
    gameCopy.monsterHealth.defaultScenarioLevel = value;

    this.updateGame(gameCopy);
  }

  numCharactersButtonClick(value) {
    let gameCopy = this.state.game;
    gameCopy.monsterHealth.defaultNumPlaying = value;

    this.updateGame(gameCopy);
  }

  killMonster(monster) {
    let gameCopy = this.state.game;

    let monsterIndex = monster.number - 1;

    gameCopy.monsterHealth.monsters[monster.name][monsterIndex].alive = false;
    gameCopy.monsterHealth.monsters[monster.name][monsterIndex].damage = 0;
    gameCopy.monsterHealth.monsters[monster.name][monsterIndex].statusTokens = [];

    this.updateGame(gameCopy);

    this.closeConfirmKillMonster();
  }

  changeMonsterScenarioLevel(monster) {
    let gameCopy = this.state.game;
    let monsterIndex = monster.number - 1;

    let newLevel = gameCopy.monsterHealth.monsters[monster.name][monsterIndex].level + 1;
    newLevel %= 8;

    gameCopy.monsterHealth.monsters[monster.name][monsterIndex].level = newLevel;

    this.updateGame(gameCopy);
  }

  healMonster(monster) {
    let gameCopy = this.state.game;

    let monsterIndex = monster.number - 1;

    let poisonIndex = monster.statusTokens.indexOf("statusEffectPoison");

    let healDamage = true;
    if (poisonIndex > -1) {
      // poison blocks heal
      healDamage = false;

      // remove poison
      gameCopy.monsterHealth.monsters[monster.name][monsterIndex].statusTokens.splice(poisonIndex, 1);
    }

    let woundIndex = monster.statusTokens.indexOf("statusEffectWound");

    if (woundIndex > -1) {
      // remove wound
      gameCopy.monsterHealth.monsters[monster.name][monsterIndex].statusTokens.splice(woundIndex, 1);
    }

    this.setState({
      game: gameCopy
    }, function() {
      if (healDamage) {
        this.changeMonsterDamage(monster, -this.state.healAmount);
      }
    });
  }

  changeMonsterDamage(monster, damageAmount) {
    let gameCopy = this.state.game;
    
    let monsterLevelStats = this.getMonsterLevelStats(monster);
    let monsterType = this.getMonsterType(monster.name);
    let monsterIndex = monster.number - 1;
    let damage = monster.damage + damageAmount;

    let health = 0;
    if (monsterType.isBoss) {
      health = monsterLevelStats.health;
    }
    else {
      if (monster.elite) {
        health = monsterLevelStats.elite.health;
      }
      else {
        health = monsterLevelStats.normal.health; 
      }
    }

    if (damage >= health) {
      damage = health;
    }
    else if (damage < 0) {
      damage = 0;
    }

    if (gameCopy.monsterHealth.monsters[monster.name][monsterIndex].damage !== damage) {
      gameCopy.monsterHealth.monsters[monster.name][monsterIndex].damage = damage;

      this.updateGame(gameCopy);
    }
  }

  clearStatusEffectToggles() {
    this.setState({
      statusTokensEnabled: [],
      healToggled: false,
      endMonsterRoundToggled: false,
      clearAllStatusEffectsToggled: false
    });
  }

  toggleStatusEffect(statusEffect) {
    let enabled = this.state.statusTokensEnabled;
    let tokenIndex = enabled.indexOf(statusEffect);

    if (tokenIndex > -1) {
      // turn it off
      enabled.splice(tokenIndex, 1);
    }
    else {
      // turn it on
      enabled.push(statusEffect);
    }

    this.setState({
      statusTokensEnabled: enabled,
      healToggled: false,
      endMonsterRoundToggled: false,
      clearAllStatusEffectsToggled: false
    });
  }

  clearAllStatusEffectsForMonster(monster) {
    monster.statusTokens = [];

    this.updateGame(this.state.game);
  }

  toggleStatusToken(statusToken, monster) {
    // for backwards compatibility
    if (!monster.statusTokens) {
      monster.statusTokens = [];
    }

    let index = monster.statusTokens.indexOf(statusToken);
    if (index >= 0) {
      // remove this status token from monster
      monster.statusTokens.splice(index, 1);
    }
    else {
      // add this status token to monster
      monster.statusTokens.push(statusToken);
    }

    this.updateGame(this.state.game);
  }

  endRoundForMonster(monster) {
    let poisoned = monster.statusTokens.indexOf("statusEffectPoison") > -1;
    let wounded = monster.statusTokens.indexOf("statusEffectWound") > -1;

    // remove everything except poison and wound

    monster.statusTokens = [];

    if (poisoned) {
      monster.statusTokens.push("statusEffectPoison");
    }

    if (wounded) {
      monster.statusTokens.push("statusEffectWound");
    }

    this.updateGame(this.state.game);
  }

  toggleMonster(monster) {
    let gameCopy = this.state.game;

    let monsterType = this.getMonsterType(monster.name);
    let monsterIndex = monster.number - 1;

    if (this.isDisplayActiveOnly()) {
      // we're display all active monsters

      if (this.state.statusTokensEnabled.length > 0) {
        // toggle the selected status effects for this particular monster
        for (let i=0; i<this.state.statusTokensEnabled.length; i++) {
          let effect = this.state.statusTokensEnabled[i];

          this.toggleStatusToken(effect, monster);
        }
      }
      else if (this.state.healToggled) {
        this.healMonster(monster);
      }
      else if (this.state.endMonsterRoundToggled) {
        this.endRoundForMonster(monster);
      }
      else if (this.state.clearAllStatusEffectsToggled) {
        this.clearAllStatusEffectsForMonster(monster);
      }
      else {
        // show the popup for status effects
        this.setState({
          statusTokenPopup: monster
        });
      }

      return; // don't carry on and update game state in this method - it was already done in one of the methods called
    }
    else {
      // if we're displaying only monsters of a particular type, then this button toggles between normal/elite/summon/dead

      if (monsterType.isBoss) {
        // boss monster: dead -> alive (normal) -> dead -> ...

        if (!monster.alive) {
          // dead -> alive (normal)
          gameCopy.monsterHealth.monsters[monster.name][monsterIndex].alive = true;
        }
        else {
          // alive (normal) -> dead
          gameCopy.monsterHealth.monsters[monster.name][monsterIndex].alive = false;
        }
      }
      else {
        // regular monster: dead -> alive (normal) -> alive (elite) -> alive (normal, summon) -> alive (elite, summon) -> dead -> ...

        if (!monster.alive) {
          // dead -> alive (normal)
          gameCopy.monsterHealth.monsters[monster.name][monsterIndex].alive = true;
          gameCopy.monsterHealth.monsters[monster.name][monsterIndex].elite = false;
        }
        else if (!monster.elite && !monster.summon) {
          // alive (normal) -> alive (elite)
          gameCopy.monsterHealth.monsters[monster.name][monsterIndex].elite = true;
        }
        else if (monster.elite && !monster.summon) {
          // alive (elite) -> alive (normal, summon)
          gameCopy.monsterHealth.monsters[monster.name][monsterIndex].elite = false;
          gameCopy.monsterHealth.monsters[monster.name][monsterIndex].summon = true;
        }
        else if (!monster.elite && monster.summon) {
          // alive (normal, summon) -> alive (elite, summon)
          gameCopy.monsterHealth.monsters[monster.name][monsterIndex].elite = true;
        }
        else {
          // alive (elite, summon) -> dead
          gameCopy.monsterHealth.monsters[monster.name][monsterIndex].alive = false;
          gameCopy.monsterHealth.monsters[monster.name][monsterIndex].elite = false;
          gameCopy.monsterHealth.monsters[monster.name][monsterIndex].summon = false;
          gameCopy.monsterHealth.monsters[monster.name][monsterIndex].damage = 0;
        }
      }
    }

    this.updateGame(gameCopy);
  }

  updateGame(gameCopy) {
    this.setState({
      game: gameCopy
    }, function() {
      GameActions.changeGame(this.state.game);
    });
  }

  closeStatusTokenPopup() {
    this.setState({
      statusTokenPopup: ""
    });
  }

  makeStatusTokenButtons() {
    let buttons = [];

    if (this.state.statusTokenPopup === "") {
      return buttons;
    }

    let statusTokens = ["statusEffectStun", "statusEffectDisarm", "statusEffectImmobilize", "statusEffectPoison", "statusEffectWound", "statusEffectMuddle", "statusEffectStrengthen", "statusEffectInvisible"];

    for (let i=0; i< statusTokens.length; i++) {
      let statusToken = statusTokens[i];

      buttons.push(
        <Col key={i} xs={4} md={3}>
          <Button block onClick={() => this.toggleStatusToken(statusToken, this.state.statusTokenPopup)} className={this.state.statusTokenPopup.statusTokens && this.state.statusTokenPopup.statusTokens.indexOf(statusToken) >= 0 ? "btn-doomstalker" : ""}>
            <GloomhavenIcon icon={statusToken} width={iconWidth} />
          </Button>
        </Col>
      );
    }

    return buttons;
  }

  makeStatusEffectToggles() {
    let buttons = [];

    let statusTokens = ["statusEffectStun", "statusEffectDisarm", "statusEffectImmobilize", "statusEffectPoison", "statusEffectWound", "statusEffectMuddle", "statusEffectStrengthen", "statusEffectInvisible"];

    for (let i=0; i< statusTokens.length; i++) {
      let statusToken = statusTokens[i];

      buttons.push(
        <Col key={i} xs={3} md={1}>
          <Button block onClick={() => this.toggleStatusEffect(statusToken)} className={this.state.statusTokensEnabled && this.state.statusTokensEnabled.indexOf(statusToken) >= 0 ? "btn-doomstalker" : ""}>
            <GloomhavenIcon icon={statusToken} width={iconWidth} />
          </Button>
        </Col>
      );
    }

    return buttons;
  }

  showScenarioChooser() {
    this.setState({
      showScenarioChooser: true
    });
  }

  showMonsterChooser() {
    this.setState({
      showMonsterChooser: true
    });
  }

  closeScenarioChooser() {
    this.setState({
      showScenarioChooser: false
    });
  }

  closeConfirmKillMonster() {
    this.setState({
      confirmKillMonster: null
    });
  }


  showConfirmKillMonster(monster) {
    this.setState({
      confirmKillMonster: monster
    });
  }

  closeMonsterChooser() {
    this.setState({
      showMonsterChooser: false
    });
  }

  makeScenarioChooserButtons() {
    let buttons = [];

    for (let i=1; i<=95; i++) {
      buttons.push(this.makeScenarioChooserButton(i, i));
    }

    return buttons;
  }

  makeKickstarterScenarioChooserButtons() {
    let buttons = [];

    for (let i=96; i<=105; i++) {
      buttons.push(this.makeScenarioChooserButton('K' + (i-95), i));
    }

    return buttons;
  }

  makeSoloScenarioChooserButtons() {
    let buttons = [];

    for (let i=106; i<=122; i++) {
      buttons.push(this.makeScenarioChooserButton('S' + (i-105), i));
    }

    return buttons;
  }

  makeScenarioChooserButton(buttonText, scenarioNumber) {
    return(
      <Col xs={2} key={scenarioNumber}>
        <Button block className="btn-doomstalker btn-scenario-chooser" onClick={() => this.chooseScenario(scenarioNumber)}>{buttonText}</Button>
      </Col>
    );
  }

  makeMonsterChooserButtons() {
    let buttons = [];

    for (let monsterName in MONSTER_STATS.MONSTERS.monsters) {
      if (MONSTER_STATS.MONSTERS.monsters.hasOwnProperty(monsterName)) {
        buttons.push(this.makeMonsterChooserButton(monsterName));
      }
    }

    buttons.sort(function(a, b) {
      let aKey = a.key.toLowerCase();
      let bKey = b.key.toLowerCase();

      if (aKey < bKey) {return -1;}
      if (aKey > bKey) {return 1;}
      return 0;
    });

    return buttons;
  }

  makeMonsterChooserButton(monsterName) {
    // is this monster already selected?
    let selected = this.state.game.monsterHealth.monsters[monsterName];

    let buttonClass = "btn-scenario-chooser";
    if (selected) {
      buttonClass += " btn-doomstalker";
    }

    return(
      <Col key={monsterName} xs={6}>
        <Button block className={buttonClass} onClick={() => this.toggleChooseMonster(monsterName)}>{monsterName}</Button>  
      </Col>
    );
  }

  toggleChooseMonster(monsterName) {
    let gameCopy = this.state.game;

    // find the monsters stats in the data structure
    let monsterType = this.getMonsterType(monsterName);

    if (gameCopy.monsterHealth.monsters[monsterName]) {
      // we already have this monster - remove it
      
      delete gameCopy.monsterHealth.monsters[monsterName];
    }
    else {
      // add this monster to the available types

      let monsters = [];

      for (let j=0; j<monsterType.standeeCount; j++) {
        // add a monster record to the data structure
        monsters.push({
          name: monsterName,
          number: j + 1,
          elite: false,
          level: gameCopy.monsterHealth.defaultScenarioLevel,
          alive: false,
          damage: 0,
          statusTokens: []
        });
      }

      gameCopy.monsterHealth.monsters[monsterName] = monsters;
    }

    // just clear the scenario since we're no longer sticking with the predefined monsters
    gameCopy.monsterHealth.scenario = -1;

    this.setState({
      game: gameCopy
    }, function() {
      GameActions.changeGame(this.state.game);
    });
  }

  chooseScenario(scenarioNumber) {
    let gameCopy = this.state.game;
    gameCopy.monsterHealth.scenario = scenarioNumber;
    this.updateGame(gameCopy);

    this.scenarioGo();

    this.closeScenarioChooser();
  }

  isMonstersChosen() {
    for (let monster in this.state.game.monsterHealth.monsters) {
      if (this.state.game.monsterHealth.monsters.hasOwnProperty(monster)) {
        return true;
      }
    }
  }

  toggleHealChange(change) {
    let newAmount = this.state.healAmount + change;
    
    if (newAmount <= 0) {
      newAmount = 1;
    }

    this.setState({
      healAmount: newAmount
    });
  }

  toggleHeal() {
    let healToggled = !this.state.healToggled;

    this.setState({
      healToggled: healToggled,
      endMonsterRoundToggled: false,
      clearAllStatusEffectsToggled: false,
      statusTokensEnabled: []
    });
  }

  toggleClearAllStatusEffects() {
    let clearAllStatusEffectsToggled = !this.state.clearAllStatusEffectsToggled;

    this.setState({
      healToggled: false,
      endMonsterRoundToggled: false,
      clearAllStatusEffectsToggled: clearAllStatusEffectsToggled,
      statusTokensEnabled: []
    });
  }

  toggleEndOfMonsterRound() {
    let endMonsterRoundToggled = !this.state.endMonsterRoundToggled;

    this.setState({
      healToggled: false,
      endMonsterRoundToggled: endMonsterRoundToggled,
      clearAllStatusEffectsToggled: false,
      statusTokensEnabled: []
    });
  }

  render() {
    let scenarioLevelButtons = [];

    for (let i=0; i<=7; i++) {
      scenarioLevelButtons.push(this.createScenarioLevelButton(i, this.state.game.monsterHealth.defaultScenarioLevel));
    }

    let numCharactersButtons = [];

    for (let i=2; i<=4; i++) {
        numCharactersButtons.push(this.createNumCharactersButton(i, this.state.game.monsterHealth.defaultNumPlaying));
    }

    let monsterHeaderButtons = [];

    for (let monsterNameProperty in this.state.game.monsterHealth.monsters) {
      if (this.state.game.monsterHealth.monsters.hasOwnProperty(monsterNameProperty)) {
          monsterHeaderButtons.push(this.createMonsterHeaderButton(monsterNameProperty));
      }
    }

    monsterHeaderButtons.push(this.createMonsterHeaderActiveButton());

    let displayedMonsterSections = this.makeDisplayedMonsterSections();

    let statusTokenButtons = this.makeStatusTokenButtons();

    let scenarioChooserButtons = this.makeScenarioChooserButtons();
    let kickstarterScenarioChooserButtons = this.makeKickstarterScenarioChooserButtons();
    let soloScenarioChooserButtons = this.makeSoloScenarioChooserButtons();

    let monsterChooserButtons = this.makeMonsterChooserButtons();

    let statusEffectToggles = this.makeStatusEffectToggles();

    return (
      <div className="container monster-health-container">
        <Modal id="modal" show={this.state.statusTokenPopup !== ""} onHide={() => this.closeStatusTokenPopup()}>
          <Modal.Header closeButton>
            <Modal.Title>Status Effects for {this.state.statusTokenPopup.name} {this.state.statusTokenPopup.number}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row className="status-token-buttons row">
              {statusTokenButtons}
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn-lightning" onClick={() => this.closeStatusTokenPopup()}>Close</Button>
          </Modal.Footer>
        </Modal>

        <Modal id="modal" show={this.state.showScenarioChooser} onHide={() => this.closeScenarioChooser()}>
          <Modal.Header closeButton>
            <Modal.Title>Choose Scenario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col xs={12}>
                <span>Warning: selecting a new scenario will wipe all unsaved existing monster health data.</span>
              </Col>
            </Row>
            <hr/>
            <Row className="scenario-chooser-container">
              {scenarioChooserButtons}
            </Row>
            <hr/>
            <Row className="scenario-chooser-container">
              {kickstarterScenarioChooserButtons}
            </Row>
            <hr/>
            <Row className="scenario-chooser-container">
              {soloScenarioChooserButtons}
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn-lightning" onClick={() => this.closeScenarioChooser()}>Close</Button>
          </Modal.Footer>
        </Modal>

        <Modal id="modal" show={this.state.showMonsterChooser} onHide={() => this.closeMonsterChooser()}>
          <Modal.Header closeButton>
            <Modal.Title>Choose Monsters</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col xs={12}>
                <span>Warning: unselecting any monster type will wipe all unsaved existing monster health data for that monster.</span>
              </Col>
            </Row>
            <hr/>
            <Row>
              {monsterChooserButtons}
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn-lightning" onClick={() => this.closeMonsterChooser()}>Close</Button>
          </Modal.Footer>
        </Modal>

        <Modal id="modal" show={this.state.confirmKillMonster && this.state.confirmKillMonster !== null} onHide={() => this.closeConfirmKillMonster()}>
          <Modal.Header closeButton>
            <Modal.Title>Kill Monster</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col xs={12}>
                <span>Are you sure you want to kill this monster?</span>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <Button block className="btn-scoundrel" onClick={() => this.killMonster(this.state.confirmKillMonster)}>Kill</Button>
              </Col>
              <Col xs={6}>
                <Button block className="btn-lightning" onClick={() => this.closeConfirmKillMonster()}>Cancel</Button>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            {/*<Button className="btn-lightning" onClick={() => this.closeConfirmKillMonster()}>Close</Button>*/}
          </Modal.Footer>
        </Modal>

      	<Grid>
          <Row className="monster-health-row">
            <Col xs={12} md={7}>
              <Row>
                <Col xs={2}>
                  <div className="text-middle-button">Level</div>
                </Col>
                {scenarioLevelButtons}
              </Row>
            </Col>
            <Col xs={12} md={5}>
              <Row>
                <Col xs={2}>
                  <div className="text-middle-button">Chars</div>
                </Col>
                {numCharactersButtons}
              </Row>
            </Col>
          </Row>
          {this.state.game.monsterHealth.defaultScenarioLevel > -1 && this.state.game.monsterHealth.defaultNumPlaying > -1 &&
            <Row className="monster-health-row">
              <Col xs={6} md={6}>
                <Button className="btn-scoundrel" block onClick={() => this.showScenarioChooser()}>Scenario</Button>
              </Col>
              <Col xs={6} md={6}>
                <Button className="btn-scoundrel" block onClick={() => this.showMonsterChooser()}>Monster Types</Button>
              </Col>
            </Row>
          }
          {(this.state.game.monsterHealth.scenario > -1 || this.isMonstersChosen()) &&
            <Row className="monster-health-row">
              {monsterHeaderButtons}
            </Row>
          }
          <Row className="monster-heath-monsters-container">
            {displayedMonsterSections}
          </Row>
          <hr/>
          {(this.state.game.monsterHealth.scenario > -1 || this.isMonstersChosen()) &&
            <Row className="status-token-buttons">
              <Col xs={12} md={4}>
                <Button block onClick={() => this.clearStatusEffectToggles()}>Unselect All</Button>
              </Col>
              {statusEffectToggles}
              <Col xs={12} md={4}>
                <Button block className={this.state.endMonsterRoundToggled ? "btn-doomstalker" : ""} onClick={() => this.toggleEndOfMonsterRound()}>End Monster Round</Button>
              </Col>
              <Col xs={12} md={4}>
                <Button block className={this.state.clearAllStatusEffectsToggled ? "btn-doomstalker" : ""} onClick={() => this.toggleClearAllStatusEffects()}>Clear All Status Effects</Button>
              </Col>
              <Col xs={6} md={2}>
                <Button block className={this.state.healToggled ? "btn-doomstalker" : ""} onClick={() => this.toggleHeal()}>Heal {this.state.healAmount}</Button>
              </Col>
              <Col xs={3} md={1}>
                <Button block className="btn-doomstalker" onClick={() => this.toggleHealChange(-1)}>-</Button>
              </Col>
              <Col xs={3} md={1}>
                <Button block className="btn-brute" onClick={() => this.toggleHealChange(1)}>+</Button>
              </Col>
            </Row>
          }
          <hr/>
          <Row className="monster-health-row">
            <Col xs={12} md={12}>
              <p><strong>Instructions:</strong></p>
              <ol>
                <li>Select scenario level and number of characters</li>
                <li>Choose a scenario using the button provided or select particular monsters for random scenarios</li>
                <li>
                  To create monsters, press on the desired monster type
                  <ul>
                    <li>Each monster name has a number - this is the standee that it refers to</li>
                    <li>Tapping on the monster name will toggle between dead/normal/elite and whether or not the monster is a summon (represented by an asterix: *)</li>
                    <li>The individual scenario level for each monster is displayed to the right of the name (you can tap this to change it per monster)</li>
                    <li>Starting health will be the monster's health according to their level</li>
                  </ul>
                </li>
                <li>When you're done creating monsters, press the <strong>All Active</strong> button to show only monsters that are on the board</li>
                <li>The blue buttons control the monsters remaining health</li>
                <li>When viewing <strong>All Active monsters</strong>, pressing the monsters name will allow you to toggle the <strong>status effects</strong> applied to that monster</li>
                <li>When a monster is dead, press the <strong>Kill Monster</strong> button to remove them from the active list</li>
                <li>
                  The toggle buttons below the monster healt indicators allow you to apply and remove status effects from monsters in a different way. Toggle on one of the buttons and then press any of the monster buttons to apply the effect.
                  <ul>
                    <li><b>Unselect All</b> will toggle off all of the buttons</li>
                    <li><b>End Monster Round</b> will remove all but the poison and would status effects from selected monsters (<b>CAUTION:</b> effects applied during a monsters turn (usually strengthen or invisibility) should not be removed this way - see game rules if unsure)</li>
                    <li><b>Clear All Status Effects</b> will remove all status effects from selected monsters</li>
                    <li><b>Heal X</b> will apply a healing effect to selected monsters, removing poison and wound and healing damage if applicable (the buttons to the right of this toggle button change the magnitude of the heal)</li>
                  </ul>
                </li>
              </ol>
            </Col>
          </Row>
      	</Grid>
      </div>
    );
  }
}

export default MonsterHealthComponent;