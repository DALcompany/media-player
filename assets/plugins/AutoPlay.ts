import MediaPlayer from "../MediaPlayer"

class AutoPlay {
  constructor() { }
  run(player: MediaPlayer) {
    !player.stateSound() ?
      player.mute():
      player.play()
    player.toggleImg()
  }
}


export default AutoPlay