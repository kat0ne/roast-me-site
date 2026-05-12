type Trend = {
  id: number;
  title: string;
  category: string;
  score: number;
};

let trends: Trend[] = load();

const list = document.getElementById("list") as HTMLDivElement;

const titleInput = document.getElementById("title") as HTMLInputElement;
const categoryInput = document.getElementById("category") as HTMLInputElement;
const scoreInput = document.getElementById("score") as HTMLInputElement;
const searchInput = document.getElementById("search") as HTMLInputElement;
const addBtn = document.getElementById("addBtn") as HTMLButtonElement;

addBtn.onclick = () => {
  const trend: Trend = {
    id: Date.now(),
    title: titleInput.value,
    category: categoryInput.value,
    score: Number(scoreInput.value)
  };

  trends.push(trend);
  save();
  render();
};

searchInput.oninput = () => render();

function render() {
  const query = searchInput.value.toLowerCase();

  list.innerHTML = "";

  trends
    .filter(t =>
      t.title.toLowerCase().includes(query) ||
      t.category.toLowerCase().includes(query)
    )
    .sort((a, b) => b.score - a.score)
    .forEach(t => {
      const div = document.createElement("div");
      div.className = "trend";

      div.innerHTML = `
        <div>${t.title}</div>
        <div class="meta">${t.category} | score: ${t.score}/10</div>
      `;

      list.appendChild(div);
    });
}

function save() {
  localStorage.setItem("trends", JSON.stringify(trends));
}

function load(): Trend[] {
  return JSON.parse(localStorage.getItem("trends") || "[]");
}

render();
