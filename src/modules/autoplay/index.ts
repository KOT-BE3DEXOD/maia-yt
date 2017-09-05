import { onPlayerConfiguration, onPlayerCreated } from "../IModule";
import { PlayerConfig } from "../../app/youtube/PlayerConfig";
import { Module } from "../Module";
import { Player } from "../../app/player/Player";
import { Logger } from '../../libs/logging/Logger';
import { EventType } from '../../app/youtube/EventType';
const logger = new Logger("AutoPlayModule");

export class AutoPlayModule extends Module implements onPlayerCreated {
  public name: string = "AutoPlay";
  
  onPlayerCreated(player: Player): void {
    let unstarted: boolean = true;
    this.getHandler()
      .listen(player, EventType.ENDED, () => {
        unstarted = false;
      })
      .listen(player, EventType.PAUSED, () => {
        unstarted = false;
      })
      .listen(player, EventType.UNSTARTED, () => {
        unstarted = true;
      })
      .listen(player, EventType.PLAYED, () => {
        const enabled: boolean = this.getSettingsStorage().get('enabled', false);

        if (enabled && unstarted) {
          logger.debug("Preveting auto-play by pausing the video.");
          player.pause();
        }
        unstarted = false;
      });
  }
}