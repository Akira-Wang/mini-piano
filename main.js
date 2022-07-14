function playNotes (key,link) {
  
  let audio = key+"audio"
  audio = new Audio();
  audio.src= link;
  
  function playSund(event) {
    event.target.onclick= audio.play();
  }
  
  let note = key+"-key"
  document.getElementById(note).onmousedown = playSund;

}
const keys = [ 'c', 'd', 'e', 'f', 'g'];

keys.forEach((key)=>{
  playNotes(key,`sounds/${key}.wav`);
});




// The keys and notes variables store the piano keys
// const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
// const notes = [];
// keys.forEach(function(key){
//   notes.push(document.getElementById(key));
// })

// // Write named functions that change the color of the keys below
// function keyPlay(event) {
//   event.target.style.backgroundColor = '#90EE90';
// }
// function keyReturn(event) {
//   event.target.style.backgroundColor = '';
// }

// // Write a named function with event handler properties
// let eventAssignment = function(note){
//   note.onmousedown = playSund;
// };

// // Write a loop that runs the array elements through the function
// notes.forEach(eventAssignment);
