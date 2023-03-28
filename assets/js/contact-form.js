/**
 * Eventlistener function to monitor the clicking of the submit button
 */
const buttonSubmit = document.getElementById("btn-submit");

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
        
        buttonSubmit.value = "Sending..."; // Show message status on button in sending progress
                
        emailjs.sendForm('default_service', 'ooo-template', this)
                .then(function() {
                    console.log('SUCCESS!');
                }, function(error) {
                    console.log('FAILED...', error);
                });
            });
        