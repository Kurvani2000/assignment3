// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
let submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", thankYouMessage);

function thankYouMessage() {
    let thankYouMessageText = document.getElementById("contact-page");
    thankYouMessageText.style.fontSize = "24px";
    thankYouMessageText.innerHTML = "Thank you for your message!";
}

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

