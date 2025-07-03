const blockedSites = [
  "index.hu",
  "origo.hu",
  "888.hu",
  "pestisracok.hu",
  "magyarnemzet.hu",
  "mandiner.hu",
  "hirado.hu",
  "ripost.hu",
  "metropol.hu",
  "www.borsonline.hu",
  "tenyek.hu"
];

chrome.webNavigation.onCompleted.addListener((details) => {
  const url = new URL(details.url);
  const hostname = url.hostname;

  const isBlockedNewsSite = blockedSites.some(domain => hostname.includes(domain));

  if (isBlockedNewsSite) {
    chrome.scripting.executeScript({
      target: { tabId: details.tabId },
      files: ["content.js"]
    });
  }
}, {
  url: [
    ...blockedSites.map(site => ({ hostContains: site }))
  ]
});