const greetingEl = document.getElementById("greeting");
const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");
const searchFormEl = document.getElementById("searchForm");
const searchEngineEl = document.getElementById("searchEngine");
const searchInputEl = document.getElementById("searchInput");
const cardsGridEl = document.getElementById("cardsGrid");

function formatGreeting(date) {
  const hour = date.getHours();

  if (hour < 12) return "Good Morning";
  if (hour < 18) return "Good Afternoon";
  return "Good Evening";
}

function updateDateTime() {
  const now = new Date();

  greetingEl.textContent = formatGreeting(now);

  timeEl.textContent = now.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit"
  });

  dateEl.textContent = now.toLocaleDateString([], {
    weekday: "long",
    month: "long",
    day: "numeric"
  });
}

function populateSearchEngines() {
  STARTPAGE_CONFIG.searchEngines.forEach((engine, index) => {
    const option = document.createElement("option");
    option.value = engine.name;
    option.textContent = engine.name;

    if (index === 0) {
      option.selected = true;
    }

    searchEngineEl.appendChild(option);
  });
}

function getSelectedEngine() {
  return STARTPAGE_CONFIG.searchEngines.find(
    (engine) => engine.name === searchEngineEl.value
  );
}

function handleSearch(event) {
  event.preventDefault();

  const query = searchInputEl.value.trim();
  if (!query) return;

  const engine = getSelectedEngine();
  if (!engine) return;

  const url = `${engine.searchUrl}${encodeURIComponent(query)}`;
  window.location.href = url;
}

function getHostname(url) {
  try {
    return new URL(url).hostname.replace("www.", "");
  } catch {
    return url;
  }
}

function createTreeCard(section) {
  const card = document.createElement("article");
  card.className = "card";

  const header = document.createElement("div");
  header.className = "card-header";

  const titleWrap = document.createElement("div");
  titleWrap.className = "card-title-wrap";

  const title = document.createElement("h2");
  title.className = "card-title";
  title.textContent = section.title;

  const subtitle = document.createElement("div");
  subtitle.className = "card-subtitle";
  subtitle.textContent = `${section.items.length} links`;

  titleWrap.appendChild(title);
  titleWrap.appendChild(subtitle);

  const pill = document.createElement("div");
  pill.className = "card-pill";
  pill.textContent = "tree";

  header.appendChild(titleWrap);
  header.appendChild(pill);

  const tree = document.createElement("div");
  tree.className = "tree";

  const rootLine = document.createElement("div");
  rootLine.className = "tree-line tree-root";
  rootLine.textContent = section.rootLabel;
  tree.appendChild(rootLine);

  section.items.forEach((item, index) => {
    const isLast = index === section.items.length - 1;
    const branch = isLast ? "└─ " : "├─ ";

    const line = document.createElement("div");
    line.className = "tree-line";

    const prefix = document.createElement("span");
    prefix.textContent = branch;

    const link = document.createElement("a");
    link.className = "tree-link";
    link.href = item.url;
    link.textContent = item.name;
    link.target = "_blank";
    link.rel = "noreferrer";

    line.appendChild(prefix);
    line.appendChild(link);
    tree.appendChild(line);

    const host = document.createElement("div");
    host.className = "tree-host";
    host.textContent = getHostname(item.url);
    tree.appendChild(host);
  });

  card.appendChild(header);
  card.appendChild(tree);

  return card;
}

function renderCards() {
  cardsGridEl.innerHTML = "";

  STARTPAGE_CONFIG.sections.forEach((section) => {
    cardsGridEl.appendChild(createTreeCard(section));
  });
}

function init() {
  populateSearchEngines();
  renderCards();
  updateDateTime();
  setInterval(updateDateTime, 1000 * 30);
  searchFormEl.addEventListener("submit", handleSearch);
}

init();
