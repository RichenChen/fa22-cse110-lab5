// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  let voices = [];
  const selector = document.getElementById('voice-select');
  function populateVoiceList() {
    voices = synth.getVoices();
    console.log(voices.length);
    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      console.log(option);
      selector.add(option);
    }
  }
  
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  const button = document.querySelector('button');
  const pic = document.querySelector('img');
  button.addEventListener('click', () => {
    if (selector.value != 'select') {
      pic.src = 'assets/images/smiling-open.png';
      const text = document.getElementById('text-to-speak');
      const speech = new SpeechSynthesisUtterance(text.value);
      synth.speak(speech);
      setInterval(function() {resetIMG();}, 500);
    }
  });

  function resetIMG() {
    if (!synth.speaking) {
      pic.src = 'assets/images/smiling.png';
    } else {
      setInterval(function() {resetIMG();}, 500);
    }
  }
}