import { URLS } from "./data/data";

chrome.runtime.onInstalled.addListener(() => {
  Object.keys(URLS).forEach((key, index) => {
    chrome.contextMenus.create({
        title: `Paste ${key} URL`,
        id: key,
        contexts:["editable"],
    });
  });

  chrome.contextMenus.create({
    title: `Paste Cover Letter`,
    id: "CoverLetter",
    contexts:["editable"],
  });
});



chrome.contextMenus.onClicked.addListener((info, tab) => {
  if(info.menuItemId === "CoverLetter") {
    chrome.tabs.sendMessage(tab.id, {type: "pasteCoverLetter"}, (res) => {
    });
  }
  else {
    let url = URLS[info.menuItemId];
    chrome.tabs.sendMessage(tab.id, {type: "pasteURL", url}, (res) => {
    });
  }
});
