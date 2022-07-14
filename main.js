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
const keySounds = [ 'c', 'd', 'e', 'f', 'g'];

keySounds.forEach((key)=>{
  playNotes(key,`sounds/${key}.wav`);
});
