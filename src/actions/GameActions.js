import AppDispatcher from '../dispatcher/AppDispatcher';
import GameConstants from '../constants/GameConstants';
import GameStore from '../stores/GameStore';
import FileSaver from 'file-saver';
import moment from "moment";
import * as ACHIEVEMENTS from '../components/Achievements';

export default {

  upgradeGame(game) {
    // convert old global achievements into the new one (reference: https://boardgamegeek.com/thread/1761512/official-second-printing-change-log)
    if (game.globalAchievements[ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_RIFT_CLOSED] || game.globalAchievements[ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_DEMON_DETHRONED]) {
      // give the new achievement
      game.globalAchievements[ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_RIFT_NEUTRALIZED] = true;

      // clear the old achievements to reduce confusion
      game.globalAchievements[ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_RIFT_CLOSED] = false;
      game.globalAchievements[ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_DEMON_DETHRONED] = false;
    }

    if (game.monsterHealth && !game.monsterHealth.defaultNumPlaying) {
      game.monsterHealth.defaultNumPlaying = 4;
    }

    if (!game.donations) {
      game.donations = 0;
    }
  },

  loadGame(game) {
    // if required, convert an old save game to a new save game
    this.upgradeGame(game);

    AppDispatcher.dispatch({
      actionType: GameConstants.RECEIVE_GAME,
      game: game
    });
  },

  saveGame() {
    // generates a JSON representation of the game and saves it in a file for the user to save on disk

    let data = JSON.stringify(GameStore.getGame(), null, 2); // pretty prints, but line endings don't seem to be 
    data = data.replace(/[\n\r]/g, '\r\n'); // ensure Windows line endings, in case anyone is actually naive enough to open the generated file in Notepad

    let filename = "gloomhaven_save_" + moment().format("YYYYMMDD_HHmm");

    let blob = new Blob([data], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, filename);
  },

  changeGame: (game) => {
    AppDispatcher.dispatch({
      actionType: GameConstants.CHANGE_GAME,
      game: game
    });
  },

  changeProsperity(amount) {
    AppDispatcher.dispatch({
      actionType: GameConstants.CHANGE_PROSPERITY,
      amount: amount
    });
  }

}