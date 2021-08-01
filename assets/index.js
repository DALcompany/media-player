import MediaPlayer from './MediaPlayer.js'

const movie = document.querySelector('.movie')
const playButton = document.querySelector('#playButton')
const muteButton = document.querySelector('#muteButton')

const player = new MediaPlayer({ el: movie })

playButton.onclick = () => player.togglePlay(playButton)
muteButton.onclick = () => player.toggleMute(muteButton)