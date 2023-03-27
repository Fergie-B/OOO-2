/**
 * Eventlistener function to monitor the clicking of the submit button
 */
const buttonSubmit = document.getElementById("btn-submit");

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
        emailjs.init('Xl_lxCv7DRycAXtla');
        buttonSubmit.value = "Sending..."; // Show message status on button in sending progress
                // these IDs from the previous steps
                emailjs.sendForm('contact_service', 'contact_form', this)
                    .then(function() {
                        console.log('SUCCESS!');
                    }, function(error) {
                        console.log('FAILED...', error);
                    });
            });
        }