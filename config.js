const CONFIG = {
  searchEngines: [
    { name: "DuckDuckGo", url: "https://duckduckgo.com/?q=" },
    { name: "Google", url: "https://google.com/search?q=" },
    { name: "Bing", url: "https://bing.com/search?q=" },
    { name: "Ecosia", url: "https://ecosia.org/search?q=" },
    { name: "YouTube", url: "https://youtube.com/results?search_query=" },
    { name: "GitHub", url: "https://github.com/search?q=" }
  ],

  sections: [
    {
      title: "Daily",
      links: [
        { name: "Gmail", url: "https://mail.google.com" },
        { name: "YouTube", url: "https://youtube.com" },
        { name: "Reddit", url: "https://reddit.com" },
        { name: "Calendar", url: "https://calendar.google.com" }
      ]
    },
    {
      title: "Development",
      links: [
        { name: "GitHub", url: "https://github.com" },
        { name: "DevDocs", url: "https://devdocs.io" },
        { name: "MDN", url: "https://developer.mozilla.org" }
      ]
    },
    {
      title: "AI",
      links: [
        { name: "ChatGPT", url: "https://chatgpt.com" },
        { name: "Claude", url: "https://claude.ai" },
        { name: "Perplexity", url: "https://perplexity.ai" }
      ]
    },
    {
      title: "Misc",
      links: [
        { name: "Discord", url: "https://discord.com/app" },
        { name: "Weather", url: "https://weather.com" },
        { name: "Maps", url: "https://maps.google.com" }
      ]
    }
  ]
};
