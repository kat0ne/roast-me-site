const roasts = [
  "T’es la raison pour laquelle le bouton ‘annuler’ existe.",
  "Même ton ombre hésite à te suivre.",
  "Ton cerveau est en mode économie d’énergie permanente.",
  "Si la motivation était une personne, elle t’éviterait.",
  "Tu fais buguer la logique de base.",
  "Ton WiFi a plus de stabilité que tes décisions.",
  "Tu es la preuve vivante que le hasard existe.",
  "Google quand il te voit : 'aucun résultat trouvé'.",
  "Même ton reflet a besoin de café pour te supporter.",
  "Tu progresses comme un téléchargement bloqué à 99%.",
  "Ton karma est en période d’essai gratuite.",
  "Si la honte avait une mascotte, elle te remercierait.",
  "Ton cerveau est en vacances illimitées.",
  "Même les bugs refusent de coopérer avec toi.",
  "Tu pourrais perdre un débat contre une chaise.",
  "La gravité est déçue de ton existence.",
  "Ton énergie est en mode avion sans réseau.",
  "Si l’échec était un art, tu serais une galerie entière.",
  "Tu charges plus lentement qu’un site en 2005.",
  "Même les notifications t’ignorent.",
  "Ton niveau de focus est inférieur à un poisson rouge.",
  "Tu fais buguer les décisions simples.",
  "Ton existence est une question sans réponse.",
  "Même ton futur toi t’a bloqué.",
  "Tu es une mise à jour qui casse tout le système.",
  "Le hasard a regretté de te créer."
];

const compliments = [
  "T’as une énergie qui change l’ambiance d’une pièce ✨",
  "Ta présence améliore instantanément n’importe quel endroit 🌍",
  "T’as un potentiel énorme même si tu ne le vois pas encore 💎",
  "Tu fais partie des personnes qu’on n’oublie pas 🔥",
  "Ton mindset pourrait inspirer beaucoup de monde 💡",
  "T’as quelque chose de rare et authentique 🌟",
  "Tu dégages une vibe calme mais puissante ⚡",
  "Même sans parler, tu imposes quelque chose de positif",
  "Tu pourrais accomplir des choses incroyables si tu continues 💪",
  "T’as une intelligence naturelle sous-estimée 🧠",
  "Le monde serait un peu meilleur avec plus de gens comme toi",
  "Tu es une bonne surprise dans un monde imprévisible",
  "T’as un charisme discret mais réel 💫",
  "Ton énergie est contagieuse dans le bon sens",
  "T’as quelque chose de sincère que beaucoup n’ont pas",
  "Tu inspires plus que tu ne le crois",
  "Même tes défauts te rendent unique",
  "T’as une façon naturelle d’être intéressant",
  "Tu es un upgrade pour n’importe quel groupe",
  "Ton existence est plus impactante que tu ne l’imagines",
  "Tu pourrais aller loin si tu continues comme ça 🚀",
  "T’as une aura agréable sans effort",
  "Tu rends les choses plus simples autour de toi",
  "T’es quelqu’un qu’on remarque sans raison",
  "Tu as un potentiel encore caché mais énorme"
];

// 🔍 récupérer prénom
function getName() {
  const name = document.getElementById("name").value.trim();
  return name.length ? name : "Inconnu";
}

// 🎬 animation résultat
function animateResult() {
  const el = document.getElementById("result");

  el.style.transform = "scale(0.97)";
  el.style.opacity = "0.6";

  setTimeout(() => {
    el.style.transform = "scale(1)";
    el.style.opacity = "1";
  }, 120);
}

// 📳 vibration mobile
function vibrate() {
  if (navigator.vibrate) {
    navigator.vibrate(40);
  }
}

// 🔥 ROAST
function roast() {
  const name = getName();
  const text = roasts[Math.floor(Math.random() * roasts.length)];

  document.getElementById("result").innerText = `😈 ${name}, ${text}`;

  animateResult();
  vibrate();
}

// 💖 COMPLIMENT
function compliment() {
  const name = getName();
  const text = compliments[Math.floor(Math.random() * compliments.length)];

  document.getElementById("result").innerText = `💖 ${name}, ${text}`;

  animateResult();
  vibrate();
}

// ⌨️ Enter = roast rapide
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    roast();
  }
});
