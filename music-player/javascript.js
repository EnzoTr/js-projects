
const progressBar = document.getElementById('progress-bar');
const volumeBar = document.getElementById('volume-bar');
let song = document.getElementById('song');
let playIcon = document.getElementById('playIcon');

volumeBar.max = 100;
volumeBar.value = song.volume;

function updateVolume(){
  const value = song.volume;
  const max = 1;
  const progress = (value / max) * 100;

  volumeBar.style.setProperty('--progress', `${progress}%`);
}

volumeBar.onchange = function(){
  song.volume = volumeBar.value/100;
  updateVolume();
}

function updateProgress() {
  // const value = progressBar.value;
  // const max = progressBar.max || 100;
  const progress = (progressBar.value / progressBar.max) * 100;

  // Cambia dinámicamente el fondo de la barra
  progressBar.style.setProperty('--progress', `${progress}%`);
}

progressBar.max = song.duration;
progressBar.value = song.currentTime;

song.onloadedmetadata = function(){
  progressBar.max = song.duration;
  progressBar.value = song.currentTime;
}

function playPause(){
  if(playIcon.classList.contains('fa-pause')){
    song.pause();
    playIcon.classList.remove('fa-pause');
    playIcon.classList.add('fa-play');
  }else{
    song.play();
    playIcon.classList.remove('fa-play');
    playIcon.classList.add('fa-pause');
  }
}

if(song.play()){
  setInterval(()=>{
    progressBar.value = song.currentTime;
    updateProgress();
  },250);
}

progressBar.onchange = function(){
  song.play();
  song.currentTime = progressBar.value;
  playIcon.classList.remove('fa-play');
  playIcon.classList.add('fa-pause');
}

song.volume = .5;
updateVolume()
updateProgress();
song.pause();