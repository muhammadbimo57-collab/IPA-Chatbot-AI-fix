// =========================================================
// LOGIKA CHATBOT — AI Assistant IPA
// Pencocokan sederhana berbasis keyword (tanpa API/internet),
// sehingga bisa langsung dipakai walau di-embed di Canva.
// =========================================================

const chatbox = document.getElementById("chatbox");
const input = document.getElementById("question");
const suggestionsBar = document.getElementById("suggestions");

// Normalisasi teks: lowercase & buang tanda baca supaya pencocokan lebih akurat
function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function addAvatar(row, sender) {
  const avatar = document.createElement("div");
  avatar.className = "avatar " + sender;
  avatar.textContent = sender === "bot" ? "🤖" : "🙂";
  row.appendChild(avatar);
}

function appendMessage(sender, html) {
  const row = document.createElement("div");
  row.className = "msg-row " + sender;

  if (sender === "user") {
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.textContent = html; // pesan user ditampilkan sebagai plain text
    addAvatar(row, sender);
    row.appendChild(bubble);
  } else {
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.innerHTML = html; // jawaban bot boleh mengandung tag <b>, <br>, dll
    addAvatar(row, sender);
    row.appendChild(bubble);
  }

  chatbox.appendChild(row);
  chatbox.scrollTop = chatbox.scrollHeight;
  return row;
}

function showTyping() {
  const row = document.createElement("div");
  row.className = "msg-row bot typing";
  const avatar = document.createElement("div");
  avatar.className = "avatar bot";
  avatar.textContent = "🤖";
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.innerHTML = "<span class='dot'></span><span class='dot'></span><span class='dot'></span>";
  row.appendChild(avatar);
  row.appendChild(bubble);
  chatbox.appendChild(row);
  chatbox.scrollTop = chatbox.scrollHeight;
  return row;
}

// Cek apakah SEMUA kata dalam satu keyword muncul di teks pertanyaan,
// tidak perlu berurutan persis (misal "sejarah penemuan sel" tetap cocok
// dengan keyword "sejarah sel" karena kedua katanya ada di teks)
function keywordMatches(keyword, text) {
  const words = normalize(keyword).split(" ").filter(Boolean);
  return words.every((w) => text.includes(w)) ? words.length : 0;
}

// Cari jawaban paling cocok di KB. Setiap topik dinilai berdasarkan
// keyword TERPANJANG (paling spesifik) yang cocok dengan pertanyaan,
// supaya keyword umum (misal "sel") tidak mengalahkan keyword lebih
// spesifik (misal "sel hewan") saat keduanya sama-sama muncul di teks.
function findAnswer(userText) {
  const text = normalize(userText);
  let bestMatch = null;
  let bestScore = 0;

  KB.forEach((item) => {
    let itemBest = 0;
    item.keywords.forEach((kw) => {
      const specificity = keywordMatches(kw, text);
      if (specificity > itemBest) itemBest = specificity;
    });
    if (itemBest > bestScore) {
      bestScore = itemBest;
      bestMatch = item;
    }
  });

  return bestMatch;
}

function sendQuestion() {
  const value = input.value.trim();
  if (!value) return;

  appendMessage("user", value);
  input.value = "";
  input.focus();

  const typingRow = showTyping();

  setTimeout(() => {
    typingRow.remove();
    const match = findAnswer(value);
    if (match) {
      const html = match.title
        ? `<span class="answer-title">${match.title}</span>${match.answer}`
        : match.answer;
      appendMessage("bot", html);
    } else {
      appendMessage("bot", FALLBACK_MESSAGE);
    }
  }, 500 + Math.random() * 400);
}

// Kirim pertanyaan saat tombol Enter ditekan
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendQuestion();
});

// Render chip saran pertanyaan cepat
function renderSuggestions() {
  suggestionsBar.innerHTML = "";
  QUICK_SUGGESTIONS.forEach((text) => {
    const chip = document.createElement("button");
    chip.className = "chip";
    chip.type = "button";
    chip.textContent = text;
    chip.addEventListener("click", () => {
      input.value = text;
      sendQuestion();
    });
    suggestionsBar.appendChild(chip);
  });
}

// Inisialisasi tampilan awal chatbot
function init() {
  appendMessage("bot", WELCOME_MESSAGE);
  renderSuggestions();
}

init();
