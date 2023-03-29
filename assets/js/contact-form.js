/**
 * Eventlistener function to monitor the clicking of the submit button
 * Code from Email JS Tutorial at https://www.emailjs.com/docs/tutorial/creating-contact-form/
 */
const buttonSubmit = document.getElementById("btn-submit");

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
        
        buttonSubmit.value = "Sending..."; // Show message status on button in sending progress
                
        emailjs.sendForm('default_service', 'ooo-template', this)
                .then(function() {
                    console.log('SUCCESS!');
                 submittedMessage();   

                }, function(error) {
                    console.log('FAILED...', error);
                });
            });


/**
 * Hides Contact Form and Display a message to the user that the form has submitted
 */
function submittedMessage() {
    let html = `
                <div class="message-screen>
                    <p>Thank you, your message has been submitted</p>
                    <button type="button"  class="btn btn-primary form-button" onclick="window.location.href='index.html';">Back to Game</button>
                </div>
                `;
        document.getElementById("contact-form-area").innerHTML = html;
}