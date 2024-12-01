
// Exercise 6
const validate = () => {
	let error = 0;
	// Get the input fields
	const fName = document.getElementById("fName");
	const fEmail = document.getElementById("fEmail");
	const fAddress = document.getElementById("fAddress");
	const fLastN = document.getElementById("fLastN");
	const fPassword = document.getElementById("fPassword");
	const fPhone = document.getElementById("fPhone")

	// Get the error elements
	const errorName = document.getElementById("errorName");
	const errorEmail = document.getElementById("errorEmail");  
	const errorAddress = document.getElementById("errorAddress");
	const errorLastN = document.getElementById("errorLastN");
	const errorPassword = document.getElementById("errorPassword");
	const errorPhone = document.getElementById("errorPhone")
	
	errorName.textContent = "";
	errorAddress.textContent = "";
	errorLastN.textContent = "";
	errorPhone.textContent = "";
	errorPassword.textContent = "";
	errorEmail.textContent = "";
  
	fName.classList.remove("is-invalid");
	fLastN.classList.remove("is-invalid");
	fPhone.classList.remove("is-invalid");
	fPassword.classList.remove("is-invalid");
	fEmail.classList.remove("is-invalid");
	 
	if (fName.value.trim().length < 3 || !/^[a-zA-ZÀ-ÿ\s]+$/.test(fName.value)) {
		errorName.textContent =
		  "Name is required and must have at least 3 characters, only letters allowed.";
		fName.classList.add("is-invalid");
		error++;
	  }
	
	  if (fLastN.value.trim().length < 3 || !/^[a-zA-ZÀ-ÿ\s]+$/.test(fLastN.value)) {
		errorLastN.textContent =
		  "Last name is required and must have at least 3 characters, only letters allowed.";
		fLastN.classList.add("is-invalid");
		error++;
	  }
	  if (fAddress.value.trim().length < 3) {
		errorAddress.textContent =
		  "Address is required and must have at least 3 characters.";
		fAddress.classList.add("is-invalid");
		error++;
	  }
	  
	
	 
	  if (fPhone.value.trim().length < 3 || isNaN(fPhone.value)) {
		errorPhone.textContent = "Phone number must contain only digits.";
		fPhone.classList.add("is-invalid");
		error++;
	  }
	

	  if (
		fPassword.value.trim().length < 3 ||
		!/(?=.*[a-zA-Z])(?=.*\d)/.test(fPassword.value)
	  ) {
		errorPassword.textContent =
		  "Password must include both numbers and letters and be at least 3 characters long.";
		fPassword.classList.add("is-invalid");
		error++;
	  }
	

	  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fEmail.value)) {
		errorEmail.textContent = "Email must have a valid format.";
		fEmail.classList.add("is-invalid");
		error++;
	  }
	
	  // Final message
	  if (error > 0) {
		alert("There are errors in the form. Please check the  fields.");
	  } else {
		alert("Form submitted successfully!");
	  }
	

}
