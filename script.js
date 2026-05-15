let students = [];

const form = document.getElementById("studentForm");
const output = document.getElementById("output");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    let isValid = true;


    // Input Values
    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmpassword").value;
    const phone = document.getElementById("phone").value.trim();
    const course = document.getElementById("course").value;
    const message = document.getElementById("message").value.trim();

    // Gender
    const gender = document.querySelector('input[name="gender"]:checked');

    // Hobbies
    const hobbies = document.querySelectorAll('input[name="hobbies"]:checked');



    // Error Elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    const phoneError = document.getElementById("phoneError");
    const genderError = document.getElementById("genderError");
    const courseError = document.getElementById("courseError");
    const hobbyError = document.getElementById("hobbyError");
    const messageError = document.getElementById("messageError");



    // Clear Old Errors
    nameError.innerText = "";
    emailError.innerText = "";
    passwordError.innerText = "";
    confirmPasswordError.innerText = "";
    phoneError.innerText = "";
    genderError.innerText = "";
    courseError.innerText = "";
    hobbyError.innerText = "";
    messageError.innerText = "";



    // Name Validation
    if (fullname === "") {
        nameError.innerText = "Full name is required";
        isValid = false;
    }
    else if (fullname.length < 3) {
        nameError.innerText = "Name must be at least 3 characters";
        isValid = false;
    }



    // Email Validation
    const emailPattern = /^\S+@\S+\.\S+$/;

    if (email === "") {
        emailError.innerText = "Email is required";
        isValid = false;
    }
    else if (!emailPattern.test(email)) {
        emailError.innerText = "Enter a valid email";
        isValid = false;
    }



    // Password Validation
    if (password === "") {
        passwordError.innerText = "Password is required";
        isValid = false;
    }
    else if (password.length < 6) {
        passwordError.innerText = "Password must be at least 6 characters";
        isValid = false;
    }



    // Confirm Password Validation
    if (confirmPassword === "") {
        confirmPasswordError.innerText = "Confirm your password";
        isValid = false;
    }
    else if (password !== confirmPassword) {
        confirmPasswordError.innerText = "Passwords do not match";
        isValid = false;
    }



    // Phone Validation
    const phonePattern = /^[0-9]{11}$/;

    if (phone === "") {
        phoneError.innerText = "Phone number is required";
        isValid = false;
    }
    else if (!phonePattern.test(phone)) {
        phoneError.innerText = "Enter valid 11 digit number";
        isValid = false;
    }



    // Gender Validation
    if (!gender) {
        genderError.innerText = "Select your gender";
        isValid = false;
    }



    // Course Validation
    if (course === "") {
        courseError.innerText = "Select a course";
        isValid = false;
    }



    // Hobbies Validation
    if (hobbies.length === 0) {
        hobbyError.innerText = "Select at least one hobby";
        isValid = false;
    }



    // Message Validation
    if (message === "") {
        messageError.innerText = "Message is required";
        isValid = false;
    }
    else if (message.length < 10) {
        messageError.innerText = "Message must be at least 10 characters";
        isValid = false;
    }



    // Final Submit
    // Final Submit
    if (isValid) {

        // Hobbies Array
        let hobbiesList = [];

        hobbies.forEach(function (hobby) {
            hobbiesList.push(hobby.value);
        });



        // Student Object
        const studentObject = {

            fullname: fullname,
            email: email,
            phone: phone,
            gender: gender.value,
            course: course,
            hobbies: hobbiesList,
            message: message

        };



        // Push Object Into Array
        students.push(studentObject);



        // Check Data In Console
        console.log(students);



        // Show Data On Screen
        output.innerHTML += `

    <div class="student-card">

        <h3>${fullname}</h3>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Phone:</strong> ${phone}</p>

        <p><strong>Gender:</strong> ${gender.value}</p>

        <p><strong>Course:</strong> ${course}</p>

        <p><strong>Hobbies:</strong> ${hobbiesList.join(", ")}</p>

        <p><strong>About:</strong> ${message}</p>

    </div>

    `;



        alert("Form Submitted Successfully!");



        // Reset Form
        form.reset();

    }
});

