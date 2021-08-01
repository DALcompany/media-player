const movie = document.querySelector('.movie')
const playButton = document.querySelector('#playButton')
const pauseButton = document.querySelector('#pauseButton')
const muteButton = document.querySelector('#muteButton')

pauseButton.style.display = 'none'

function MediaPlayer(config) {
  this.media = config.el;
}

MediaPlayer.prototype.play = function () {
  this.media.play()
};

MediaPlayer.prototype.pause = function () {
  this.media.pause()
};

MediaPlayer.prototype.togglePlay = function () {
  if (this.media.paused) {
    this.play()
    playButton.style.display = 'none'
    pauseButton.style.display = 'inline-block'
  } else {
    this.pause()
    playButton.style.display = 'inline-block'
    pauseButton.style.display = 'none'
  }
}

const player = new MediaPlayer({ el: movie });
playButton.onclick = (e) => {
  player.togglePlay()
}

pauseButton.onclick = (e) => {
  player.togglePlay()
}