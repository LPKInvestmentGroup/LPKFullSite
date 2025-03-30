function myFunction() {
  var x = document.getElementById("myMenu");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}

/** Add function to exclude spam email and messages **/

function validateForm() {
    const emailField = document.getElementById('email').value.trim();
    const messageField = document.getElementById('message').value.trim();

    // List of blocked email addresses
    const blockedEmails = ['blocked@example.com', 'spam@example.com', 'ericjonesmyemail@gmail.com'];

    // Keywords to reject in the message
    const blockedKeywords = ['14-day trial', 'Web Visitors Into Leads'];
    //const blockedKeywords = ['14-day trial', 'Web Visitors Into Leads'];

    // Check if email is in the blocked list
    if (blockedEmails.includes(emailField)) {
      alert('Access Denied');
      return false; // Prevent form submission
    }

    // Check for blocked keywords in the message
    for (let keyword of blockedKeywords) {
      if (messageField.includes(keyword)) {
        alert('Your message contains prohibited content.');
        return false; // Prevent form submission
      }
    }

    // If all checks pass, allow form submission
    return true;
  }
