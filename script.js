function showMessage() {
    alert("Welcome to StudyHub! Let's start learning.");
}

function learn(subject) {
    alert("You selected: " + subject);
}

function submitForm(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;

    document.getElementById("result").innerHTML =
        "Thank you, " + name + "! Your message has been submitted.";

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}