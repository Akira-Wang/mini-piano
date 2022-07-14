
// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

// Write named functions that change the color of the keys below
function keyPlay(event) {
  event.target.style.backgroundColor = '#90EE90';
}

function keyReturn(event) {
  event.target.style.backgroundColor = '';
}

// Write a named function with event handler properties
let eventAssignment = function(note){
  note.onmousedown = keyPlay;
  note.onmouseup = keyReturn;
};

// Write a loop that runs the array elements through the function
notes.forEach(eventAssignment);
