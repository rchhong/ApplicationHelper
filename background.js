
let urls = {
    "LinkedIn" : "https://www.linkedin.com/in/ryan-chhong-115287154/",
    "Portfolio" : "https://rchhong.com/"
}

chrome.runtime.onInstalled.addListener(() => {
  Object.keys(urls).forEach((key, index) => {
    chrome.contextMenus.create({
        title: `Paste ${key} URL`,
        id: key, 
        contexts:["editable"],
    });
  })  
});


chrome.contextMenus.onClicked.addListener((info, tab) => {
  let url = urls[info.menuItemId];
  chrome.tabs.sendMessage(tab.id, {type: "pasteURL", url}, (res) => {
  });
});
