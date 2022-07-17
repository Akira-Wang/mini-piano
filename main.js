function playNotes (key,link) {
  
  let audio = key+"audio"
  audio = new Audio();
  audio.src= link;

  let targ = document.getElementById(key+"-key");
  
  targ.addEventListener("click", e=>{
    audio.play();
  })
  targ.addEventListener("click", e=>{
    targ.classList.add("changeColor");
  })
  targ.addEventListener("mouseout", e=>{
    targ.classList.remove("changeColor");
  })

}
const keys = [ 'c', 'd', 'e', 'f', 'g'];

keys.forEach((key)=>{
  playNotes(key,`sounds/${key}.wav`);
});