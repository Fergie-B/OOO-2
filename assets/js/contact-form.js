/**
 * Eventlistener function to monitor the clicking of the submit button
 * Code from Email JS Tutorial at https://www.emailjs.com/docs/tutorial/creating-contact-form/
 */
const buttonSubmit = document.getElementById("btn-submit");

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
        
        buttonSubmit.value = "Sending..."; // Show message status on button in sending progress
                
        emailjs.sendForm('default_service', 'ooo-template', this)
                .then(() => {
                    buttonSubmit.value ="Submit"
                    submittedMessage();   

                }, (error) => {
                    console.log(JSON.stringify(error));
                });
});


/**
 * Hides Contact Form and Display a message to the user that the form has submitted
 */
function submittedMessage() {
    let html = `    <div class="message-screen>
                    <p>Thank you, your message has been submitted</p>
                    <input type="button"  class="btn btn-primary form-button" onclick="window.location.href='index.html';" value="Back to Game">
                    </div>
                `;
        document.getElementById("contact-form-area").innerHTML = html;
}