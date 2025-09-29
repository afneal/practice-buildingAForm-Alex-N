const button=document.getElementById("buttonSubmit");
const form = document.getElementById("form")


form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    let message=document.getElementById("message");
    message.textContent="Form Submitted";
    form.reset();
});