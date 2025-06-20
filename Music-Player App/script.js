const songs = [
  { name: "Song 1", src: "songs/song1.mp3" },
  { name: "Song 2", src: "songs/song2.mp3" },
  { name: "Song 3", src: "songs/song3.mp3" }
];

const songList = document.getElementById("song-list");
const playBtn = document.getElementById("play-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const progress = document.getElementById("progress");

let currentIndex = 0;
let isPlaying = false;

const audio = new Audio();
audio.src = songs[currentIndex].src;

// Populate song list
songs.forEach((song, index) => {
  const li = document.createElement("li");
  li.textContent = song.name;
  li.addEventListener("click", () => {
    currentIndex = index;
    loadSong();
    playSong();
  });
  songList.appendChild(li);
});

function updateActiveSong() {
  const items = document.querySelectorAll("#song-list li");
  items.forEach((li, index) => {
    li.classList.toggle("active", index === currentIndex);
  });
}

function loadSong() {
  audio.src = songs[currentIndex].src;
  updateActiveSong();
}

function playSong() {
  audio.play();
  isPlaying = true;
  playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
}

function pauseSong() {
  audio.pause();
  isPlaying = false;
  playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
}

playBtn.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  loadSong();
  playSong();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % songs.length;
  loadSong();
  playSong();
});

audio.addEventListener("timeupdate", () => {
  progress.value = (audio.currentTime / audio.duration) * 100 || 0;
});

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value * audio.duration) / 100;
});

// Initial load
loadSong();
