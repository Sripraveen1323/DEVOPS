function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var dob = document.getElementById("dob").value;
    var mobile = document.getElementById("mobile").value;

    var errorMessages = "";

    if (password !== confirmPassword) {
        errorMessages += "Passwords do not match<br>";
    }

    if (!validateEmail(email)) {
        errorMessages += "Invalid email address<br>";
    }

    if (!validateMobile(mobile)) {
        errorMessages += "Invalid mobile number<br>";
    }

    if (errorMessages !== "") {
        document.getElementById("errorMessages").innerHTML = errorMessages;
        return false;
    }

    return true;
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validateMobile(mobile) {
    var re = /^[0-9]{10}$/;
    return re.test(mobile);
}