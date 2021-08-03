class MediaPlayer {
  media: HTMLMediaElement
  plugins: Array <any>
  pannelControl: HTMLDivElement
// Buttons
  btnPlay: HTMLButtonElement
  btnMute: HTMLButtonElement
// Images for Buttons
  imgPlay: HTMLImageElement
  imgPause: HTMLImageElement
  imgMute: HTMLImageElement
  imgUnmute: HTMLImageElement

  constructor(config) {
    this.media = config.media
    this.pannelControl = config.pannelControl || false
    this.plugins = config.plugins || []

    // Imagen Play
    this.imgPlay.style.width = '30px'
    this.imgPlay.alt = 'Play'
    this.imgPlay.src = 'https://img.icons8.com/fluency/48/000000/play.png'
    // Imagen Pause
    this.imgPause.style.width = '30px'
    this.imgPause.alt = 'Pause'
    this.imgPause.src = 'https://img.icons8.com/fluency/48/000000/pause.png'
    // Imagen Mute
    this.imgMute.style.width = '30px'
    this.imgMute.alt = 'Mute'
    this.imgMute.src = 'https://img.icons8.com/color/48/000000/mute.png'
    // Imagen Unmute
    this.imgUnmute.style.width = '30px'
    this.imgUnmute.alt = 'Unmute'
    this.imgUnmute.src = 'https://img.icons8.com/color/48/000000/room-sound.png'

    this.initPlugins()
  }
  private initPlugins() {
    this.plugins.forEach(plugin => {
      plugin.run(this)
    })
  }
  play() {
    this.media.play()
  }
  pause() {
    this.media.pause()
  }
  mute() {
    this.media.muted = true
  }
  unmute() {
    this.media.muted = false
  }
  stateSound() {
    return this.media.muted
  }
  stateVideo() {
    return this.media.paused
  }
  toggleMute() {
    if (this.stateSound()) {
      this.unmute()
      this.btnMute.removeChild(this.btnMute.childNodes[0])
      this.btnMute.appendChild(this.imgUnmute)
    } else {
      this.mute()
      this.btnMute.removeChild(this.btnMute.childNodes[0])
      this.btnMute.appendChild(this.imgMute)
    }
  }
  togglePlay() {
    if (this.stateVideo()) {
      this.play()
      this.btnPlay.removeChild(this.btnPlay.childNodes[0])
      this.btnPlay.appendChild(this.imgPause)
    } else {
      this.pause()
      this.btnPlay.removeChild(this.btnPlay.childNodes[0])
      this.btnPlay.appendChild(this.imgPlay)
    }
  }
  displayPannelControl() {
    if (this.pannelControl) {

      this.btnPlay.appendChild((this.stateVideo()) ? this.imgPlay : this.imgPause)
      this.btnMute.appendChild((this.stateSound()) ? this.imgMute : this.imgUnmute)

      this.btnPlay.onclick = () => {
        this.togglePlay()
      }

      this.btnMute.onclick = () => {
        this.toggleMute()
      }

      this.pannelControl.appendChild(this.btnPlay)
      this.pannelControl.appendChild(this.btnMute)

    }
  }
}











export default MediaPlayer