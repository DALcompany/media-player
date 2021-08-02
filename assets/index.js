import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

const movie = document.querySelector('.movie')
const pannelControl = document.querySelector('.pannel-control')

const player = new MediaPlayer({ 
  media: movie, 
  pannelControl: pannelControl, 
  plugins: [
    new AutoPlay(),
    new AutoPause()
  ] 
})

player.displayPannelControl()

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(err => {
    console.error(err.message)
  })
}