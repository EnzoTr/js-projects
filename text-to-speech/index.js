let speech = new SpeechSynthesisUtterance();
const textArea = document.getElementById('text-area');
const playBtn = document.getElementById('play-btn');

let voices = [];
let voiceSelect = document.getElementById('select-voice');

window.speechSynthesis.onvoiceschanged = ()=>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i)=>(voiceSelect.options[i] = new Option(voice.name, i)));
}

voiceSelect.addEventListener('change',()=>{
    speech.voice = voices[voiceSelect.value];
})

playBtn.addEventListener('click',()=>{
    speech.text = textArea.value;
    window.speechSynthesis.speak(speech)
})