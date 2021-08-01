// Buttons default
const btnPlay = document.createElement('button')
const btnMute = document.createElement('button')

// Imagenes default for buttons
// Imagen Play
const imgPlay = document.createElement('img')
imgPlay.alt = 'Play'
imgPlay.src = 'https://img.icons8.com/fluency/48/000000/play.png'

// Imagen Pause
const imgPause = document.createElement('img')
imgPause.alt = 'Pause'
imgPause.src = 'https://img.icons8.com/fluency/48/000000/pause.png'

// Imagen Mute
const imgMute = document.createElement('img')
imgMute.alt = 'Mute'
imgMute.src = 'https://img.icons8.com/color/48/000000/mute.png'

// Imagen Unmute
const imgUnmute = document.createElement('img')
imgUnmute.alt = 'Unmute'
imgUnmute.src = 'https://img.icons8.com/color/48/000000/room-sound.png'

imgPlay.style.width = '30px'
imgPause.style.width = '30px'
imgMute.style.width = '30px'
imgUnmute.style.width = '30px'

function MediaPlayer(config) {
  this.media = config.media
  this.pannelControl = config.pannelControl || false
  this.plugins = config.plugins || []

  this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function () {
  this.plugins.forEach(plugin => {
    plugin.run(this)
  });
}

MediaPlayer.prototype.play = function () {
  this.media.play()
};

MediaPlayer.prototype.pause = function () {
  this.media.pause()
};

MediaPlayer.prototype.mute = function () {
  this.media.muted = true
}

MediaPlayer.prototype.unmute = function () {
  this.media.muted = false
}

MediaPlayer.prototype.stateSound = function () {
  return this.media.muted
}

MediaPlayer.prototype.stateVideo = function () {
  return this.media.paused
}

MediaPlayer.prototype.toggleMute = function () {
  if (this.stateSound()) {
    this.unmute()
    btnMute.removeChild(btnMute.childNodes[0])
    btnMute.appendChild(imgUnmute)
  } else {
    this.mute()
    btnMute.removeChild(btnMute.childNodes[0])
    btnMute.appendChild(imgMute)
  }
}

MediaPlayer.prototype.togglePlay = function () {
  if (this.stateVideo()) {
    this.play()
    btnPlay.removeChild(btnPlay.childNodes[0])
    btnPlay.appendChild(imgPause)
  } else {
    this.pause()
    btnPlay.removeChild(btnPlay.childNodes[0])
    btnPlay.appendChild(imgPlay)
  }
}

MediaPlayer.prototype.displayPannelControl = function () {
  if (this.pannelControl) {

    console.log(this.stateSound())
    
    btnPlay.appendChild((this.stateVideo()) ? imgPlay : imgPause)

    btnMute.appendChild((this.stateSound()) ? imgMute : imgUnmute)

    btnPlay.onclick = () => {
      this.togglePlay()
    }
    
    btnMute.onclick = () => {
      this.toggleMute()
    }

    this.pannelControl.appendChild(btnPlay)
    this.pannelControl.appendChild(btnMute)

  }
}

export default MediaPlayer