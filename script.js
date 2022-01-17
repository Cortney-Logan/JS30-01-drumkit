const keys = document.querySelectorAll(".key");

window.addEventListener("keydown", playKey);
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

function playKey(evt) {
  const audio = document.querySelector(`audio[data-key="${evt.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${evt.keyCode}"]`);

  if (!audio) {
    return;
  }
  audio.currentTime = 0; // rewinds to start of audio
  audio.play();

  key.classList.add("playing");
}

function removeTransition(evt) {
  if (evt.propertyName !== "transform") return; // skip if it's not a transform
  this.classList.remove("playing");
}
