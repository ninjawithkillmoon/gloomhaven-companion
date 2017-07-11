import React, { Component } from 'react';

import elementAir from '../../images/icons/elements/element-small-air.png';
import elementAll from '../../images/icons/elements/element-small-all.png';
import elementConsume from '../../images/icons/elements/element-small-consume.png';
import elementDark from '../../images/icons/elements/element-small-dark.png';
import elementEarth from '../../images/icons/elements/element-small-earth.png';
import elementFire from '../../images/icons/elements/element-small-fire.png';
import elementIce from '../../images/icons/elements/element-small-ice.png';
import elementLight from '../../images/icons/elements/element-small-light.png';

import statusEffectAddTarget from '../../images/icons/status-effect/status-effect-small-add-target.png';
import statusEffectBless from '../../images/icons/status-effect/status-effect-small-bless.png';
import statusEffectCurse from '../../images/icons/status-effect/status-effect-small-curse.png';
import statusEffectDisarm from '../../images/icons/status-effect/status-effect-small-disarm.png';
import statusEffectImmobilize from '../../images/icons/status-effect/status-effect-small-immobilize.png';
import statusEffectInvisible from '../../images/icons/status-effect/status-effect-small-invisible.png';
import statusEffectMuddle from '../../images/icons/status-effect/status-effect-small-muddle.png';
import statusEffectPierce from '../../images/icons/status-effect/status-effect-small-pierce.png';
import statusEffectPoison from '../../images/icons/status-effect/status-effect-small-poison.png';
import statusEffectPush from '../../images/icons/status-effect/status-effect-small-push.png';
import statusEffectPull from '../../images/icons/status-effect/status-effect-small-pull.png';
import statusEffectStrengthen from '../../images/icons/status-effect/status-effect-small-strengthen.png';
import statusEffectStun from '../../images/icons/status-effect/status-effect-small-stun.png';
import statusEffectWound from '../../images/icons/status-effect/status-effect-small-wound.png';

import generalAttack from '../../images/icons/general/general-small-attack.png';
import generalAttackHex from '../../images/icons/general/general-small-attack-hex.png';
import generalHeal from '../../images/icons/general/general-small-heal.png';
import generalJump from '../../images/icons/general/general-small-jump.png';
import generalLoot from '../../images/icons/general/general-small-loot.png';
import generalMove from '../../images/icons/general/general-small-move.png';
import generalRange from '../../images/icons/general/general-small-range.png';
import generalRetaliate from '../../images/icons/general/general-small-retaliate.png';
import generalShield from '../../images/icons/general/general-small-shield.png';
import generalTarget from '../../images/icons/general/general-small-target.png';
import generalPlusOne from '../../images/icons/general/general-small-plus-one.png';

import characterIconBrute from '../../images/icons/characters/brute-icon.png';
import characterIconCragheart from '../../images/icons/characters/cragheart-icon.png';
import characterIconMindthief from '../../images/icons/characters/mindthief-icon.png';
import characterIconScoundrel from '../../images/icons/characters/scoundrel-icon.png';
import characterIconSpellweaver from '../../images/icons/characters/spellweaver-icon.png';
import characterIconTinkerer from '../../images/icons/characters/tinkerer-icon.png';

import characterMatFrontBrute from '../../images/icons/characters/brute-mat-front.png';
import characterMatFrontCragheart from '../../images/icons/characters/cragheart-mat-front.png';
import characterMatFrontMindthief from '../../images/icons/characters/mindthief-mat-front.png';
import characterMatFrontScoundrel from '../../images/icons/characters/scoundrel-mat-front.png';
import characterMatFrontSpellweaver from '../../images/icons/characters/spellweaver-mat-front.png';
import characterMatFrontTinkerer from '../../images/icons/characters/tinkerer-mat-front.png';

import characterMatBackBrute from '../../images/icons/characters/brute-mat-back.png';
import characterMatBackCragheart from '../../images/icons/characters/cragheart-mat-back.png';
import characterMatBackMindthief from '../../images/icons/characters/mindthief-mat-back.png';
import characterMatBackScoundrel from '../../images/icons/characters/scoundrel-mat-back.png';
import characterMatBackSpellweaver from '../../images/icons/characters/spellweaver-mat-back.png';
import characterMatBackTinkerer from '../../images/icons/characters/tinkerer-mat-back.png';

const icons = {
  elementAir: elementAir,
  elementAll: elementAll,
  elementConsume: elementConsume,
  elementDark: elementDark,
  elementEarth: elementEarth,
  elementFire: elementFire,
  elementIce: elementIce,
  elementLight: elementLight,

  statusEffectAddTarget: statusEffectAddTarget,
  statusEffectBless: statusEffectBless,
  statusEffectCurse: statusEffectCurse,
  statusEffectDisarm: statusEffectDisarm,
  statusEffectImmobilize: statusEffectImmobilize,
  statusEffectInvisible: statusEffectInvisible,
  statusEffectMuddle: statusEffectMuddle,
  statusEffectPierce: statusEffectPierce,
  statusEffectPoison: statusEffectPoison,
  statusEffectPush: statusEffectPush,
  statusEffectPull: statusEffectPull,
  statusEffectStrengthen: statusEffectStrengthen,
  statusEffectStun: statusEffectStun,
  statusEffectWound: statusEffectWound,

  generalAttack: generalAttack,
  generalAttackHex: generalAttackHex,
  generalHeal: generalHeal,
  generalJump: generalJump,
  generalLoot: generalLoot,
  generalMove: generalMove,
  generalRange: generalRange,
  generalRetaliate: generalRetaliate,
  generalShield: generalShield,
  generalTarget: generalTarget,
  generalPlusOne: generalPlusOne,

  characterIconBrute: characterIconBrute,
  characterIconCragheart: characterIconCragheart,
  characterIconMindthief: characterIconMindthief,
  characterIconScoundrel: characterIconScoundrel,
  characterIconSpellweaver: characterIconSpellweaver,
  characterIconTinkerer: characterIconTinkerer,

  characterMatFrontBrute: characterMatFrontBrute,
  characterMatFrontCragheart: characterMatFrontCragheart,
  characterMatFrontMindthief: characterMatFrontMindthief,
  characterMatFrontScoundrel: characterMatFrontScoundrel,
  characterMatFrontSpellweaver: characterMatFrontSpellweaver,
  characterMatFrontTinkerer: characterMatFrontTinkerer,

  characterMatBackBrute: characterMatBackBrute,
  characterMatBackCragheart: characterMatBackCragheart,
  characterMatBackMindthief: characterMatBackMindthief,
  characterMatBackScoundrel: characterMatBackScoundrel,
  characterMatBackSpellweaver: characterMatBackSpellweaver,
  characterMatBackTinkerer: characterMatBackTinkerer,

};

class GloomhavenIconComponent extends Component {

  findIcon() {
    return icons[this.props.icon];
  }

  render() {
    return (
      <img src={this.findIcon()} onClick={this.props.onClick}
           width={this.props.width} alt={this.props.icon} height={this.props.height}
           className="gloomhaven-icon-img" />
    );
  }
}

export default GloomhavenIconComponent;