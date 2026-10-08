document.addEventListener("DOMContentLoaded", function () {

    const yearElements = document.querySelectorAll(".year");

    const currentYear = new Date().getFullYear();

    for (let i = 0; i < yearElements.length; i++) {
        yearElements[i].textContent = currentYear;
    }


    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const subject = document.getElementById("subject").value;
            const message = document.getElementById("message").value;


            const moojaEmail = "replace-with-mooja-email@example.com";


            const mailSubject = encodeURIComponent(subject);

            const mailBody = encodeURIComponent(
                "Name: " + name +
                "\nEmail: " + email +
                "\n\nMessage:\n" + message
            );


            window.location.href =
                "mailto:" + moojaEmail +
                "?subject=" + mailSubject +
                "&body=" + mailBody;

        });

    }

});