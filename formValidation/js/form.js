
// Disable Button, Set Error
checkFilled();

// Change Paragraph Text
document.querySelector('p').innerHTML = 
"Harbor Health prides itself on tending to " +
"user needs and quick, concise communication. " +
"Please fill out the form below and we'll be " +
"sure to get in touch as soon as possible! " +
"Have a great day!";

// Inputs
var labels = document.querySelectorAll('label');
var inputAll = document.querySelectorAll('input');
var textarea = document.querySelector('textarea');
// Set Theme
document.querySelector('h2').innerHTML = 
"<strong>Get</strong> In Touch";
inputAll[0].placeholder = "Full Name";
inputAll[1].placeholder = "Email";
inputAll[2].placeholder = "Subject Matter";
textarea.placeholder = "Concerns";
// I tried literally everything to get the stupid
// Image to change. NOTHING WORKED. I gave up

