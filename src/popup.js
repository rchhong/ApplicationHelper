import { URLS } from "./data/data";
import { makeCoverLetter } from "./data/coverletter"

document.addEventListener('DOMContentLoaded', function() {
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {}, () => {
            alert("Failed to write to clipboard (The extension does not have permission to the clipboard");
        });
    };

    Object.keys(URLS).forEach((key) => {
        // console.log(key + " " + urls[key]);
        let element = document.getElementById(key.toLowerCase());
        element.addEventListener('click', () => {
            copyToClipboard(URLS[key]);
        });
    });

    let cv_elem = document.getElementById("cover-letter")
    cv_elem.addEventListener('click', () => {
        let companyName = prompt("Company Name?", "ACME Inc.");
        copyToClipboard(makeCoverLetter(companyName));
    });

});
