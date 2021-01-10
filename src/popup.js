import { URLS } from "./data/data";
import { makeCoverLetter } from "./data/coverletter"

document.addEventListener('DOMContentLoaded', function() {
    Object.keys(URLS).forEach((key) => {
        // console.log(key + " " + urls[key]);
        let element = document.getElementById(key);
        let scratch = document.getElementById("scratch");

        element.addEventListener('click', () => {
            scratch.value = urls[key];
            let copyText = document.querySelector("#scratch");
            copyText.select();
            document.execCommand("copy");
        });
    });

    let cv_elem = document.getElementById("cover-letter")

    cv_elem.addEventListener('click', () => {
        let companyName = prompt("Company Name?", "ACME Inc.");
        scratch.value = makeCoverLetter(companyName);
        let copyText = document.querySelector("#scratch");
        copyText.select();
        document.execCommand("copy");
    });

})
