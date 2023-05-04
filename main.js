function generatePassword() {
	// Get the desired length of the password
	var length = document.getElementById("length").value;

	// Define the characters that can be used in the password
	var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+={}[]|\\:;\"'<>,.?/";

	// Generate a random password using the specified length and character set
	var password = "";
	for (var i = 0; i < length; i++) {
		var randomIndex = Math.floor(Math.random() * charset.length);
		password += charset.charAt(randomIndex);
	}

	// Display the generated password in the password field
	document.getElementById("password").value = password;

	// Show the password field
	document.querySelector(".password").style.display = "block";
}
