chrome.storage.local.get("visits", ({ visits }) => {
    const list = document.getElementById("list");
    if (!visits) {
      list.innerHTML = "<li>Henüz veri yok.</li>";
      return;
    }
  
    
    const sorted = Object.entries(visits).sort((a, b) => b[1] - a[1]);
  
    for (const [site, count] of sorted) {
      const li = document.createElement("li");
      li.textContent = `${site}: ${count} kez`;
      list.appendChild(li);

      
    }
  });
  