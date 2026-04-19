// TIME + GREETING
function updateTime() {
  const now = new Date();

  const hours = now.getHours();
  let greeting = "Good Evening";
  if (hours < 12) greeting = "Good Morning";
  else if (hours < 18) greeting = "Good Afternoon";

  document.getElementById("greeting").textContent = greeting;
  document.getElementById("clock").textContent =
    now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });

  document.getElementById("date").textContent =
    now.toLocaleDateString([], {
      weekday: "long",
      month: "long",
      day: "numeric"
    });
}

setInterval(updateTime, 1000);
updateTime();

// SEARCH
const engineSelect = document.getElementById("engineSelect");

CONFIG.searchEngines.forEach(engine => {
  const option = document.createElement("option");
  option.value = engine.url;
  option.textContent = engine.name;
  engineSelect.appendChild(option);
});

document.getElementById("searchForm").addEventListener("submit", e => {
  e.preventDefault();

  const query = document.getElementById("searchInput").value;
  const engine = engineSelect.value;

  if (!query.trim()) return;

  window.open(engine + encodeURIComponent(query), "_blank");
});

// DASHBOARD
const dashboard = document.getElementById("dashboard");

CONFIG.sections.forEach(section => {
  const div = document.createElement("div");
  div.className = "section";

  const title = document.createElement("h2");
  title.textContent = section.title;

  div.appendChild(title);

  section.links.forEach(link => {
    const a = document.createElement("a");
    a.className = "link";
    a.href = link.url;
    a.textContent = link.name;
    a.target = "_blank";

    div.appendChild(a);
  });

  dashboard.appendChild(div);
});
