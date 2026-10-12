// Wait for HTML to load
document.addEventListener("DOMContentLoaded", function () {

    // Navbar links
    const navLinks = document.querySelectorAll("#navbar a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {

            event.preventDefault();

            const page = link.textContent.trim().toLowerCase();

            const sections = {
                home: ".page",
                about: ".container2",
                skills: "#skills",
                project: ".content2",
                contact: ".contact-container"
            };

            const target = document.querySelector(sections[page]);

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Check My Project button
    const projectButton = document.querySelector("#container1 button");

    if (projectButton) {
        projectButton.addEventListener("click", function () {
            document.querySelector(".content2").scrollIntoView({
                behavior: "smooth"
            });
        });
    }

    // Project buttons
    const button1 = document.querySelector("#button1");
    const button2 = document.querySelector("#button2");

    if (button1) {
        button1.addEventListener("click", function () {
            alert("Personal Portfolio Project");
        });
    }

    if (button2) {
        button2.addEventListener("id", function viewProject() {
            alert("button working");
            window.location.href ="index.html";
        });
    }

    // Contact message
    const contact = document.querySelector(".contact-container");

    if (contact) {
        console.log("Contact section loaded successfully!");
    }

});









