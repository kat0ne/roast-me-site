const roasts = [
  "T’es la raison pour laquelle le mode facile existe.",
  "Même Google ne veut pas répondre à tes questions.",
  "Ton WiFi est plus rapide que tes décisions.",
  "Tu fais buguer la réalité.",
  "Si la flemme était une personne, tu serais son CEO."
];

const compliments = [
  "T’as une vibe incroyable, continue comme ça ✨",
  "Tu pourrais illuminer une pièce sans lumière 💡",
  "Ton cerveau mérite une récompense 🧠",
  "T’es rare, genre vraiment rare 💎",
  "Le monde irait mieux avec plus de gens comme toi 🌍"
];

function getName() {
  const name = document.getElementById("name").value;
  return name ? name : "Inconnu";
}

function roast() {
  const name = getName();
  const text = roasts[Math.floor(Math.random() * roasts.length)];
  document.getElementById("result").innerText = `😈 ${name}, ${text}`;
}

function compliment() {
  const name = getName();
  const text = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("result").innerText = `💖 ${name}, ${text}`;
}
