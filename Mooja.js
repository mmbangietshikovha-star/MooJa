// MooJa Wear Website JavaScript


// Get the current year

let yearElements = document.querySelectorAll(".year");


for (let i = 0; i < yearElements.length; i++) {

    yearElements[i].textContent =
        new Date().getFullYear();

}



// Contact form

let contactForm =
    document.getElementById("contact-form");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            let name =
                document.getElementById("name").value;


            let email =
                document.getElementById("email").value;


            let subject =
                document.getElementById("subject").value;


            let message =
                document.getElementById("message").value;



            // CHANGE THIS TO THE REAL MOOJA EMAIL

            let brandEmail =
                "replace-with-mooja-email@example.com";



            let emailSubject =
                encodeURIComponent(
                    "MooJa enquiry: " + subject
                );


            let emailBody =
                encodeURIComponent(

                    "Name: " + name + "\n" +

                    "Customer email: " + email + "\n" +

                    "Interested in: " + subject + "\n\n" +

                    "Message:\n" + message

                );



            window.location.href =
                "mailto:" +
                brandEmail +
                "?subject=" +
                emailSubject +
                "&body=" +
                emailBody;

        }
    );

}