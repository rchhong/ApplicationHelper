var clickedEl = null;
console.log('asdfdsaf');
document.addEventListener("mousedown", (e) => {
    if(e.button == 2) {
        console.log(e.target);
        clickedEl = e.target;
    }
}, true);

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
    if(req.type == "pasteURL") {
        clickedEl.value = req.url;
    }
});