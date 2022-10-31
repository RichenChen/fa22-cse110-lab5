// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const selector = document.getElementById('horn-select');
  selector.addEventListener('change', () => {
    const img = document.querySelector('img');
    img.src = 'assets/images/' + selector.value + '.svg';
  });
  
  const audio = document.getElementsByClassName('hidden')[0];
  const button = document.querySelector('button');
  button.addEventListener('click', () => {
    if (selector.value != 'select') {
      audio.src = 'assets/audio/' + selector.value + '.mp3';
      audio.play();
    }
    if (selector.value == 'party-horn') {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });
  
  const volume = document.getElementById('volume-controls');
  volume.addEventListener('input', () => {
    const input = document.getElementById('volume');
    audio.volume = input.value / 100;
    const pic = document.querySelector('div img');
    if (input.value == 0) {
      pic.src = 'assets/icons/volume-level-' + 0 + '.svg';      
    } else if (input.value < 33) {
      pic.src = 'assets/icons/volume-level-' + 1 + '.svg';      
    } else if (input.value < 66) {
      pic.src = 'assets/icons/volume-level-' + 2 + '.svg';      
    } else if (input.value <= 100) {
      pic.src = 'assets/icons/volume-level-' + 3 + '.svg';      
    }
  });
}