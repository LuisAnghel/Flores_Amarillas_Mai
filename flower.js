onload = () => {
  document.body.classList.remove('container');
};

const music = document.getElementById('bg-music');
document.body.addEventListener(
  'click',
  () => {
    music.muted = false;
    music.play();
  },
  { once: true }
);
