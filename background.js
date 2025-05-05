chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.url) {
      try {
        const url = new URL(tab.url);
        const host = url.hostname;
  
        chrome.storage.local.get(["visits"], (result) => {
          const visits = result.visits || {};
          visits[host] = (visits[host] || 0) + 1;
          chrome.storage.local.set({ visits });
        });
      } catch (e) {
        console.error("Geçersiz URL:", tab.url);
      }
    }
  });
  