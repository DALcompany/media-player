function MediaPlayer(config) {
  this.media = config.el;
}

MediaPlayer.prototype.play = function () {
  this.media.play()
};

MediaPlayer.prototype.pause = function () {
  this.media.pause()
};

MediaPlayer.prototype.togglePlay = function (btnPlayAndPause) {
  if (this.media.paused) {
    this.play()
    btnPlayAndPause.innerHTML = "Pause"
  } else {
    this.pause()
    btnPlayAndPause.innerHTML = "Play"
  }
}

MediaPlayer.prototype.toggleMute = function (btnMuteAndUnmute) {
  if (this.media.muted) {
    this.media.muted = false
    btnMuteAndUnmute.innerHTML = "Mute"
  } else {
    this.media.muted = true
    btnMuteAndUnmute.innerHTML = "Unmute"
  }
}

export default MediaPlayer