const musicCheckbox = document.getElementById("musicCheckbox");
const music = document.getElementById("music");

musicCheckbox.addEventListener("change", function () {
  if (musicCheckbox.checked) {
    music.play();
  } else {
    music.pause();
  }
});

function adjustVolume(volume) {
  const music = document.getElementById("music");
  music.volume = volume;
}
