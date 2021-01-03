document.addEventListener('DOMContentLoaded', function() {
    let urls = {
        "linkedin" : "https://www.linkedin.com/in/ryan-chhong-115287154/",
        "portfolio" : "https://rchhong.com/",
        "github" : "https://github.com/InfernalHydra"
    }

    Object.keys(urls).forEach((key) => {
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

        scratch.value =
`At HackTX 2019, I created a mobile application to help travelers pack by allowing them to take a picture of their luggage and see what they forgot.
My project ended up winning a prize: Best Use of Google Cloud Services.

However, that project was one of many projects that I have created.
From a street performer locator to a donations tracker, I have built a variety of apps, for both desktop and mobile.
In addition to these projects, I am currently enrolled at the University of Texas at Austin, where I am working towards a BS in Computer Science, with a certificate in Statistics and Data Science.

At ${companyName}, I would be able to use the skills that I have acquired to help innovate solutions to the unique problems ${companyName} encounters.
I believe that this internship can be an excellent opportunity to bring fresh perspectives to ${companyName}, while providing personal growth as a programmer.

Can we schedule a meeting sometime this week to talk about how I can help innovate solutions for ${companyName} while working with some of the most exceptional software engineers in the field?`
        let copyText = document.querySelector("#scratch");
        copyText.select();
        document.execCommand("copy");
    });

})
