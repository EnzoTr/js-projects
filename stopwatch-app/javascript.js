let [seconds, minutes, hours] = [0,0,0];
let displayTime = document.getElementById('displayTime');
let playBtn = document.getElementById('playBtn');
let timer = null;
let timerOn = false;

function stopWatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }

    

    let h = hours < 10 ? '0' + hours : hours; 
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;

    console.log([seconds, minutes, hours]);
    displayTime.innerHTML = h + ':' + m + ':' + s
}



function watchStart(){

    if(playBtn.classList.contains('fa-play')){
        playBtn.classList.remove('fa-play');
        playBtn.classList.add('fa-pause');
    }else{
        playBtn.classList.remove('fa-pause');
        playBtn.classList.add('fa-play');
    }

    if(timerOn == true){
        clearInterval(timer);
    }else{
        timer = setInterval(stopWatch,1000);
    }

    timerOn == false ? timerOn = true : timerOn = false;
    
}

function watchReset(){

    

    clearInterval(timer);
    [seconds, minutes, hours] = [0,0,0];
    displayTime.innerHTML = '00:00:00';

    if(playBtn.classList.contains('fa-pause')){
        playBtn.classList.remove('fa-pause');
        playBtn.classList.add('fa-play');
    }
}
