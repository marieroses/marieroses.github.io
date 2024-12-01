// Cookies Banner Consent
if (!localStorage.getItem('cookiesAccepted')) { // Check if the cookies was already accepted
    document.querySelector('.cookieConsent').style.display = 'block'; // Show the banner
}

document.querySelector('.acceptCookies').addEventListener('click', function() { // Accept button click event
    localStorage.setItem('cookiesAccepted', 'true'); // Save the consent
    document.querySelector('.cookieConsent').style.display = 'none'; // Hide the banner
});

document.querySelector('.rejectCookies').addEventListener('click', function() { // Reject button click event
    localStorage.setItem('cookiesAccepted', 'false'); // Save the rejection
    document.querySelector('.cookieConsent').style.display = 'none'; // Hide the banner
});

// Newsletter Form Validation
document.forms['newsletter'].addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting immediately

    var email = document.querySelector('form[name="newsletter"] #email').value; // Get the email value
    var emailError = document.getElementById('emailError');
	
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Check if the email is in a valid format

    if (!emailPattern.test(email)) { // Check if the email matches the pattern
        alert('Please enter a valid email address.'); // If email is invalid, show an alert with an error message
    } else {
        alert('Thank you for subscribing!'); // Show a success message

        document.forms['newsletter'].reset(); // Reset the form after the submission
    }
});

// Booking Form Validation
document.forms['booking'].addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting immediately

    var email = document.querySelector('form[name="booking"] #email').value; // Get the email value
	var bookingTime = document.querySelector('form[name="booking"] #bookingtime').value; // Get the date and time value
    
	var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Check if the email is in valid format

    if (!emailPattern.test(email)) { // Check if the email matches the pattern
        alert('Please enter a valid email address.'); // If email is invalid, show an alert with an error message
        return; // Stop next steps if email is invalid
    }

    if (!bookingTime) { // Check if the Date & Time is selected
        alert('Please select a valid date and time.'); // If not, show an alert asking to select a date and time
        return; // Stop next steps if date and time are not selected
    }

    var selectedDate = new Date(bookingTime); // Change the booking time into a Date object 
    var dayOfWeek = selectedDate.getDay(); // Get the day of the week
    var hours = selectedDate.getHours();  // Get the hour of the day

    // Define the open hours for each day of the week
    var validTimes = {
        1: { start: 10, end: 17 }, // Monday
        2: { closed: true },       // Tuesday
        3: { start: 10, end: 22 }, // Wenesday
        4: { start: 10, end: 22 }, // Thursday
        5: { start: 10, end: 23 }, // Friday
        6: { start: 10, end: 23 }, // Saturday
        0: { start: 10, end: 22 }  // Sunday
    };

    if (validTimes[dayOfWeek] && validTimes[dayOfWeek].closed) { // Check if the selected day is closed, in this case Tuesday
        alert('Sorry, we are closed on Tuedays. Please choose another day.'); // If closed, show an alert
        return; // Stop next steps if the day is closed
    }

    if (validTimes[dayOfWeek]) { // Check if there are valid times for the selected day
        var start = validTimes[dayOfWeek].start; // Get the start time for the day
        var end = validTimes[dayOfWeek].end; // Get the end time for the day

        if (hours < start || hours >= end) { // Check if the selected hour is within the valid time for booking
            alert('Sorry, we are close at the selected time. Please choose a different time!'); // If not, show an alert
            return; // Stop next steps if the time is invalid
        }
    }

    alert('Your booking request has been successfully submitted! You will receive a confirmation email shortly.'); // If all information pass, a successful message will be prompt
    document.forms['booking'].reset(); // Reset the form after the submission
	
});

// Contact Form Validation
document.forms['contact'].addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting immediately

    var email = document.querySelector('form[name="contact"] #email').value; // Get the email value from the Contact form
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression to check if the email is in valid format

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.'); // Show error message
    } else {
        alert('Thank you for your message! We will contact you shortly.'); // Show success message
        document.forms['contact'].reset(); // Reset the form after submission
    }
});


