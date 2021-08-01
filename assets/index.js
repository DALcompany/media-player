import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const movie = document.querySelector('.movie')
const pannelControl = document.querySelector('.pannel-control')

const player = new MediaPlayer({ 
  media: movie, 
  pannelControl: pannelControl, 
  plugins: [
    new AutoPlay()
  ] 
})

player.displayPannelControl()