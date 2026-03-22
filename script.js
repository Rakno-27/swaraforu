const loginScreen = document.getElementById("loginScreen");
const siteContent = document.getElementById("siteContent");
const passwordInput = document.getElementById("passwordInput");
const unlockBtn = document.getElementById("unlockBtn");
const loginError = document.getElementById("loginError");

const music = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
const restartBtn = document.getElementById("restartBtn");

const greetingEl = document.getElementById("dynamicGreeting");
const typewriterText = document.getElementById("typewriterText");

const secretPassword = "21feb2026";

/* LOGIN */
unlockBtn.addEventListener("click", unlockSite);
passwordInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") unlockSite();
});

function unlockSite() {
  const value = passwordInput.value.trim().toLowerCase();

  if (value === secretPassword) {
    loginScreen.style.display = "none";
    siteContent.classList.remove("hidden");
    startWebsite();
  } else {
    loginError.textContent = "That isn't our word...";
    passwordInput.focus();
  }
}

/* START */
function startWebsite() {
  createParticles();
  updateGreeting();
  startCounter();
  typeLetter();
}

/* GREETING */
function updateGreeting() {
  const hour = new Date().getHours();
  let text = "Good evening, my love";

  if (hour < 12) {
    text = "Good morning, my love";
  } else if (hour < 17) {
    text = "Good afternoon, my love";
  } else {
    text = "Good evening, my love";
  }

  greetingEl.textContent = text;
}

/* COUNTER */
/* Change this date to your real anniversary date */
const specialDate = new Date("2026-02-21T09:30:00");

function startCounter() {
  function update() {
    const now = new Date();
    let diff = now - specialDate;

    if (diff < 0) diff = 0;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent = String(days).padStart(3, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
  }

  update();
  setInterval(update, 1000);
}

/* TYPEWRITER */
const letterContent = `You came into my life quietly... but changed everything without trying.

Before you, I didn't know what it meant to feel completely seen. You understand the parts of me I struggle to explain, and love them anyway.

You make ordinary days feel special. Silence feels comfortable. Even the hard moments I forget because you're there.

I didn’t come to fill your loneliness, I came to stay and end it.

I don't need grand gestures or perfect moments. I just need you — exactly as you are. Your art fills my heart in ways words can’t. 

Thank you for choosing me, for staying, for being the person I want to share everything with.

You are my favorite feeling, my safest place, my future wife (please watch Mismatched).

loveee you sooo much`;

function typeLetter() {
  let i = 0;
  typewriterText.innerHTML = "";

  const cursor = document.createElement("span");
  cursor.className = "cursor";

  function type() {
    if (i < letterContent.length) {
      typewriterText.textContent += letterContent.charAt(i);
      i++;
      typewriterText.appendChild(cursor);
      setTimeout(type, 28);
    } else {
      typewriterText.appendChild(cursor);
    }
  }

  type();
}

/* REASONS */
document.querySelectorAll(".hidden-reason").forEach((card) => {
  card.addEventListener("click", () => {
    const reason = card.getAttribute("data-reason");
    card.classList.remove("hidden-reason");
    card.classList.add("revealed");
    card.innerHTML = reason;
  });
});

/* MUSIC */
let isPlaying = false;

musicToggle.addEventListener("click", () => {
  if (!isPlaying) {
    music.play().then(() => {
      isPlaying = true;
      musicToggle.textContent = "❚❚";
    }).catch(() => {
      musicToggle.textContent = "▶";
    });
  } else {
    music.pause();
    isPlaying = false;
    musicToggle.textContent = "▶";
  }
});

/* RESTART */
restartBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* PARTICLES */
function createParticles() {
  const container = document.getElementById("particles");
  const particleCount = 26;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("span");
    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "%";
    particle.style.bottom = -20 + "px";
    particle.style.animationDuration = 8 + Math.random() * 10 + "s";
    particle.style.animationDelay = Math.random() * 6 + "s";
    particle.style.opacity = (0.2 + Math.random() * 0.7).toString();

    const size = 4 + Math.random() * 8;
    particle.style.width = size + "px";
    particle.style.height = size + "px";

    container.appendChild(particle);
  }
}