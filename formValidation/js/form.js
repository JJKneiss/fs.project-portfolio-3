// Set Theme
document.querySelector('h2').innerHTML = 
"<strong>Get</strong> In Touch";
// Disable Button
document.querySelector('button').disabled = true;
document.querySelector('button').className = "disabled";

// Change Paragraph Text
document.querySelector('p').innerHTML = 
"Harbor Health prides itself on tending to " +
"user needs and quick, concise communication. " +
"Please fill out the form below and we'll be " +
"sure to get in touch as soon as possible! " +
"Have a great day!";

var labels = document.querySelectorAll('label');
for (var i = 0; i < labels.length; i++){
    labels[i].className = "error";
}
// Validation Checks

var input = document.querySelectorAll('input');
for (var i = 0; i < input.length; i++){
    if(input[i]){
        console.log(i);
        input[i].addEventListener("change", );
    }
}
function checkInput() {
    event.preventDefault();  
    console.log("Form has changed!");
    if(input[0]){

    }
}
var textarea = document.querySelector('textarea');
if (textarea){
    textarea.addEventListener("change", function(){
        event.preventDefault();
        console.log(labels[3]);
        labels[3].removeAttribute("class");
    });
}