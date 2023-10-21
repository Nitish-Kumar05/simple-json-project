document.addEventListener("DOMContentLoaded", function () {
    const signupSection = document.getElementById("signup");
    const homeSection = document.getElementById("home");

    const signupForm = document.getElementById("signupForm");

    // Handle Signup Form Submission
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Simulate a successful signup process (in practice, this would involve a server)
        alert("Signup successful!");

        // Switch to the home section
        signupSection.classList.remove("active");
        homeSection.classList.add("active");

        // Fetch and display JSON data on the Home page
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then((response) => response.json())
            .then((data) => {
                const jsonData = document.getElementById("jsonData");

                data.forEach((item) => {
                    const listItem = document.createElement("li");
                    listItem.textContent = `Name: ${item.name}, Email: ${item.email}, Body: ${item.body}`;
                    jsonData.appendChild(listItem);
                });
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    });
});
