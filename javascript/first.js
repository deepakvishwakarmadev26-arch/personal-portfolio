// Wait for HTML to load
document.addEventListener("DOMContentLoaded", function () {

    // Navbar links
    const navLinks = document.querySelectorAll("#navbar nav a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = link.getAttribute("href");
            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Check My Project button
    const projectButton = document.querySelector("#projectButton");

    if (projectButton) {
        projectButton.addEventListener("click", function () {
            document.querySelector("#projects").scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    }

    // Personal Portfolio button
    const button1 = document.querySelector("#button1");

    if (button1) {
        button1.addEventListener("click", function () {
            alert("Personal Portfolio Project");
        });
    }

    // Web Project button
    const button2 = document.querySelector("#viewProject");

    if (button2) {
        button2.addEventListener("click", function () {
            alert("My upcoming web development project!");
        });
    }

    // Contact section check
    const contact = document.querySelector("#contact");

    if (contact) {
        console.log("Contact section loaded successfully!");
    }

});


