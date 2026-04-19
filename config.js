const STARTPAGE_CONFIG = {
  searchEngines: [
    {
      name: "DuckDuckGo",
      searchUrl: "https://duckduckgo.com/?q="
    },
    {
      name: "Google",
      searchUrl: "https://www.google.com/search?q="
    },
    {
      name: "Bing",
      searchUrl: "https://www.bing.com/search?q="
    },
    {
      name: "Ecosia",
      searchUrl: "https://www.ecosia.org/search?q="
    },
    {
      name: "YouTube",
      searchUrl: "https://www.youtube.com/results?search_query="
    },
    {
      name: "GitHub",
      searchUrl: "https://github.com/search?q="
    },
    {
      name: "Reddit",
      searchUrl: "https://www.reddit.com/search/?q="
    },
    {
      name: "Stack Overflow",
      searchUrl: "https://stackoverflow.com/search?q="
    },
    {
      name: "MDN",
      searchUrl: "https://developer.mozilla.org/en-US/search?q="
    }
  ],

  sections: [
    {
      title: "Daily",
      rootLabel: "~ / daily",
      items: [
        { name: "gmail", url: "https://mail.google.com" },
        { name: "youtube", url: "https://www.youtube.com" },
        { name: "reddit", url: "https://www.reddit.com" },
        { name: "calendar", url: "https://calendar.google.com" }
      ]
    },
    {
      title: "Development",
      rootLabel: "~ / development",
      items: [
        { name: "github", url: "https://github.com" },
        { name: "devdocs", url: "https://devdocs.io" },
        { name: "mdn", url: "https://developer.mozilla.org" },
        { name: "stack-overflow", url: "https://stackoverflow.com" }
      ]
    },
    {
      title: "AI",
      rootLabel: "~ / ai",
      items: [
        { name: "chatgpt", url: "https://chatgpt.com" },
        { name: "claude", url: "https://claude.ai" },
        { name: "perplexity", url: "https://www.perplexity.ai" }
      ]
    },
    {
      title: "Misc",
      rootLabel: "~ / misc",
      items: [
        { name: "discord", url: "https://discord.com/app" },
        { name: "weather", url: "https://weather.com" },
        { name: "maps", url: "https://maps.google.com" }
      ]
    }
  ]
};
