class MediaPlayer {

  media: HTMLMediaElement
  plugins: Array<any>
  // Container
  container: HTMLDivElement
  // Buttons
  private btnPlay: HTMLButtonElement = document.createElement('button')
  private btnMute: HTMLButtonElement = document.createElement('button')
  // Images for Buttons
  private imgPlay: HTMLImageElement = document.createElement('img')
  private imgPause: HTMLImageElement = document.createElement('img')
  private imgMute: HTMLImageElement = document.createElement('img')
  private imgUnmute: HTMLImageElement = document.createElement('img')

  constructor(config: { video: any; container: any; plugins: Array<any> }) {

    this.media = config.video
    this.container = config.container
    this.plugins = config.plugins || []

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

  setButtonImg(width: string = '') {
    // Imagen Play
    this.imgPlay.style.width = width || '30px'
    this.imgPlay.alt = 'Play'
    this.imgPlay.src = 'https://img.icons8.com/fluency/48/000000/play.png'
    // Imagen Pause
    this.imgPause.style.width = width || '30px'
    this.imgPause.alt = 'Pause'
    this.imgPause.src = 'https://img.icons8.com/fluency/48/000000/pause.png'
    // Imagen Mute
    this.imgMute.style.width = width || '30px'
    this.imgMute.alt = 'Mute'
    this.imgMute.src = 'https://img.icons8.com/color/48/000000/mute.png'
    // Imagen Unmute
    this.imgUnmute.style.width = width || '30px'
    this.imgUnmute.alt = 'Unmute'
    this.imgUnmute.src = 'https://img.icons8.com/color/48/000000/room-sound.png'
  }

  toggleMute() {
    this.stateSound() ?
      this.unmute() :
      this.mute()
    this.toggleImg()
  }

  togglePlay() {
    this.stateVideo() ?
      this.play() :
      this.pause()
    this.toggleImg()
  }

  toggleImg() {
    this.btnPlay.innerHTML = ''
    this.btnMute.innerHTML = ''
    this.btnPlay.appendChild(this.stateVideo() ? this.imgPlay : this.imgPause)
    this.btnMute.appendChild(this.stateSound() ? this.imgMute : this.imgUnmute)
  }

  displayContainerPanel() {

    this.setButtonImg()
    this.toggleImg()

    this.container.appendChild(this.btnPlay)
    this.container.appendChild(this.btnMute)

    this.btnPlay.onclick = () => this.togglePlay()
    this.btnMute.onclick = () => this.toggleMute()
    
  }

}

export default MediaPlayer