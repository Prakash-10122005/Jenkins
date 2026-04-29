const musicData = {
  happy: [
    { title: "Arabic Kuthu", file: "music/Arabic Kuthu.mp3" },
    { title: "Vaathi Coming", file: "music/Vaathi Coming.mp3" },
    { title: "Don'u Don'u Don'u", file: "music/Don'u Don'u Don'u.mp3" }
  ],
  sad: [
    { title: "Maruvaarthai", file: "music/Maruvaarthai.mp3" },
    { title: "Po Nee Po", file: "music/Po Nee Po.mp3" },
    { title: "Maname Maname", file: "music/Maname Maname.mp3" }
  ],
  relax: [
    { title: "Naan Un", file: "music/Naan Un.mp3" },
    { title: "Adiye Azhage", file: "music/Adiye Azhage.mp3" },
    { title: "Kadhaipoma", file: "music/Kadhaipoma.mp3" }
  ],
  energy: [
    { title: "Illuminati", file: "music/Illuminati.mp3" },
    { title: "Naattu Koothu", file: "music/Naattu Koothu.mp3" },
    { title: "Aaya Sher", file: "music/Aaya Sher.mp3" }
  ]
};

function getMusic(mood, btn) {
  const songsDiv = document.getElementById("songs");
  songsDiv.innerHTML = "";

  document.querySelectorAll(".moods button").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

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

function logout() {
  sessionStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}