var clickedEl = null;

document.addEventListener("mousedown", (e) => {
    if(e.button == 2) {
        clickedEl = e.target;
    }
}, true);

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
    if(req.type == "pasteURL") {
        if(clickedEl.nodeName == "DIV") {
            clickedEl.innerHTML = req.url;
        }
        else if(clickedEl.nodeName == "INPUT") {
            clickedEl.value = req.url;
        }
    }
});