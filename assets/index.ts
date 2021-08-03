import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'

const movie = document.querySelector('.movie')

const player = new MediaPlayer({ 
  media: movie, 
  pannelControl: document.querySelector('.pannel-control'), 
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