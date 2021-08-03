import MediaPlayer from "../MediaPlayer"

class AutoPlay {
  constructor() { }
  run(player: MediaPlayer) {
    if (!player.stateSound()) {
      player.mute()
    }
    player.play()
  }
}


export default AutoPlay