import MediaPlayer from "../MediaPlayer";

class AutoPause {

  private threshold: number;
  player: MediaPlayer;

  constructor () {
    this.threshold = 0.25
    this.handleIntersection = this.handleIntersection.bind(this)
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
  }
  run(player) {
    this.player = player

    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold
    })

    observer.observe(this.player.media)
    document.addEventListener('visibilitychange', this.handleVisibilityChange)
  }

  private handleIntersection (entries: IntersectionObserverEntry[]) {
    const entry = entries[0]
    const isVisible = entry.intersectionRatio >= this.threshold

    isVisible ?
      this.player.play():
      this.player.pause()
    this.player.toggleImg()
  }

  private handleVisibilityChange () {
    const isVisible = document.visibilityState === "visible"

    isVisible ?
      this.player.play():
      this.player.pause()
    this.player.toggleImg()
  }
}

export default AutoPause