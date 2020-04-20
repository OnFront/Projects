const contactForm = document.forms.contactForm;

const message = document.getElementById("message");

contactForm.onsubmit = function(){
    if(contactForm.name.value == ""){
        message.innerHTML = "Please enter a name";
        return false;
    } else {
        message.innerHTML = "";
        return true;
    }
};