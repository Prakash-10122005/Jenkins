const musicData = {
  happy: [
    { title: "Arabic Kuthu", file: "music/happy1.mp3" },
    { title: "Vaathi Coming", file: "music/happy2.mp3" },
    { title: "Don'u Don'u Don'u", file: "music/happy3.mp3" }
  ],
  sad: [
    { title: "Maruvaarthai", file: "music/sad1.mp3" },
    { title: "Po Nee Po", file: "music/sad2.mp3" },
    { title: "Maname Maname", file: "music/sad3.mp3" }
  ],
  relax: [
    { title: "Naan Un", file: "music/relax1.mp3" },
    { title: "Adiye Azhage", file: "music/relax2.mp3" },
    { title: "Kadhaipoma", file: "music/relax3.mp3" }
  ],
  energy: [
    { title: "Illuminati", file: "music/energy1.mp3" },
    { title: "Naattu Koothu", file: "music/energy2.mp3" },
    { title: "Aaya Sher", file: "music/energy3.mp3" }
  ]
};

function getMusic(mood, btn) {
  const songsDiv = document.getElementById("songs");
  songsDiv.innerHTML = "";

  // Remove active class from all buttons
  document.querySelectorAll(".moods button").forEach(b => {
    b.classList.remove("active");
  });

  // Add active to clicked button
  btn.classList.add("active");

  // Load songs
  musicData[mood].forEach(song => {
    songsDiv.innerHTML += `
      <div class="song">
        <p>${song.title}</p>
        <audio controls>
          <source src="${song.file}" type="audio/mpeg">
        </audio>
      </div>
    `;
  });
}