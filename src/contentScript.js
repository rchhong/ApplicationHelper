import { makeCoverLetter } from './data/coverletter';

var clickedEl = null;
document.addEventListener("mousedown", (e) => {
    if(e.button == 2) {
        clickedEl = e.target;
    }
}, true);

// TODO - USE WEBPACK SO IMPORTS WORK!
chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
    if(req.type == "pasteURL") {
        if(clickedEl.nodeName == "DIV") {
            clickedEl.innerHTML = req.url;
        }
        else if(clickedEl.nodeName == "INPUT" || clickedEl.nodeName == "TEXTAREA") {
            clickedEl.value = req.url;
        }
    }

    else if(req.type == "pasteCoverLetter") {
        let companyName = prompt("Company Name?", "ACME Inc.");
        let cl = makeCoverLetter(companyName);

        if(clickedEl.nodeName == "DIV") {
            clickedEl.innerHTML = cl;
        }
        else if(clickedEl.nodeName == "INPUT" || clickedEl.nodeName == "TEXTAREA") {
            clickedEl.value = cl;
        }

    }
});