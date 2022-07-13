// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

// //note will be
// [(document.getElementById(c-key)), ...,]

// Write named functions that change the color of the keys below
function keyPlay(event) {
  event.target.style.backgroundColor = '#90EE90';
}

function keyReturn(event) {
  event.target.style.backgroundColor = '';
}

//make sound set up
const audio = new Audio();
audio.src= "http://mrclan.com/fastdl/tfc/sound/g.wav";

//make sound event
function playSund(event) {
  event.target.onclick= audio.play();
}

// Write a named function with event handler properties
let eventAssignment = function(note){
  note.onmousedown = playSund;
  // note.onmousedown = keyPlay;
  note.onmouseup = keyReturn;
};

// Write a loop that runs the array elements through the function
notes.forEach(eventAssignment);
