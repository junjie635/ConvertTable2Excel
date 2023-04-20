chrome.contextMenus.create({
    id: "Conversation",
    title: "ConvertTable2Excel",
    contexts: ["page", "selection"]
  });
  chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "Conversation") {
      // 处理菜单点击事件
      chrome.tabs.sendMessage(tab.id, {name: "ConvertTable2Excel"})
    }
  });

  chrome.action.onClicked.addListener(async () => {
      const [tab] = await chrome.tabs.query({active:true,lastFocusedWindow:true})
      chrome.tabs.sendMessage(tab.id, {name: "ConvertTable2Excel"})
  })

  chrome.commands.onCommand.addListener(async (command)=>{
    if(command === "ConvertTable2Excel"){
      const [tab] = await chrome.tabs.query({active:true,lastFocusedWindow:true})
      chrome.tabs.sendMessage(tab.id, {name: "ConvertTable2Excel"})
    }
  })