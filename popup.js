document.addEventListener('DOMContentLoaded', function() {
    let urls = {
        "linkedin" : "https://www.linkedin.com/in/ryan-chhong-115287154/",
        "portfolio" : "https://rchhong.com/"
    }

    Object.keys(urls).forEach((key) => {
        // console.log(key + " " + urls[key]);
        let element = document.getElementById(key);
        let scratch = document.getElementById("scratch");

        element.addEventListener('click', () => {
            scratch.innerHTML = urls[key];
            console.log(scratch.innerHTML);
            scratch.querySelector()
        });
    })

})
