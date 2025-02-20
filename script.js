document.getElementById("form1").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let mailid = document.getElementById("mailid").value.trim();
    let consent = document.getElementById("consent").checked;

    if (fname === "" || lname === "" || mailid === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (!validateEmail(mailid)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!consent) {
        alert("You must agree to the terms before submitting.");
        return;
    }

    alert("Form submitted successfully!\nName: " + fname + " " + lname + "\nEmail: " + mailid);
    document.getElementById("form1").reset(); // Reset form after submission
});

function validateEmail(email) {
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
function toggleTheme() {
    document.body.classList.toggle("dark-theme");
}

// Attach event listener to toggle button (Add a button in HTML: `<button onclick="toggleTheme()">Toggle Theme</button>`)
