import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'

const video = document.querySelector('.movie')
const container = document.querySelector('.pannel-control')

const player = new MediaPlayer({ 
  video: video, 
  container: container,
  plugins: [
    new AutoPlay(),
    new AutoPause()
  ],
})

player.displayContainerPanel()

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(err => {
    console.error(err.message)
  })
}