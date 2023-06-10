//your JS code here. If required.
// Get all the key elements
const keys = document.querySelectorAll('.key');

// Attach event listener to each key
keys.forEach(key => {
  key.addEventListener('click', playSound);
});

// Attach event listener to the window to listen for keydown event
window.addEventListener('keydown', playSound);

// Function to play sound
function playSound(e) {
  // If the event is triggered by a keydown event, use e.keyCode
  // If the event is triggered by a click event, use e.target.getAttribute('data-key')
  const keyCode = e.keyCode || e.target.getAttribute('data-key');
  
  // Find the audio element with the corresponding data-key attribute
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);

  // Find the key element with the corresponding data-key attribute
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);

  if (!audio) return; // Return early if no audio element found

  audio.currentTime = 0; // Rewind audio to the start
  audio.play(); // Play the audio

  key.classList.add('playing'); // Add the "playing" class to the key element
}

// Function to remove the "playing" class after transition end
function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // Skip if the transition property is not "transform"
  
  this.classList.remove('playing');
}

// Get all the key elements
const keys = document.querySelectorAll('.key');

// Attach transitionend event listener to each key
keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition);
});
