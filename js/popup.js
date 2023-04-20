document.getElementById("Convert").addEventListener("click", function () {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { name: "ConvertTable2Excel" });
    });
  });