const reverseString = (str) => {

    const revStr = str.split("").reverse().join("");
    return revStr
}

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return emailRegex.test(email);
  }

function validatePassword(password) {
    if (password.length < 12) {
      return false;
    }
  
    const letterRegex = /[a-zA-Z]/;
    const uppercaseRegex = /[A-Z]/;
    const digitRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
  
    return (
      letterRegex.test(password) &&
      uppercaseRegex.test(password) &&
      digitRegex.test(password) &&
      specialCharRegex.test(password)
    );
  }





  const email = "test@example.com";
  const password = "Passw0rd!1234";
  
  console.log("E-Mail-Validierung:", validateEmail(email));
  console.log("Passwort-Validierung:", validatePassword(password)); 


